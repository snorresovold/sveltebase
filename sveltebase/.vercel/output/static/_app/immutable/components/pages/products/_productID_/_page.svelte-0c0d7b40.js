import{S as N,i as O,s as Q,k as A,q,a as C,x as R,l as F,m as H,r as S,h as a,c as I,y as T,b as m,F as U,z as V,u as j,f as W,t as X,A as Y}from"../../../../chunks/index-54554715.js";import{U as Z}from"../../../../chunks/UserIcon-7c3244fb.js";function h(s){var D,G,J,K;let l,i=s[0].name+"",r,f,n,d=s[0].price+"",b,B,k,o,$=s[0].desc+"",w,x,_,v=((G=(D=s[0].expand)==null?void 0:D.user)==null?void 0:G.username)+"",y,z,p,u;return p=new Z({props:{id:(K=(J=s[0].expand)==null?void 0:J.user)==null?void 0:K.id}}),{c(){l=A("h1"),r=q(i),f=C(),n=A("p"),b=q(d),B=q(" $"),k=C(),o=A("p"),w=q($),x=C(),_=A("p"),y=q(v),z=C(),R(p.$$.fragment)},l(e){l=F(e,"H1",{});var t=H(l);r=S(t,i),t.forEach(a),f=I(e),n=F(e,"P",{});var c=H(n);b=S(c,d),B=S(c," $"),c.forEach(a),k=I(e),o=F(e,"P",{});var E=H(o);w=S(E,$),E.forEach(a),x=I(e),_=F(e,"P",{});var P=H(_);y=S(P,v),P.forEach(a),z=I(e),T(p.$$.fragment,e)},m(e,t){m(e,l,t),U(l,r),m(e,f,t),m(e,n,t),U(n,b),U(n,B),m(e,k,t),m(e,o,t),U(o,w),m(e,x,t),m(e,_,t),U(_,y),m(e,z,t),V(p,e,t),u=!0},p(e,[t]){var E,P,L,M;(!u||t&1)&&i!==(i=e[0].name+"")&&j(r,i),(!u||t&1)&&d!==(d=e[0].price+"")&&j(b,d),(!u||t&1)&&$!==($=e[0].desc+"")&&j(w,$),(!u||t&1)&&v!==(v=((P=(E=e[0].expand)==null?void 0:E.user)==null?void 0:P.username)+"")&&j(y,v);const c={};t&1&&(c.id=(M=(L=e[0].expand)==null?void 0:L.user)==null?void 0:M.id),p.$set(c)},i(e){u||(W(p.$$.fragment,e),u=!0)},o(e){X(p.$$.fragment,e),u=!1},d(e){e&&a(l),e&&a(f),e&&a(n),e&&a(k),e&&a(o),e&&a(x),e&&a(_),e&&a(z),Y(p,e)}}}function g(s,l,i){let r,{data:f}=l;return s.$$set=n=>{"data"in n&&i(1,f=n.data)},s.$$.update=()=>{s.$$.dirty&2&&i(0,{product:r}=f,r)},[r,f]}class ae extends N{constructor(l){super(),O(this,l,g,h,Q,{data:1})}}export{ae as default};