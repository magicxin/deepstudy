webpackJsonp([30],{IcnI:function(t,e,a){"use strict";var n=a("7+uW"),o=a("NYxO");n.default.use(o.b);var i=new o.b.Store;i.registerModule("JCFE",{state:{isLoading:!1},mutations:{updateLoadingStatus:function(t,e){t.isLoading=e.isLoading}}}),e.a=i},"VQt/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o=a("/ocq"),i=a("IcnI");n.default.use(o.a);var u=new o.a({routes:[{path:"/",name:"Home",component:function(t){return a.e(8).then(function(){var e=[a("Dfum")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"邮件管理"}},{path:"/compose",name:"Compose",component:function(t){return a.e(2).then(function(){var e=[a("R6yM")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"写邮件"}},{path:"/detail",name:"Detail",component:function(t){return a.e(15).then(function(){var e=[a("p9zP")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"邮件详细"}},{path:"*",redirect:"/"}]});i.a.registerModule("MAIL",{state:{isfooterState:!0},mutations:{footerState:function(t,e){t.isfooterState=e.isfooterState}}}),u.beforeEach(function(t,e,a){document.title=t.meta.title||document.title,i.a.commit("updateLoadingStatus",{isLoading:!0}),a()}),u.afterEach(function(t){i.a.commit("footerState",{isfooterState:"Home"===t.name}),i.a.commit("updateLoadingStatus",{isLoading:!1})}),e.default=u}},["VQt/"]);
//# sourceMappingURL=index.a1e040fb588f43ef048f.js.map