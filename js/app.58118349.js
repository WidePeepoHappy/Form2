(function(e){function t(t){for(var c,l,o=t[0],a=t[1],s=t[2],p=0,d=[];p<o.length;p++)l=o[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(c=!1)}c&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},r={app:0},i=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/Form2/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={class:"form-container"},i=Object(c["g"])("h1",null,"Форма регистрации",-1),l=Object(c["g"])("legend",null,"Персональная информация",-1),o={class:"input-fields"},a={class:"input-fields-item"},s=Object(c["g"])("label",{for:"first-name"},[Object(c["f"])("Имя"),Object(c["g"])("span",{class:"required"},"*")],-1),u={key:0,class:"error"},p={class:"input-fields-item"},d=Object(c["g"])("label",{for:"last-name"},[Object(c["f"])("Фамилия"),Object(c["g"])("span",{class:"required"},"*")],-1),b={key:0,class:"error"},f={class:"input-fields"},O=Object(c["g"])("div",{class:"input-fields-item"},[Object(c["g"])("label",{for:"patronymic"},"Отчество"),Object(c["g"])("input",{type:"text",name:"patronymic",id:"patronymic"})],-1),j={class:"input-fields-item"},v=Object(c["g"])("label",{for:"dob"},[Object(c["f"])("День рождения"),Object(c["g"])("span",{class:"required"},"*")],-1),m={key:0,class:"error"},g={class:"input-fields"},h=Object(c["e"])('<div class="input-fields-item"><label for="gender">Пол</label><select class="select" name="gender" id="gender"><option value="">Выбрать</option><option value="male">Мужской</option><option value="female">Женский</option></select></div>',1),y={class:"input-fields-item"},$=Object(c["g"])("label",{for:"phone"},[Object(c["f"])("Телефон"),Object(c["g"])("span",{class:"required"},"*")],-1),x={key:0,class:"error"},k={key:1,class:"error"},w={class:"input-fields"},N={class:"input-fields-item"},q=Object(c["g"])("label",{for:"client-group"},[Object(c["f"])("Группа клиентов"),Object(c["g"])("span",{class:"required"},"*")],-1),I=Object(c["g"])("option",{value:"vip"},"VIP",-1),P=Object(c["g"])("option",{value:"problematic"},"Проблемные",-1),S=Object(c["g"])("option",{value:"oms"},"ОМС",-1),V={key:0,class:"error"},B=Object(c["e"])('<div class="input-fields-item"><label for="doc">Врач</label><select name="doc" id="doc"><option value="">Выбрать</option><option value="ivanov">Иванов</option><option value="zaharov">Захаров</option><option value="chernisheva">Чернышева</option></select><div class="sms"><label for="sms"><input id="sms" type="checkbox"><span class="checkmark"></span>Не отправлять СМС</label></div></div>',1),U=Object(c["e"])('<legend>Адрес</legend><div class="input-fields"><div class="input-fields-item"><label for="contry">Страна</label><input type="text" name="contry" id="contry"></div><div class="input-fields-item"><label for="oblast">Область</label><input type="text" name="oblast" id="oblast"></div></div>',2),G={class:"input-fields"},T={class:"input-fields-item"},_=Object(c["g"])("label",{for:"city"},[Object(c["f"])("Город"),Object(c["g"])("span",{class:"required"},"*")],-1),C={key:0,class:"error"},D=Object(c["g"])("div",{class:"input-fields-item"},[Object(c["g"])("label",{for:"street"},"Улица"),Object(c["g"])("input",{type:"text",name:"street",id:"street"})],-1),F=Object(c["e"])('<div class="input-fields"><div class="input-fields-item"><label for="house">Дом</label><input type="text" name="house" id="house"></div><div class="input-fields-item"><label for="postal">Почтовый индекс</label><input type="text" name="postal" id="postal"></div></div>',1),M=Object(c["g"])("legend",null,"Документ",-1),z={class:"input-fields"},J={class:"input-fields-item"},A=Object(c["g"])("label",{for:"document"},[Object(c["f"])("Тип документа"),Object(c["g"])("span",{class:"required"},"*")],-1),L=Object(c["g"])("option",{value:""},"Выбрать",-1),Z=Object(c["g"])("option",{value:"pasport"},"Паспорт",-1),E=Object(c["g"])("option",{value:"birthSert"},"Свид. о рождении",-1),H=Object(c["g"])("option",{value:"driverLicense"},"Вод. удостоверение",-1),K={key:0,class:"error"},Q=Object(c["g"])("div",{class:"input-fields-item"},[Object(c["g"])("label",{for:"serial-numb"},"Номер"),Object(c["g"])("input",{type:"text",name:"serial-numb",id:"serial-numb"})],-1),R={class:"input-fields"},W=Object(c["g"])("div",{class:"input-fields-item"},[Object(c["g"])("label",{for:"serial"},"Серия"),Object(c["g"])("input",{type:"text",name:"serial",id:"serial"})],-1),X={class:"input-fields-item"},Y=Object(c["g"])("label",{for:"issue"},[Object(c["f"])("Дата выдачи"),Object(c["g"])("span",{class:"required"},"*")],-1),ee={key:0,class:"error"},te=Object(c["g"])("div",{class:"input-fields"},[Object(c["g"])("div",{class:"input-fields-textarea"},[Object(c["g"])("label",{for:"by-whom"},"Кем выдан"),Object(c["g"])("textarea",{id:"by-whom",class:"textarea"})])],-1),ne={key:0,class:"new-client-complete"},ce=Object(c["g"])("span",{class:"new-client-complete-text"},"Новый клиент успешно создан",-1),re={key:1,class:"new-client-error"},ie=Object(c["g"])("span",{class:"new-client-error-text"},"Заполните все обязательные поля",-1);function le(e,t,n,le,oe,ae){return Object(c["p"])(),Object(c["c"])("div",r,[i,Object(c["g"])("form",{onSubmit:t[18]||(t[18]=Object(c["y"])((function(){}),["prevent"]))},[Object(c["g"])("fieldset",null,[l,Object(c["g"])("div",o,[Object(c["g"])("div",a,[s,Object(c["x"])(Object(c["g"])("input",{onBlur:t[1]||(t[1]=function(){var e;return le.v$.firstName.$touch&&(e=le.v$.firstName).$touch.apply(e,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return oe.firstName=e}),type:"text",name:"first-name",id:"first-name"},null,544),[[c["v"],oe.firstName,void 0,{trim:!0}]]),le.v$.firstName.$error?(Object(c["p"])(),Object(c["c"])("span",u,"Введите ваше имя")):Object(c["d"])("",!0)]),Object(c["g"])("div",p,[d,Object(c["x"])(Object(c["g"])("input",{onBlur:t[3]||(t[3]=function(){var e;return le.v$.lastName.$touch&&(e=le.v$.lastName).$touch.apply(e,arguments)}),"onUpdate:modelValue":t[4]||(t[4]=function(e){return oe.lastName=e}),type:"text",name:"last-name",id:"last-name"},null,544),[[c["v"],oe.lastName,void 0,{trim:!0}]]),le.v$.lastName.$error?(Object(c["p"])(),Object(c["c"])("span",b,"Введите вашу фамилию")):Object(c["d"])("",!0)])]),Object(c["g"])("div",f,[O,Object(c["g"])("div",j,[v,Object(c["x"])(Object(c["g"])("input",{onBlur:t[5]||(t[5]=function(){var e;return le.v$.dob.$touch&&(e=le.v$.dob).$touch.apply(e,arguments)}),"onUpdate:modelValue":t[6]||(t[6]=function(e){return oe.dob=e}),type:"date",name:"dob",id:"dob",min:"1900-01-01",max:ae.currentDate},null,40,["max"]),[[c["v"],oe.dob]]),le.v$.dob.$error?(Object(c["p"])(),Object(c["c"])("span",m,"Введите ваш день рождения")):Object(c["d"])("",!0)])]),Object(c["g"])("div",g,[h,Object(c["g"])("div",y,[$,Object(c["x"])(Object(c["g"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return oe.phone=e}),onBlur:t[8]||(t[8]=function(){var e;return le.v$.phone.$touch&&(e=le.v$.phone).$touch.apply(e,arguments)}),placeholder:"7",type:"tel",name:"phone",id:"phone"},null,544),[[c["v"],oe.phone]]),le.v$.phone.$error&&""===oe.phone?(Object(c["p"])(),Object(c["c"])("span",x,"Введите ваш телефон")):Object(c["d"])("",!0),le.v$.phone.$error&&""!=oe.phone?(Object(c["p"])(),Object(c["c"])("span",k,"Номер дожен начинаться с 7")):Object(c["d"])("",!0)])]),Object(c["g"])("div",w,[Object(c["g"])("div",N,[q,Object(c["x"])(Object(c["g"])("select",{onBlur:t[9]||(t[9]=function(){var e;return le.v$.clientGroup.$touch&&(e=le.v$.clientGroup).$touch.apply(e,arguments)}),"onUpdate:modelValue":t[10]||(t[10]=function(e){return oe.clientGroup=e}),class:"multi-select",name:"client-group",id:"client-group",multiple:""},[I,P,S],544),[[c["u"],oe.clientGroup]]),le.v$.clientGroup.$error?(Object(c["p"])(),Object(c["c"])("span",V,"Выберите групы клиентов")):Object(c["d"])("",!0)]),B])]),Object(c["g"])("fieldset",null,[U,Object(c["g"])("div",G,[Object(c["g"])("div",T,[_,Object(c["x"])(Object(c["g"])("input",{onBlur:t[11]||(t[11]=function(){var e;return le.v$.city.$touch&&(e=le.v$.city).$touch.apply(e,arguments)}),"onUpdate:modelValue":t[12]||(t[12]=function(e){return oe.city=e}),type:"text",name:"city",id:"city"},null,544),[[c["v"],oe.city,void 0,{trim:!0}]]),le.v$.city.$error?(Object(c["p"])(),Object(c["c"])("span",C,"Введите город проживания")):Object(c["d"])("",!0)]),D]),F]),Object(c["g"])("fieldset",null,[M,Object(c["g"])("div",z,[Object(c["g"])("div",J,[A,Object(c["x"])(Object(c["g"])("select",{onBlur:t[13]||(t[13]=function(){var e;return le.v$.document.$touch&&(e=le.v$.document).$touch.apply(e,arguments)}),"onUpdate:modelValue":t[14]||(t[14]=function(e){return oe.document=e}),class:"select",name:"document",id:"document"},[L,Z,E,H],544),[[c["u"],oe.document]]),le.v$.document.$error?(Object(c["p"])(),Object(c["c"])("span",K,"Выберите тип документа")):Object(c["d"])("",!0)]),Q]),Object(c["g"])("div",R,[W,Object(c["g"])("div",X,[Y,Object(c["x"])(Object(c["g"])("input",{onBlur:t[15]||(t[15]=function(){var e;return le.v$.dateOfIssue.$touch&&(e=le.v$.dateOfIssue).$touch.apply(e,arguments)}),"onUpdate:modelValue":t[16]||(t[16]=function(e){return oe.dateOfIssue=e}),type:"date",name:"issue",id:"issue",min:"1900-01-01",max:ae.currentDate},null,40,["max"]),[[c["v"],oe.dateOfIssue]]),le.v$.dateOfIssue.$error?(Object(c["p"])(),Object(c["c"])("span",ee,"Введите дату выдачи")):Object(c["d"])("",!0)])]),te]),oe.formComplete&&0===le.v$.$errors.length?(Object(c["p"])(),Object(c["c"])("div",ne,[ce])):Object(c["d"])("",!0),le.v$.$anyDirty&&le.v$.$errors.length>0?(Object(c["p"])(),Object(c["c"])("div",re,[ie])):Object(c["d"])("",!0),Object(c["g"])("button",{onClick:t[17]||(t[17]=function(){return ae.submitForm&&ae.submitForm.apply(ae,arguments)}),class:"btn"},"Зарегистрироваться")],32)])}n("1276"),n("ac1f");var oe=n("25a0"),ae=n("e3e1"),se={setup:function(){return{v$:Object(oe["a"])()}},computed:{currentDate:function(){return(new Date).toISOString().split("T")[0]}},data:function(){return{firstName:"",lastName:"",dob:"",phone:"",clientGroup:[],city:"",document:"",dateOfIssue:"",formComplete:!1}},validations:function(){return{firstName:{required:ae["a"],checkFirstName:function(e){return this.stringTest(e)}},lastName:{required:ae["a"],checklastName:function(e){return this.stringTest(e)}},dob:{required:ae["a"]},phone:{required:ae["a"],checkPhoneNum:function(e){var t=/7{1}[0-9]{10}/;return t.test(e)}},clientGroup:{required:ae["a"]},city:{required:ae["a"],checkCity:function(e){return this.stringTest(e)}},document:{required:ae["a"]},dateOfIssue:{required:ae["a"]}}},methods:{stringTest:function(e){var t=/^[a-zA-ZА-Яа-я\s-]+$/;return t.test(e)},submitForm:function(){this.v$.$touch(),console.log(this.v$),this.v$.$error||(this.formComplete=!0)}}};n("b5f6");se.render=le;var ue=se;Object(c["b"])(ue).mount("#app")},ad83:function(e,t,n){},b5f6:function(e,t,n){"use strict";n("ad83")}});
//# sourceMappingURL=app.58118349.js.map