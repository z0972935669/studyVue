(function(t){function e(e){for(var r,a,l=e[0],s=e[1],u=e[2],p=0,v=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&v.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(v.length)v.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={index:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:{name:"guanyu"}}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},o=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("後退")]),e("button",{on:{click:t.forward}},[t._v("前進")]),e("button",{on:{click:t.test}},[t._v("測試一下go")])])])},l=[],s={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},test(){this.$router.go(3)}}},u=s,c=n("2877"),p=Object(c["a"])(u,a,l,!1,null,null,null),v=p.exports,d={name:"App",components:{Banner:v}},f=d,h=Object(c["a"])(f,i,o,!1,null,null,null),m=h.exports,_=n("8c4f"),b=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},g=[],y={name:"About",mounted(){},beforeRouteEnter(t,e,n){console.log("About-beforeRouteEnter",t,e),t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("學校名不對，無權限查看!"):n()},beforeRouteLeave(t,e,n){console.log("About-beforeRouteLeave",t,e),n()}},w=y,x=Object(c["a"])(w,b,g,!1,null,null,null),k=x.exports,O=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:["News","Message"]}},[e("router-view")],1)],1)])},j=[],C={name:"Home"},A=C,S=Object(c["a"])(A,O,j,!1,null,null,null),q=S.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("歡迎學習Vue")]),t._m(0),t._m(1),t._m(2)])])},P=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001"),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002"),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003"),e("input",{attrs:{type:"text"}})])}],N={name:"News",data(){return{opacity:1}},activated(){console.log("News組件被激活了"),this.timer=setInterval(()=>{console.log("@"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)},16)},deactivated(){console.log("News組件失活了"),clearInterval(this.timer)}},R=N,$=Object(c["a"])(R,M,P,!1,null,null,null),L=$.exports,B=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},D=[],H={name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}},beforeDestroy(){}},I=H,T=Object(c["a"])(I,B,D,!1,null,null,null),E=T.exports,J=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息編號:"+t._s(t.id))]),e("li",[t._v("消息標題:"+t._s(t.title))])])},V=[],z={name:"Detail",props:["id","title"],computed:{},mounted(){}},F=z,G=Object(c["a"])(F,J,V,!1,null,null,null),K=G.exports;const Q=new _["a"]({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"關於"}},{name:"zhuye",path:"/home",component:q,meta:{title:"主頁"},children:[{name:"xinwen",path:"news",component:L,meta:{isAuth:!0,title:"新聞"}},{name:"xiaoxi",path:"message",component:E,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail/:id/:title",component:K,meta:{isAuth:!0,title:"詳情"},props(t){return{id:t.query.id,title:t.query.title}}}]}]}]});var U=Q;r["a"].config.productionTip=!1,r["a"].use(_["a"]),new r["a"]({el:"#app",render:t=>t(m),router:U})}});
//# sourceMappingURL=index.dc8d2e06.js.map