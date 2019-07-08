!function(e){function t(t){for(var r,a,u=t[0],c=t[1],i=t[2],d=0,f=[];d<u.length;d++)a=u[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);f.length;)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;s.push([553,1]),n()}({120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(563));var o={getList:function(){return r.default.get("/api/product/list")},getById:function(e){return r.default.get("/api/product/"+e)},delete:function(e){return r.default.delete("/api/product/delete/"+e)},create:function(e){return r.default.post("/api/product/create",e)},update:function(e){return r.default.put("/api/product/update",e)}};t.default=o,e.exports=t.default},553:function(e,t,n){"use strict";var r=d(n(1)),o=n(109),s=n(522),a=n(560),u=d(n(9)),c=n(108),i=d(n(585));n(905),n(907);var l=d(n(909));function d(e){return e&&e.__esModule?e:{default:e}}window.render=function(){var e=document.querySelector("#root");u.default.render(r.default.createElement(o.Provider,{store:a.store},r.default.createElement(s.ConnectedRouter,{history:a.history},r.default.createElement(c.Switch,null,r.default.createElement(c.Route,{exact:!0,path:"/",component:i.default}),r.default.createElement(c.Route,{exact:!0,path:"/product/:id?",component:l.default})))),e)}},560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.history=void 0;var r=n(172),o=n(522),s=c(n(561)),a=c(n(169)),u=c(n(90));function c(e){return e&&e.__esModule?e:{default:e}}var i=t.history=(0,a.default)(),l=[(0,o.routerMiddleware)(i),s.default],d=r.compose.apply(void 0,[r.applyMiddleware.apply(void 0,l)].concat([]));t.store=(0,r.createStore)((0,r.combineReducers)({routing:o.routerReducer,product:u.default}),{},d)},585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),s=l(n(586)),a=n(109),u=n(90),c=n(107),i=n(108);function l(e){return e&&e.__esModule?e:{default:e}}var d=t.Home=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.loadProducts()}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("div",{className:"products-header"},o.default.createElement("h1",{className:"title"},"Products"),o.default.createElement(i.Link,{to:"/product"},o.default.createElement(c.Button,{type:"primary",className:"add-button"},"Add new"))),o.default.createElement(s.default,null))}}]),t}(),f=(0,a.connect)(function(e){return{test:!0}},function(e){return{loadProducts:function(){e((0,u.getProductsList)())}}})(d);t.default=f},586:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Products=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),s=n(107),a=n(109),u=n(108),c=l(n(120)),i=n(90);function l(e){return e&&e.__esModule?e:{default:e}}var d=t.Products=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.delete=function(e){c.default.delete(e).then(function(e){n.props.loadProducts()}).catch(function(e){console.log(e)})},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this,t=[{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return o.default.createElement(u.Link,{to:"/product/"+t.id},e)}},{title:"Category",dataIndex:"category",key:"category"},{title:"Status",key:"active",dataIndex:"active",render:function(e){return e?o.default.createElement(s.Tag,{color:"green"},"Active"):o.default.createElement(s.Tag,{color:"volcano"},"Not Active")}},{title:"Action",key:"action",render:function(t,n){return o.default.createElement("span",null,o.default.createElement(u.Link,{to:"/product/"+n.id},"Edit"),o.default.createElement(s.Divider,{type:"vertical"}),o.default.createElement("a",{href:"#",onClick:function(){return e.delete(n.id)}},"Delete"))}}];return o.default.createElement(s.Table,{columns:t,dataSource:this.props.data,loading:this.props.loading})}}]),t}(),f=(0,a.connect)(function(e){return{loading:e.product.loading,data:e.product.products}},function(e){return{loadProducts:function(){e((0,i.getProductsList)())}}})(d);t.default=f},634:function(e,t,n){var r={"./af":197,"./af.js":197,"./ar":198,"./ar-dz":199,"./ar-dz.js":199,"./ar-kw":200,"./ar-kw.js":200,"./ar-ly":201,"./ar-ly.js":201,"./ar-ma":202,"./ar-ma.js":202,"./ar-sa":203,"./ar-sa.js":203,"./ar-tn":204,"./ar-tn.js":204,"./ar.js":198,"./az":205,"./az.js":205,"./be":206,"./be.js":206,"./bg":207,"./bg.js":207,"./bm":208,"./bm.js":208,"./bn":209,"./bn.js":209,"./bo":210,"./bo.js":210,"./br":211,"./br.js":211,"./bs":212,"./bs.js":212,"./ca":213,"./ca.js":213,"./cs":214,"./cs.js":214,"./cv":215,"./cv.js":215,"./cy":216,"./cy.js":216,"./da":217,"./da.js":217,"./de":218,"./de-at":219,"./de-at.js":219,"./de-ch":220,"./de-ch.js":220,"./de.js":218,"./dv":221,"./dv.js":221,"./el":222,"./el.js":222,"./en-SG":223,"./en-SG.js":223,"./en-au":224,"./en-au.js":224,"./en-ca":225,"./en-ca.js":225,"./en-gb":226,"./en-gb.js":226,"./en-ie":227,"./en-ie.js":227,"./en-il":228,"./en-il.js":228,"./en-nz":229,"./en-nz.js":229,"./eo":230,"./eo.js":230,"./es":231,"./es-do":232,"./es-do.js":232,"./es-us":233,"./es-us.js":233,"./es.js":231,"./et":234,"./et.js":234,"./eu":235,"./eu.js":235,"./fa":236,"./fa.js":236,"./fi":237,"./fi.js":237,"./fo":238,"./fo.js":238,"./fr":239,"./fr-ca":240,"./fr-ca.js":240,"./fr-ch":241,"./fr-ch.js":241,"./fr.js":239,"./fy":242,"./fy.js":242,"./ga":243,"./ga.js":243,"./gd":244,"./gd.js":244,"./gl":245,"./gl.js":245,"./gom-latn":246,"./gom-latn.js":246,"./gu":247,"./gu.js":247,"./he":248,"./he.js":248,"./hi":249,"./hi.js":249,"./hr":250,"./hr.js":250,"./hu":251,"./hu.js":251,"./hy-am":252,"./hy-am.js":252,"./id":253,"./id.js":253,"./is":254,"./is.js":254,"./it":255,"./it-ch":256,"./it-ch.js":256,"./it.js":255,"./ja":257,"./ja.js":257,"./jv":258,"./jv.js":258,"./ka":259,"./ka.js":259,"./kk":260,"./kk.js":260,"./km":261,"./km.js":261,"./kn":262,"./kn.js":262,"./ko":263,"./ko.js":263,"./ku":264,"./ku.js":264,"./ky":265,"./ky.js":265,"./lb":266,"./lb.js":266,"./lo":267,"./lo.js":267,"./lt":268,"./lt.js":268,"./lv":269,"./lv.js":269,"./me":270,"./me.js":270,"./mi":271,"./mi.js":271,"./mk":272,"./mk.js":272,"./ml":273,"./ml.js":273,"./mn":274,"./mn.js":274,"./mr":275,"./mr.js":275,"./ms":276,"./ms-my":277,"./ms-my.js":277,"./ms.js":276,"./mt":278,"./mt.js":278,"./my":279,"./my.js":279,"./nb":280,"./nb.js":280,"./ne":281,"./ne.js":281,"./nl":282,"./nl-be":283,"./nl-be.js":283,"./nl.js":282,"./nn":284,"./nn.js":284,"./pa-in":285,"./pa-in.js":285,"./pl":286,"./pl.js":286,"./pt":287,"./pt-br":288,"./pt-br.js":288,"./pt.js":287,"./ro":289,"./ro.js":289,"./ru":290,"./ru.js":290,"./sd":291,"./sd.js":291,"./se":292,"./se.js":292,"./si":293,"./si.js":293,"./sk":294,"./sk.js":294,"./sl":295,"./sl.js":295,"./sq":296,"./sq.js":296,"./sr":297,"./sr-cyrl":298,"./sr-cyrl.js":298,"./sr.js":297,"./ss":299,"./ss.js":299,"./sv":300,"./sv.js":300,"./sw":301,"./sw.js":301,"./ta":302,"./ta.js":302,"./te":303,"./te.js":303,"./tet":304,"./tet.js":304,"./tg":305,"./tg.js":305,"./th":306,"./th.js":306,"./tl-ph":307,"./tl-ph.js":307,"./tlh":308,"./tlh.js":308,"./tr":309,"./tr.js":309,"./tzl":310,"./tzl.js":310,"./tzm":311,"./tzm-latn":312,"./tzm-latn.js":312,"./tzm.js":311,"./ug-cn":313,"./ug-cn.js":313,"./uk":314,"./uk.js":314,"./ur":315,"./ur.js":315,"./uz":316,"./uz-latn":317,"./uz-latn.js":317,"./uz.js":316,"./vi":318,"./vi.js":318,"./x-pseudo":319,"./x-pseudo.js":319,"./yo":320,"./yo.js":320,"./zh-cn":321,"./zh-cn.js":321,"./zh-hk":322,"./zh-hk.js":322,"./zh-tw":323,"./zh-tw.js":323};function o(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=634},635:function(e,t,n){var r={"./af":324,"./af.js":324,"./ar":325,"./ar-dz":326,"./ar-dz.js":326,"./ar-kw":327,"./ar-kw.js":327,"./ar-ly":328,"./ar-ly.js":328,"./ar-ma":329,"./ar-ma.js":329,"./ar-sa":330,"./ar-sa.js":330,"./ar-tn":331,"./ar-tn.js":331,"./ar.js":325,"./az":332,"./az.js":332,"./be":333,"./be.js":333,"./bg":334,"./bg.js":334,"./bm":335,"./bm.js":335,"./bn":336,"./bn.js":336,"./bo":337,"./bo.js":337,"./br":338,"./br.js":338,"./bs":339,"./bs.js":339,"./ca":340,"./ca.js":340,"./cs":341,"./cs.js":341,"./cv":342,"./cv.js":342,"./cy":343,"./cy.js":343,"./da":344,"./da.js":344,"./de":345,"./de-at":346,"./de-at.js":346,"./de-ch":347,"./de-ch.js":347,"./de.js":345,"./dv":348,"./dv.js":348,"./el":349,"./el.js":349,"./en-au":350,"./en-au.js":350,"./en-ca":351,"./en-ca.js":351,"./en-gb":352,"./en-gb.js":352,"./en-ie":353,"./en-ie.js":353,"./en-il":354,"./en-il.js":354,"./en-nz":355,"./en-nz.js":355,"./eo":356,"./eo.js":356,"./es":357,"./es-do":358,"./es-do.js":358,"./es-us":359,"./es-us.js":359,"./es.js":357,"./et":360,"./et.js":360,"./eu":361,"./eu.js":361,"./fa":362,"./fa.js":362,"./fi":363,"./fi.js":363,"./fo":364,"./fo.js":364,"./fr":365,"./fr-ca":366,"./fr-ca.js":366,"./fr-ch":367,"./fr-ch.js":367,"./fr.js":365,"./fy":368,"./fy.js":368,"./gd":369,"./gd.js":369,"./gl":370,"./gl.js":370,"./gom-latn":371,"./gom-latn.js":371,"./gu":372,"./gu.js":372,"./he":373,"./he.js":373,"./hi":374,"./hi.js":374,"./hr":375,"./hr.js":375,"./hu":376,"./hu.js":376,"./hy-am":377,"./hy-am.js":377,"./id":378,"./id.js":378,"./is":379,"./is.js":379,"./it":380,"./it.js":380,"./ja":381,"./ja.js":381,"./jv":382,"./jv.js":382,"./ka":383,"./ka.js":383,"./kk":384,"./kk.js":384,"./km":385,"./km.js":385,"./kn":386,"./kn.js":386,"./ko":387,"./ko.js":387,"./ky":388,"./ky.js":388,"./lb":389,"./lb.js":389,"./lo":390,"./lo.js":390,"./lt":391,"./lt.js":391,"./lv":392,"./lv.js":392,"./me":393,"./me.js":393,"./mi":394,"./mi.js":394,"./mk":395,"./mk.js":395,"./ml":396,"./ml.js":396,"./mn":397,"./mn.js":397,"./mr":398,"./mr.js":398,"./ms":399,"./ms-my":400,"./ms-my.js":400,"./ms.js":399,"./mt":401,"./mt.js":401,"./my":402,"./my.js":402,"./nb":403,"./nb.js":403,"./ne":404,"./ne.js":404,"./nl":405,"./nl-be":406,"./nl-be.js":406,"./nl.js":405,"./nn":407,"./nn.js":407,"./pa-in":408,"./pa-in.js":408,"./pl":409,"./pl.js":409,"./pt":410,"./pt-br":411,"./pt-br.js":411,"./pt.js":410,"./ro":412,"./ro.js":412,"./ru":413,"./ru.js":413,"./sd":414,"./sd.js":414,"./se":415,"./se.js":415,"./si":416,"./si.js":416,"./sk":417,"./sk.js":417,"./sl":418,"./sl.js":418,"./sq":419,"./sq.js":419,"./sr":420,"./sr-cyrl":421,"./sr-cyrl.js":421,"./sr.js":420,"./ss":422,"./ss.js":422,"./sv":423,"./sv.js":423,"./sw":424,"./sw.js":424,"./ta":425,"./ta.js":425,"./te":426,"./te.js":426,"./tet":427,"./tet.js":427,"./tg":428,"./tg.js":428,"./th":429,"./th.js":429,"./tl-ph":430,"./tl-ph.js":430,"./tlh":431,"./tlh.js":431,"./tr":432,"./tr.js":432,"./tzl":433,"./tzl.js":433,"./tzm":434,"./tzm-latn":435,"./tzm-latn.js":435,"./tzm.js":434,"./ug-cn":436,"./ug-cn.js":436,"./uk":437,"./uk.js":437,"./ur":438,"./ur.js":438,"./uz":439,"./uz-latn":440,"./uz-latn.js":440,"./uz.js":439,"./vi":441,"./vi.js":441,"./x-pseudo":442,"./x-pseudo.js":442,"./yo":443,"./yo.js":443,"./zh-cn":444,"./zh-cn.js":444,"./zh-hk":445,"./zh-hk.js":445,"./zh-tw":446,"./zh-tw.js":446};function o(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=635},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearProduct=t.getProduct=t.getProductsList=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e){return e&&e.__esModule?e:{default:e}}(n(120));var s={loading:!0,productLoading:!0,data:[]},a=(t.getProductsList=function(){return function(e){e(a(!0)),o.default.getList().then(function(t){setTimeout(function(){e(c(t.data))},300)}).catch(function(t){e(a(!1)),console.log(t)})}},t.getProduct=function(e){return function(t){u(!0),o.default.getById(e).then(function(e){t(i(e.data))}).catch(function(e){u(!1),console.log(e)})}},function(e){return{type:"TABLE_LOADING_STATE_SET",payload:e}}),u=function(e){return{type:"PRODUCT_LOADING_STATE_SET",payload:e}},c=function(e){return{type:"PRODUCTS_LIST_SUCCESS",payload:{data:e.data,count:e.count}}},i=function(e){return{type:"PRODUCT_SUCCESS",payload:{product:e}}};t.clearProduct=function(){return{type:"PRODUCT_CLEAR"}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1],n=r({},e);switch(t.type){case"PRODUCTS_LIST_SUCCESS":n.loading=!1,n.products=t.payload.data,n.count=t.payload.count;break;case"TABLE_LOADING_STATE_SET":n.loading=t.payload;break;case"PRODUCT_LOADING_STATE_SET":n.productLoading=t.payload;break;case"PRODUCT_SUCCESS":n.product=t.payload.product,n.productLoading=!1;break;case"PRODUCT_CLEAR":n.productLoading=!1,n.product={}}return n}},907:function(e,t,n){},909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),s=n(107),a=n(108),u=n(90),c=n(109),i=n(910);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.match.params.id?this.props.loadProduct(this.props.match.params.id):this.props.clearProduct()}},{key:"render",value:function(){var e=(0,a.withRouter)(s.Form.create({name:"register"})(i.RegistrationForm));return o.default.createElement("div",null,this.props.loading&&o.default.createElement("span",null,"Loading..."),!this.props.loading&&o.default.createElement("div",null,o.default.createElement(e,{product:this.props.product})))}}]),t}(),d=(0,a.withRouter)((0,c.connect)(function(e){return{loading:e.product.productLoading,product:e.product.product}},function(e){return{loadProduct:function(t){e((0,u.getProduct)(t))},clearProduct:function(t){e((0,u.clearProduct)())}}})(l));t.default=d,e.exports=t.default},910:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationForm=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=c(n(1)),a=n(107),u=c(n(120));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},d={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};t.RegistrationForm=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=Array(c),d=0;d<c;d++)l[d]=arguments[d];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={confirmDirty:!1,autoCompleteResult:[],loading:!1},o.setLoadingState=function(e){o.setState({loading:e})},o.openNotification=function(){a.notification.open({message:"Operation success",description:"Your product was successfully updated or created",icon:s.default.createElement(a.Icon,{type:"smile",style:{color:"#108ee9"}})})},o.create=function(e){o.setLoadingState(!0),u.default.create(e).then(function(e){o.openNotification(),setTimeout(function(){o.props.history.push("/")},500)}).catch(function(){o.setLoadingState(!1)})},o.update=function(e){o.setLoadingState(!0);var t=r({},e);t.id=o.props.product.id,u.default.update(t).then(function(e){o.openNotification(),setTimeout(function(){o.props.history.push("/")},500)}).catch(function(){o.setLoadingState(!1)})},o.handleSubmit=function(e){e.preventDefault(),o.props.form.validateFieldsAndScroll(function(e,t){e||(console.log("Received values of form: ",t),o.props.product.id?o.update(t):o.create(t))})},i(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return s.default.createElement(a.Form,r({},l,{onSubmit:this.handleSubmit}),s.default.createElement(a.Form.Item,{label:" ",colon:!1},s.default.createElement("h1",null,"Product")),s.default.createElement(a.Form.Item,{label:"Name"},e("name",{initialValue:this.props.product.name,rules:[{required:!0,message:"Please input product name!"}]})(s.default.createElement(a.Input,null))),s.default.createElement(a.Form.Item,{label:"Category"},e("category",{initialValue:this.props.product.category,rules:[{required:!0,message:"Please input product category!"}]})(s.default.createElement(a.Input,null))),s.default.createElement(a.Form.Item,{label:"Price"},e("price",{initialValue:this.props.product.price,rules:[{required:!0,message:"Please input product price!"}]})(s.default.createElement(a.InputNumber,null))),s.default.createElement(a.Form.Item,d,e("active",{initialValue:this.props.product.active,valuePropName:"checked"})(s.default.createElement(a.Checkbox,null,"Product status ( active/not active)"))),s.default.createElement(a.Form.Item,d,s.default.createElement(a.Button,{type:"primary",htmlType:"submit",loading:this.state.loading},"Save")))}}]),t}()}});