(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28e0af9e"],{"20f5":function(t,a){t.exports="data:image/png;base64,UklGRiAAAABXRUJQVlA4TBMAAAAvJ8AJEAcQEREAEsL/82pE/1MDAA=="},4496:function(t,a){t.exports="data:image/png;base64,UklGRkQCAABXRUJQVlA4TDcCAAAvK8AKELVIsm3b1J6vKX9Q+v2fdWN2xGb/y7z33LB6YttaYdy2kSP2/9ycd+8qNdO2jfkTGowt59hAAQCAYDPba7a9dLvZtu2kZkQn27aRbNu2iaBt2zgEtv0oathuyOAN9bAMt/AI29AHCQ1hTbcMCTLhFf5V1eA3aGzIJu1CB85U+IH5Rjs0wyS8qPDZiJjScP2ob4JgwNeNjgIB88agGhRNaOgGH8Lfk53A6/YCJ3hUSE5bgxhc+hwCqlug+ObzhlFWI1showYFJi+F+QWgnN2Q4V3YXAZWoxrFGtjmBL4KATW0CeuHQW0ONAtfe8DVOJgQnhYAU2AV/mGmEiBdN6CmwLNBY0YQpA3dlDdCfUbDXwOtFDgURjKCRN1AmhIMCncLwAnQ4KMlECmftGE2tg/kG2G8UnYhhT+D7rEgRiG6cr3WLaxGtqDAjcHdMpgk0MCX/7aQ9K2DbkxpI7ayQbwGl5uwuqBToe9H2gYCeFUI6YIHhZKjQLJ2YfhPG9ObELoCS3hR6P+T0/CDT4UGQNUNx/7QF1rLXy7WUm69XHCisNbgJCwABVkKf0Haj7rp9H7shdb/k/O9orqlDagwq3ANekProKFFg4+GV1XHYJ6BdWgwp3D1v7oGewapP7ovCqcKq9fv0Te6H9T3PmOwr9AH+EqrhhHc6qcO+BTG39SEasi0kdcV1NSUA2DvGdfCwC/Wy/16sa79pGEPFZ/heiq46YN75wuyOxoO0AodswXlv+qBXAEA"},"55cd":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"mui-content push-content"},[i("ul",{staticClass:"fixd-service-item-my"},[t._m(0),i("li",{staticStyle:{width:"87%"}},[t._v("发"+t._s(1===t.publishtype?"服务":"需求")+"-"+t._s(t.catname))])]),i("div",{staticClass:"mt55"}),i("div",{staticClass:"push-top-msg",staticStyle:{display:"none"}},[t._v("  建议您选择担保商，提高内容曝光率")]),i("form",{staticClass:"mui-input-group content-detail"},[1===t.publishtype?i("div",{staticClass:"form-list"},[i("div",{staticClass:"mui-input-row after"},[t._m(1),i("div",{staticClass:"tips",staticStyle:{"margin-top":"30px","border-radius":"5px"}},[t._v("Tips：描述越详细，咨询率越高")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"textarea",staticStyle:{"margin-bottom":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","border-bottom":"1px solid rgb(245, 243, 243)",color:"rgb(48, 49, 51)","font-size":"18px",height:"70px"},attrs:{rows:"3",placeholder:"请输入服务标题",maxlength:"50"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}}),i("em",[t._v(t._s(t.title.length)+"/50")])]),i("div",{staticClass:"mui-input-row after"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"textarea",staticStyle:{"margin-top":"0px","margin-bottom":"0px","border-top-left-radius":"0px","border-top-right-radius":"0px",color:"rgb(96, 98, 102)","font-size":"16px"},attrs:{rows:"4",placeholder:"请输入服务内容，越详细咨询率越高",maxlength:"5000"},domProps:{value:t.description},on:{input:function(a){a.target.composing||(t.description=a.target.value)}}}),i("em",[t._v(t._s(t.description.length)+"/5000")])]),i("div",{staticClass:"mui-input-row after"},[t._m(2),i("ul",{staticClass:"push-lm-lixt"},[i("li",{on:{click:function(a){t.showXuQiuLeiMu=!0}}},[i("span",{staticClass:"titlepp"},[t._v("服务类目")]),i("span",{staticClass:"contentpp",class:t.catname?"active-fff":""},[t._v(t._s(t.catname||"请选择"))]),i("span",{staticClass:"mui-icon mui-icon-arrowright"})]),i("li",{on:{click:function(a){t.showYouXuanTiaoJian=!0}}},[i("span",{staticClass:"titlepp"},[t._v("服务标签")]),0===t.selectedTag.length?i("span",{staticClass:"contentpp"},[t._v("请选择")]):[i("span",{staticClass:"contentpp"},t._l(t.selectedTag,(function(a){return i("font",{key:a,staticClass:"cs"},[t._v(t._s(a))])})),1)],i("span",{staticClass:"mui-icon mui-icon-arrowright"})],2)])]),i("div",{staticClass:"mui-input-row after",staticStyle:{"margin-top":"10px"}},[i("label",{},[i("span",{staticClass:"bluecc"}),t._v("联系方式 "),i("a",{on:{click:t.showTip}},[i("img",{staticClass:"w16px",attrs:{"data-cfsrc":"img/info@2x.png",src:s("8516")}})])]),i("div",{staticClass:"form-list-list linkbox"},[i("div",{staticClass:"form-list-detail"},[i("span",[t._v("Telegram")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.telegram,expression:"telegram"}],attrs:{type:"text",placeholder:"请输入Telegram",maxlength:"50"},domProps:{value:t.telegram},on:{input:function(a){a.target.composing||(t.telegram=a.target.value)}}}),i("img",{attrs:{src:s("20f5")}})])])]),i("div",{staticClass:"mui-input-row after"},[i("ul",{staticClass:"push-lm-lixt",staticStyle:{"margin-top":"10px"}},[i("li",{staticClass:"imgboxpp",staticStyle:{display:"inherit"}},[t._m(3),i("label",{staticClass:"contentimg w100px upload-img"},[i("van-uploader",{attrs:{"after-read":t.afterRead,multiple:"","max-count":5},model:{value:t.fileList,callback:function(a){t.fileList=a},expression:"fileList"}})],1)])])]),i("div",{staticClass:"mui-input-row after",staticStyle:{"margin-top":"10px"}},[t._m(4),i("div",{staticStyle:{width:"100%","overflow-x":"scroll"}},[i("ul",{staticClass:"push-lm-lixt2",staticStyle:{width:"520px"}},[i("li",{staticClass:"zbxz",class:t.guaranteeids?"":"dbslist-active",on:{click:function(a){t.guaranteeids=0}}},[t._m(5),t._m(6)]),t._l(t.guarantList,(function(a,s){return i("li",{key:s,staticClass:"dbslist",class:t.guaranteeids===a.id?"dbslist-active":"",on:{click:function(s){t.guaranteeids=a.id}}},[i("div",{staticClass:"top-img"},[i("img",{attrs:{src:a.thumb}})]),i("div",{staticClass:"bottom-imfo"},[i("p",[t._v(t._s(a.title))]),i("a",{staticClass:"b-bendd",attrs:{target:"_blank",href:"#/guarantor_details?id="+a.id}},[t._v("查看详情")])])])}))],2),t.guaranteeids?i("div",{staticClass:"pos-msg"},[t._m(7),t._v("   不按约定执行会进入黑名单 ")]):t._e()])])]):i("div",{staticClass:"form-list"},[i("div",{staticClass:"mui-input-row after"},[t._m(8),i("div",{staticClass:"tips",staticStyle:{"margin-top":"30px","border-radius":"5px"}},[t._v("Tips：描述越详细，咨询率越高")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"textarea",staticStyle:{"margin-bottom":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","border-bottom":"1px solid rgb(245, 243, 243)",color:"rgb(48, 49, 51)","font-size":"18px",height:"70px"},attrs:{rows:"3",placeholder:"请输入需求标题",maxlength:"50"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}}),i("em",[t._v(t._s(t.title.length)+"/50")])]),i("div",{staticClass:"mui-input-row after"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"textarea",staticStyle:{"margin-top":"0px","margin-bottom":"0px","border-top-left-radius":"0px","border-top-right-radius":"0px",color:"rgb(96, 98, 102)","font-size":"16px"},attrs:{rows:"4",placeholder:"请输入服务内容，越详细咨询率越高",maxlength:"5000"},domProps:{value:t.description},on:{input:function(a){a.target.composing||(t.description=a.target.value)}}}),i("em",[t._v(t._s(t.description.length)+"/5000")])]),i("div",{staticClass:"mui-input-row after"},[t._m(9),i("ul",{staticClass:"push-lm-lixt"},[i("li",{on:{click:function(a){t.showXuQiuLeiMu=!0}}},[i("span",{staticClass:"titlepp"},[t._v("需求类目")]),i("span",{staticClass:"contentpp",class:t.catname?"active-fff":""},[t._v(t._s(t.catname||"请选择"))]),i("span",{staticClass:"mui-icon mui-icon-arrowright"})]),i("li",{on:{click:function(a){t.showYouXuanTiaoJian=!0}}},[i("span",{staticClass:"titlepp"},[t._v("优选条件")]),0===t.selectedTag.length?i("span",{staticClass:"contentpp"},[t._v("请选择")]):[i("span",{staticClass:"contentpp"},t._l(t.selectedTag,(function(a){return i("font",{key:a,staticClass:"cs"},[t._v(t._s(a))])})),1)],i("span",{staticClass:"mui-icon mui-icon-arrowright"})],2)])]),i("div",{staticClass:"mui-input-row after",staticStyle:{"margin-top":"10px"}},[i("label",{},[i("span",{staticClass:"bluecc"}),t._v("联系方式 "),i("a",{on:{click:t.showTip}},[i("img",{staticClass:"w16px",attrs:{"data-cfsrc":"img/info@2x.png",src:s("8516")}})])]),i("div",{staticClass:"form-list-list linkbox"},[i("div",{staticClass:"form-list-detail"},[i("span",[t._v("Telegram")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.telegram,expression:"telegram"}],attrs:{type:"text",placeholder:"请输入Telegram",maxlength:"50"},domProps:{value:t.telegram},on:{input:function(a){a.target.composing||(t.telegram=a.target.value)}}}),i("img",{attrs:{src:s("20f5")}})])])])]),i("div",{staticClass:"mui-button-row publish",staticStyle:{display:"flex"}},[i("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button"},on:{click:t.publish}},[t._v("立即发布")])])]),i("van-popup",{attrs:{position:"bottom",closeable:!0},model:{value:t.showXuQiuLeiMu,callback:function(a){t.showXuQiuLeiMu=a},expression:"showXuQiuLeiMu"}},[i("div",{staticClass:"link-box push-box",staticStyle:{display:"block"},attrs:{id:"catelogListBox"}},[i("div",{staticClass:"qx",on:{click:function(a){t.showXuQiuLeiMu=!1}}},[t._v("取消")]),i("h5",{staticClass:"title"},[t._v("需求类目")]),i("div",{staticClass:"form-list"},[i("div",{staticClass:"mui-input-row change"},t._l(t.get_categor,(function(a,s){return i("span",{key:s,class:+a.catid===+t.catid?"active":"",on:{click:function(s){return t.choose(a)}}},[t._v(t._s(a.catname))])})),0)])])]),i("van-popup",{attrs:{position:"bottom",closeable:!0},model:{value:t.showYouXuanTiaoJian,callback:function(a){t.showYouXuanTiaoJian=a},expression:"showYouXuanTiaoJian"}},[i("div",{staticClass:"link-box push-box",staticStyle:{display:"block"},attrs:{id:"catelogConListBox"}},[i("div",{staticClass:"qx",on:{click:function(a){t.showYouXuanTiaoJian=!1}}},[t._v("取消")]),i("div",{staticClass:"qd",on:{click:t.confirmYouXuanTiaoJian}},[t._v("确定")]),i("h5",{staticClass:"title"},[t._v("优选条件")]),i("div",{staticClass:"form-list"},[i("div",{staticClass:"mui-input-row change"},t._l(t.tagList,(function(a){return i("span",{key:a,class:t.activeTag.includes(a)?"active":"",on:{click:function(s){return t.chooseTag(a)}}},[t._v(t._s(a))])})),0),i("div",{staticClass:"form-tips"},[t._v("最多选3个")])])])])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{onclick:"window.history.back();"}},[s("span",{staticClass:"mui-icon mui-icon-arrowleft"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{},[s("span",{staticClass:"bluecc"}),t._v("服务名称 ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",[s("span",{staticClass:"bluecc"}),t._v("基本信息 ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"titlepp w100px"},[t._v(" 服务图片 "),s("span",{staticClass:"tipspp"},[t._v("(选填，最多5张)")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{staticStyle:{position:"relative"}},[s("span",{staticClass:"bluecc"}),t._v("选择担保商 "),s("a",{staticClass:"ckqb_cre",staticStyle:{position:"absolute",top:"-4px",right:"0px"},attrs:{target:"_blank",href:"./guarantor_list"}},[t._v(" 查看全部 "),s("span",{staticClass:"mui-icon mui-icon-arrowright"})])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"top-img"},[i("img",{attrs:{src:s("4496")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bottom-imfo"},[s("p",{staticStyle:{padding:"0px 5px"}},[t._v("暂不选择 担保商")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("a",[i("img",{staticClass:"w16px",staticStyle:{display:"block",float:"left"},attrs:{src:s("8516")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{},[s("span",{staticClass:"bluecc"}),t._v("需求名称 ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",[s("span",{staticClass:"bluecc"}),t._v("基本信息 ")])}],l={data(){return{showXuQiuLeiMu:!1,showYouXuanTiaoJian:!1,active:1,title:this.$route.query.title||"",description:"",catid:+(this.$route.query.catid||0),catname:this.$route.query.catname,publishtype:+(this.$route.query.publishtype||1),get_categor:[],tagList:[],selectedTag:[],activeTag:[],telegram:"",fileList:[],guarantList:[],guaranteeids:""}},created(){this.getCategor(),this.getTag(),this.getGuarantList()},methods:{getGuarantList(){this.$axios.get("/api.php?op=guarantor_api&action=lists&pageNum=1&pageSize=1").then(t=>{200===t.code&&(this.guarantList=t.data.lists)})},afterRead(t){t.status="uploading",t.message="上传中...",this.$axios.post("/api.php?op=upload",{file:t.file}).then(a=>{0===a.code?(t.status="success",t.message="",t.realPath=a.data.path):(t.status="failed",t.message="上传失败",this.$toast.fail(a.message))})},chooseTag(t){this.activeTag.includes(t)?this.activeTag.splice(this.activeTag.indexOf(t),1):(this.activeTag.length>2&&this.activeTag.splice(2,1),this.activeTag.push(t))},getTag(){this.$axios.get("/api.php?op=tag").then(t=>{200===t.code&&(this.tagList=t.data)})},confirmYouXuanTiaoJian(){this.selectedTag=this.activeTag,this.showYouXuanTiaoJian=!1,this.$forceUpdate()},choose(t){this.catname=t.catname,this.catid=t.catid,this.showXuQiuLeiMu=!1},getCategor(){this.$axios.get("/api.php?op=get_categor").then(t=>{200===t.code&&(this.get_categor=t.data)})},prev(){this.active--},next(){this.active++},showTip(){this.$dialog.alert({title:"系统提示",message:"请勿填写手机号，只有填写Telegram账号才可以直接被需求方通过小飞机联系到。"})},publish(){return this.title?this.description?this.selectedTag?this.telegram?void(1===this.publishtype?this.$axios.post("/api.php?op=service_api&action=issue",{catid:this.catid,title:this.title,description:this.description,tag:this.selectedTag,image:(this.fileList[0]||{}).realPath,telegram:this.telegram}).then(t=>{200===t.code?this.$toast.success(t.message):this.$toast.fail(t.message)}):this.$axios.post("/api.php?op=demand_api&action=issue",{catid:this.catid,title:this.title,description:this.description,tag:this.selectedTag,telegram:this.telegram}).then(t=>{200===t.code?this.$toast.success(t.message):this.$toast.fail(t.message)})):this.$toast.fail("请填写联系方式"):this.$toast.fail("请选择标签"):this.$toast.fail("请填写服务/需求内容"):this.$toast.fail("请填写标题")}}},o=l,c=(s("824b"),s("2877")),n=Object(c["a"])(o,i,e,!1,null,"14dea4fb",null);a["default"]=n.exports},"75a3":function(t,a,s){},"824b":function(t,a,s){"use strict";s("75a3")},8516:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IArs4c6QAAAH5QTFRFAAAAAP//AFX/AJn/HI7/F4v/EZn/Hpb/GZT/GI//F5H/GY//GY7/GJL/GI7/FpL/GY//GZD/GY//F5D/GJD/GJD/F5D/F5D/GJH/GJD/GJH/F5D/GI//GJD/GZH/GJD/GJD/GJD/GZH/GJH/GJD/GJD/GJD/GI//F5D/GJD/6s2VIAAAACl0Uk5TAAEDBQkLDxEfICwyND8/RFJcXWNqdY6Pl5egpqmqrr/HztDZ3vb5+fzp+3usAAABGElEQVR42rWU646CQAxGvaLiBVERkKsgwnn/F9wEHZiykEyy2fkztDmkX/q1M5v9z1k5XhhFoeesJpFjXPE9VXwcRewMaIokCJKiATL7N3OtIXetT2BdcqivA2ThQ3nWM+cS/IWAfEjX8r91Cr6oBff5UMD8DlpFuyZVzP712isqpe7VZ5RdrQc8uoolWdcf6DXf4NarB9WvmFyTcjppQU789aLCnTLBpfo45NBYWv5w0AKrwWk/PAotvXm/N1pY4LV3SKJld7DTwoSwvSOCaSggMoeMyknhA0gJly2QUNcC2UwJXVQzpS0S6myRBgtIM1iMyha2Y6Mihm75fC5Hh85ofM0WwWylhsvpji2n4ZqbPRiGT8/fzg/jhygJbTnD9AAAAABJRU5ErkJggg=="}}]);