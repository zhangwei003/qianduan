(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c0ef47a"],{"05a3":function(t,e,s){"use strict";s("a04e")},"076e":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-tabbar",{staticClass:"footer",attrs:{fixed:!0,"safe-area-inset-bottom":!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.list,(function(e,i){return s("van-tabbar-item",{key:i,on:{click:function(e){return t.onChange(i)}},scopedSlots:t._u([{key:"icon",fn:function(){return[s("img",{attrs:{src:t.propActive===i?e.active:e.inactive}})]},proxy:!0}],null,!0)},[s("span",[t._v(t._s(e.name))])])})),1),s("van-popup",{attrs:{round:!0},model:{value:t.showService,callback:function(e){t.showService=e},expression:"showService"}},[s("div",{staticClass:"chooseCatelogaBox",staticStyle:{display:"block"}},[s("div",{staticClass:"qxr",on:{click:function(e){t.showService=!1}}},[t._v("取消")]),s("h5",{staticClass:"title"},[s("span",{class:1===t.serviceType?"tabactive":"",on:{click:function(e){t.serviceType=1}}},[t._v("发服务")]),s("span",{class:2===t.serviceType?"tabactive":"",on:{click:function(e){t.serviceType=2}}},[t._v("发需求")])]),s("div",{staticClass:"form-list-index"},[s("div",{staticClass:"mui-input-row change"},t._l(t.get_categor,(function(e,i){return s("span",{key:i},[s("a",{on:{click:function(s){return t.goToPublish(e)}}},[s("img",{attrs:{src:e.image}}),t._v(" "+t._s(e.catname)+" ")])])})),0)])])])],1)},a=[],o={props:{propActive:{type:Number,default:0}},data(){return{active:0,showService:!1,serviceType:2,list:[{name:"首页",active:s("1349"),inactive:s("c69c")},{name:"搜索",active:s("a511"),inactive:s("608b")},{name:"发布",active:s("c901"),inactive:s("81ea")},{name:"数据",active:s("219b"),inactive:s("e4bb")},{name:"我的",active:s("904c"),inactive:s("f0ee")}],get_categor:this.$store.state.categorList}},computed:{},created(){this.active=this.propActive},methods:{onChange(t){switch(t){case 0:this.$router.push({name:"index"});break;case 1:this.$router.push({name:"search"});break;case 2:this.showService=!0;break;case 3:this.$router.push({name:"mydata"});break;case 4:this.$router.push({name:"myinfo"});break;default:break}},goToPublish(t){this.showService=!1,this.$router.push({name:"push_service",query:{catid:t.catid,catname:t.catname,publishtype:this.serviceType}})}},beforeRouteLeave(t,e,s){console.log(222222),s()},beforeRouteEnter(t,e,s){console.log(111111111),s()}},c=o,n=(s("05a3"),s("2877")),r=Object(n["a"])(c,i,a,!1,null,"046d13f3",null);e["a"]=r.exports},"1e4b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isMobile?s("mobile",{staticClass:"mobile",attrs:{id:"mobile"}}):s("pc",{staticClass:"pc",attrs:{id:"pc"}})],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content container",staticStyle:{"overflow-y":"scroll"},attrs:{id:"scrollWrapper"},on:{scroll:t.handlerScroll}},[i("div",{style:{height:t.scrollHeight+"px"}},[i("div",{staticClass:"header"},[i("img",{attrs:{src:s("ede7"),alt:"",srcset:""}}),i("span",[t._v(t._s(t.basic.home_title))])]),i("div",{staticClass:"search-index"},[i("van-icon",{attrs:{name:"search",size:"20"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"请输入搜索内容"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goToSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})],1),i("van-swipe",{staticClass:"index-banner",attrs:{autoplay:3e3}},t._l(t.banners,(function(e,s){return i("van-swipe-item",{key:s,on:{click:function(s){return t.goBanner(e)}}},[i("van-image",{attrs:{fit:"cover",src:e.pictureurls}})],1)})),1),i("div",{staticClass:"notice"},[i("img",{attrs:{src:s("d464"),alt:"",srcset:""}}),i("span",{staticClass:"kuaibao"},[t._v("快报")]),i("span",{staticClass:"guanfang"},[t._v("官方")]),i("van-swipe",{staticStyle:{height:"100%"},attrs:{vertical:"",autoplay:3e3}},t._l(t.notice,(function(e,s){return i("van-swipe-item",{key:s,on:{click:function(s){return t.goActicle(e)}}},[t._v(t._s(e.title))])})),1)],1),t.get_categor.length?i("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:5e3,"indicator-color":"white"}},[i("van-swipe-item",[i("div",{staticClass:"swipe-wrapper"},[t._l(t.get_categor,(function(e,s){return[s<10?i("div",{key:s,staticClass:"li",on:{click:function(s){return t.goSearch(e)}}},[i("img",{attrs:{src:e.image,alt:"",srcset:""}}),i("p",[t._v(t._s(e.catname))])]):t._e()]}))],2)]),t.get_categor.length>9?i("van-swipe-item",[i("div",{staticClass:"swipe-wrapper"},[t._l(t.get_categor,(function(e,s){return[s>=10?i("div",{key:s,staticClass:"li",on:{click:function(s){return t.goSearch(e)}}},[i("img",{attrs:{src:e.image,alt:"",srcset:""}}),i("p",[t._v(t._s(e.catname))])]):t._e()]}))],2)]):t._e()],1):t._e(),i("div",{staticClass:"danbao"},[i("div",{staticClass:"zhiming",on:{click:function(e){return e.stopPropagation(),t.goPage("guarantor_index")}}},[i("img",{staticClass:"icon3",attrs:{src:s("ad95"),alt:"",srcset:""}}),i("div",{staticClass:"icon-title"},[t._v("知名担保商")]),i("span",{staticClass:"icon-arrow"},[i("van-icon",{attrs:{name:"arrow",color:"#6D5933"}})],1)]),i("div",{staticClass:"fabu"},[i("div",{staticClass:"fafuwu",on:{click:function(e){return t.goPage("antifraud_list")}}},[t._v("反诈指南")]),i("div",{staticClass:"faxuqiu",on:{click:function(e){return t.goPage("report_list")}}},[t._v("电报曝光")])])]),i("van-sticky",{attrs:{"offset-top":0}},[i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.categorList},model:{value:t.catid,callback:function(e){t.catid=e},expression:"catid"}}),i("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.gongxu_type,callback:function(e){t.gongxu_type=e},expression:"gongxu_type"}}),i("van-dropdown-item",{attrs:{options:t.guarantorList},model:{value:t.guaranteeids,callback:function(e){t.guaranteeids=e},expression:"guaranteeids"}})],1)],1),t._l(t.list,(function(e,s){return i("div",{key:s,staticClass:"item-card",class:1===+e.gongxu_type?"service":"demand",on:{click:function(s){return t.goServiceDetail(e)}}},[i("h3",{staticStyle:{display:"flex","justify-content":"start"}},[i("img",{staticStyle:{display:"inline-block"},attrs:{src:t.categorMap[e.catname],alt:"",srcset:""}}),i("span",[t._v(t._s(e.title))])]),i("div",{staticClass:"fuwubiaoqian"},t._l(e.tags,(function(e,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:e,expression:"item"}],key:s,class:"color-"+e.one},[t._v(t._s(e.title))])})),0),i("div",{staticClass:"tags"},[i("span",[t._v(t._s(e.description))])]),i("div",{staticClass:"id-price"},[i("span",[t._v("ID："+t._s(e.service_id||e.id))])]),i("div",{staticClass:"n-card-img"},[i("div",{staticClass:"img--wraper"},t._l(e.image,(function(t,e){return i("img",{key:e,attrs:{src:t.url,alt:t.alt,srcset:""}})})),0),e.guarantee&&e.guarantee[0]?i("div",{staticClass:"danbao--wraper",on:{click:function(s){return s.stopPropagation(),t.goDanbaoDetail(e)}}},[i("img",{attrs:{src:e.guarantee[0].thumb,alt:"",srcset:""}}),i("span",[t._v(t._s(e.guarantee[0].title))]),i("van-icon",{staticClass:"n-van-icon",attrs:{name:"arrow"}})],1):t._e()]),i("div",{staticClass:"fabu-time"},[t._v("发布时间："+t._s(t.formatDate("YYYY-mm-dd HH:MM:ss",new Date(1e3*+e.inputtime))))]),i("div",{staticClass:"gongqun-lianxi"},[e.public_telegram?i("div",[i("a",{attrs:{href:"javascript:;"},on:{click:function(s){return s.stopPropagation(),t.openTelegram(e.public_telegram)}}},[i("span",[t._v("进入公群")])])]):t._e(),i("div",{on:{click:function(s){return s.stopPropagation(),t.openTelegram(e.telegram)}}},[i("span",[t._v("立即联系")])])])])})),t.list.length?t._e():i("van-empty",{attrs:{description:"暂无数据"}}),i("div",{staticStyle:{"margin-bottom":"40px"}},[t.loadAll?i("van-divider",[t._v("数据已加载完毕")]):t._e()],1),i("van-popup",{attrs:{round:!0},model:{value:t.showMsgBox,callback:function(e){t.showMsgBox=e},expression:"showMsgBox"}},[i("div",{staticClass:"msg-box-par"},[i("div",{staticClass:"share-box"},[i("div",{staticClass:"title-ccx"},[i("div",{staticClass:"tt1"},[t._v(t._s(t.basic.home_title))]),i("div",{staticClass:"tt2"},[t._v(t._s(t.basic.home_title))])]),i("div",{staticClass:"l2",staticStyle:{margin:"20px"}},[i("p",[t._v(t._s(t.links.content))]),i("div",{staticClass:"jbls"}),i("p")]),i("div",{staticClass:"title-ccx4",staticStyle:{display:"flex"}},[i("a",{staticClass:"share cane",on:{click:function(e){t.showMsgBox=!1}}},[t._v("取消")]),i("a",{staticClass:"share",attrs:{href:t.links.link,target:"_blank"},on:{click:function(e){t.showMsgBox=!1}}},[t._v("立即进入")])])])])]),i("van-popup",{attrs:{round:!0},model:{value:t.showService,callback:function(e){t.showService=e},expression:"showService"}},[i("div",{staticClass:"chooseCatelogaBox",staticStyle:{display:"block"}},[i("div",{staticClass:"qxr",on:{click:function(e){t.showService=!1}}},[t._v("取消")]),i("h5",{staticClass:"title"},[i("span",{class:1===t.serviceType?"tabactive":"",on:{click:function(e){t.serviceType=1}}},[t._v("发服务")]),i("span",{class:2===t.serviceType?"tabactive":"",on:{click:function(e){t.serviceType=2}}},[t._v("发需求")])]),i("div",{staticClass:"form-list-index"},[i("div",{staticClass:"mui-input-row change"},[t._l(t.get_categor,(function(e,s){return["全部"!==e.catname?i("span",{key:s},[i("a",{on:{click:function(s){return t.goToPublish(e)}}},[i("img",{attrs:{src:e.image}}),t._v(" "+t._s(e.catname)+" ")])]):t._e()]}))],2)])])])],2),t.showFooter?i("Footer",{attrs:{propActive:0}}):t._e()],1)},c=[],n=s("076e"),r={components:{Footer:n["a"]},data(){return{showFooter:!0,banners:[],keyword:"",show:!1,faxuqiu:!1,get_categor:[],fuwu:[],type:1,notice:[],showMsgBox:!1,showService:!1,serviceType:1,serviceIndex:1,links:{},basic:{},catid:0,categorList:[],gongxu_type:0,option2:[{text:"供/需",value:0},{text:"服务",value:1},{text:"需求",value:2}],guaranteeids:0,guarantorList:[{text:"不限",value:0},...this.$store.state.guarantorList],loadAll:!1,list:[],pageSize:10,page:1,scrollHeight:0,scrollY:0}},watch:{type(t){this.$axios.post("/api.php?op=recommend&type="+t).then(t=>{200===t.code&&(this.fuwu=t.data)})},serviceIndex(){this.getList(!0)},catid(){this.getList(!0)},gongxu_type(){this.getList(!0)},guaranteeids(){this.getList(!0)}},created(){this.$nextTick(()=>{sessionStorage.getItem("isFirst")||(this.showMsgBox=!0,sessionStorage.setItem("isFirst",1))}),this.getBanner(),this.getLink(),this.getNotice(),this.getList(),this.getBasic(),this.$nextTick(()=>{this.getCategor(),this.countScroll()})},computed:{categorMap(){const t={};return this.get_categor.map(e=>{t[e.catname]=e.image}),t}},methods:{goDanbaoDetail(t){this.$router.push({name:"guarantor_details",query:{id:t.guarantee[0].id}})},goBanner(t){1===+t.skip_type?this.$router.push({name:"service",query:{id:t.skip_detail_id,catid:t.catid}}):2===+t.skip_type?this.$router.push({name:"article",query:{id:t.id}}):3===+t.skip_type&&this.$router.push({name:"guarantor_details",query:{id:t.id}})},countScroll(){this.$nextTick(()=>{this.scrollHeight=document.querySelector("#scrollWrapper").clientHeight-360})},handlerScroll(t){if(this.loadAll)return;let e=t.currentTarget;(this.list||[]).length&&e.scrollTop+e.clientHeight>=e.scrollHeight&&(this.loadAll=(this.list||[]).length<this.pageSize,this.getList(!1))},getBanner(){this.$axios.post("/api.php?op=lunbo").then(t=>{200===t.code&&(console.log("banner",t.data),this.banners=t.data)})},getList(t){!0===t&&(this.list=[],this.page=1),console.log("this.page",this.page),console.log({keyword:"",catid:+(this.catid||0)||"",gongxu_type:this.gongxu_type,guaranteeids:this.guaranteeids,pageSize:10,pageNum:this.page}),this.$axios.post("/api.php?op=search_api&action=keyword",{keyword:"",catid:+(this.catid||0)||"",gongxu_type:this.gongxu_type,guaranteeids:this.guaranteeids,pageSize:10,pageNum:this.page}).then(e=>{if(200===e.code){if(e.data.lists.map(t=>{t.tags=[],(t.advantage_tag||[]).map(e=>{let s=window.cnchar.spell(e).split("")[0];t.tags.push({title:e,one:s})})}),!0!==t){if(this.list=this.list.concat(e.data.lists),!e.data.lists.length)return void(this.loadAll=!0);this.page++}else this.list=e.data.lists;this.$forceUpdate()}})},goToPublish(t){this.showService=!1,this.$router.push({name:"push_service",query:{catid:t.catid,catname:t.catname,publishtype:this.serviceType}})},getBasic(){this.$axios.post("/api.php?op=home_config").then(t=>{200===t.code&&(this.basic=t.data)})},getCategor(){this.get_categor=this.deepCopy(this.$store.state.categorList),console.log("11111111"),console.log(this.get_categor),this.get_categor.unshift({image:s("23b1"),catname:"全部"}),this.categorList=[{text:"全部分类",value:0},...this.$store.state.categorList]},getServiceList(){this.$axios.post("/api.php?op=service_api&action=lists").then(t=>{200===t.code&&(this.fuwu=t.data.lists)})},getDemendList(){this.$axios.post("/api.php?op=demand_api&action=lists").then(t=>{200===t.code&&(this.fuwu=t.data.lists)})},getLink(){this.$axios.post("/api.php?op=group_link").then(t=>{console.log("group_link",t.data),200===t.code&&(this.links=t.data)})},goSearch(t){this.$router.push({name:"class_type",query:{catid:t.catid}})},goServiceDetail(t){this.$router.push({name:"service",query:{id:t.id,catid:t.catid}})},getNotice(){this.$axios.post("/api.php?op=announcement_api&action=lists").then(t=>{200===t.code&&(this.notice=t.data,console.log("notice",t))})},goToSearch(){this.$router.push({name:"search_list",query:{keyword:this.keyword}})},goPage(t){this.$router.push({name:t})},goActicle(t){this.$router.push({name:"article",query:{id:t.id}})}},activated(){this.showFooter=!1,this.$nextTick(()=>{this.showFooter=!0}),this.scrollY&&(document.querySelector(".container").scrollTop=this.scrollY)},beforeRouteLeave(t,e,s){this.scrollY=document.querySelector(".container").scrollTop,s()}},l=r,p=(s("395e"),s("ca44"),s("2877")),g=Object(p["a"])(l,o,c,!1,null,"0ab8a37c",null),u=g.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pc-index",staticStyle:{"overflow-y":"scroll"},on:{scroll:t.handlerScroll}},[i("div",{style:{height:t.scrollHeight+"px"}},[i("div",{staticClass:"pc-header"},[i("div",{staticClass:"logo-title"},[i("img",{attrs:{src:s("ede7"),alt:"",srcset:""}}),i("span",[t._v(t._s(t.basic.home_title))])]),i("div",{staticClass:"logo-search"},[i("van-icon",{attrs:{name:"search"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"请输入搜索内容"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goToSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("div",{staticClass:"logo-btn",on:{click:function(e){return t.goPage("login")}}},[t._v("登陆")]),i("div",{staticClass:"logo-btn primary",on:{click:function(e){return t.goPage("register")}}},[t._v("注册")])],1)]),i("div",{staticClass:"pc-menu"},[i("ul",t._l(t.get_categor,(function(e,s){return i("li",{directives:[{name:"show",rawName:"v-show",value:s<12,expression:"i<12"}],key:s,staticClass:"checked",on:{click:function(s){return t.goSearch(e)}}},[i("img",{attrs:{src:e.image,alt:"",srcset:""}}),t._v(" "+t._s(e.text)+" ")])})),0)]),i("div",{staticClass:"pc-banner"},[i("div",{staticClass:"pc-b1"},[i("div",{staticClass:"pc-b2",on:{click:function(e){return e.stopPropagation(),t.goPage("guarantor_index")}}},[i("div",{staticClass:"pc-b2-img"},[i("h3",[t._v("知名担保商")]),i("p",[t._v(" 通过信誉度较高的担保完成交易目的是灰产 行业普遍公认和接受的做法，灰铲引入了行 业知名度较高，影响力较大的担保商推荐用 户使用。 ")]),i("div",{staticClass:"pc-b2-btn"},[i("van-icon",{attrs:{name:"arrow",size:"12"}})],1)])]),i("div",{staticClass:"pc-b3"},[i("div",{on:{click:function(e){return t.goPage("antifraud_list")}}},[i("span",[t._v("反诈指南")]),i("img",{attrs:{src:s("c6b7"),alt:"",srcset:""}})]),i("div",{on:{click:function(e){return t.goPage("report_list")}}},[i("span",[t._v("电报曝光")]),i("img",{attrs:{src:s("c6b7"),alt:"",srcset:""}})])])]),i("div",{staticClass:"pc-b4"},[i("van-swipe",{attrs:{autoplay:3e3}},t._l(t.banners,(function(e,s){return i("van-swipe-item",{key:s,on:{click:function(s){return t.goBanner(e)}}},[i("van-image",{attrs:{fit:"cover",src:e.pictureurls}})],1)})),1)],1),i("div",{staticClass:"pc-b5"},[i("div",{staticClass:"pc-b5-notice"},[i("img",{attrs:{src:s("d464"),alt:"",srcset:""}}),i("span",{staticClass:"kuaibao"},[t._v("快报")]),i("span",{staticClass:"guanfang"},[t._v("官方")]),i("van-swipe",{staticStyle:{height:"100%"},attrs:{vertical:"",autoplay:3e3}},t._l(t.notice,(function(e,s){return i("van-swipe-item",{key:s,on:{click:function(s){return t.goActicle(e)}}},[t._v(t._s(e.title))])})),1)],1),i("div",{staticClass:"pc-b5-info"},[t._m(0),i("div",{staticClass:"pc-b5-list"},[i("div",{on:{click:function(e){t.serviceType=1,t.showService=!0}}},[t._v("发服务")]),i("div",{on:{click:function(e){t.serviceType=2,t.showService=!0}}},[t._v("发需求")]),i("div",[t._v("已发服务")]),i("div",[t._v("已发需求")])])])])]),i("div",{staticClass:"filter-condition"},[i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.categorList},model:{value:t.catid,callback:function(e){t.catid=e},expression:"catid"}}),i("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.gongxu_type,callback:function(e){t.gongxu_type=e},expression:"gongxu_type"}}),i("van-dropdown-item",{attrs:{options:t.guarantorList},model:{value:t.guaranteeids,callback:function(e){t.guaranteeids=e},expression:"guaranteeids"}})],1)],1),i("ul",{staticClass:"pc-card"},t._l(t.list,(function(e,s){return i("li",{key:s,class:1===+e.gongxu_type?"service":"demand",on:{click:function(s){return t.goServiceDetail(e)}}},[i("h3",[t._v(t._s(e.title))]),i("div",{staticClass:"pc-card--tags"},t._l(e.tags,(function(e,s){return i("span",{directives:[{name:"show",rawName:"v-show",value:e,expression:"item"}],key:s,class:"color-"+e.one},[t._v(t._s(e.title))])})),0),i("p",[t._v(t._s(e.description))]),i("div",{staticClass:"pc-card--id"},[t._v("ID："+t._s(e.service_id||e.id))]),i("div",{staticClass:"pc-card--guar"},[i("div",{staticClass:"guar__images"},t._l(e.image,(function(t,e){return i("img",{key:e,attrs:{src:t.url,alt:t.alt,srcset:""}})})),0),e.guarantee&&e.guarantee[0]?i("div",{staticClass:"guar__name",on:{click:function(s){return s.stopPropagation(),t.goDanbaoDetail(e)}}},[i("img",{attrs:{src:e.guarantee[0].thumb,alt:"",srcset:""}}),i("span",[t._v(t._s(e.guarantee[0].title))]),i("van-icon",{attrs:{name:"arrow"}})],1):t._e()]),i("div",{staticClass:"pc-card--time"},[t._v("发布时间："+t._s(t.formatDate("YYYY-mm-dd HH:MM:ss",new Date(1e3*+e.inputtime))))]),i("div",{staticClass:"pc-card--bottom"},[e.public_telegram?i("div",{staticClass:"bottom__btn",on:{click:function(s){return s.stopPropagation(),t.openTelegram(e.public_telegram)}}},[t._v("担保公群")]):t._e(),i("div",{staticClass:"bottom__btn",on:{click:function(s){return s.stopPropagation(),t.openTelegram(e.telegram)}}},[t._v("立即联系")])])])})),0),t.list.length?t._e():i("van-empty",{attrs:{description:"暂无数据"}}),i("div",{staticStyle:{"margin-bottom":"40px"}},[t.loadAll?i("van-divider",[t._v("数据已加载完毕")]):t._e()],1),t._m(1),i("van-popup",{attrs:{round:!0},model:{value:t.showMsgBox,callback:function(e){t.showMsgBox=e},expression:"showMsgBox"}},[i("div",{staticClass:"msg-box-par"},[i("div",{staticClass:"share-box"},[i("div",{staticClass:"title-ccx"},[i("div",{staticClass:"tt1"},[t._v(t._s(t.basic.home_title))]),i("div",{staticClass:"tt2"},[t._v(t._s(t.basic.home_title))])]),i("div",{staticClass:"l2",staticStyle:{margin:"20px"}},[i("p",[t._v(t._s(t.links.content))]),i("div",{staticClass:"jbls"}),i("p")]),i("div",{staticClass:"title-ccx4",staticStyle:{display:"flex"}},[i("a",{staticClass:"share cane",on:{click:function(e){t.showMsgBox=!1}}},[t._v("取消")]),i("a",{staticClass:"share",attrs:{href:t.links.link,target:"_blank"},on:{click:function(e){t.showMsgBox=!1}}},[t._v("立即进入")])])])])]),i("van-popup",{attrs:{round:"",closeable:""},model:{value:t.showService,callback:function(e){t.showService=e},expression:"showService"}},[i("div",{staticClass:"choose-service"},[i("div",{staticClass:"cs--tab"},[i("van-tabs",{staticStyle:{width:"60%"},model:{value:t.serviceType,callback:function(e){t.serviceType=e},expression:"serviceType"}},[i("van-tab",{attrs:{title:"找服务",value:1}}),i("van-tab",{attrs:{title:"找需求",value:2}})],1)],1),i("div",{staticClass:"cs--list"},[t._l(t.get_categor,(function(e,s){return[e.catname?i("div",{key:s,on:{click:function(s){return t.goToPublish(e)}}},[i("img",{attrs:{src:e.image,alt:"",srcset:""}}),i("span",[t._v(t._s(e.catname))])]):t._e()]}))],2)])])],1)])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[s("img",{attrs:{src:"",alt:"",srcset:""}}),s("p",[t._v("Hi，欢迎来到电报")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pc-footer"},[s("div",[s("span",[t._v("info@purpleduckclub.com")]),s("span",[t._v("+33 01 84 78 19 99")])]),s("div",[t._v("© 2020-2022XXXXX有限公司版权所有 闽ICP备2021017736号-9")])])}],v={components:{},data(){return{banners:[],keyword:"",show:!1,faxuqiu:!1,get_categor:[],fuwu:[],type:1,notice:[],showMsgBox:!1,showService:!1,serviceType:1,serviceIndex:1,links:{},basic:{},catid:0,categorList:[],gongxu_type:0,option2:[{text:"供/需",value:0},{text:"服务",value:1},{text:"需求",value:2}],guaranteeids:0,guarantorList:[{text:"不限",value:0},...this.$store.state.guarantorList],loadAll:!1,list:[],pageSize:12,page:1,scrollHeight:0,scrollY:0}},watch:{type(t){this.$axios.post("/api.php?op=recommend&type="+t).then(t=>{200===t.code&&(this.fuwu=t.data)})},serviceIndex(){this.getList(!0)},catid(){this.getList(!0)},gongxu_type(){this.getList(!0)},guaranteeids(){this.getList(!0)}},created(){this.$nextTick(()=>{sessionStorage.getItem("isFirst")||(this.showMsgBox=!0,sessionStorage.setItem("isFirst",1))}),this.getBanner(),this.getLink(),this.getNotice(),this.getList(),this.getBasic(),this.$nextTick(()=>{this.getCategor(),this.countScroll()})},computed:{categorMap(){const t={};return this.get_categor.map(e=>{t[e.catname]=e.image}),t}},methods:{goDanbaoDetail(t){this.$router.push({name:"guarantor_details",query:{id:t.guarantee[0].id}})},goBanner(t){1===+t.skip_type?this.$router.push({name:"service",query:{id:t.skip_detail_id,catid:t.catid}}):2===+t.skip_type?this.$router.push({name:"article",query:{id:t.id}}):3===+t.skip_type&&this.$router.push({name:"guarantor_details",query:{id:t.id}})},countScroll(){this.$nextTick(()=>{this.scrollHeight=document.querySelector(".pc-index").clientHeight})},handlerScroll(t){if(this.loadAll)return;let e=t.currentTarget;(this.list||[]).length&&e.scrollTop+e.clientHeight>=e.scrollHeight&&(this.loadAll=(this.list||[]).length<this.pageSize,this.getList(!1))},getBanner(){this.$axios.post("/api.php?op=lunbo").then(t=>{200===t.code&&(console.log("banner",t.data),this.banners=t.data)})},getList(t){!0===t&&(this.list=[],this.page=1),console.log("this.page",this.page),console.log({keyword:"",catid:+(this.catid||0)||"",gongxu_type:this.gongxu_type,guaranteeids:this.guaranteeids,pageSize:12,pageNum:this.page}),this.$axios.post("/api.php?op=search_api&action=keyword",{keyword:"",catid:+(this.catid||0)||"",gongxu_type:this.gongxu_type,guaranteeids:this.guaranteeids,pageSize:this.pageSize,pageNum:this.page}).then(e=>{if(console.log("-------",e),200===e.code){if(e.data.lists.map(t=>{t.tags=[],(t.advantage_tag||[]).map(e=>{let s=window.cnchar.spell(e).split("")[0];t.tags.push({title:e,one:s})})}),!0!==t){if(this.list=this.list.concat(e.data.lists),!e.data.lists.length)return void(this.loadAll=!0);this.page++}else this.list=e.data.lists;this.$forceUpdate()}})},goToPublish(t){this.showService=!1,this.$router.push({name:"push_service",query:{catid:t.catid,catname:t.catname,publishtype:this.serviceType}})},getBasic(){this.$axios.post("/api.php?op=home_config").then(t=>{200===t.code&&(this.basic=t.data)})},getCategor(){this.get_categor=this.deepCopy(this.$store.state.categorList),this.get_categor.unshift({image:s("23b1"),text:"全部"}),this.categorList=[{text:"全部分类",value:0},...this.$store.state.categorList]},getServiceList(){this.$axios.post("/api.php?op=service_api&action=lists").then(t=>{200===t.code&&(this.fuwu=t.data.lists)})},getDemendList(){this.$axios.post("/api.php?op=demand_api&action=lists").then(t=>{200===t.code&&(this.fuwu=t.data.lists)})},getLink(){this.$axios.post("/api.php?op=group_link").then(t=>{console.log("group_link",t.data),200===t.code&&(this.links=t.data)})},goSearch(t){this.$router.push({name:"class_type",query:{catid:t.catid}})},goServiceDetail(t){this.$router.push({name:"service",query:{id:t.id,catid:t.catid}})},getNotice(){this.$axios.post("/api.php?op=announcement_api&action=lists").then(t=>{200===t.code&&(this.notice=t.data,console.log("notice",t))})},goToSearch(){this.$router.push({name:"search_list",query:{keyword:this.keyword}})},goPage(t){this.$router.push({name:t})},goActicle(t){this.$router.push({name:"article",query:{id:t.id}})}},activated(){this.showFooter=!1,this.$nextTick(()=>{this.showFooter=!0}),this.scrollY&&(document.querySelector(".container").scrollTop=this.scrollY)},beforeRouteLeave(t,e,s){this.scrollY=document.querySelector(".container").scrollTop,s()}},m=v,A=(s("1f55"),Object(p["a"])(m,d,h,!1,null,null,null)),f=A.exports,y={components:{mobile:u,pc:f},computed:{isMobile(){return this.$store.state.isMobile}}},w=y,x=Object(p["a"])(w,i,a,!1,null,"6dc2b054",null);e["default"]=x.exports},"1f55":function(t,e,s){"use strict";s("547f")},"23b1":function(t,e){t.exports="data:image/png;base64,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"},"395e":function(t,e,s){"use strict";s("7bf8")},"547f":function(t,e,s){},"7bf8":function(t,e,s){},8061:function(t,e,s){},a04e:function(t,e,s){},ad95:function(t,e){t.exports="data:image/png;base64,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"},c6b7:function(t,e,s){t.exports=s.p+"static/img/img61.9996c978.png"},ca44:function(t,e,s){"use strict";s("8061")},d464:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArBJREFUSEutlk9IVFEUxr9znmPaYI7/IrSo3BS66w/pKG1cSAQF1YhtSiGCgsCgAtGZroNEuGkRrqSIWoRKUEmLFhHlzHtYLWoxVItooYSlM29UUsGZe+KJo1LiaDNv99479/vdc+4733mETVyj5tV8txT2geQkRJqL64Iv0i2ndAGp95NmRwXB9YwgB5ee3S72drWnW78hwGTYf5iJnwIoXyWYHUAsrJpBuA9I/l+7zQwgAopZqouATkDWynQZIBGVa0/rRknyRPGPyHtqGkymNrNmicY/XXNv+e1+IMCZdWq8DLDDHbs1XK2LsYwxnZztL6vvmXFuyTbVOYHcBbAt3YGtV6JJy3+EYTSIRi6zjs65+F75ITVLMVNNA1KwSXEn/J8z+PVO7chJoEUEeSAdKfEGBylm3pT/EF8GRM1AI4gLZ2VqaJf3ztxEqHMfU85ZJ0BooS9jQMwMXBdhN7P+7qkJPiSCOGXXgkoifMgY4DSgIa5WDeQYSDzy1HV/i1vqQFLjBBEmMwY4pYhaqgkaVQbpYY83+Mq21B6t0UKsF7IDMAM+CFeDtFXiDb6Mj3TuTSZyzmcFMPO2vWzB5booml3Cif7S2u7P0bC/FjAaiTGecQa2qdq0wOOIFY1G+uAb1LapLgmwXRihjAHRcOA0CB4wD5bUqGmn4UgbxxhIkJ7vzWqjRUP+amY6pYUNFv2mqD74mmwrcEWEegDkbbLhVsxOFMdGdAMLvFozEemvRbXcT6T0otk5bjgVm3cvO6CRRwmIn4C2DZnd0me56HWEj56xyFDKUdcdOFFLXSCRXgC5a4BWMhjwGfGd++uTMH6WetWX1bFpJ5odVkcF8gSE0qwOnNVi8WFVqQ08B6Q66yMzJTgRulFg8NbHgBzP+tBPQWTAZ9gVVbdAuLzR35Y/oi1XPGaMPS0AAAAASUVORK5CYII="},ede7:function(t,e){t.exports="data:image/png;base64,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"}}]);