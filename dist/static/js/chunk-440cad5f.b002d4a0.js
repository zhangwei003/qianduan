(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-440cad5f"],{"411d":function(t,e,i){"use strict";i("6b17")},"6b17":function(t,e,i){},fae6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"overflow-y":"scroll",height:"100vh","padding-top":"0 !important"},attrs:{id:"scrollWrapper"},on:{scroll:t.handlerScroll}},[i("div",{staticClass:"mui-content",style:{height:t.scrollHeight+"px"}},[i("div",{staticClass:"index-serch search-box"},[t._m(0),i("div",{staticClass:"i-ser-m"},[i("i",{staticClass:"mui-icon mui-icon-search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"请输入搜索内容"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("a",{attrs:{href:"javascript:void(0)"},on:{click:t.getList}},[t._v("搜索")])])]),i("div",{staticClass:"service-item"},[i("van-sticky",{attrs:{"offset-top":50}},[i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.catid,callback:function(e){t.catid=e},expression:"catid"}}),i("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.gongxu_type,callback:function(e){t.gongxu_type=e},expression:"gongxu_type"}}),i("van-dropdown-item",{attrs:{options:t.option3},model:{value:t.guaranteeids,callback:function(e){t.guaranteeids=e},expression:"guaranteeids"}})],1)],1),i("div",{staticClass:"index-content"},[t.list.length?i("div",{staticClass:"content",staticStyle:{"margin-top":"20px"}},[t._l(t.list,(function(e,a){return i("div",{key:a,staticClass:"item-card",class:1===+e.gongxu_type?"service":"demand",on:{click:function(i){return t.goDetail(e)}}},[i("h3",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("span",[t._v("【"+t._s(e.catname)+"】"+t._s(e.title))])]),i("div",{staticClass:"fuwubiaoqian"},t._l(e.feature,(function(e,a){return i("div",{key:a},[t._v(t._s(e))])})),0),i("div",{staticClass:"tags"},[i("span",[t._v(t._s(e.description))])]),i("div",{staticClass:"id-price"},[i("span",[t._v("ID："+t._s(e.service_id||e.id))])]),i("div",{staticClass:"n-card-img"},[i("div",{staticClass:"img--wraper"},t._l(e.image,(function(t,e){return i("img",{key:e,attrs:{src:t.url,alt:t.alt,srcset:""}})})),0),e.guarantee&&e.guarantee[0]?i("div",{staticClass:"danbao--wraper"},[i("img",{attrs:{src:e.guarantee[0].thumb,alt:"",srcset:""}}),i("span",[t._v(t._s(e.guarantee[0].title))]),i("van-icon",{staticClass:"n-van-icon",attrs:{name:"arrow"}})],1):t._e()]),i("div",{staticClass:"fabu-time"},[t._v("发布时间："+t._s(t.formatDate("YYYY-mm-dd HH:MM:ss",new Date(1e3*+e.inputtime))))]),i("div",{staticClass:"gongqun-lianxi"},[e.public_telegram?i("div",[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return i.stopPropagation(),t.openTelegram(e.public_telegram)}}},[i("span",[t._v("进入公群")])])]):t._e(),i("div",{on:{click:function(i){return i.stopPropagation(),t.openTelegram(e.telegram)}}},[i("span",[t._v("立即联系")])])])])})),i("div",{staticStyle:{"margin-bottom":"40px"}},[t.loadAll?i("van-divider",[t._v("数据已加载完毕")]):t._e()],1)],2):t._e(),t.list.length?t._e():i("div",{staticClass:"empty"},[i("p",[t._v("暂无数据，看看其它的吧")])])])],1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"back",attrs:{onclick:"window.history.back()"}},[i("span",{staticClass:"mui-icon mui-icon-arrowleft"})])}],n={data(){return{keyword:this.$route.query.keyword,catid:+(this.$route.query.catid||0),option1:[{text:"全部分类",value:0}],gongxu_type:0,option2:[{text:"供/需",value:0},{text:"服务",value:1},{text:"需求",value:2}],guaranteeids:0,option3:[{text:"不限",value:0}],loadAll:!1,list:[],pageSize:10,page:1,scrollHeight:0}},watch:{catid(){this.getList()},gongxu_type(){this.getList()},guaranteeids(){this.getList(!0)}},activated(){this.keyword=this.$route.query.keyword,this.catid=+(this.$route.query.catid||0),this.getList(),this.getCategor(),this.getGuarantList(),this.countScroll()},created(){this.getList(),this.getCategor(),this.countScroll(),this.getGuarantList()},methods:{countScroll(){this.$nextTick(()=>{this.scrollHeight=document.querySelector("#scrollWrapper").clientHeight-70})},getGuarantList(){this.option3=[{text:"不限",value:0}],this.$axios.post("/api.php?op=guarantor_api&action=lists",{pageNum:1,pageSize:100}).then(t=>{200===t.code&&t.data.lists.map(t=>{this.option3.push({text:t.title,value:t.id})})})},handlerScroll(t){if(this.loadAll)return;let e=t.currentTarget;(this.list||[]).length&&e.scrollTop+e.clientHeight>=e.scrollHeight&&(this.loadAll=(this.list||[]).length<this.pageSize,this.getList(!1))},getCategor(){this.option1=[{text:"全部分类",value:0}],this.$axios.post("/api.php?op=get_categor").then(t=>{200===t.code&&t.data.map(t=>{this.option1.push({text:t.catname,value:+t.catid})})})},getList(t){!0===t&&(this.list=[],this.page=1),this.$axios.post("/api.php?op=search_api&action=keyword",{keyword:this.keyword,catid:+(this.catid||0)||"",gongxu_type:this.gongxu_type,guaranteeids:this.guaranteeids,pageSize:10,pageNum:this.page}).then(e=>{if(200===e.code){if(e.data.lists.map(t=>{t.tags=[],(t.advantage_tag||[]).map(e=>{let i=window.cnchar.spell(e).split("")[0];t.tags.push({title:e,one:i})})}),!0!==t){if(this.list=this.list.concat(e.data.lists),!e.data.lists.length)return void(this.loadAll=!0);this.page++}else this.list=e.data.lists;this.$forceUpdate()}})},goDetail(t){this.$router.push({name:"service",query:{id:t.id,type:t.gongxu_type}})}}},o=n,r=(i("411d"),i("2877")),l=Object(r["a"])(o,a,s,!1,null,"4d2e199f",null);e["default"]=l.exports}}]);