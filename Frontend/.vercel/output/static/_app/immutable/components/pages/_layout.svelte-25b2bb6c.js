import{S as C,i as M,s as T,k as p,q as y,a as S,l as h,m as d,r as D,h as f,c as w,n as c,C as L,b as k,D as v,B as q,E as O,u as Y,e as G,o as Z,p as U,F as x,w as Q,x as R,y as W,f as P,t as H,d as ee,G as ae,H as te,I as se,z as X,g as le}from"../../chunks/index-171c6bf4.js";import{p as ie,n as re}from"../../chunks/stores-ff0b7b76.js";function ne(o){let a,e,t,l,i,s,_;return{c(){a=p("li"),e=p("a"),t=y("Sign in"),l=S(),i=p("li"),s=p("a"),_=y("Sign up"),this.h()},l(n){a=h(n,"LI",{class:!0});var r=d(a);e=h(r,"A",{href:!0,class:!0});var m=d(e);t=D(m,"Sign in"),m.forEach(f),r.forEach(f),l=w(n),i=h(n,"LI",{class:!0});var I=d(i);s=h(I,"A",{href:!0,class:!0});var E=d(s);_=D(E,"Sign up"),E.forEach(f),I.forEach(f),this.h()},h(){c(e,"href","/login"),c(e,"class","nav-link"),L(e,"active",o[0].url.pathname==="/login"),c(a,"class","nav-item"),c(s,"href","/register"),c(s,"class","nav-link"),L(s,"active",o[0].url.pathname==="/register"),c(i,"class","nav-item")},m(n,r){k(n,a,r),v(a,e),v(e,t),k(n,l,r),k(n,i,r),v(i,s),v(s,_)},p(n,r){r&1&&L(e,"active",n[0].url.pathname==="/login"),r&1&&L(s,"active",n[0].url.pathname==="/register")},d(n){n&&f(a),n&&f(l),n&&f(i)}}}function fe(o){let a,e,t,l,i,s,_,n,r,m,I,E,$=o[0].data.user.username+"",g,A;return{c(){a=p("li"),e=p("a"),t=p("i"),l=y(" New Post"),i=S(),s=p("li"),_=p("a"),n=p("i"),r=y(" Settings"),m=S(),I=p("li"),E=p("a"),g=y($),this.h()},l(u){a=h(u,"LI",{class:!0});var b=d(a);e=h(b,"A",{href:!0,class:!0});var N=d(e);t=h(N,"I",{class:!0}),d(t).forEach(f),l=D(N," New Post"),N.forEach(f),b.forEach(f),i=w(u),s=h(u,"LI",{class:!0});var F=d(s);_=h(F,"A",{href:!0,class:!0});var V=d(_);n=h(V,"I",{class:!0}),d(n).forEach(f),r=D(V," Settings"),V.forEach(f),F.forEach(f),m=w(u),I=h(u,"LI",{class:!0});var z=d(I);E=h(z,"A",{href:!0,class:!0});var B=d(E);g=D(B,$),B.forEach(f),z.forEach(f),this.h()},h(){c(t,"class","ion-compose"),c(e,"href","/editor"),c(e,"class","nav-link"),L(e,"active",o[0].url.pathname==="/editor"),c(a,"class","nav-item"),c(n,"class","ion-gear-a"),c(_,"href","/settings"),c(_,"class","nav-link"),L(_,"active",o[0].url.pathname==="/settings"),c(s,"class","nav-item"),c(E,"href",A="/profile/@"+o[0].data.user.username),c(E,"class","nav-link"),c(I,"class","nav-item")},m(u,b){k(u,a,b),v(a,e),v(e,t),v(e,l),k(u,i,b),k(u,s,b),v(s,_),v(_,n),v(_,r),k(u,m,b),k(u,I,b),v(I,E),v(E,g)},p(u,b){b&1&&L(e,"active",u[0].url.pathname==="/editor"),b&1&&L(_,"active",u[0].url.pathname==="/settings"),b&1&&$!==($=u[0].data.user.username+"")&&Y(g,$),b&1&&A!==(A="/profile/@"+u[0].data.user.username)&&c(E,"href",A)},d(u){u&&f(a),u&&f(i),u&&f(s),u&&f(m),u&&f(I)}}}function oe(o){let a,e,t,l,i,s,_,n,r,m;function I(g,A){return g[0].data.user?fe:ne}let E=I(o),$=E(o);return{c(){a=p("nav"),e=p("div"),t=p("a"),l=y("Filming locations"),i=S(),s=p("ul"),_=p("li"),n=p("a"),r=y("Home"),m=S(),$.c(),this.h()},l(g){a=h(g,"NAV",{class:!0});var A=d(a);e=h(A,"DIV",{class:!0});var u=d(e);t=h(u,"A",{class:!0,href:!0});var b=d(t);l=D(b,"Filming locations"),b.forEach(f),i=w(u),s=h(u,"UL",{class:!0});var N=d(s);_=h(N,"LI",{class:!0});var F=d(_);n=h(F,"A",{class:!0,href:!0});var V=d(n);r=D(V,"Home"),V.forEach(f),F.forEach(f),m=w(N),$.l(N),N.forEach(f),u.forEach(f),A.forEach(f),this.h()},h(){c(t,"class","navbar-brand"),c(t,"href","/"),c(n,"class","nav-link"),c(n,"href","/"),L(n,"active",o[0].url.pathname==="/"),c(_,"class","nav-item"),c(s,"class","nav navbar-nav pull-xs-right"),c(e,"class","container"),c(a,"class","navbar navbar-light")},m(g,A){k(g,a,A),v(a,e),v(e,t),v(t,l),v(e,i),v(e,s),v(s,_),v(_,n),v(n,r),v(s,m),$.m(s,null)},p(g,[A]){A&1&&L(n,"active",g[0].url.pathname==="/"),E===(E=I(g))&&$?$.p(g,A):($.d(1),$=E(g),$&&($.c(),$.m(s,null)))},i:q,o:q,d(g){g&&f(a),$.d()}}}function ce(o,a,e){let t;return O(o,ie,l=>e(0,t=l)),[t]}class ue extends C{constructor(a){super(),M(this,a,ce,oe,T,{})}}function j(o){let a,e;return{c(){a=p("div"),e=p("div"),this.h()},l(t){a=h(t,"DIV",{class:!0});var l=d(a);e=h(l,"DIV",{class:!0,style:!0}),d(e).forEach(f),l.forEach(f),this.h()},h(){c(e,"class","progress svelte-1p6xanl"),U(e,"width",o[0]*100+"%"),c(a,"class","progress-container svelte-1p6xanl")},m(t,l){k(t,a,l),v(a,e)},p(t,l){l&1&&U(e,"width",t[0]*100+"%")},d(t){t&&f(a)}}}function J(o){let a;return{c(){a=p("div"),this.h()},l(e){a=h(e,"DIV",{class:!0}),d(a).forEach(f),this.h()},h(){c(a,"class","fade svelte-1p6xanl")},m(e,t){k(e,a,t)},d(e){e&&f(a)}}}function _e(o){let a,e,t=o[1]&&j(o),l=o[0]>=.4&&J();return{c(){t&&t.c(),a=S(),l&&l.c(),e=G()},l(i){t&&t.l(i),a=w(i),l&&l.l(i),e=G()},m(i,s){t&&t.m(i,s),k(i,a,s),l&&l.m(i,s),k(i,e,s)},p(i,[s]){i[1]?t?t.p(i,s):(t=j(i),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null),i[0]>=.4?l||(l=J(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:q,o:q,d(i){t&&t.d(i),i&&f(a),l&&l.d(i),i&&f(e)}}}function me(o,a,e){let t=0,l=!1;return Z(()=>{e(1,l=!0);function i(){e(0,t+=.1);const s=1-t;s>.15&&setTimeout(i,500/s)}setTimeout(i,250)}),[t,l]}class ve extends C{constructor(a){super(),M(this,a,me,_e,T,{})}}function K(o){let a,e;return a=new ve({}),{c(){Q(a.$$.fragment)},l(t){R(a.$$.fragment,t)},m(t,l){W(a,t,l),e=!0},i(t){e||(P(a.$$.fragment,t),e=!0)},o(t){H(a.$$.fragment,t),e=!1},d(t){X(a,t)}}}function pe(o){let a,e,t,l,i,s=o[0]&&K();e=new ue({});const _=o[2].default,n=x(_,o,o[1],null);return{c(){s&&s.c(),a=S(),Q(e.$$.fragment),t=S(),l=p("main"),n&&n.c()},l(r){s&&s.l(r),a=w(r),R(e.$$.fragment,r),t=w(r),l=h(r,"MAIN",{});var m=d(l);n&&n.l(m),m.forEach(f)},m(r,m){s&&s.m(r,m),k(r,a,m),W(e,r,m),k(r,t,m),k(r,l,m),n&&n.m(l,null),i=!0},p(r,[m]){r[0]?s?m&1&&P(s,1):(s=K(),s.c(),P(s,1),s.m(a.parentNode,a)):s&&(le(),H(s,1,1,()=>{s=null}),ee()),n&&n.p&&(!i||m&2)&&ae(n,_,r,r[1],i?se(_,r[1],m,null):te(r[1]),null)},i(r){i||(P(s),P(e.$$.fragment,r),P(n,r),i=!0)},o(r){H(s),H(e.$$.fragment,r),H(n,r),i=!1},d(r){s&&s.d(r),r&&f(a),X(e,r),r&&f(t),r&&f(l),n&&n.d(r)}}}function he(o,a,e){let t;O(o,re,s=>e(0,t=s));let{$$slots:l={},$$scope:i}=a;return o.$$set=s=>{"$$scope"in s&&e(1,i=s.$$scope)},[t,i,l]}class ge extends C{constructor(a){super(),M(this,a,he,pe,T,{})}}export{ge as default};