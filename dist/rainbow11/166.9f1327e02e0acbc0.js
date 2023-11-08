"use strict";(self.webpackChunkrainbow11=self.webpackChunkrainbow11||[]).push([[166],{3166:(R,h,a)=>{a.r(h),a.d(h,{LoginModule:()=>L});var g=a(6814),r=a(95);class b{constructor(){this.password="password",this.currentPassword="password",this.confirmPassword="password",this.showPassword=!1,this.showConfPassword=!1,this.showCurrentPassword=!1}showHidePass(){"password"===this.password?(this.password="text",this.showPassword=!0):(this.password="password",this.showPassword=!1)}showHideConfirmPass(){"password"===this.confirmPassword?(this.confirmPassword="text",this.showConfPassword=!0):(this.confirmPassword="password",this.showConfPassword=!1)}showHideCurrentPass(){"password"===this.currentPassword?(this.currentPassword="text",this.showCurrentPassword=!0):(this.currentPassword="password",this.showCurrentPassword=!1)}}var d=a(4766),u=a(1247),o=a(5879),p=a(603),_=a(1021),m=a(594),c=a(6610);function v(t,s){1&t&&(o.O4$(),o.kcU(),o.TgZ(0,"p",25),o._uU(1,"Please enter username"),o.qZA())}function Z(t,s){1&t&&(o.O4$(),o.kcU(),o.TgZ(0,"p",25),o._uU(1,"Please enter password"),o.qZA())}function F(t,s){1&t&&(o.O4$(),o.kcU(),o.TgZ(0,"p",25),o._uU(1,"Please enter valid password"),o.qZA())}let C=(()=>{var t;class s extends b{constructor(n,e,l,f){super(),this.authService=n,this.localStorageService=e,this.router=l,this.notificationService=f,this.defaultLoginForm={username:new r.NI("",[r.kI.required]),password:new r.NI("",[r.kI.required,r.kI.pattern(u.e.password)])},this.loginForm=new r.cw(this.defaultLoginForm,[])}ngOnInit(){}login(){if(this.loginForm.markAllAsTouched(),!this.loginForm.valid)return this.notificationService.showError("Please enter valid username and password");this.authService.loginUser(this.loginForm.value).subscribe(n=>{if(n?.code!=d.M)return this.notificationService.showError("Invalid Username and password");this.localStorageService.setLogger(n?.data),this.router.navigateByUrl("/game/home")},n=>this.notificationService.showError(n?.message||"Error while login please refresh the page"))}}return(t=s).\u0275fac=function(n){return new(n||t)(o.Y36(p.e),o.Y36(_.n),o.Y36(m.F0),o.Y36(c.g))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],features:[o.qOj],decls:44,vars:4,consts:[[1,"bg-outer","h-100vh"],[1,"h-100vh","o-auto","bg-overlay"],[1,"h-100","container","py-5"],[1,"row","d-flex","align-items-center","justify-content-center","h-100"],[1,"col-xl-5","col-lg-5","col-md-10","col-sm-12","col-12"],[1,"login-bg","mb-5","p-5"],[1,"my-5"],[3,"formGroup","ngSubmit"],[1,"logo","mx-auto","mb-5"],["src","../../../../assets/img/logo.png","alt","logo",1,"h-100","w-100"],[1,"mb-3","position-relative"],["type","email","id","exampleFormControlInput1","placeholder","Username","formControlName","username",1,"form-control","fonts-16"],[1,"icon-fill"],["height","24","width","24","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24"],["d","M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"],["class","fonts-16 txt-red",4,"ngIf"],["type","password","id","exampleFormControlInput1","placeholder","Password","formControlName","password",1,"form-control","fonts-16"],["d","M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z"],[1,"d-flex","align-items-center","my-3","pt-2"],["type","submit",1,"d-flex","align-items-center","rounded-pill","w-100","btn","btn-bg","fonts-18","border-0","bg-purple","py-2","lh-2","me-2","mb-2"],[1,"w-100","d-flex","justify-content-center","fonts-18","bold"],["type","button","routerLink","/register",1,"w-100","btn","btn-bg","rounded-pill","border-0","bg-purple","fonts-18","bold","py-2","lh-2","mb-2"],[1,"fonts-14","text-white","text-center"],["routerLink","/forgot-password",1,"c-blue","text-decoration-none","semibold"],["href","#","target","_blank",1,"c-blue","text-decoration-none","semibold"],[1,"fonts-16","txt-red"]],template:function(n,e){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"form",7),o.NdJ("ngSubmit",function(){return e.login()}),o.TgZ(8,"div",8),o._UZ(9,"img",9),o.qZA(),o.TgZ(10,"div",10),o._UZ(11,"input",11),o.TgZ(12,"span",12),o.O4$(),o.TgZ(13,"svg",13)(14,"title"),o._uU(15,"account"),o.qZA(),o._UZ(16,"path",14),o.qZA()(),o.YNc(17,v,2,0,"p",15),o.qZA(),o.kcU(),o.TgZ(18,"div",10),o._UZ(19,"input",16),o.TgZ(20,"span",12),o.O4$(),o.TgZ(21,"svg",13)(22,"title"),o._uU(23,"key-variant"),o.qZA(),o._UZ(24,"path",17),o.qZA()(),o.YNc(25,Z,2,0,"p",15),o.YNc(26,F,2,0,"p",15),o.qZA(),o.kcU(),o.TgZ(27,"div",18)(28,"button",19)(29,"span",20),o._uU(30," Login "),o.qZA()(),o.TgZ(31,"button",21),o._uU(32,"Registration "),o.qZA()(),o.TgZ(33,"p",22)(34,"a",23),o._uU(35,"Forgot Password ?"),o.qZA()(),o.TgZ(36,"p",22),o._uU(37,"This site is protected by re CAPTCHA and the Google "),o.TgZ(38,"a",24),o._uU(39,"Privacy Policy"),o.qZA(),o._uU(40," and "),o.TgZ(41,"a",24),o._uU(42,"Terms of Service"),o.qZA(),o._uU(43," apply."),o.qZA()()()()()()()()()),2&n&&(o.xp6(7),o.Q6J("formGroup",e.loginForm),o.xp6(10),o.Q6J("ngIf",(null==e.loginForm.controls.username?null:e.loginForm.controls.username.touched)&&(null==e.loginForm.controls.username||null==e.loginForm.controls.username.errors?null:e.loginForm.controls.username.errors.required)),o.xp6(8),o.Q6J("ngIf",(null==e.loginForm.controls.password?null:e.loginForm.controls.password.touched)&&(null==e.loginForm.controls.password||null==e.loginForm.controls.password.errors?null:e.loginForm.controls.password.errors.required)),o.xp6(1),o.Q6J("ngIf",(null==e.loginForm.controls.password?null:e.loginForm.controls.password.touched)&&(null==e.loginForm.controls.password||null==e.loginForm.controls.password.errors?null:e.loginForm.controls.password.errors.pattern)))},dependencies:[g.O5,m.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".icon-fill[_ngcontent-%COMP%]{position:absolute;right:.6rem;top:.7rem}.logo[_ngcontent-%COMP%]{height:5rem;width:14rem}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.bg-outer[_ngcontent-%COMP%]{background:url(bg-login.f015f47067dfb4e0.jpg);background-repeat:no-repeat;background-size:cover;background-blend-mode:darken;overflow:auto}.bg-overlay[_ngcontent-%COMP%]{background-color:#001244ad;background-size:100% 100%;position:absolute;top:0;height:100%;width:100%}.login-bg[_ngcontent-%COMP%]{background:rgba(11,24,53,.47);border:2px solid rgba(255,255,255,.17);-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);margin:0 auto;padding:100px 60px;border-radius:25px}"]}),s})();class w{static MatchValidator(s,i){return n=>{const e=n.get(s),l=n.get(i);return e&&l&&e.value!=l.value?{mismatch:!0}:null}}NumberOnly(s){const i=s.which?s.which:s.keyCode;return!(i>31&&(i<48||i>57))}}function P(t,s){1&t&&(o.TgZ(0,"p",20),o._uU(1,"Please enter first name"),o.qZA())}function T(t,s){1&t&&(o.TgZ(0,"p",20),o._uU(1,"Please enter last name"),o.qZA())}function A(t,s){1&t&&(o.TgZ(0,"p",20),o._uU(1,"Please enter email / mobile number"),o.qZA())}function U(t,s){1&t&&(o.TgZ(0,"p",20),o._uU(1,"Please enter username"),o.qZA())}function k(t,s){1&t&&(o.TgZ(0,"p",20),o._uU(1," Please enter password "),o.qZA())}function y(t,s){1&t&&(o.TgZ(0,"p",20),o._uU(1," Password length must be 8 or more and at least 1 uppercase letter, 1 number and 1 special character! "),o.qZA())}function q(t,s){1&t&&(o.TgZ(0,"p",20),o._uU(1," Confirm password don't match with set password "),o.qZA())}function x(t,s){if(1&t&&(o.TgZ(0,"p",20),o._uU(1),o.qZA()),2&t){const i=o.oxw();o.xp6(1),o.hij("Error : ",i.error,"")}}function M(t,s){1&t&&(o.O4$(),o.kcU(),o.TgZ(0,"p",22),o._uU(1,"Please enter username"),o.qZA())}function O(t,s){1&t&&(o.O4$(),o.kcU(),o.TgZ(0,"p",24),o._uU(1," Password length must be 8 or more and at least 1 uppercase letter, 1 number and 1 special character! "),o.qZA())}function S(t,s){1&t&&(o.O4$(),o.kcU(),o.TgZ(0,"p",24),o._uU(1," Confirm password don't match with set password "),o.qZA())}const J=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:C},{path:"register",component:(()=>{var t;class s{constructor(n,e,l){this.authService=n,this.router=e,this.notificationService=l,this.defaultRegisterForm={first_name:new r.NI("",[r.kI.required,r.kI.pattern(u.e.name)]),last_name:new r.NI("",[r.kI.required,r.kI.pattern(u.e.name)]),email:new r.NI(null,[]),mobile_number:new r.NI("",[r.kI.required,r.kI.pattern(u.e.mobile)]),username:new r.NI("",[r.kI.required]),password:new r.NI("",[r.kI.required,r.kI.pattern(u.e.password)]),confirm_password:new r.NI("",[r.kI.required,r.kI.pattern(u.e.password)])},this.registerForm=new r.cw(this.defaultRegisterForm,[w.MatchValidator("password","confirm_password")])}ngOnInit(){}registerUser(){if(this.registerForm.markAllAsTouched(),!this.registerForm.valid)return this.notificationService.showError("Please enter valid details");this.authService.registerNewUser({first_name:this.registerForm.controls.first_name.value,last_name:this.registerForm.controls.last_name.value,email:this.registerForm.controls.mobile_number.value+"@gmail.com"||0,username:this.registerForm.controls.username.value,password:this.registerForm.controls.password.value,mobile_number:this.registerForm.controls.mobile_number.value}).subscribe(e=>{if(e?.code!=d.M)return this.notificationService.showError(e?.message);this.router.navigateByUrl("/login")},e=>this.notificationService.showError(e?.message||"Please check form details"))}}return(t=s).\u0275fac=function(n){return new(n||t)(o.Y36(p.e),o.Y36(m.F0),o.Y36(c.g))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-registration"]],decls:36,vars:9,consts:[[1,"bg-outer","h-100vh"],[1,"h-100vh","o-auto","bg-overlay"],[1,"h-100","container","py-5"],[1,"row","d-flex","align-items-center","justify-content-center","h-100"],[1,"col-xl-5","col-lg-5","col-md-10","col-sm-12","col-12"],[1,"login-bg","mb-5","p-5"],[3,"formGroup","ngSubmit"],[1,"logo","mx-auto","mb-4"],["src","../../../../assets/img/logo.png",1,"h-100","w-100"],[1,"row"],[1,"col-12","mb-3","position-relative"],["type","text","id","exampleFormControlInput1","placeholder","First Name","formControlName","first_name",1,"form-control","fonts-14"],["class","fonts-14 txt-red",4,"ngIf"],["type","text","id","exampleFormControlInput1","placeholder","Last Name","formControlName","last_name",1,"form-control","fonts-14"],["type","tel","id","exampleFormControlInput1","placeholder","Mobile Number/Email","formControlName","mobile_number",1,"form-control","fonts-14"],["type","text","id","exampleFormControlInput1","placeholder","Username","formControlName","username",1,"form-control","fonts-14"],["type","password","id","exampleFormControlInput1","placeholder","Password","formControlName","password",1,"form-control","fonts-14"],["type","password","id","exampleFormControlInput1","placeholder","Confirm Password","formControlName","confirm_password",1,"form-control","fonts-14"],["type","submit",1,"fonts-18","rounded-pill","w-100","btn","btn-bg","border-0","semibold","bg-purple","py-2","lh-2","me-2","mb-2"],["routerLink","/login",1,"mb-3","text-center","text-white","back-login",2,"cursor","pointer"],[1,"fonts-14","txt-red"]],template:function(n,e){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div")(7,"form",6),o.NdJ("ngSubmit",function(){return e.registerUser()}),o.TgZ(8,"div",7),o._UZ(9,"img",8),o.qZA(),o.TgZ(10,"div",9)(11,"div",10),o._UZ(12,"input",11),o.YNc(13,P,2,0,"p",12),o.qZA(),o.TgZ(14,"div",10),o._UZ(15,"input",13),o.YNc(16,T,2,0,"p",12),o.qZA(),o.TgZ(17,"div",10),o._UZ(18,"input",14),o.YNc(19,A,2,0,"p",12),o.qZA(),o.TgZ(20,"div",10),o._UZ(21,"input",15),o.YNc(22,U,2,0,"p",12),o.qZA(),o.TgZ(23,"div",10),o._UZ(24,"input",16),o.YNc(25,k,2,0,"p",12),o.YNc(26,y,2,0,"p",12),o.qZA(),o.TgZ(27,"div",10),o._UZ(28,"input",17),o.YNc(29,q,2,0,"p",12),o.qZA(),o.TgZ(30,"button",18),o._uU(31,"Submit"),o.qZA(),o._UZ(32,"br"),o.YNc(33,x,2,1,"p",12),o.TgZ(34,"p",19),o._uU(35,"Back To Login"),o.qZA()()()()()()()()()()),2&n&&(o.xp6(7),o.Q6J("formGroup",e.registerForm),o.xp6(6),o.Q6J("ngIf",(null==e.registerForm.controls.first_name?null:e.registerForm.controls.first_name.touched)&&(null==e.registerForm.controls.first_name||null==e.registerForm.controls.first_name.errors?null:e.registerForm.controls.first_name.errors.required)),o.xp6(3),o.Q6J("ngIf",(null==e.registerForm.controls.last_name?null:e.registerForm.controls.last_name.touched)&&(null==e.registerForm.controls.last_name||null==e.registerForm.controls.last_name.errors?null:e.registerForm.controls.last_name.errors.required)),o.xp6(3),o.Q6J("ngIf",(null==e.registerForm.controls.mobile_number?null:e.registerForm.controls.mobile_number.touched)&&(null==e.registerForm.controls.mobile_number||null==e.registerForm.controls.mobile_number.errors?null:e.registerForm.controls.mobile_number.errors.required)),o.xp6(3),o.Q6J("ngIf",(null==e.registerForm.controls.username?null:e.registerForm.controls.username.touched)&&(null==e.registerForm.controls.username||null==e.registerForm.controls.username.errors?null:e.registerForm.controls.username.errors.required)),o.xp6(3),o.Q6J("ngIf",(null==e.registerForm.controls.password?null:e.registerForm.controls.password.touched)&&(null==e.registerForm.controls.password||null==e.registerForm.controls.password.errors?null:e.registerForm.controls.password.errors.required)),o.xp6(1),o.Q6J("ngIf",(null==e.registerForm.controls.password?null:e.registerForm.controls.password.touched)&&(null==e.registerForm.controls.password||null==e.registerForm.controls.password.errors?null:e.registerForm.controls.password.errors.pattern)),o.xp6(3),o.Q6J("ngIf",e.registerForm.getError("mismatch")),o.xp6(4),o.Q6J("ngIf",e.error))},dependencies:[g.O5,m.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:['.back-login[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:"blue"}.icon-fill[_ngcontent-%COMP%]{position:absolute;right:.6rem;top:.7rem}.logo[_ngcontent-%COMP%]{height:5rem;width:14rem}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.bg-outer[_ngcontent-%COMP%]{background:url(bg-login.f015f47067dfb4e0.jpg);background-repeat:no-repeat;background-size:cover;background-blend-mode:darken;overflow:auto}.bg-overlay[_ngcontent-%COMP%]{background-color:#001244ad;background-size:100% 100%;position:absolute;top:0;height:100%;width:100%}.login-bg[_ngcontent-%COMP%]{background:rgba(11,24,53,.47);border:2px solid rgba(255,255,255,.17);-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);margin:0 auto;padding:100px 60px;border-radius:25px}']}),s})()},{path:"forgot-password",component:(()=>{var t;class s{constructor(n,e,l){this.authService=n,this.router=e,this.notificationService=l,this.defaultForgotForm={username:new r.NI("",[r.kI.required])},this.forgotForm=new r.cw(this.defaultForgotForm,[])}ngOnInit(){}forgotPassword(){if(this.forgotForm.markAllAsTouched(),!this.forgotForm.valid)return this.notificationService.showError("Please enter valid username");this.authService.forgotPassword(this.forgotForm.value).subscribe(n=>{if(n?.code!=d.M)return this.notificationService.showError("Enter valid username");this.router.navigate(["/reset-password"],{queryParams:{userName:this.forgotForm.controls.username.value}})},n=>this.notificationService.showError(n?.message||"Error"))}}return(t=s).\u0275fac=function(n){return new(n||t)(o.Y36(p.e),o.Y36(m.F0),o.Y36(c.g))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-forgot-password"]],decls:32,vars:2,consts:[[1,"bg-outer","h-100vh"],[1,"h-100vh","o-auto","bg-overlay"],[1,"h-100","container","py-5"],[1,"row","d-flex","align-items-center","justify-content-center","h-100"],[1,"col-xl-5","col-lg-5","col-md-10","col-sm-12","col-12"],[1,"login-bg","p-5","mb-5"],[1,"my-5"],[3,"formGroup","ngSubmit"],[1,"logo","mx-auto","mb-5"],["src","../../../../assets/img/logo.png",1,"h-100","w-100"],[1,"mb-3","position-relative"],["type","email","id","exampleFormControlInput1","placeholder","Username","formControlName","username",1,"form-control","fonts-16"],[1,"icon-fill"],["height","24","width","24","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24"],["d","M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"],["class","fonts-16 txt-red",4,"ngIf"],[1,"d-flex","align-items-center","my-3","pt-2"],["type","submit",1,"d-flex","align-items-center","rounded-pill","w-100","btn","btn-bg","fonts-18","border-0","bg-purple","py-2","lh-2","me-2","mb-2"],[1,"w-100","d-flex","justify-content-center","fonts-18","bold"],[1,"fonts-14","text-white","text-center"],["href","#","target","_blank",1,"c-blue","text-decoration-none","semibold"],["routerLink","/login",1,"fonts-14","text-white","text-center",2,"cursor","pointer"],[1,"fonts-16","txt-red"]],template:function(n,e){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"form",7),o.NdJ("ngSubmit",function(){return e.forgotPassword()}),o.TgZ(8,"div",8),o._UZ(9,"img",9),o.qZA(),o.TgZ(10,"div",10),o._UZ(11,"input",11),o.TgZ(12,"span",12),o.O4$(),o.TgZ(13,"svg",13)(14,"title"),o._uU(15,"account"),o.qZA(),o._UZ(16,"path",14),o.qZA()(),o.YNc(17,M,2,0,"p",15),o.qZA(),o.kcU(),o.TgZ(18,"div",16)(19,"button",17)(20,"span",18),o._uU(21," Forgot Password "),o.qZA()()(),o.TgZ(22,"p",19),o._uU(23,"This site is protected by re CAPTCHA and the Google "),o.TgZ(24,"a",20),o._uU(25,"Privacy Policy"),o.qZA(),o._uU(26," and "),o.TgZ(27,"a",20),o._uU(28,"Terms of Service"),o.qZA(),o._uU(29," apply."),o.qZA(),o.TgZ(30,"p",21),o._uU(31,"Back To Login "),o.qZA()()()()()()()()()),2&n&&(o.xp6(7),o.Q6J("formGroup",e.forgotForm),o.xp6(10),o.Q6J("ngIf",(null==e.forgotForm.controls.username?null:e.forgotForm.controls.username.touched)&&(null==e.forgotForm.controls.username||null==e.forgotForm.controls.username.errors?null:e.forgotForm.controls.username.errors.required)))},dependencies:[g.O5,m.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".icon-fill[_ngcontent-%COMP%]{position:absolute;right:.6rem;top:.7rem}.logo[_ngcontent-%COMP%]{height:5rem;width:14rem}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.bg-outer[_ngcontent-%COMP%]{background:url(bg-login.f015f47067dfb4e0.jpg);background-repeat:no-repeat;background-size:cover;background-blend-mode:darken;overflow:auto}.bg-overlay[_ngcontent-%COMP%]{background-color:#001244ad;background-size:100% 100%;position:absolute;top:0;height:100%;width:100%}.login-bg[_ngcontent-%COMP%]{background:rgba(11,24,53,.47);border:2px solid rgba(255,255,255,.17);-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);margin:0 auto;padding:100px 60px;border-radius:25px}"]}),s})()},{path:"reset-password",component:(()=>{var t;class s{constructor(n,e,l,f){this.route=n,this.router=e,this.authService=l,this.notificationService=f,this.defaultResetForm={confirm_password:new r.NI("",[r.kI.required,r.kI.pattern(u.e.password)]),password:new r.NI("",[r.kI.required,r.kI.pattern(u.e.password)])},this.resetForm=new r.cw(this.defaultResetForm,[w.MatchValidator("password","confirm_password")]),this.route.queryParamMap.subscribe(Y=>{this.userName=Y.get("userName"),this.userName||this.router.navigateByUrl("/forgot-password")})}ngOnInit(){}resetPassword(){this.resetForm.markAllAsTouched(),this.resetForm.valid&&this.authService.resetPassword({username:this.userName,password:this.resetForm.controls.password.value}).subscribe(e=>{if(e?.code!==d.M)return this.notificationService.showError(e?.message);console.log("this is reset password success fully : "),this.notificationService.showSuccess(e?.message),this.router.navigateByUrl("/login")},e=>this.notificationService.showError(e?.message))}}return(t=s).\u0275fac=function(n){return new(n||t)(o.Y36(m.gz),o.Y36(m.F0),o.Y36(p.e),o.Y36(c.g))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-reset-password"]],decls:40,vars:3,consts:[[1,"bg-outer","h-100vh"],[1,"h-100","w-100","bg-overlay"],[1,"container","h-100"],[1,"row","h-100","flex-column","align-items-center","justify-content-center"],[1,"col-xl-5","col-lg-5","col-md-7","col-sm-12","col-12"],[1,"login-bg","p-5","mb-5"],[1,"my-5"],[3,"formGroup","ngSubmit"],[1,"logo","mx-auto","mb-5"],["src","../../../../assets/img/logo.png",1,"h-100","w-100"],[1,"mb-3","position-relative"],["type","password","id","exampleFormControlInput1","placeholder","New Password","formControlName","password",1,"form-control","fonts-16"],[1,"icon-fill"],["height","24","width","24","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24"],["d","M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"],["class","fonts-16 txt-red",4,"ngIf"],["type","password","id","exampleFormControlInput1","placeholder","Confirm Password","formControlName","confirm_password",1,"form-control","fonts-16"],["d","M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z"],[1,"d-flex","align-items-center","my-3","pt-2"],["type","submit",1,"d-flex","align-items-center","rounded-pill","w-100","btn","btn-bg","fonts-18","border-0","bg-purple","py-2","lh-2","me-2","mb-2"],[1,"w-100","d-flex","justify-content-center","fonts-18","bold"],[1,"fonts-14","text-white","text-center"],["href","#","target","_blank",1,"c-blue","text-decoration-none","semibold"],["routerLink","/login",1,"fonts-14","text-white","text-center",2,"cursor","pointer"],[1,"fonts-16","txt-red"]],template:function(n,e){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"form",7),o.NdJ("ngSubmit",function(){return e.resetPassword()}),o.TgZ(8,"div",8),o._UZ(9,"img",9),o.qZA(),o.TgZ(10,"div",10),o._UZ(11,"input",11),o.TgZ(12,"span",12),o.O4$(),o.TgZ(13,"svg",13)(14,"title"),o._uU(15,"Password"),o.qZA(),o._UZ(16,"path",14),o.qZA()(),o.YNc(17,O,2,0,"p",15),o.qZA(),o.kcU(),o.TgZ(18,"div",10),o._UZ(19,"input",16),o.TgZ(20,"span",12),o.O4$(),o.TgZ(21,"svg",13)(22,"title"),o._uU(23,"key-variant"),o.qZA(),o._UZ(24,"path",17),o.qZA()(),o.YNc(25,S,2,0,"p",15),o.qZA(),o.kcU(),o.TgZ(26,"div",18)(27,"button",19)(28,"span",20),o._uU(29," Reset Password "),o.qZA()()(),o.TgZ(30,"p",21),o._uU(31,"This site is protected by re CAPTCHA and the Google "),o.TgZ(32,"a",22),o._uU(33,"Privacy Policy"),o.qZA(),o._uU(34," and "),o.TgZ(35,"a",22),o._uU(36,"Terms of Service"),o.qZA(),o._uU(37," apply."),o.qZA(),o.TgZ(38,"p",23),o._uU(39,"Back To Login "),o.qZA()()()()()()()()()),2&n&&(o.xp6(7),o.Q6J("formGroup",e.resetForm),o.xp6(10),o.Q6J("ngIf",(null==e.resetForm.controls.password?null:e.resetForm.controls.password.touched)&&(null==e.resetForm.controls.password||null==e.resetForm.controls.password.errors?null:e.resetForm.controls.password.errors.pattern)),o.xp6(8),o.Q6J("ngIf",e.resetForm.getError("mismatch")))},dependencies:[g.O5,m.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".icon-fill[_ngcontent-%COMP%]{position:absolute;right:.6rem;top:.7rem}.logo[_ngcontent-%COMP%]{height:5rem;width:14rem}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.bg-outer[_ngcontent-%COMP%]{background:url(bg-login.f015f47067dfb4e0.jpg);background-repeat:no-repeat;background-size:auto;background-blend-mode:darken;overflow:auto}.bg-overlay[_ngcontent-%COMP%]{background-color:#001244ad}.login-bg[_ngcontent-%COMP%]{background:rgba(11,24,53,.47);border:2px solid rgba(255,255,255,.17);-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);margin:0 auto;padding:100px 60px;border-radius:25px}"]}),s})()}];let L=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[{provide:g.S$,useClass:g.Do}],imports:[g.ez,m.Bz.forChild(J),r.u5,r.UX]}),s})()}}]);