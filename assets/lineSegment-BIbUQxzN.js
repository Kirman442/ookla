import{cv as t,bC as e,cw as g,cx as s,c3 as p,cy as b,cz as w,a9 as x,cA as A}from"./index-Bjl6Xt50.js";import{s as h}from"./ObjectStack-D9XvkZP7.js";import{c as j}from"./plane-CiTIEm-Q.js";function a(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:e(),vector:e()}}function d(r,n,o=a()){return g(o.origin,r),s(o.vector,n,r),o}function k(r,n,o){return y(r,n,0,1,o)}function y(r,n,o,u,i){const{vector:c,origin:v}=r,f=s(j.get(),n,v),m=p(c,f)/b(c);return w(i,c,x(m,o,u)),A(i,i,r.origin)}new h(()=>a());export{d as b,k as j,a as v};
