(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f990f8e"],{"2bd7":function(t,e,i){},"336f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"overflow-y":"scroll",height:"100vh"},attrs:{id:"scrollWrapper"},on:{scroll:t.handlerScroll}},[i("div",{staticClass:"service-item",style:{height:t.scrollHeight+"px"}},[i("van-sticky",{attrs:{"offset-top":0}},[i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.catid,callback:function(e){t.catid=e},expression:"catid"}}),i("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.gongxu_type,callback:function(e){t.gongxu_type=e},expression:"gongxu_type"}}),i("van-dropdown-item",{attrs:{options:t.option3},model:{value:t.guaranteeids,callback:function(e){t.guaranteeids=e},expression:"guaranteeids"}})],1)],1),i("div",{staticClass:"index-content"},[t.list.length?i("div",{staticClass:"content",staticStyle:{padding:"0","margin-top":"20px"}},[t._l(t.list,(function(e,a){return i("div",{key:a,staticClass:"item-card",class:1===+e.gongxu_type?"service":"demand",on:{click:function(i){return t.goDetail(e)}}},[i("h3",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("span",[t._v("【"+t._s(e.catname)+"】"+t._s(e.title))])]),i("div",{staticClass:"fuwubiaoqian"},t._l(e.feature,(function(e,a){return i("div",{key:a},[t._v(t._s(e))])})),0),i("div",{staticClass:"tags"},t._l(e.advantage_tag,(function(e,a){return i("span",{key:a},[t._v(t._s(e))])})),0),i("div",{staticClass:"n-card-img"},[i("div",{staticClass:"img--wraper"},t._l(e.image,(function(t,e){return i("img",{key:e,attrs:{src:t.url,alt:t.alt,srcset:""}})})),0),e.guarantee&&e.guarantee[0]?i("div",{staticClass:"danbao--wraper"},[i("img",{attrs:{src:e.guarantee[0].thumb,alt:"",srcset:""}}),i("span",[t._v(t._s(e.guarantee[0].title))]),i("van-icon",{staticClass:"n-van-icon",attrs:{name:"arrow"}})],1):t._e()]),i("div",{staticClass:"fabu-time"},[t._v("发布时间："+t._s(t.formatDate("YYYY-mm-dd HH:MM:ss",new Date(1e3*+e.inputtime))))]),i("div",{staticClass:"gongqun-lianxi"},[e.public_telegram?i("div",[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return i.stopPropagation(),t.lookGroup(e)}}},[i("span",[t._v("进入公群")])])]):t._e(),i("div",{on:{click:function(i){return i.stopPropagation(),t.lookTelegram(e)}}},[i("span",[t._v("立即联系")])])])])})),i("div",{staticStyle:{"margin-bottom":"40px"}},[t.loadAll?i("van-divider",[t._v("数据已加载完毕")]):t._e()],1)],2):t._e(),t.list.length?t._e():i("div",{staticClass:"empty"},[i("p",[t._v("暂无数据，看看其它的吧")])])])],1)])},s=[],n={data(){return{keyword:this.$route.query.keyword,catid:+(this.$route.query.catid||0),option1:[{text:"全部分类",value:0}],gongxu_type:0,option2:[{text:"供/需",value:0},{text:"服务",value:1},{text:"需求",value:2}],guaranteeids:0,option3:[{text:"不限",value:0}],loadAll:!1,list:[],pageSize:10,page:1,scrollHeight:500}},watch:{catid(){this.getList(!0)},gongxu_type(){this.getList(!0)},guaranteeids(){this.getList(!0)}},created(){this.getList(!0),this.getCategor(),this.getGuarantList(),this.countScroll()},methods:{lookTelegram(t){let e=t.telegram.replace(/@/g,"");window.open("https://t.me/"+e)},lookGroup(t){let e=t.public_telegram.replace(/@/g,"");window.open("https://t.me/"+e)},getGuarantList(){this.$axios.post("/api.php?op=guarantor_api&action=lists&pageNum=1&pageSize=100").then(t=>{200===t.code&&t.data.lists.map(t=>{this.option3.push({text:t.title,value:t.id})})})},countScroll(){this.$nextTick(()=>{this.scrollHeight=document.body.clientHeight})},handlerScroll(t){if(this.loadAll)return;let e=t.currentTarget;(this.list||[]).length&&e.scrollTop+e.clientHeight>=e.scrollHeight&&(this.loadAll=(this.list||[]).length<this.pageSize,this.getList(!1))},getCategor(){this.$axios.post("/api.php?op=get_categor").then(t=>{200===t.code&&t.data.map(t=>{this.option1.push({text:t.catname,value:+t.catid})})})},getList(t){!0===t&&(this.list=[],this.page=1),this.$axios.post("/api.php?op=search_api&action=keyword",{keyword:"",catid:+(this.catid||0)||"",gongxu_type:this.gongxu_type,guaranteeids:this.guaranteeids,pageSize:10,pageNum:this.page}).then(e=>{if(200===e.code)if(!0!==t){if(this.list=this.list.concat(e.data.lists),!e.data.lists.length)return void(this.loadAll=!0);this.page++}else this.list=e.data.lists})},goDetail(t){this.$router.push({name:"service",query:{id:t.id,type:t.gongxu_type}})}}},o=n,l=(i("5e75"),i("2877")),r=Object(l["a"])(o,a,s,!1,null,"429d9407",null);e["default"]=r.exports},"5e75":function(t,e,i){"use strict";i("2bd7")}}]);