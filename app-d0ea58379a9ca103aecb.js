webpackJsonp([0xd2a57dc1d883],{112:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(455),options:{plugins:[]}},{plugin:t(446),options:{plugins:[],trackingId:"UA-110475271-1"}},{plugin:t(447),options:{plugins:[],color:"#c62828"}},{plugin:t(445),options:{plugins:[]}},{plugin:t(450),options:{plugins:[]}},{plugin:t(449),options:{plugins:[]}}]},283:function(n,e,t){"use strict";var o;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(402),"component---src-templates-post-jsx":t(407),"component---src-templates-tag-jsx":t(408),"component---src-templates-category-jsx":t(406),"component---src-pages-about-jsx":t(404),"component---src-pages-index-jsx":t(405)},e.json=(o={"layout-index.json":t(6),"offline-plugin-app-shell-fallback.json":t(424)},o["layout-index.json"]=t(6),o["first-post.json"]=t(419),o["layout-index.json"]=t(6),o["generating-text-using-an-lstm-neural-network.json"]=t(420),o["layout-index.json"]=t(6),o["vhdl-i-2-s-transmitter.json"]=t(441),o["layout-index.json"]=t(6),o["vhdl-sine-wave-oscillator.json"]=t(442),o["layout-index.json"]=t(6),o["yocto-linux-on-the-xilinx-zynq-zed-board.json"]=t(443),o["layout-index.json"]=t(6),o["nexys-4-ddr-microblaze-with-ddr-ram-and-flash-bootloader-support.json"]=t(423),o["layout-index.json"]=t(6),o["real-time-sound-synthesis-with-jupyter.json"]=t(425),o["layout-index.json"]=t(6),o["lstm-neural-network-for-sequence-learning.json"]=t(422),o["layout-index.json"]=t(6),o["basic-asymmetric-multi-processor-amp-setup-on-the-zedboard.json"]=t(410),o["layout-index.json"]=t(6),o["chatbot-using-open-ai-gpt-2-transformer-model.json"]=t(417),o["layout-index.json"]=t(6),o["docker-image-with-theia-ide-supporting-embedded-rust-development.json"]=t(418),o["layout-index.json"]=t(6),o["tags-github.json"]=t(430),o["layout-index.json"]=t(6),o["tags-blog.json"]=t(429),o["layout-index.json"]=t(6),o["tags-artificial-intelligence.json"]=t(426),o["layout-index.json"]=t(6),o["tags-lstm.json"]=t(433),o["layout-index.json"]=t(6),o["tags-vhdl-fpga-dsp.json"]=t(438),o["layout-index.json"]=t(6),o["tags-zynq-yocto-fpga-linux-xilinx.json"]=t(440),o["layout-index.json"]=t(6),o["tags-microblaze-fpga-sdk.json"]=t(434),o["layout-index.json"]=t(6),o["tags-audio.json"]=t(428),o["layout-index.json"]=t(6),o["tags-sound.json"]=t(435),o["layout-index.json"]=t(6),o["tags-jupyter.json"]=t(432),o["layout-index.json"]=t(6),o["tags-javascript.json"]=t(431),o["layout-index.json"]=t(6),o["tags-tensorflow.json"]=t(436),o["layout-index.json"]=t(6),o["tags-zynq-microblaze-yocto-linux-xilinx.json"]=t(439),o["layout-index.json"]=t(6),o["tags-artificial-intelligence-open-ai-transformer-nlp.json"]=t(427),o["layout-index.json"]=t(6),o["tags-theia-rust-docker.json"]=t(437),o["layout-index.json"]=t(6),o["categories-blaat.json"]=t(413),o["layout-index.json"]=t(6),o["categories-artificial-intelligence.json"]=t(412),o["layout-index.json"]=t(6),o["categories-fpga.json"]=t(415),o["layout-index.json"]=t(6),o["categories-jupyter.json"]=t(416),o["layout-index.json"]=t(6),o["categories-ai.json"]=t(411),o["layout-index.json"]=t(6),o["categories-docker.json"]=t(414),o["layout-index.json"]=t(6),o["about.json"]=t(409),o["layout-index.json"]=t(6),o["index.json"]=t(421),o),e.layouts={"component---src-layouts-index-jsx":t(403)}},284:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(2),p=o(l),d=t(168),f=o(d),m=t(80),g=o(m),h=t(112),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},y=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),s=t.location;return f.default.getPage(s.pathname)||(s=u({},s,u({},s,{pathname:"/404.html"}))),o.state={location:s,pageResources:f.default.getResourcesForPathname(t.location.pathname)},o}return s(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=f.default.getResourcesForPathname(n.location.pathname);t?this.setState({location:n.location,pageResources:t}):f.default.getResourcesForPathname(n.location.pathname,function(t){e.setState({location:n.location,pageResources:t})})}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){f.default.getPage(n.state.location.pathname)&&e.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:u({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);y.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=y,n.exports=e.default},80:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(543),a=o(r),s=(0,a.default)();n.exports=s},285:function(n,e,t){"use strict";var o=t(109),r={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),s=a.slice(e.length);if(s.split("#").length>1&&(s=s.split("#").slice(0,-1).join("")),s.split("?").length>1&&(s=s.split("?").slice(0,-1).join("")),r[s])return r[s];var u=void 0;return n.some(function(n){if(n.matchPath){if((0,o.matchPath)(s,{path:n.path})||(0,o.matchPath)(s,{path:n.matchPath}))return u=n,r[s]=n,!0}else{if((0,o.matchPath)(s,{path:n.path,exact:!0}))return u=n,r[s]=n,!0;if((0,o.matchPath)(s,{path:n.path+"index.html"}))return u=n,r[s]=n,!0}return!1}),u}}},286:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(133),a=o(r),s=t(112),u=(0,s.apiRunner)("replaceHistory"),i=u[0],c=i||(0,a.default)();n.exports=c},409:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(459)})})}},410:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc3f458048255,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(460)})})}},411:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf17a640fc103,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(461)})})}},412:function(n,e,t){t(3),n.exports=function(n){return t.e(19120532712671,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(462)})})}},413:function(n,e,t){t(3),n.exports=function(n){return t.e(28831943093088,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(463)})})}},414:function(n,e,t){t(3),n.exports=function(n){return t.e(5540655286055,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(464)})})}},415:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9b85df90278f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(465)})})}},416:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd834f0afe03e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(466)})})}},417:function(n,e,t){t(3),n.exports=function(n){return t.e(25382386167570,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(467)})})}},418:function(n,e,t){t(3),n.exports=function(n){return t.e(0xdfc4aa1cbd18,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(468)})})}},419:function(n,e,t){t(3),n.exports=function(n){return t.e(98749194253172,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(469)})})}},420:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf58ab1264a70,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(470)})})}},421:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(471)})})}},6:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(135)})})}},422:function(n,e,t){t(3),n.exports=function(n){return t.e(75487621532073,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(472)})})}},423:function(n,e,t){t(3),n.exports=function(n){return t.e(55742354164186,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(473)})})}},424:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(474)})})}},425:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8b20f3d035d4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(475)})})}},427:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa6eebc5564c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(476)})})}},426:function(n,e,t){t(3),n.exports=function(n){return t.e(92932695606945,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(477)})})}},428:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8c7b9218b3fb,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(478)})})}},429:function(n,e,t){t(3),n.exports=function(n){return t.e(17976388717192,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(479)})})}},430:function(n,e,t){t(3),n.exports=function(n){return t.e(0xed28d567e2ba,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(480)})})}},431:function(n,e,t){t(3),n.exports=function(n){return t.e(67335324583948,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(481)})})}},432:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe8133f746bb9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(482)})})}},433:function(n,e,t){t(3),n.exports=function(n){return t.e(66827178591201,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(483)})})}},434:function(n,e,t){t(3),n.exports=function(n){return t.e(50219004700979,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(484)})})}},435:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf7b7e2dcf32,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(485)})})}},436:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8998037bf477,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(486)})})}},437:function(n,e,t){t(3),n.exports=function(n){return t.e(66780404513303,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(487)})})}},438:function(n,e,t){t(3),n.exports=function(n){return t.e(0x73a07d970a50,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(488)})})}},439:function(n,e,t){t(3),n.exports=function(n){return t.e(40119179568915,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(489)})})}},440:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8ba0dd985d94,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(490)})})}},441:function(n,e,t){t(3),n.exports=function(n){return t.e(0x7ca6a79c9122,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(491)})})}},442:function(n,e,t){t(3),n.exports=function(n){return t.e(36940768073078,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(492)})})}},443:function(n,e,t){t(3),n.exports=function(n){return t.e(58298523367970,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(493)})})}},403:function(n,e,t){t(3),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(287)})})}},168:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(285)),s=o(a),u=t(80),i=o(u),c=void 0,l={},p={},d={},f={},m={},g=[],h=[],x={},y=[],j={},v=function(n){return n&&n.default||n},b=void 0,k=!0;b=t(288)({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(n){w(n,function(){y=y.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var C=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},N=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])n.nextTick(function(){t(null,f[e])});else{var o="component---"===e.slice(0,12)?p.components[e]||p.layouts[e]:p.json[e];o(function(n,o){f[e]=o,t(n,o)})}},R=function(e,t){m[e]?n.nextTick(function(){t(null,m[e])}):w(e,function(n,o){if(n)t(n);else{var r=v(o());m[e]=r,t(n,r)}})},_=1,P={empty:function(){h=[],x={},j={},y=[],g=[]},addPagesArray:function(n){g=n;var e="";e="",c=(0,s.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return h.pop()},enqueue:function(n){if(!g.some(function(e){return e.path===n}))return!1;var e=1/_;_+=1,x[n]?x[n]+=1:x[n]=1,P.has(n)||h.unshift(n),h.sort(N);var t=c(n);return t.jsonName&&(j[t.jsonName]?j[t.jsonName]+=1+e:j[t.jsonName]=1+e,y.indexOf(t.jsonName)!==-1||f[t.jsonName]||y.unshift(t.jsonName)),t.componentChunkName&&(j[t.componentChunkName]?j[t.componentChunkName]+=1+e:j[t.componentChunkName]=1+e,y.indexOf(t.componentChunkName)!==-1||f[t.jsonName]||y.unshift(t.componentChunkName)),y.sort(C),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:j}},getPages:function(){return{pathArray:h,pathCount:x}},getPage:function(n){return c(n)},has:function(n){return h.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;var o=c(e);if(!o)return console.log("A page wasn't found for \""+e+'"'),t();if(e=o.path,d[e])return n.nextTick(function(){t(d[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:d[e]})}),d[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,s=void 0,u=function(){if(r&&a&&(!o.layoutComponentChunkName||s)){d[e]={component:r,json:a,layout:s,page:o};var n={component:r,json:a,layout:s,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return R(o.componentChunkName,function(n,e){n&&console.log("Loading the component for "+o.path+" failed"),r=e,u()}),R(o.jsonName,function(n,e){n&&console.log("Loading the JSON for "+o.path+" failed"),a=e,u()}),void(o.layoutComponentChunkName&&R(o.layoutComponentChunkName,function(n,e){n&&console.log("Loading the Layout for "+o.path+" failed"),s=e,u()}))},peek:function(n){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(n){return h.length-h.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:P.getResourcesForPathname};e.default=P}).call(e,t(53))},494:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"first-post.json",path:"/first-post"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"generating-text-using-an-lstm-neural-network.json",path:"/generating-text-using-an-lstm-neural-network"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"vhdl-i-2-s-transmitter.json",path:"/vhdl-i-2-s-transmitter"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"vhdl-sine-wave-oscillator.json",path:"/vhdl-sine-wave-oscillator"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"yocto-linux-on-the-xilinx-zynq-zed-board.json",path:"/yocto-linux-on-the-xilinx-zynq-zed-board"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"nexys-4-ddr-microblaze-with-ddr-ram-and-flash-bootloader-support.json",path:"/nexys-4-ddr-microblaze-with-ddr-ram-and-flash-bootloader-support"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"real-time-sound-synthesis-with-jupyter.json",path:"/real-time-sound-synthesis-with-jupyter"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"lstm-neural-network-for-sequence-learning.json",path:"/lstm-neural-network-for-sequence-learning"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"basic-asymmetric-multi-processor-amp-setup-on-the-zedboard.json",path:"/basic-asymmetric-multi-processor-amp-setup-on-the-zedboard"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"chatbot-using-open-ai-gpt-2-transformer-model.json",path:"/chatbot-using-open-ai-gpt-2-transformer-model"},{componentChunkName:"component---src-templates-post-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"docker-image-with-theia-ide-supporting-embedded-rust-development.json",path:"/docker-image-with-theia-ide-supporting-embedded-rust-development"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-github.json",path:"/tags/github/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-blog.json",path:"/tags/blog/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-artificial-intelligence.json",path:"/tags/artificial-intelligence/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-lstm.json",path:"/tags/lstm/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-vhdl-fpga-dsp.json",path:"/tags/vhdl-fpga-dsp/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-zynq-yocto-fpga-linux-xilinx.json",path:"/tags/zynq-yocto-fpga-linux-xilinx/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-microblaze-fpga-sdk.json",path:"/tags/microblaze-fpga-sdk/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-audio.json",path:"/tags/audio/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-sound.json",path:"/tags/sound/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-jupyter.json",path:"/tags/jupyter/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-javascript.json",path:"/tags/javascript/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-tensorflow.json",path:"/tags/tensorflow/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-zynq-microblaze-yocto-linux-xilinx.json",path:"/tags/zynq-microblaze-yocto-linux-xilinx/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-artificial-intelligence-open-ai-transformer-nlp.json",path:"/tags/artificial-intelligence-open-ai-transformer-nlp/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-theia-rust-docker.json",path:"/tags/theia-rust-docker/"},{componentChunkName:"component---src-templates-category-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-blaat.json",path:"/categories/blaat/"},{componentChunkName:"component---src-templates-category-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-artificial-intelligence.json",path:"/categories/artificial-intelligence/"},{componentChunkName:"component---src-templates-category-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-fpga.json",path:"/categories/fpga/"},{componentChunkName:"component---src-templates-category-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-jupyter.json",path:"/categories/jupyter/"},{componentChunkName:"component---src-templates-category-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-ai.json",path:"/categories/ai/"},{componentChunkName:"component---src-templates-category-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-docker.json",path:"/categories/docker/"},{componentChunkName:"component---src-pages-about-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"}]},288:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},s=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){s({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){s({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){s({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){s({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(112),s=t(1),u=o(s),i=t(11),c=o(i),l=t(109),p=t(454),d=t(388),f=o(d),m=t(286),g=o(m),h=t(80),x=o(h),y=t(494),j=o(y),v=t(495),b=o(v),k=t(284),C=o(k),N=t(283),w=o(N),R=t(168),_=o(R);t(376),window.___emitter=x.default,_.default.addPagesArray(j.default),_.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=_.default,window.matchPath=l.matchPath;var P=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=P[n];return null!=e&&(g.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(289);var o=function(n){function e(t){t.page.path===_.default.getPage(n).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(o),window.___history.push(n))}var t=P[n];if(t&&(n=t.toPath),window.location.pathname!==n){var o=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);_.default.getResourcesForPathname(n)?(clearTimeout(o),window.___history.push(n)):x.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],d=function(n){var e=n.children;return u.default.createElement(l.Router,{history:g.default},e)},m=(0,l.withRouter)(C.default);_.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,s.createElement)(i?i:d,null,(0,s.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,s.createElement)(m,{layout:!0,children:function(e){return(0,s.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return _.default.getPage(o.location.pathname)?(0,s.createElement)(C.default,r({page:!0},o)):(0,s.createElement)(C.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,f.default)(function(){return c.default.render(u.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},495:function(n,e){n.exports=[]},289:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(80),a=o(r),s="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(s+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},388:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,s){var u=!1,i=!0,c=function(n){s&&(s(t,n),s=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){u||(u=!0,i?setTimeout(function(){c()}):c())}),void(u||(i=!1,n(function(){u||(u=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},444:function(n,e){"use strict";n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,o=n.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.target.hash)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},445:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(22),a=t(444),s=o(a);(0,s.default)(window,function(n){(0,r.navigateTo)(n)})},446:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},447:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(545),a=o(r);e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"#29d"};window.___emitter.on("onDelayedLoadPageResources",function(){a.default.configure(e),a.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){a.default.done()});var t="#nprogress {\n    pointer-events: none;\n}\n#nprogress .bar {\n    background: "+e.color+";\n    position: fixed;\n    z-index: 1031;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n}\n#nprogress .peg {\n    display: block;\n    position: absolute;\n    right: 0px;\n    width: 100px;\n    height: 100%;\n    box-shadow: 0 0 10px "+e.color+", 0 0 5px "+e.color+";\n    opacity: 1.0;\n    -webkit-transform: rotate(3deg) translate(0px, -4px);\n    -ms-transform: rotate(3deg) translate(0px, -4px);\n    transform: rotate(3deg) translate(0px, -4px);\n}\n#nprogress .spinner {\n    display: block;\n    position: fixed;\n    z-index: 1031;\n    top: 15px;\n    right: 15px;\n}\n#nprogress .spinner-icon {\n    width: 18px;\n    height: 18px;\n    box-sizing: border-box;\n    border: solid 2px transparent;\n    border-top-color: "+e.color+";\n    border-left-color: "+e.color+";\n    border-radius: 50%;\n    -webkit-animation: nprogress-spinner 400ms linear infinite;\n    animation: nprogress-spinner 400ms linear infinite;\n}\n.nprogress-custom-parent {\n    overflow: hidden;\n    position: relative;\n}\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n    position: absolute;\n}\n@-webkit-keyframes nprogress-spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@keyframes nprogress-spinner {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n",o=document.createElement("style");
o.id="nprogress-styles",o.innerHTML=t,document.head.appendChild(o)}},402:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(448)})})}},449:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},450:function(n,e){"use strict";e.onRouteUpdate=function(n){n.location;setTimeout(function(){"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()},0)}},455:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.location.hash.replace("#","");if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},543:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).map(function(n){n(t)}),(n["*"]||[]).map(function(n){n(e,t)})}}}n.exports=t},545:function(n,e,t){var o,r;!function(a,s){o=s,r="function"==typeof o?o.call(e,t,e,n):o,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,t){return n<e?e:n>t?t:n}function e(n){return 100*(-1+n)}function t(n,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},r.transition="all "+t+"ms "+o,r}function o(n,e){var t="string"==typeof n?n:s(n);return t.indexOf(" "+e+" ")>=0}function r(n,e){var t=s(n),r=t+e;o(t,e)||(n.className=r.substring(1))}function a(n,e){var t,r=s(n);o(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function s(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function u(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var i={};i.version="0.2.0";var c=i.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};i.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},i.status=null,i.set=function(e){var o=i.isStarted();e=n(e,c.minimum,1),i.status=1===e?null:e;var r=i.render(!o),a=r.querySelector(c.barSelector),s=c.speed,u=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=i.getPositioningCSS()),p(a,t(e,s,u)),1===e?(p(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){p(r,{transition:"all "+s+"ms linear",opacity:0}),setTimeout(function(){i.remove(),n()},s)},s)):setTimeout(n,s)}),this},i.isStarted=function(){return"number"==typeof i.status},i.start=function(){i.status||i.set(0);var n=function(){setTimeout(function(){i.status&&(i.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},i.done=function(n){return n||i.status?i.inc(.3+.5*Math.random()).set(1):this},i.inc=function(e){var t=i.status;return t?("number"!=typeof e&&(e=(1-t)*n(Math.random()*t,.1,.95)),t=n(t+e,0,.994),i.set(t)):i.start()},i.trickle=function(){return i.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;i.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&i.start(),n++,e++,t.always(function(){e--,0===e?(n=0,i.done()):i.set((n-e)/n)}),this):this}}(),i.render=function(n){if(i.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),s=n?"-100":e(i.status||0),l=document.querySelector(c.parent);return p(a,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&u(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},i.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&u(n)},i.isRendered=function(){return!!document.getElementById("nprogress")},i.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),p=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,o=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if(t=r[o]+a,t in e)return t;return n}function t(t){return t=n(t),a[t]||(a[t]=e(t))}function o(n,e,o){e=t(e),n.style[e]=o}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var t,r,a=arguments;if(2==a.length)for(t in e)r=e[t],void 0!==r&&e.hasOwnProperty(t)&&o(n,t,r);else o(n,a[1],a[2])}}();return i})},404:function(n,e,t){t(3),n.exports=function(n){return t.e(0x83323ebd9d39,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(302)})})}},405:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(303)})})}},406:function(n,e,t){t(3),n.exports=function(n){return t.e(0x7600c7af1a80,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(304)})})}},407:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc1d74b0851a0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(305)})})}},408:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa6cd3c51205b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(306)})})}}});
//# sourceMappingURL=app-d0ea58379a9ca103aecb.js.map