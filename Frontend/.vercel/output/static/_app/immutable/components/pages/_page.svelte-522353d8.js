import{S as Ie,i as Ae,s as De,e as ce,b as L,B as x,h as f,k as _,l as d,m as v,n as u,D as h,N as Pe,q,r as w,C as B,u as ee,a as P,w as oe,J as Ve,c as V,x as fe,y as he,f as ue,t as _e,z as de,E as Le}from"../../chunks/index-171c6bf4.js";import{p as ye}from"../../chunks/stores-ff0b7b76.js";import{A as qe}from"../../chunks/index-81c0d305.js";function ve(n,a,e){const t=n.slice();return t[4]=a[e],t}function ge(n){let a,e,t=n[3],s=[];for(let l=0;l<t.length;l+=1)s[l]=me(ve(n,t,l));return{c(){a=_("nav"),e=_("ul");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){a=d(l,"NAV",{});var r=v(a);e=d(r,"UL",{class:!0});var i=v(e);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach(f),r.forEach(f),this.h()},h(){u(e,"class","pagination")},m(l,r){L(l,a,r),h(a,e);for(let i=0;i<s.length;i+=1)s[i].m(e,null)},p(l,r){if(r&14){t=l[3];let i;for(i=0;i<t.length;i+=1){const o=ve(l,t,i);s[i]?s[i].p(o,r):(s[i]=me(o),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=t.length}},d(l){l&&f(a),Pe(s,l)}}}function me(n){let a,e,t=n[4]+"",s,l;return{c(){a=_("li"),e=_("a"),s=q(t),this.h()},l(r){a=d(r,"LI",{class:!0});var i=v(a);e=d(i,"A",{class:!0,href:!0});var o=v(e);s=w(o,t),o.forEach(f),i.forEach(f),this.h()},h(){u(e,"class","page-link"),u(e,"href",l=n[2](n[4])),u(a,"class","page-item"),B(a,"active",n[4]==n[1])},m(r,i){L(r,a,i),h(a,e),h(e,s)},p(r,i){i&8&&t!==(t=r[4]+"")&&ee(s,t),i&12&&l!==(l=r[2](r[4]))&&u(e,"href",l),i&10&&B(a,"active",r[4]==r[1])},d(r){r&&f(a)}}}function we(n){let a,e=n[0]>1&&ge(n);return{c(){e&&e.c(),a=ce()},l(t){e&&e.l(t),a=ce()},m(t,s){e&&e.m(t,s),L(t,a,s)},p(t,[s]){t[0]>1?e?e.p(t,s):(e=ge(t),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:x,o:x,d(t){e&&e.d(t),t&&f(a)}}}function Se(n,a,e){let{pages:t}=a,{p:s}=a,{href:l}=a,r;return n.$$set=i=>{"pages"in i&&e(0,t=i.pages),"p"in i&&e(1,s=i.p),"href"in i&&e(2,l=i.href)},n.$$.update=()=>{if(n.$$.dirty&9){e(3,r=[]);for(let i=1;i<=t;++i)r.push(i)}},[t,s,l,r]}class Fe extends Ie{constructor(a){super(),Ae(this,a,Se,we,De,{pages:0,p:1,href:2})}}function pe(n,a,e){const t=n.slice();return t[2]=a[e],t}function Ee(n){let a,e,t,s,l,r,i;return{c(){a=_("div"),e=_("div"),t=_("h1"),s=q("Welcome"),l=P(),r=_("p"),i=q("Here you can see all filming locations in Paris."),this.h()},l(o){a=d(o,"DIV",{class:!0});var m=v(a);e=d(m,"DIV",{class:!0});var g=v(e);t=d(g,"H1",{class:!0});var T=v(t);s=w(T,"Welcome"),T.forEach(f),l=V(g),r=d(g,"P",{});var U=v(r);i=w(U,"Here you can see all filming locations in Paris."),U.forEach(f),g.forEach(f),m.forEach(f),this.h()},h(){u(t,"class","logo-font"),u(e,"class","container"),u(a,"class","banner")},m(o,m){L(o,a,m),h(a,e),h(e,t),h(t,s),h(e,l),h(e,r),h(r,i)},d(o){o&&f(a)}}}function He(n){let a,e,t;return{c(){a=_("li"),e=_("a"),t=q("Sign in to see your locations"),this.h()},l(s){a=d(s,"LI",{class:!0});var l=v(a);e=d(l,"A",{href:!0,class:!0});var r=v(e);t=w(r,"Sign in to see your locations"),r.forEach(f),l.forEach(f),this.h()},h(){u(e,"href","/login"),u(e,"class","nav-link"),u(a,"class","nav-item")},m(s,l){L(s,a,l),h(a,e),h(e,t)},p:x,d(s){s&&f(a)}}}function Ne(n){let a,e,t;return{c(){a=_("li"),e=_("a"),t=q("Your Feed"),this.h()},l(s){a=d(s,"LI",{class:!0});var l=v(a);e=d(l,"A",{href:!0,class:!0});var r=v(e);t=w(r,"Your Feed"),r.forEach(f),l.forEach(f),this.h()},h(){u(e,"href","/?tab=feed"),u(e,"class","nav-link"),B(e,"active",n[1]==="feed"),u(a,"class","nav-item")},m(s,l){L(s,a,l),h(a,e),h(e,t)},p(s,l){l&2&&B(e,"active",s[1]==="feed")},d(s){s&&f(a)}}}function be(n){let a,e,t,s,l,r;return{c(){a=_("li"),e=_("a"),t=_("i"),s=P(),l=q(n[2]),this.h()},l(i){a=d(i,"LI",{class:!0});var o=v(a);e=d(o,"A",{href:!0,class:!0});var m=v(e);t=d(m,"I",{class:!0}),v(t).forEach(f),s=V(m),l=w(m,n[2]),m.forEach(f),o.forEach(f),this.h()},h(){u(t,"class","ion-pound"),u(e,"href",r="/?tag="+n[2]),u(e,"class","nav-link active"),u(a,"class","nav-item")},m(i,o){L(i,a,o),h(a,e),h(e,t),h(e,s),h(e,l)},p(i,o){o&4&&ee(l,i[2]),o&4&&r!==(r="/?tag="+i[2])&&u(e,"href",r)},d(i){i&&f(a)}}}function ke(n){let a,e=n[2]+"",t,s;return{c(){a=_("a"),t=q(e),this.h()},l(l){a=d(l,"A",{href:!0,class:!0});var r=v(a);t=w(r,e),r.forEach(f),this.h()},h(){u(a,"href",s="/?tag="+n[2]),u(a,"class","tag-default tag-pill")},m(l,r){L(l,a,r),h(a,t)},p(l,r){r&1&&e!==(e=l[2]+"")&&ee(t,e),r&1&&s!==(s="/?tag="+l[2])&&u(a,"href",s)},d(l){l&&f(a)}}}function Ce(n){let a,e,t,s,l,r,i,o,m,g,T,U,G,O,S,Q,F,R,W,H,J,X,Z,N,j,k=!n[0].user&&Ee();function ae(c,I){return c[0].user?Ne:He}let K=ae(n),A=K(n),E=n[2]&&be(n);S=new qe({props:{articles:n[0].articles}}),F=new Fe({props:{pages:n[0].pages,p:n[4],href:n[6]}});let Y=n[0].tags,b=[];for(let c=0;c<Y.length;c+=1)b[c]=ke(pe(n,Y,c));return{c(){a=P(),e=_("div"),k&&k.c(),t=P(),s=_("div"),l=_("div"),r=_("div"),i=_("div"),o=_("ul"),m=_("li"),g=_("a"),T=q("All locations"),U=P(),A.c(),G=P(),E&&E.c(),O=P(),oe(S.$$.fragment),Q=P(),oe(F.$$.fragment),R=P(),W=_("div"),H=_("div"),J=_("p"),X=q("Popular Tags"),Z=P(),N=_("div");for(let c=0;c<b.length;c+=1)b[c].c();this.h()},l(c){Ve("svelte-1ld88qq",document.head).forEach(f),a=V(c),e=d(c,"DIV",{class:!0});var D=v(e);k&&k.l(D),t=V(D),s=d(D,"DIV",{class:!0});var C=v(s);l=d(C,"DIV",{class:!0});var p=v(l);r=d(p,"DIV",{class:!0});var y=v(r);i=d(y,"DIV",{class:!0});var le=v(i);o=d(le,"UL",{class:!0});var z=v(o);m=d(z,"LI",{class:!0});var te=v(m);g=d(te,"A",{href:!0,class:!0});var se=v(g);T=w(se,"All locations"),se.forEach(f),te.forEach(f),U=V(z),A.l(z),G=V(z),E&&E.l(z),z.forEach(f),le.forEach(f),O=V(y),fe(S.$$.fragment,y),Q=V(y),fe(F.$$.fragment,y),y.forEach(f),R=V(p),W=d(p,"DIV",{class:!0});var ie=v(W);H=d(ie,"DIV",{class:!0});var M=v(H);J=d(M,"P",{});var re=v(J);X=w(re,"Popular Tags"),re.forEach(f),Z=V(M),N=d(M,"DIV",{class:!0});var ne=v(N);for(let $=0;$<b.length;$+=1)b[$].l(ne);ne.forEach(f),M.forEach(f),ie.forEach(f),p.forEach(f),C.forEach(f),D.forEach(f),this.h()},h(){document.title="Filming Locations",u(g,"href","/?tab=all"),u(g,"class","nav-link"),B(g,"active",n[1]==="all"&&!n[2]),u(m,"class","nav-item"),u(o,"class","nav nav-pills outline-active"),u(i,"class","feed-toggle"),u(r,"class","col-md-9"),u(N,"class","tag-list"),u(H,"class","sidebar"),u(W,"class","col-md-3"),u(l,"class","row"),u(s,"class","container page"),u(e,"class","home-page")},m(c,I){L(c,a,I),L(c,e,I),k&&k.m(e,null),h(e,t),h(e,s),h(s,l),h(l,r),h(r,i),h(i,o),h(o,m),h(m,g),h(g,T),h(o,U),A.m(o,null),h(o,G),E&&E.m(o,null),h(r,O),he(S,r,null),h(r,Q),he(F,r,null),h(l,R),h(l,W),h(W,H),h(H,J),h(J,X),h(H,Z),h(H,N);for(let D=0;D<b.length;D+=1)b[D].m(N,null);j=!0},p(c,[I]){c[0].user?k&&(k.d(1),k=null):k||(k=Ee(),k.c(),k.m(e,t)),(!j||I&6)&&B(g,"active",c[1]==="all"&&!c[2]),K===(K=ae(c))&&A?A.p(c,I):(A.d(1),A=K(c),A&&(A.c(),A.m(o,G))),c[2]?E?E.p(c,I):(E=be(c),E.c(),E.m(o,null)):E&&(E.d(1),E=null);const D={};I&1&&(D.articles=c[0].articles),S.$set(D);const C={};if(I&1&&(C.pages=c[0].pages),I&16&&(C.p=c[4]),I&8&&(C.href=c[6]),F.$set(C),I&1){Y=c[0].tags;let p;for(p=0;p<Y.length;p+=1){const y=pe(c,Y,p);b[p]?b[p].p(y,I):(b[p]=ke(y),b[p].c(),b[p].m(N,null))}for(;p<b.length;p+=1)b[p].d(1);b.length=Y.length}},i(c){j||(ue(S.$$.fragment,c),ue(F.$$.fragment,c),j=!0)},o(c){_e(S.$$.fragment,c),_e(F.$$.fragment,c),j=!1},d(c){c&&f(a),c&&f(e),k&&k.d(),A.d(),E&&E.d(),de(S),de(F),Pe(b,c)}}}function Te(n,a,e){let t,s,l,r,i;Le(n,ye,g=>e(5,i=g));let{data:o}=a;const m=g=>`/?${r}&page=${g}`;return n.$$set=g=>{"data"in g&&e(0,o=g.data)},n.$$.update=()=>{n.$$.dirty&32&&e(4,t=+(i.url.searchParams.get("page")??"1")),n.$$.dirty&32&&e(2,s=i.url.searchParams.get("tag")),n.$$.dirty&32&&e(1,l=i.url.searchParams.get("tab")??"all"),n.$$.dirty&6&&e(3,r=s?`tag=${s}`:`tab=${l}`)},[o,l,s,r,t,i,m]}class ze extends Ie{constructor(a){super(),Ae(this,a,Te,Ce,De,{data:0})}}export{ze as default};
