(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47f7fd2a"],{"6ff1":function(t,e,i){},cb8f:function(t,e,i){"use strict";i("6ff1")},fae6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mui-content"},[i("div",{staticClass:"index-serch search-box"},[t._m(0),i("div",{staticClass:"i-ser-m"},[i("i",{staticClass:"mui-icon mui-icon-search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"请输入搜索内容"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("a",{attrs:{href:"javascript:void(0)"},on:{click:t.getList}},[t._v("搜索")])])]),i("div",{staticClass:"service-item"},[i("van-sticky",{attrs:{"offset-top":50}},[i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.catid,callback:function(e){t.catid=e},expression:"catid"}}),i("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.gongxu_type,callback:function(e){t.gongxu_type=e},expression:"gongxu_type"}})],1)],1),i("div",{staticClass:"index-content"},[t.list.length?i("div",{staticClass:"content",staticStyle:{"margin-top":"20px"}},t._l(t.list,(function(e,a){return i("div",{key:a,staticClass:"item-card",class:1===+e.gongxu_type?"service":"demand",on:{click:function(i){return t.goDetail(e)}}},[i("h3",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("span",[t._v("【"+t._s(e.catname)+"】"+t._s(e.title))])]),i("div",{staticClass:"fuwubiaoqian"},t._l(e.feature,(function(e,a){return i("div",{key:a},[t._v(t._s(e))])})),0),i("div",{staticClass:"tags"},t._l(e.advantage_tag,(function(e,a){return i("span",{key:a},[t._v(t._s(e))])})),0),i("div",{staticClass:"id-price"},[i("span",[t._v("ID："+t._s(e.service_id||e.id))])]),i("div",{staticClass:"n-card-img"},[i("div",{staticClass:"img--wraper"},t._l(e.image,(function(t,e){return i("img",{key:e,attrs:{src:t.url,alt:t.alt,srcset:""}})})),0),i("div",{staticClass:"danbao--wraper"},[i("span",[t._v(t._s(e.guarantee[0].title))]),i("van-icon",{staticClass:"n-van-icon",attrs:{name:"arrow"}})],1)]),i("div",{staticClass:"fabu-time"},[t._v("发布时间："+t._s(t.formatDate("YYYY-mm-dd HH:MM:ss",new Date(1e3*+e.inputtime))))]),1===e.gongxu_type?i("div",{staticClass:"gongqun-lianxi"},[i("div",[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return i.stopPropagation(),t.lookGroup(e)}}},[i("span",[t._v("进入公群")])])]),i("div",{on:{click:function(i){return i.stopPropagation(),t.lookTelegram(e)}}},[i("span",[t._v("立即联系")])])]):i("div",{staticClass:"gongqun-lianxi"},[i("div",{on:{click:function(i){return i.stopPropagation(),t.lookTelegram(e)}}},[i("span",[t._v("立即联系")])])])])})),0):t._e(),t.list.length?t._e():i("div",{staticClass:"empty"},[i("p",[t._v("暂无数据，看看其它的吧")])])])],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"back",attrs:{onclick:"window.history.back()"}},[i("span",{staticClass:"mui-icon mui-icon-arrowleft"})])}],n={data(){return{list:[],keyword:this.$route.query.keyword,catid:+(this.$route.query.catid||0),option1:[{text:"全部分类",value:0}],gongxu_type:0,option2:[{text:"供/需",value:0},{text:"服务",value:1},{text:"需求",value:2}]}},watch:{catid(){this.getList()},gongxu_type(){this.getList()}},created(){this.getList(),this.getCategor()},methods:{getCategor(){this.$axios.get("/api.php?op=get_categor").then(t=>{200===t.code&&t.data.map(t=>{this.option1.push({text:t.catname,value:+t.catid})})})},getList(){this.list=[],this.$axios.get("/api.php?op=search_api&action=keyword&keyword="+this.keyword+"&catid="+(this.catid||"")+"&gongxu_type="+(this.gongxu_type||"")).then(t=>{200===t.code&&(this.list=t.data.lists)})},goDetail(t){this.$router.push({name:"service",query:{id:t.id,type:t.gongxu_type}})}}},o=n,c=(i("cb8f"),i("2877")),r=Object(c["a"])(o,a,s,!1,null,"7edc9044",null);e["default"]=r.exports}}]);