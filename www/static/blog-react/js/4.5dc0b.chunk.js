(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(4),a=n(6),c=n(5),i=n(7),l=n(0),u=n.n(l),p=(n(83),n(1)),s=n.n(p),f=n(8),h=n.n(f),m=n(11),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var v=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},b=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=d(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!v(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},d(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);h()(this.context.router,"You should not use <Link> outside a <Router>"),h()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,a="string"===typeof t?Object(m.b)(t,null,null,o.location):t,c=o.createHref(a);return u.a.createElement("a",y({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(u.a.Component);b.propTypes={onClick:s.a.func,target:s.a.string,replace:s.a.bool,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired,innerRef:s.a.oneOfType([s.a.string,s.a.func])},b.defaultProps={replace:!1},b.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired,createHref:s.a.func.isRequired}).isRequired}).isRequired};var O=b,E=n(150),j=[{name:"\u7f51\u7ad9\u9996\u9875",path:"/"},{name:"\u5173\u4e8e\u6211",path:"/me"},{name:"\u6280\u672f\u535a\u5ba2",path:"/type/tech"},{name:"\u6162\u751f\u6d3b",path:"/type/life"}];var w=Object(E.a)(function(e){var t=e.location,n=t.pathname;return console.log("currPath",t),u.a.createElement("header",null,u.a.createElement("div",null,u.a.createElement("nav",{className:"nav-container"},u.a.createElement("h1",{className:"logo"},"\u5b59\u661f\u535a\u5ba2"),j.map(function(e,t){return u.a.createElement(O,{to:e.path,key:t},u.a.createElement("li",{className:n!=e.path?"titleItem":"titleItem active",key:t},e.name))}),u.a.createElement("div",{className:"search"},u.a.createElement("i",{className:"fa fa-search icon"})))))}),g=n(149),P=n(2),R=n.n(P),_=n(14);var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){h()(this.context.router,"You should not use <Switch> outside a <Router>")},t.prototype.componentWillReceiveProps=function(e){R()(!(e.location&&!this.props.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),R()(!(!e.location&&this.props.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')},t.prototype.render=function(){var e=this.context.router.route,t=this.props.children,n=this.props.location||e.location,r=void 0,o=void 0;return u.a.Children.forEach(t,function(t){if(null==r&&u.a.isValidElement(t)){var a=t.props,c=a.path,i=a.exact,l=a.strict,p=a.sensitive,s=a.from,f=c||s;o=t,r=Object(_.a)(n.pathname,{path:f,exact:i,strict:l,sensitive:p},e.match)}}),r?u.a.cloneElement(o,{location:n,computedMatch:r}):null},t}(u.a.Component);x.contextTypes={router:s.a.shape({route:s.a.object.isRequired}).isRequired},x.propTypes={children:s.a.node,location:s.a.object};var C=x,T=n(142);n(86);function k(e){var t=e.children;return u.a.createElement("footer",{className:"footer-container"},u.a.createElement("p",{className:"footer-text"},t))}n(88);var N=n(90);n.d(t,"default",function(){return H});var q=Object(l.lazy)(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(5)]).then(n.bind(null,148))}),S=Object(l.lazy)(function(){return Promise.all([n.e(0),n.e(11),n.e(1),n.e(6)]).then(n.bind(null,143))}),L=Object(l.lazy)(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(7)]).then(n.bind(null,144))}),z=Object(l.lazy)(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(8)]).then(n.bind(null,145))}),D=Object(l.lazy)(function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,147))}),H=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log("hello",N.Hello),u.a.createElement("div",{className:"layout-container"},u.a.createElement(w,null),u.a.createElement(g.a,null,u.a.createElement(l.Suspense,{fallback:u.a.createElement("div",null,"Loading...")},u.a.createElement("div",null,u.a.createElement(C,null,u.a.createElement(T.a,{path:"/content",component:function(){return u.a.createElement(S,null)}}),u.a.createElement(T.a,{path:"/type/tech",component:function(){return u.a.createElement(L,null)},name:"\u5b66\u65e0\u6b62\u5883"}),u.a.createElement(T.a,{path:"/type/life",component:function(){return u.a.createElement(z,null)}}),u.a.createElement(T.a,{path:"/me",component:function(){return u.a.createElement(D,null)}}),u.a.createElement(T.a,{path:"/",component:function(){return u.a.createElement(q,null)}}))))),u.a.createElement(k,null,"Design By SUNX ",u.a.createElement("a",null," \u5b59\u661f\u4e2a\u4eba\u535a\u5ba2")," \u8fbdICP\u590719009050\u53f7"))}}]),t}(u.a.Component)},150:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),c=n.n(a),i=n(85),l=n.n(i),u=n(13),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var s=function(e){var t=function(t){var n=t.wrappedComponentRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["wrappedComponentRef"]);return o.a.createElement(u.a,{children:function(t){return o.a.createElement(e,p({},r,t,{ref:n}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:c.a.func},l()(t,e)};t.a=s},83:function(e,t,n){},85:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,p=u&&u(Object);e.exports=function e(t,n,s){if("string"!==typeof n){if(p){var f=u(n);f&&f!==p&&e(t,f,s)}var h=c(n);i&&(h=h.concat(i(n)));for(var m=0;m<h.length;++m){var y=h[m];if(!r[y]&&!o[y]&&(!s||!s[y])){var d=l(n,y);try{a(t,y,d)}catch(v){}}}return t}return t}},86:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){return console.log("LLLLL"),o.createElement("h1",null,"Hello!")},t}(o.Component);t.Hello=a}}]);