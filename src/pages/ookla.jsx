import React, { useRef, useEffect } from "react";
import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'
import Basemap from "@arcgis/core/Basemap";
import MapView from '@arcgis/core/views/MapView'
import Expand from "@arcgis/core/widgets/Expand";
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Zoom from "@arcgis/core/widgets/Zoom.js";
import * as clusterLabelCreator from "@arcgis/core/smartMapping/labels/clusters.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import { stationPointRenderer } from '../components/visualization/StationRenderer'

import "../App.css";
import "../custom.css";


const Ookla = () => {
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            /**
             * Initialize application
             */
            esriConfig.apiKey = "AAPK7ddadabe119a4981b3395ae8620a28b4W9UhogxqRmw8Tx199e1N5jahB-Q6D4vMfG_w644qOkEr9Qyt-jWS8qzwLzQRMnU8";


            let layerView;

            const map = new Map({
                basemap: "arcgis-modern-antique"
            });

            const view = new MapView({
                container: mapDiv.current,
                map: map,
                center: [9.688652, 51.010718], // Longitude, latitude,  51.010718, 9.688652
                zoom: 6, // Zoom level
                navigation: {
                    mouseWheelZoomEnabled: false,
                    browserTouchPanEnabled: true
                },
                popup: {
                    dockEnabled: true,
                    dockOptions: {
                        breakpoint: false,
                        position: "top-right"
                    }
                },
                ui: {
                    components: ["attribution"]
                },
            });

            const layer = new FeatureLayer({
                portalItem: {
                    id: '038ad913aab04827ae877094c0b592dc' // new layer 724d101833d34a6f8094a73daf200e8b, old 35d8eb00884448079d2784650b9c995c
                },
                renderer: stationPointRenderer,
                lastEditInfoEnabled: false,
                title: "5G Netz Deutschland",
                // outFields: ["operator", "city_name", "land_type"],
                popupTemplate: {
                    title: "{operator}, {city_name}",
                    content: [
                        {
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "city_name",
                                    label: "Stadt"
                                },
                                {
                                    fieldName: "land_type",
                                    label: "Land"
                                }
                            ]
                        }
                    ]
                }
            });
            map.add(layer);

            reactiveUtils
                .whenOnce(() => view.popup.viewModel)
                .then(() => {
                    // Override the default symbol representing the cluster extent
                    view.popup.viewModel.selectedClusterBoundaryFeature.symbol = {
                        type: "simple-fill",
                        style: "solid",
                        color: "rgba(50,50,50,0.15)",
                        outline: {
                            width: 0.5,
                            color: "rgba(50,50,50,0.25)"
                        }
                    };
                });

            const infoDiv = document.getElementById("infoDiv");
            view.ui.add(
                new Expand({
                    view,
                    content: infoDiv,
                    expandIcon: "list-bullet",
                    expanded: true
                }),
                "top-right"
            );

            layer
                .when()
                .then(generateClusterConfig)
                .then((featureReduction) => {
                    layer.featureReduction = featureReduction;

                    // const btn = document.getElementById('btn');

                    // // ✅ Toggle button text on click
                    // btn.addEventListener('click', function handleClick() {
                    //     const initialText = 'Clustering einschalten';

                    //     if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                    //         btn.textContent = 'Clustering deaktivieren';
                    //     } else {
                    //         btn.textContent = initialText;
                    //     }
                    // });

                    const toggleButton = document.getElementById("toggle-cluster");
                    toggleButton.addEventListener("click", toggleClustering);

                    // To turn off clustering on a layer, set the
                    // featureReduction property to null
                    function toggleClustering() {
                        let fr = layer.featureReduction;
                        layer.featureReduction = fr && fr.type === "cluster" ? null : featureReduction;

                        toggleButton.innerText =
                            toggleButton.textContent === "Clustering deaktivieren" ? "Clustering einschalten" : "Clustering deaktivieren";
                    }

                    view.whenLayerView(layer).then((layerView) => {
                        const filterSelect = document.getElementById("filter");
                        // filters the layer using a definitionExpression
                        // based on a religion selected by the user
                        filterSelect.addEventListener("change", (event) => {
                            const newValue = event.target.value;

                            const whereClause = newValue ? `operator = '${newValue}'` : null;
                            layerView.filter = {
                                where: whereClause
                            };
                            // close popup for former cluster that no longer displays
                            view.closePopup();
                        });
                    });
                })
                .catch((error) => {
                    console.error(error);
                });

            async function generateClusterConfig(layer) {
                let popupTemplate = {
                    title: "Cluster-Zusammenfassung",
                    content: [
                        {
                            type: "text",
                            text: "<br/>Dieser Cluster repräsentiert <b>{cluster_count}</b> 5G-Masten."
                        },
                        {
                            type: "expression",
                            expressionInfo: {
                                expression: `
                                Expects($aggregatedFeatures, "operator")

                                var statsFS = GroupBy($aggregatedFeatures,
                                    [
                                    { name: 'Type', expression: 'operator'},
                                    ],
                                    [
                                    { name: 'num_features', expression: '1', statistic: 'COUNT' }
                                    ]
                                );
                                var ordered = Top(OrderBy(statsFs, 'num_features DESC'), 4);

                                var list = "<ol>";

                                for (var group in ordered){
                                    list += \`<li>\${group.Type} (\${Text(group.num_features, "#,###")})</li>\`
                                }
                                list += "</ol>";

                                return {
                                    type: "text",
                                    text: list
                                }
                                `,
                                title: "Liste der Mobilfunkbetreiber"
                            }
                        }
                    ]

                };

                // generates default labelingInfo
                const { labelingInfo, clusterMinSize } = await clusterLabelCreator
                    .getLabelSchemes({ layer, view })
                    .then((labelSchemes) => labelSchemes.primaryScheme);


                return {
                    type: "cluster",
                    popupTemplate,
                    labelingInfo,
                    clusterMinSize,
                    maxScale: 50000
                };
            }


            const zoom = new Zoom({
                view: view,
                layout: "vertical"
            });

            let basemapGallery = new BasemapGallery({
                view: view,
                source: [Basemap.fromId("topo-vector"), Basemap.fromId("dark-gray"), Basemap.fromId("arcgis-light-gray")], //osm-streets, streets-vector
                // container: document.createElement("basemapGalleryDiv"),
                disabled: false
            });

            let legend = new Expand({
                content: new Legend({
                    view: view,
                    style: 'card'
                }),
                view: view,
                expanded: true,
                layerInfos: [
                    {
                        title: '5G Netz Stationen',
                        layer: layer,
                    },
                ]
            });

            // let legend = new Legend({
            //     view: view,
            //     style: [
            //         {
            //             layout: "auto",
            //             type: 'classic',
            //         },
            //     ],
            //     layerInfos: [
            //         {
            //             title: '5G Netz Staionen',
            //             layer: layer,
            //         },
            //     ],
            //     // container: "legendDiv"
            // });

            const bgExpand = new Expand({
                view: view,
                content: basemapGallery,
                autoCollapse: true
            });

            view.ui.add([zoom, bgExpand], "top-left");
            // view.ui.add(swipe);
            view.ui.add(legend, "bottom-left");

        }

    }, []);
    return (
        <>
            <div className="mapDiv" ref={mapDiv}></div>
            <div id="infoDiv" class="esri-widget">
                <div style={{ marginBottom: '1em' }}>
                    <button id="toggle-cluster" class="esri-button">Clustering deaktivieren</button>
                </div>
                Filter nach Netzanbieter:
                <select id="filter" class="esri-select">
                    <option value="">Alle</option>
                    <option value="Telekom Deutschland">Telekom Deutschland</option>
                    <option value="O2">O2</option>
                    <option value="Vodafone">Vodafone</option>
                </select>
            </div >
        </>
    )
}

export { Ookla }