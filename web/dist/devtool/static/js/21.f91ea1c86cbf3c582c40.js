webpackJsonp([21],{LOYW:function(t,e){},"Z/zL":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("B2YR"),n=s.n(a),l=s("GFpa"),i=s.n(l),r=s("RTBu"),v=s.n(r),o=s("PRez"),c=s("ZXMi"),u={name:"ServerConfig",components:n()({VAlert:i.a,VDataTable:v.a},o),data:function(){return{swoole:{},server:{},pageOpts:[25,{text:"All",value:-1}],headers:[{text:"Setting Name",align:"left",value:"path"},{text:"Setting Value",align:"left",value:"handler"}]}},created:function(){this.fetchList()},mounted:function(){},computed:{},methods:{fetchList:function(){var t=this;Object(c.n)().then(function(e){var s=e.data;t.swoole=s.swoole,console.log(s),t.server={basic:s.basic,tcp:s.tcp,websocket:s.websocket,http:s.http}})}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-subheader",[s("h1",[t._v(t._s(t.$t(this.$route.name)))])]),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.server,function(e,a){return s("v-flex",{key:a,attrs:{"d-flex":"",xs12:"",sm6:"",md3:""}},[s("v-card",[s("v-card-title",{staticClass:"title grey lighten-3"},[t._v(" "+t._s(a)+" ")]),t._v(" "),s("v-divider"),t._v(" "),s("v-list",{staticClass:"pa-2",attrs:{dense:""}},t._l(e,function(e,a){return s("v-list-tile",{key:a},[s("v-list-tile-content",[t._v(t._s(a))]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e))])],1)}))],1)],1)})),t._v(" "),s("v-subheader",[s("h3",[t._v("Swoole "+t._s(t.$t("App.setting")))])]),t._v(" "),s("v-card",[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.$t("App.settingName")))]),t._v(" "),s("th",[t._v(t._s(t.$t("App.settingValue")))])])]),t._v(" "),s("tbody",t._l(t.swoole,function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a))]),t._v(" "),s("td",[t._v(t._s(e))])])}))])])],1)},staticRenderFns:[]};var d=s("U5Ua")(u,_,!1,function(t){s("LOYW")},"data-v-23311bd0",null);e.default=d.exports}});
//# sourceMappingURL=21.f91ea1c86cbf3c582c40.js.map