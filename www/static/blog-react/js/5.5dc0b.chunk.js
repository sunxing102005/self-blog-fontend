(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{120:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(4),r=a(6),l=a(5),i=a(7),o=a(0),u=a.n(o),s=a(47),m=(a(91),a(93),function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(){(0,a.props.onClick)()},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.bTitle,n=e.tTitle;return u.a.createElement("div",{className:"left-img-container"},u.a.createElement("img",{src:t,onClick:this.handleClick}),u.a.createElement("div",{className:"bottom-title"},a),u.a.createElement("div",{className:"top-title"},n))}}]),t}(u.a.Component)),f=a(58),d=a(40),v=a(48);var b=function(e){var t=Object(o.useState)(0),a=Object(s.a)(t,2),n=a[0],c=a[1],r=Object(o.useState)([]),l=Object(s.a)(r,2),i=l[0],b=l[1],E=Object(o.useCallback)(function(e){c(n<2?n+e:0)},[]),p=function(e){E("left"===e?-1:1)},h=function(e){Object(v.b)(e)};Object(o.useEffect)(function(){var e=null;return Object(d.f)().then(function(t){var a=t.recent.content;b(a),e=window.setInterval(function(){E(1)},5e3)}),clearInterval(e)},[E]);var g=i.slice(0,3),j=i.slice(3).map(function(e){return{src:e.thumb,id:e.id,tTitle:e.category.name,bTitle:e.title}});return u.a.createElement("div",{className:"header-imgs-container"},u.a.createElement("div",{className:"shuffling-container"},g.map(function(e,t){return u.a.createElement("div",{className:"shuffle-item ".concat(t===n?"show":""),key:t,onClick:function(){return h(e.id)}},u.a.createElement("img",{src:e.thumb}),u.a.createElement("div",{className:"img-des"},e.title))}),u.a.createElement("ul",{className:"shuffle-spot"},f.a.map(function(e,t){return u.a.createElement("li",{className:"spot ".concat(t===n?"show":""," "),key:t})})),u.a.createElement("div",{className:"control-page"},u.a.createElement("div",{className:"tip left",onClick:function(){return p("left")}},"<"),u.a.createElement("div",{className:"tip right",onClick:function(){return p("right")}},">"))),u.a.createElement("div",{className:"rightImgs"},j.map(function(e,t){return u.a.createElement(m,Object.assign({className:"left-img-item"},e,{key:t,onClick:function(){return h(e.id)}}))})))},E=a(52),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={hasError:!1},a}return Object(i.a)(t,e),Object(c.a)(t,null,[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),Object(c.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?u.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(u.a.Component),h=(a(120),a(44)),g=a(57);a.d(t,"default",function(){return j});var j=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"article-container"},u.a.createElement(b,null),u.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},u.a.createElement(p,null,u.a.createElement(E.a,{className:"blog-list"})),u.a.createElement(g.a,null)),u.a.createElement(h.a,null))}}]),t}(u.a.Component)},41:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),c=a(42);t.default=function(e,t,a){void 0===t&&(t=[]),void 0===a&&(a={});var r=c.default(e,t,{loading:!0}),l=r[0],i=r[1];return n.useEffect(function(){i(a)},[i]),l}},42:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),c=a(43);t.default=function(e,t,a){void 0===t&&(t=[]),void 0===a&&(a={loading:!1});var r=n.useState(a),l=r[0],i=r[1],o=c.default();return[l,n.useCallback(function(t){return i({loading:!0}),e(t).then(function(e){return o.current&&i({value:e,loading:!1}),e},function(e){return o.current&&i({error:e,loading:!1}),e})},t)]}},43:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0);t.default=function(){var e=n.useRef(!1);return n.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e}},44:function(e,t,a){"use strict";var n=a(47),c=a(0),r=a.n(c),l=a(39),i=(a(45),300);t.a=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],o=t[1],u=Object(c.useCallback)(function(e){var t=document.documentElement.scrollTop;o(t>i)});return Object(c.useEffect)(function(){window.addEventListener("scroll",Object(l.b)(u,200))},[u]),r.a.createElement("div",{className:a?"to-top-container":"to-top-container hidden-to-top",onClick:function(){var e=window.setInterval(function(){var t=document.documentElement.scrollTop,a=t/8;0!==t?document.documentElement.scrollTop-=a:clearInterval(e)},20)}},r.a.createElement("i",{className:"fa fa-arrow-up"}))}},45:function(e,t,a){},52:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(50),c=a(0),r=a.n(c),l=(a(53),a(69)),i=a(40),o=a(39),u=a(55),s=a(48),m=a(41),f=a.n(m),d=a(49),v=a(63),b=a.n(v),E=Object(l.a)();function p(e){var t={},a=e.type;a&&(t.category_id="tech"==a?"1":"2");var l=f()(i.d,t),m=l.value,v=l.error,p=[];return m&&(p=(p=m.content).map(function(e){var t=null;return e.publish_time&&(t=u.a.toFormat(new Date(e.publish_time),"yyyy-MM-dd")),Object(n.a)({},e,{des:Object(o.a)(e.content),date:t})})),v&&d.a.error(v),Object(c.useEffect)(function(){E.reveal(".blog-item",{duration:1e3,origin:"bottom",reset:!0,mobile:!1,distance:"25px",opacity:0,easing:"ease-in-out"})},[]),r.a.createElement("div",{className:"blog-list-container"},p.map(function(e,t){return r.a.createElement("div",{className:"blog-item",key:t,onClick:function(){return t=e.id,void Object(s.b)(t);var t}},r.a.createElement("h3",{className:"blog-title"},e.title),r.a.createElement("div",{className:"blog-wrapper"},r.a.createElement(b.a,{src:e.thumb,defaultWidth:"32%",lazy:!0,defaultHeight:"1.7rem"}),r.a.createElement("p",{className:["blog-des",e.thumb?"":"no-pic"].join(" ")},e.des),r.a.createElement("div",{className:"blog-tag"},r.a.createElement("ul",null,r.a.createElement("li",{className:"author"},r.a.createElement("i",{className:"fa fa-user icon"}),"\u5b59\u661f"),r.a.createElement("li",{className:"tag"},r.a.createElement("i",{className:"fa fa-server icon"}),e.category.name),e.date?r.a.createElement("li",{className:"time"}," ",r.a.createElement("i",{className:"fa fa-clock-o icon"}),e.date):"",r.a.createElement("li",{className:"views"},r.a.createElement("i",{className:"fa fa-eye icon"}),e.view),r.a.createElement("li",{className:"likes"},r.a.createElement("i",{className:"fa fa-heart icon"}),e.likes?e.likes:0)))))}))}},53:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){}}]);