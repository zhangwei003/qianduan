(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e728310"],{"208c":function(e,s,t){},"28d2":function(e,s,t){},7803:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e.isMobile?t("mobile",{staticClass:"mobile",attrs:{id:"mobile"}}):t("pc",{staticClass:"pc",attrs:{id:"pc"}})],1)},i=[],o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"n-login"},[e._m(0),t("h3",[e._v(" 欢迎注册 "),t("br"),e._v(" "+e._s(e.basic.home_title)+" ")]),t("div",[t("van-cell-group",[t("van-field",{attrs:{label:"",placeholder:"请输入用户名"},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}})],1),t("van-cell-group",[t("van-field",{attrs:{type:"password",label:"",placeholder:"请输入密码"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}})],1),t("van-cell-group",[t("van-field",{attrs:{type:"password",label:"",placeholder:"请确认密码"},model:{value:e.password2,callback:function(s){e.password2=s},expression:"password2"}})],1),t("van-cell-group",[t("van-row",[t("van-col",{attrs:{span:"12"}},[t("van-field",{attrs:{label:"",placeholder:"请输入验证码"},model:{value:e.code,callback:function(s){e.code=s},expression:"code"}})],1),t("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[e.imgUrl?t("van-image",{attrs:{width:"100px",fit:"contain",src:e.imgUrl},on:{click:e.refreshImage}}):e._e()],1)],1)],1),t("router-link",{attrs:{to:{name:"login"}}},[t("div",{staticClass:"n-login-tip"},[e._v("已有账号，去登录")])]),t("van-checkbox",{staticClass:"agree",attrs:{"checked-color":"#EEC67F","icon-size":"16px"},model:{value:e.checkbox,callback:function(s){e.checkbox=s},expression:"checkbox"}},[e._v("我已经阅读并同意《用户协议》与《隐私保护》")]),t("div",{staticClass:"n-login-btn",on:{click:e.register}},[e._v("注册")])],1)])},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"mui-content"},[t("ul",{staticClass:"fixd-service-item-my"},[t("a",{attrs:{onclick:"window.history.back();"}},[t("span",{staticClass:"mui-icon mui-icon-arrowleft"})]),t("li",{staticStyle:{width:"87%"}})])])}],c={data(){return{imgUrl:"",username:"",password:"",password2:"",checkbox:!0,code:"",basic:{}}},created(){this.refreshImage(),this.getBasic()},methods:{getBasic(){this.$axios.post("/api.php?op=home_config").then(e=>{200===e.code&&(this.basic=e.data)})},refreshImage(){this.code_key=Math.random(),this.$axios.post("/api.php?op=image_code&action=register",{code_key:this.code_key},{hideLoading:!0}).then(e=>{200===e.code&&(this.imgUrl=e.data.image_content)})},register(){return this.username?this.password?this.password2?this.password!==this.password2?this.$toast.fail("两次密码不一致！"):void this.$axios.post("/api.php?op=user_api&action=register",{username:this.username,password:this.password,image_code:this.code,code_key:this.code_key}).then(e=>{200===e.code&&(this.$toast.success("注册成功！"),setTimeout(()=>{this.$router.push({name:"login"})},1500))}).finally(()=>{this.refreshImage()}):this.$toast.fail("请确认密码！"):this.$toast.fail("请填写密码！"):this.$toast.fail("请输入用户名！")}}},n=c,l=(t("d121"),t("2877")),p=Object(l["a"])(n,o,r,!1,null,"6c04a2f4",null),d=p.exports,h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"pc-login"},[e._m(0),t("div",{staticClass:"pc-login--content"},[t("div",[t("h3",[e._v("注册账号")]),t("div",{staticClass:"pc-login--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"pc-login--input",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})]),t("div",{staticClass:"pc-login--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"pc-login--input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),t("div",{staticClass:"pc-login--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],staticClass:"pc-login--input",attrs:{type:"password",placeholder:"请重复输入密码"},domProps:{value:e.password2},on:{input:function(s){s.target.composing||(e.password2=s.target.value)}}})]),t("div",{staticClass:"pc-login--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(s){s.target.composing||(e.code=s.target.value)}}}),e.imgUrl?t("van-image",{attrs:{fit:"contain",src:e.imgUrl},on:{click:e.refreshImage}}):e._e()],1),t("div",{staticClass:"pc-login--forget"},[t("div"),t("router-link",{attrs:{to:{name:"login"}}},[t("span",[e._v("已有账号，去登录")])])],1),t("div",{staticClass:"pc-login--btn",on:{click:e.register}},[e._v("注册")]),t("div",{staticClass:"pc-login--agree"},[t("van-checkbox",{attrs:{"icon-size":"14","checked-color":"#EEC67F"},model:{value:e.checked2,callback:function(s){e.checked2=s},expression:"checked2"}},[e._v("我已经阅读并同意《用户协议》与《隐私保护》")])],1)])]),e._m(1)])},u=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"pc-login--title"},[a("h3",[a("img",{attrs:{src:t("ede7"),alt:"",srcset:""}}),e._v(" 电报信息平台 ")]),a("p",[e._v("Telegraph information platform")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"pc-login--footer"},[t("div",[t("span",[e._v("帮助")]),t("span",[e._v("隐私")]),t("span",[e._v("条款")])]),t("p",[e._v("©2022 Telegraph information platform")])])}],m={data(){return{checked2:!0,imgUrl:"",username:"",password:"",password2:"",code:"",basic:{}}},created(){this.refreshImage(),this.getBasic()},methods:{getBasic(){this.$axios.post("/api.php?op=home_config").then(e=>{200===e.code&&(this.basic=e.data)})},refreshImage(){this.code_key=Math.random(),this.$axios.post("/api.php?op=image_code&action=register",{code_key:this.code_key},{hideLoading:!0}).then(e=>{200===e.code&&(this.imgUrl=e.data.image_content)})},register(){return this.username?this.password?this.password2?this.password!==this.password2?this.$toast.fail("两次密码不一致！"):void this.$axios.post("/api.php?op=user_api&action=register",{username:this.username,password:this.password,image_code:this.code,code_key:this.code_key}).then(e=>{200===e.code&&(this.$toast.success("注册成功！"),setTimeout(()=>{this.$router.push({name:"login"})},1500))}).finally(()=>{this.refreshImage()}):this.$toast.fail("请确认密码！"):this.$toast.fail("请填写密码！"):this.$toast.fail("请输入用户名！")}}},g=m,v=(t("c950"),Object(l["a"])(g,h,u,!1,null,null,null)),f=v.exports,A={components:{mobile:d,pc:f},computed:{isMobile(){return this.$store.state.isMobile}}},w=A,b=Object(l["a"])(w,a,i,!1,null,"f5e09c2e",null);s["default"]=b.exports},c950:function(e,s,t){"use strict";t("28d2")},d121:function(e,s,t){"use strict";t("208c")},ede7:function(e,s){e.exports="data:image/png;base64,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"}}]);