webpackJsonp([26,33],{"+UWA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o=n("zQU8"),r=n("kSXh"),a=n("IcnI");n("sd56");new i.default({el:"#app",store:a.a,router:r.default,render:function(e){return e(o.a)}})},"25ls":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.headerState?n("jc-header",{staticClass:"header",attrs:{showback:e.showback}}):e._e(),e._v(" "),n("main",{style:{marginTop:e.headerState?"40px":""}},[n("transition",[n("keep-alive",[n("router-view")],1)],1)],1)],1)},o=[],r={render:i,staticRenderFns:o};t.a=r},"3Mvz":function(e,t){},"4t4z":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"HTTP",function(){return l});var i=n("//Fk"),o=n.n(i),r=n("GKWp"),a=n("mtWM"),s=n.n(a),c=n("FhoZ"),d=n.n(c),u=d.a.build.server,l=s.a.create({baseURL:u+"/gateway/api/v1",headers:{client_app_id:r.a._appId(),client_device_id:r.a._deviceId(),access_token:r.a._jcmpToken()},params:{},data:{},transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}]});l.interceptors.request.use(function(e){return"post"===e.method.toLocaleLowerCase()&&(e.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8"),e},function(e){return o.a.reject(e)})},"6UfP":function(e,t,n){"use strict";var i=n("4t4z").HTTP;t.a={DOC:{getFlows:function(){return i.get("/getFlows")},getToDosList:function(){return i.get("/getToDosList")},getReceiveFlows:function(e){return i.get("/getReceiveFlows?pageNum="+e)},getSendFlows:function(e){return i.get("/getSendFlows?pageNum="+e)},getReceiveDetail:function(e){var t="/getReceiveDetail?id="+e.id;return e.definitionId&&(t=t+"&definitionId="+e.definitionId+"&nodeId="+e.nodeId+"&instanceId="+e.instanceId+"&businessKey="+e.businessKey),i.get(t)},getSendDetail:function(e){var t="/getSendDetail?id="+e.id;return e.definitionId&&(t=t+"&definitionId="+e.definitionId+"&nodeId="+e.nodeId+"&instanceId="+e.instanceId+"&businessKey="+e.businessKey),i.get(t)},getNextNodes:function(e){var t="/getNextNodes4Doc";return e.definitionId&&(t=t+"?definitionId_="+e.definitionId+"&curNodeId_="+e.curNodeId),i.get(t)},saveReceiveApproval:function(e){return i.post("/saveReceiveApproval",e)},saveSendApproval:function(e){return i.post("/saveSendApproval",e)}},ATTENCE:{initAttence:function(){return i.get("/initAttence")},attenceIn:function(e){return i.post("/attenceIn",e)},attenceHitory:function(e){return i.get("/attenceHitory?year="+e.year+"&month="+e.month)},addMessage:function(e){return i.post("/addMessage",e)}},INFO:{getInfoAll:function(){return i.get("/getInfoAll")},getInfoList:function(e){return i.get("/getInfoList?columnId="+e.columnId+"&pageNum="+e.pageNum)},getTodoSize:function(){return i.get("/getTodoSize")},getInfoById:function(e){var t="/getInfoDetail?id="+e.id;return e.definitionId&&(t=t+"&definitionId="+e.definitionId+"&nodeId="+e.nodeId+"&taskId="+e.taskId+"&instanceId="+e.instanceId+"&businessKey="+e.businessKey),i.get(t)},getTodoList:function(e){return i.get("/getTodoList?pageNum="+e)},commitApproval:function(e){return console.log(e),i.post("/commitApproval",e)},getNextNodes:function(e){var t="/getNextNodes";return e.definitionId_&&(t=t+"?definitionId_="+e.definitionId_+"&curNodeId_="+e.curNodeId_),i.get(t)},saveInfoComment:function(e){return console.log(e),i.post("/saveInfoComment",e)}},CONTACTS:{getDeptData:function(e){return i.get("/getUserAndSubChildDeptByDeptId.action?id="+e)},getUsers:function(e){return i.get("/getAllUserByDeptId.action?id="+e)},getAllDept:function(){return i.get("/getAllDepartment.action")},getUsersByName:function(e){return i.get("/getUsersByName.action?keyword="+e)},convertUrl:function(e){return i.defaults.baseURL+"/resource?uri="+window.btoa(e)}},WORK:{queryDiary:function(e){var t="/queryDiary";return e.year&&e.month&&(t+="?year="+e.year+"&month="+e.month),i.get(t)},saveDiary:function(e){return i.post("/saveDiary",e)},deleteDiary:function(e){return i.get("/deleteDiary?id="+e)}},getAll:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.all(t)},ARCHIVE:{getDocList:function(e){return i.get("/myArchive?folderId="+e.folderId)},getPublicList:function(e){return i.get("/publicArchive?folderId="+e.folderId)},getCollectionList:function(){return i.get("/getCollectionList")}},MAIL:{getMailAll:function(e){return i.get("/"+e.url+"?pageNum="+e.pageNum)},getSaveAttach:function(e){return i.get("/saveAttach")},getMailById:function(e){return i.get("/getMailById?id="+e.id+"&mailType="+e.mailType+"&receiveType="+e.receiveType)},attachUrl:function(e){return"jcm://m.jiachengnet.com/rst_base/filesviewer?path="+e},sendMail:function(e){return i.post("/sendMail",e)},addStarRtx:function(e){return i.post("/addStarMail?mailId="+e.mailId+"&receiveType="+e.receiveType+"&mailType="+e.mailType)},delStarRtx:function(e){return i.post("/delStarMail?mailId="+e.mailId+"&receiveType="+e.receiveType+"&mailType="+e.mailType)},delMailRtx:function(e,t){return i.post("/delMailRtx?id="+e.id+"&mailFolderId="+t)},saveDraft:function(e){return i.post("/saveDraft",e)}}}},"7Pdo":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mt-header",{staticClass:"mgoa",attrs:{fixed:"",title:e.title}},[e.$route.meta.recordTable?n("div",{attrs:{slot:"right"},slot:"right"},[n("router-link",{staticClass:"record",attrs:{to:"/record"}},[n("i",{staticClass:"jcm-rile"})])],1):e._e(),e._v(" "),n("mt-button",{directives:[{name:"show",rawName:"v-show",value:e.showback,expression:"showback"}],staticClass:"back",attrs:{slot:"left",icon:"back"},on:{click:e.goback},slot:"left"})],1)},o=[],r={render:i,staticRenderFns:o};t.a=r},"9mqr":function(e,t,n){"use strict";function i(e){n("hV34")}var o=n("xbSY"),r=n("7Pdo"),a=n("VU/8"),s=i,c=a(o.a,r.a,s,null,null);t.a=c.exports},FhoZ:function(e,t,n){(function(t){var i=n("o/zv");e.exports={moduleName:"modules",build:{env:n("rBKV"),index:i.resolve(t,"../info/index.html"),assetsRoot:i.resolve(t,"../mgoa"),assetsSubDirectory:"static",assetsPublicPath:"../",productionSourceMap:!0,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:n.i({NODE_ENV:"production"}).npm_config_report,server:"http://192.168.140.14:9580/jcmp"},dev:{env:n("dhIU"),port:7080,ip:"192.168.150.105",autoOpenBrowser:!0,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1,home:"/modules/attence.html"}}}).call(t,"/")},GKWp:function(e,t,n){"use strict";var i={};i.getUserInfo=function(e){i.connectWebViewJavascriptBridge(function(t){t.registerHandler("getUserInfoCallback",function(t,n){e(t)})})},i._getParameter=function(e){var t=window.location.href;if(-1!=t.indexOf("?"))for(var n=t.substr(1),i=n.split("&"),o=0;o<i.length;o++)if(e===i[o].split("=")[0])return decodeURIComponent(i[o].split("=")[1])};var o=i._getParameter("client_app_id");o&&o.length>0&&window.sessionStorage.setItem("client_app_id",o);var r=i._getParameter("client_device_id");r&&r.length>0&&window.sessionStorage.setItem("client_device_id",r);var a=i._getParameter("access_token");a&&a.length>0&&window.sessionStorage.setItem("access_token",a);var s=i._getParameter("jcmp_url");s&&s.length>0&&window.sessionStorage.setItem("jcmp_url",s),i.version="0.0.1",i.baseUrl=window.sessionStorage.getItem("jcmp_url"),i.gatewayUrl=i.baseUrl+"/gateway/api/v1/",i.convertUrl=i.baseUrl+"/gateway/api/v1/resource?uri=",i.isAndroid=/android/gi.test(navigator.appVersion),i.isIOS=/iphone|ipad/gi.test(navigator.appVersion),i.connectWebViewJavascriptBridge=function(e){window.WebViewJavascriptBridge?e(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){e(WebViewJavascriptBridge)},!1)},i.fetchData=function(e){i._fetch(e)},i.convertResourceUrl=function(e){return(i.convertUrl+window.btoa(e)).replace("uri=","uri%3D")},i.logout=function(){i.invokeClientMethod("logout")},i.updateAndroidApk=function(){i.invokeClientMethod("checkUpdate")},i.callPhone=function(e){i.invokeClientMethod("callPhone",e)},i.openInBrowser=function(e){i.invokeClientMethod("openInBrowser",e)},i.audioRecord=function(e){i.connectWebViewJavascriptBridge(function(t){t.registerHandler("audioRecordCallback",function(t,n){e(t),n("Got it --\x3e"+t)})}),console.log("invoke native method."),i.invokeClientMethod("audioRecord")},i.invokeClientMethod=function(e,t,n){void 0===t&&(t="000"),i.isAndroid?window.WebViewJavascriptBridge?WebViewJavascriptBridge.callHandler(e,t,n):document.addEventListener("WebViewJavascriptBridgeReady",function(){WebViewJavascriptBridge.callHandler(e,t,n)},!1):i.isIOS?window.location.href="jcmp://jiachengnet.com/"+e+"?param="+window.btoa(t):alert("当前运行环境不允许调用此方法！")},i._fetch=function(e){var t=new FormData;if(e.type&&"POST"===e.type.toUpperCase()&&e.data)for(var n in e.data)t.append(n,e.data[n]);var o=new XMLHttpRequest;o.timeout=1e4,o.responseType=e.dataType?e.dataType:"json",o.open(e.type?e.type.toUpperCase():"GET",i.baseUrl+e.url,!0),o.setRequestHeader("client_app_id",i._appId()),o.setRequestHeader("client_device_id",i._deviceId()),o.setRequestHeader("access_token",i._jcmpToken()),o.onload=function(t){if((this.status>=200&&this.status<300||304===this.status)&&e.success){var n="string"==typeof this.response?JSON.parse(this.response):this.response;e.success(n)}},o.ontimeout=function(t){console.error(t),e.error&&e.error(t)},o.onerror=function(t){console.error(t),e.error&&e.error(t)},o.upload.onprogress=function(e){console.log(e)};try{o.send(t)}catch(t){console.error(t),e.error&&e.error(t)}},i._fetchNative=function(){},i._appId=function(){return window.sessionStorage.getItem("client_app_id")},i._deviceId=function(){return window.sessionStorage.getItem("client_device_id")},i._jcmpToken=function(){return window.sessionStorage.getItem("access_token")},t.a=i},IcnI:function(e,t,n){"use strict";var i=n("7+uW"),o=n("NYxO");i.default.use(o.b);var r=new o.b.Store;r.registerModule("JCFE",{state:{isLoading:!1},mutations:{updateLoadingStatus:function(e,t){e.isLoading=t.isLoading}}}),t.a=r},"d8/S":function(e,t){},dhIU:function(e,t,n){var i=n("2cg0"),o=n("rBKV");e.exports=i(o,{NODE_ENV:'"development"'})},hV34:function(e,t){},jMSH:function(e,t,n){"use strict";var i=n("Dd8w"),o=n.n(i),r=n("9mqr"),a=n("NYxO");t.a={name:"app",components:{JcHeader:r.a},data:function(){return{headerState:!0,showback:!1}},computed:o()({},n.i(a.a)({isLoading:function(e){return e.JCFE.isLoading}})),watch:{$route:function(e,t){var n=e.path.length;this.showback=!(1===n)}}}},kSXh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o=n("/ocq"),r=n("IcnI");i.default.use(o.a);var a=new o.a({routes:[{path:"/",component:function(e){return n.e(0).then(function(){var t=[n("5ZJ4")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"文档管理"}},{path:"/:folderId",component:function(e){return n.e(0).then(function(){var t=[n("5ZJ4")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"文档管理"}},{path:"*",redirect:"/"}]});a.beforeEach(function(e,t,n){document.title=e.meta.title||document.title,r.a.commit("updateLoadingStatus",{isLoading:!0}),n()}),a.afterEach(function(e){r.a.commit("updateLoadingStatus",{isLoading:!1})}),t.default=a},nra0:function(e,t){},rBKV:function(e,t){e.exports={NODE_ENV:'"production"'}},sd56:function(e,t,n){"use strict";var i=n("7+uW"),o=n("Au9i"),r=n.n(o),a=n("d8/S"),s=(n.n(a),n("nra0")),c=(n.n(s),n("zcea")),d=(n.n(c),n("v5o6")),u=n.n(d),l=n("6UfP"),p=n("FhoZ"),f=n.n(p);i.default.use(r.a),i.default.config.productionTip=!1,u.a.attach(document.body),i.default.prototype.Api=l.a;f.a},xbSY:function(e,t,n){"use strict";t.a={props:{showback:{type:Boolean,default:!0}},name:"jc-header",data:function(){return{title:document.title}},methods:{goback:function(){this.$router.go(-1)}},watch:{$route:function(e,t){var n=this;try{n.title=e.meta.title}catch(e){n.title="JCFE"}}}}},zQU8:function(e,t,n){"use strict";function i(e){n("3Mvz")}var o=n("jMSH"),r=n("25ls"),a=n("VU/8"),s=i,c=a(o.a,r.a,s,null,null);t.a=c.exports},zcea:function(e,t){}},["+UWA"]);
//# sourceMappingURL=archive.f16d0181fb617d40081e.js.map