(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd6dc9b"],{"076e":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("van-tabbar",{staticClass:"footer",attrs:{fixed:!0,"safe-area-inset-bottom":!0},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},t._l(t.list,(function(s,i){return e("van-tabbar-item",{key:i,on:{click:function(s){return t.onChange(i)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{attrs:{src:t.propActive===i?s.active:s.inactive}})]},proxy:!0}],null,!0)},[e("span",[t._v(t._s(s.name))])])})),1),e("van-popup",{attrs:{round:!0},model:{value:t.showService,callback:function(s){t.showService=s},expression:"showService"}},[e("div",{staticClass:"chooseCatelogaBox",staticStyle:{display:"block"}},[e("div",{staticClass:"qxr",on:{click:function(s){t.showService=!1}}},[t._v("取消")]),e("h5",{staticClass:"title"},[e("span",{class:1===t.serviceType?"tabactive":"",on:{click:function(s){t.serviceType=1}}},[t._v("发服务")]),e("span",{class:2===t.serviceType?"tabactive":"",on:{click:function(s){t.serviceType=2}}},[t._v("发需求")])]),e("div",{staticClass:"form-list-index"},[e("div",{staticClass:"mui-input-row change"},t._l(t.get_categor,(function(s,i){return e("span",{key:i},[e("a",{on:{click:function(e){return t.goToPublish(s)}}},[e("img",{attrs:{src:s.image}}),t._v(" "+t._s(s.catname)+" ")])])})),0)])])])],1)},a=[],c={props:{propActive:{type:Number,default:0}},data(){return{active:0,showService:!1,serviceType:2,list:[{name:"首页",active:e("1349"),inactive:e("c69c")},{name:"搜索",active:e("a511"),inactive:e("608b")},{name:"发布",active:e("c901"),inactive:e("81ea")},{name:"数据",active:e("219b"),inactive:e("e4bb")},{name:"我的",active:e("904c"),inactive:e("f0ee")}],get_categor:[]}},computed:{},created(){this.active=this.propActive,this.getCategor()},methods:{getCategor(){this.$axios.post("/api.php?op=get_categor").then(t=>{200===t.code&&(this.get_categor=t.data)})},onChange(t){switch(t){case 0:this.$router.push({name:"index"});break;case 1:this.$router.push({name:"search"});break;case 2:this.showService=!0;break;case 3:this.$router.push({name:"mydata"});break;case 4:this.$router.push({name:"myinfo"});break;default:break}},goToPublish(t){this.showService=!1,this.$router.push({name:"push_service",query:{catid:t.catid,catname:t.catname,publishtype:this.serviceType}})}},beforeRouteLeave(t,s,e){console.log(222222),e()},beforeRouteEnter(t,s,e){console.log(111111111),e()}},o=c,n=e("2877"),l=Object(n["a"])(o,i,a,!1,null,"d4912b6c",null);s["a"]=l.exports},c4a1:function(t,s,e){t.exports=e.p+"static/img/empty.6b3bad8b.png"},d125:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mui-content",staticStyle:{height:"100vh"}},[i("div",{staticClass:"my-bottom-list"},[i("ul",{staticClass:"fixd-service-item-my",staticStyle:{padding:"0px 50px"}},[i("li",{staticClass:"w30b",class:1===t.type?"my-active":"",on:{click:function(s){t.type=1}}},[t._v("已发服务")]),i("li",{staticClass:"w30b",class:2===t.type?"my-active":"",on:{click:function(s){t.type=2}}},[t._v("已发需求")]),i("li",{staticClass:"w30b",on:{click:function(s){t.showDialog=!0}}},[t._v("担保商")])]),i("div",{staticClass:"my-bottom-list"},[i("div",{staticClass:"service-item"},[i("div",{staticClass:"tab2"},[i("div",{class:""===t.status?"tabactive":"",on:{click:function(s){t.status=""}}},[t._v("全部")]),i("div",{class:1===t.status?"tabactive":"",on:{click:function(s){t.status=1}}},[t._v("待审核")]),i("div",{class:99===t.status?"tabactive":"",on:{click:function(s){t.status=99}}},[t._v("审核通过")])])]),i("div",{staticClass:"index-content"},[i("div",{staticClass:"service-item"},[t._l(t.list,(function(s,e){return i("div",{key:e,staticClass:"index-list"},[i("a",{staticClass:"list-href"},[t._v(t._s(s.catname))]),i("div",{staticClass:"my-service-cat"},[t._v(t._s(s.description))]),i("div",{staticClass:"list-toos"},[i("span",{staticStyle:{color:"rgb(255, 103, 56)"}},[t._v(t._s("99"===s.status?"审核成功":"待审核"))]),i("span",{staticStyle:{color:"rgb(255, 255, 255)"},on:{click:function(e){return t.openTelegram(s.telegram)}}},[t._v("立即联系")])])])})),t.list.length?t._e():i("div",{staticClass:"empty"},[i("p",[t._v("暂无数据，看看其它的吧")])])],2)])])]),i("van-popup",{attrs:{round:""},model:{value:t.showDialog,callback:function(s){t.showDialog=s},expression:"showDialog"}},[i("div",{staticClass:"msg-box-par",staticStyle:{display:"block"}},[i("div",{staticClass:"share-box"},[i("div",{staticClass:"title-ccx"},[i("div",{staticClass:"tt1"},[t._v("暂未开放")]),i("div",{staticClass:"tt2"},[t._v("请耐心等待，我们正在努力中")])]),i("div",{staticClass:"title-ccx3"},[i("img",{staticStyle:{margin:"0px auto","padding-bottom":"10px"},attrs:{src:e("c4a1"),width:"100"}})]),i("div",{staticClass:"title-ccx4"},[i("a",{staticClass:"share",on:{click:function(s){t.showDialog=!1}}},[t._v("我知道了")])])])])]),t.showFooter?i("Footer",{attrs:{"prop-active":3}}):t._e()],1)},a=[],c=e("076e"),o={components:{Footer:c["a"]},data(){return{showDialog:!1,showFooter:!0,status:"",type:1,demand_lists:[],service_lists:[],showService:!1}},watch:{type(){this.getList()},status(){this.getList()}},created(){this.getList()},activated(){this.showFooter=!1,this.$nextTick(()=>{this.showFooter=!0})},methods:{getList(){this.list=[],this.$axios.post("/api.php?op=user_api&action=gongxu_lists",{pageSize:100,status:this.status,gongxu_type:this.type}).then(t=>{200===t.code&&(this.list=t.data.lists,this.$forceUpdate())})}}},n=o,l=e("2877"),r=Object(l["a"])(n,i,a,!1,null,"11ed0d11",null);s["default"]=r.exports}}]);