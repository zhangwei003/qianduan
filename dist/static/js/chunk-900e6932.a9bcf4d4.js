(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-900e6932"],{"076e":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-tabbar",{staticClass:"footer",attrs:{fixed:!0,"safe-area-inset-bottom":!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.list,(function(e,i){return s("van-tabbar-item",{key:i,on:{click:function(e){return t.onChange(i)}},scopedSlots:t._u([{key:"icon",fn:function(){return[s("img",{attrs:{src:t.propActive===i?e.active:e.inactive}})]},proxy:!0}],null,!0)},[s("span",[t._v(t._s(e.name))])])})),1),s("van-popup",{attrs:{round:!0},model:{value:t.showService,callback:function(e){t.showService=e},expression:"showService"}},[s("div",{staticClass:"chooseCatelogaBox",staticStyle:{display:"block"}},[s("div",{staticClass:"qxr",on:{click:function(e){t.showService=!1}}},[t._v("取消")]),s("h5",{staticClass:"title"},[s("span",{class:1===t.serviceType?"tabactive":"",on:{click:function(e){t.serviceType=1}}},[t._v("发服务")]),s("span",{class:2===t.serviceType?"tabactive":"",on:{click:function(e){t.serviceType=2}}},[t._v("发需求")])]),s("div",{staticClass:"form-list-index"},[s("div",{staticClass:"mui-input-row change"},t._l(t.get_categor,(function(e,i){return s("span",{key:i},[s("a",{on:{click:function(s){return t.goToPublish(e)}}},[s("img",{attrs:{src:e.image}}),t._v(" "+t._s(e.catname)+" ")])])})),0)])])])],1)},a=[],c={props:{propActive:{type:Number,default:0}},data(){return{active:0,showService:!1,serviceType:2,list:[{name:"首页",active:s("1349"),inactive:s("c69c")},{name:"搜索",active:s("a511"),inactive:s("608b")},{name:"发布",active:s("c901"),inactive:s("81ea")},{name:"数据",active:s("219b"),inactive:s("e4bb")},{name:"我的",active:s("904c"),inactive:s("f0ee")}],get_categor:[]}},computed:{},created(){this.active=this.propActive,this.getCategor()},methods:{getCategor(){this.$axios.post("/api.php?op=get_categor").then(t=>{200===t.code&&(this.get_categor=t.data)})},onChange(t){switch(t){case 0:this.$router.push({name:"index"});break;case 1:this.$router.push({name:"search"});break;case 2:this.showService=!0;break;case 3:this.$router.push({name:"mydata"});break;case 4:this.$router.push({name:"myinfo"});break;default:break}},goToPublish(t){this.showService=!1,this.$router.push({name:"push_service",query:{catid:t.catid,catname:t.catname,publishtype:this.serviceType}})}},beforeRouteLeave(t,e,s){console.log(222222),s()},beforeRouteEnter(t,e,s){console.log(111111111),s()}},o=c,n=s("2877"),r=Object(n["a"])(o,i,a,!1,null,"d4912b6c",null);e["a"]=r.exports},"326a":function(t,e,s){t.exports=s.p+"static/img/toop.260faa7e.png"},"403f":function(t,e,s){},d3bc:function(t,e,s){"use strict";s("403f")},d546:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"n-my"},[i("div",{staticClass:"toop"},[i("img",{attrs:{src:s("326a"),alt:"",srcset:""}}),t.userid?[i("h3",[t._v(t._s(t.username)+"（ID："+t._s(t.userid)+"）")]),i("span",{staticClass:"font-24",staticStyle:{float:"right",color:"#fff"},on:{click:t.logout}},[t._v("退出登录")])]:i("router-link",{attrs:{to:{name:"login"}}},[i("h3",[t._v("立即登录")])])],2),i("div",{staticClass:"my-info"},[t._v("个人签名：这人很懒，什么也没留下来！")]),i("div",{staticClass:"fabu-xuqiu"},[i("div",{staticClass:"fafuwu",on:{click:function(e){t.showService=!0,t.serviceType=1}}},[t._v("发布服务")]),i("div",{staticClass:"faxuqiu",on:{click:function(e){t.showService=!0,t.serviceType=2}}},[t._v("发布需求")])]),i("div",{staticClass:"my-top-list"},[i("div",{staticClass:"service-item"},[i("div",{staticClass:"tab1"},[i("div",{class:1===t.type?"tabactive":"",on:{click:function(e){t.type=1}}},[t._v("服务列表")]),i("div",{class:2===t.type?"tabactive":"",on:{click:function(e){t.type=2}}},[t._v("需求列表")])])])]),i("div",{staticClass:"my-bottom-list"},[i("div",{staticClass:"index-content"},[i("div",{staticClass:"service-item"},[t._l(t.list,(function(e,s){return i("div",{key:s,staticClass:"index-list"},[i("a",{staticClass:"list-href"},[t._v(t._s(e.catname))]),i("div",{staticClass:"my-service-cat"},[t._v(t._s(e.description))]),i("div",{staticClass:"list-toos"},[i("span",{staticStyle:{color:"rgb(255, 103, 56)"}},[t._v(t._s("99"===e.status?"审核成功":"待审核"))]),i("span",{staticStyle:{color:"rgb(255, 255, 255)"},on:{click:function(s){return s.stopPropagation(),t.openTelegram(e.telegram)}}},[t._v("立即联系")])])])})),t.list.length?t._e():i("div",{staticClass:"empty"})],2)])]),i("van-popup",{attrs:{round:!0},model:{value:t.showService,callback:function(e){t.showService=e},expression:"showService"}},[i("div",{staticClass:"chooseCatelogaBox",staticStyle:{display:"block"}},[i("div",{staticClass:"qxr",on:{click:function(e){t.showService=!1}}},[t._v("取消")]),i("h5",{staticClass:"title"},[i("span",{class:1===t.serviceType?"tabactive":"",on:{click:function(e){t.serviceType=1}}},[t._v("发服务")]),i("span",{class:2===t.serviceType?"tabactive":"",on:{click:function(e){t.serviceType=2}}},[t._v("发需求")])]),i("div",{staticClass:"form-list-index"},[i("div",{staticClass:"mui-input-row change"},t._l(t.get_categor,(function(e,s){return i("span",{key:s},[i("a",{on:{click:function(s){return t.goToPublish(e)}}},[i("img",{attrs:{src:e.image}}),t._v(" "+t._s(e.catname)+" ")])])})),0)])])]),t.showFooter?i("Footer",{attrs:{propActive:4}}):t._e()],1)},a=[],c=s("076e"),o={components:{Footer:c["a"]},data(){return{showFooter:!0,username:localStorage.getItem("username"),userid:localStorage.getItem("userid"),status:"",type:1,list:[],showService:!1,serviceType:1,get_categor:[]}},watch:{type(){this.getList()},status(){this.getList()}},created(){this.getList(),this.getCategor()},activated(){this.showFooter=!1,this.$nextTick(()=>{this.showFooter=!0})},methods:{logout(){localStorage.setItem("token",""),localStorage.setItem("username",""),localStorage.setItem("userid",""),this.$router.push({name:"login"})},getCategor(){this.$axios.post("/api.php?op=get_categor").then(t=>{200===t.code&&(this.get_categor=t.data)})},goToPublish(t){this.showService=!1,this.$router.push({name:"push_service",query:{catid:t.catid,catname:t.catname,publishtype:this.serviceType}})},getList(){this.list=[],console.log("getList",{pageSize:100,status:this.status,gongxu_type:this.type}),this.$axios.post("/api.php?op=user_api&action=gongxu_lists",{pageSize:100,status:this.status,gongxu_type:this.type}).then(t=>{200===t.code&&(this.list=t.data.lists,this.$forceUpdate())})}}},n=o,r=(s("d3bc"),s("2877")),l=Object(r["a"])(n,i,a,!1,null,"6c425f89",null);e["default"]=l.exports}}]);