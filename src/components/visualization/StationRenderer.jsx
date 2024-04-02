import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol.js";

const stationColors = ["#750593", "#FF3300", "#3f6ed3", "#b8d33f"];

const stationInfo = {
    type: "simple-marker",
    size: 6,
    outline: {
        width: 0.5,
        color: "white"
    }
};

export const stationPointRenderer = {
    type: "unique-value",
    valueExpression: `var fcl = $feature.operator; When(fcl == 'Vodafone', 'V', fcl == 'Telekom Deutschland', 'TD', fcl == 'O2', 'O2','other')`,
    uniqueValueInfos: [
        {
            value: 'TD',
            symbol: { ...stationInfo, color: stationColors[1] },
            label: "Telekom Deutschland"
        }, {
            value: 'O2',
            symbol: { ...stationInfo, color: stationColors[2] },
            label: "O2"
        }, {
            value: 'V',
            symbol: { ...stationInfo, color: stationColors[0] },
            label: "Vodafone"
        }, {
            value: 'other',
            symbol: { ...stationInfo, color: stationColors[3] },
            label: "Other"
        }
    ]
};


// const uBahnSymbol = new WebStyleSymbol({
//     name: "subway-station",
//     portal: { url: "https://www.arcgis.com" },
//     styleName: "Esri2DPointSymbolsStyle"
//   });


// const uBahnSymbol = {
//     type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
//     size: 5,
//     outline: {
//         color: [250, 250, 250, 0.7],
//         width: 1.5
//     },
//     color: [255, 51, 0],
// };


// export const stationRenderer = {
//     type: "simple",
//     symbol: { ...uBahnSymbol }
// }

// export const stationRenderer = {
//     type: "unique-value",
//     valueExpression: `var fcl = $feature.linie; When(fcl == 'U1', 'U1', fcl == 'U2', 'U2', fcl == 'U3', 'U3', fcl == 'U4', 'U4',fcl == 'U5', 'U5',fcl == 'U6', 'U6',fcl == 'U7', 'U7',fcl == 'U8', 'U8',fcl == 'U9', 'U9','other')`,
//     uniqueValueInfos: [
//         {
//             value: 'U1',
//             symbol: { ...uBahnSymbol, color: metroLineColors[0] },
//             label: "U1"
//         }, {
//             value: 'U2',
//             symbol: { ...uBahnSymbol, color: metroLineColors[1] },
//             label: "U2"
//         }, {
//             value: 'U3',
//             symbol: { ...uBahnSymbol, color: metroLineColors[2] },
//             label: "U3"
//         }, {
//             value: 'U4',
//             symbol: { ...uBahnSymbol, color: metroLineColors[3] },
//             label: "U4"
//         }, {
//             value: 'U5',
//             symbol: { ...uBahnSymbol, color: metroLineColors[4] },
//             label: "U5"
//         }, {
//             value: 'U6',
//             symbol: { ...uBahnSymbol, color: metroLineColors[5] },
//             label: "U6"
//         }, {
//             value: 'U7',
//             symbol: { ...uBahnSymbol, color: metroLineColors[6] },
//             label: "U7"
//         }, {
//             value: 'U8',
//             symbol: { ...uBahnSymbol, color: metroLineColors[7] },
//             label: "U8"
//         }, {
//             value: 'U9',
//             symbol: { ...uBahnSymbol, color: metroLineColors[8] },
//             label: "U9"
//         }
//     ]
// };