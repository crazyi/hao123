var UA=(function(G,A){var H={ie:"msie",sf:"safari",tt:"tencenttraveler"},D={browser:"("+H.ie+"|"+H.sf+"|firefox|chrome|opera)",shell:"(maxthon|360se|theworld|se|theworld|greenbrowser|qqbrowser)",tt:"(tencenttraveler)",os:"(windows nt|macintosh|solaris|linux)"},B=function(_){var B=new RegExp(_+"\\b[ \\/]?([\\w\\.]*)","i"),$=A.match(B);return $?$.slice(1):["",""]},F=function(){var $=A.toLowerCase().indexOf("360chrome")>-1?!!1:!1,B;try{if(G.external&&G.external.twGetRunPath){B=G.external.twGetRunPath;if(B&&B.toLowerCase().indexOf("360se")>-1)$=!!1}}catch(_){$=!1}return $}(),C=function(){try{if(/(\d+\.\d)/.test(external.max_version))return parseFloat(RegExp.$1)}catch($){}}(),E=B(D.browser),_=B(D.shell),$=B(D.os);if(E[0].toLowerCase()===H.ie){if(F)_=["360se",""];else if(C)_=["maxthon",C];else if(_==",")_=B(D.tt)}else if(E[0].toLowerCase()===H.sf)E[1]=B("version")+"."+E[1];return{browser:E.join(","),shell:_.join(","),os:$.join(",")}})(window,navigator.userAgent),indexSetHome={config:{helpUrl:"http://www.hao123.com/redian/sheshouyef.html",shell:{"360se":"02",maxthon:"03",se:"04",qqbrowser:"05",theworld:"10",greenbrowser:"12"},browser:{firefox:"ff",chrome:"08",opera:"09",safari:"11"}},set:function(C,G){var E=UA.browser.split(",")[0].toLowerCase(),_=UA.shell.split(",")[0].toLowerCase(),F=this.config,D=F.helpUrl,$="\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\uff0c\u8bf7\u624b\u52a8\u8bbe\u7f6e",B=function(){try{C.style.behavior="url(#default#homepage)";C.setHomePage(G)}catch(_){alert($)}};if(E==="msie"&&(!_||_==="tencenttraveler")){B();return false}else if(_&&F.shell[_]){D+="#"+F.shell[_];if(_==="maxthon"){try{if(external.max_version){window.open(D);return false}else{B();return false}}catch(A){B();return false}}else{window.open(D);return false}}else if(F.browser[E]){if(E==="chrome"){try{if(external.max_version){D+="#"+"03";window.open(D);return false}else{D+="#"+F.browser[E];window.open(D);return false}}catch(A){D+="#"+F.browser[E];window.open(D);return false}}else{D+="#"+F.browser[E];window.open(D);return false}}else{alert($);return false}},bind:function(_,B){_=typeof _==="string"?document.getElementById(_):_;if(_.href.indexOf("hao123.com")<0)return;B=B||_.href||window.location;var $=this,A=document.addEventListener?function($,A,_){$.addEventListener(A,_,!1)}:function($,A,_){$.attachEvent("on"+A,_)};A(_,"click",function(){$.set(_,B);return false});return this}},ieUserData={init:function(){this.defaultExps=365;this.input=C("input");this.input.type="hidden";this.input.id="ieuserdata";this.input.addBehavior("#default#userData");document.body.appendChild(this.input);return this},set:function($,A,_){this.input.load($);var B=new Date();_=_||this.defaultExps;B.setDate(B.getDate()+_);this.input.load($);this.input.expires=B.toUTCString();this.input.setAttribute("code",A);this.input.save($)},get:function(_,$){this.input.load(_);var $=$||function(){},A=this.input.getAttribute("code");$(A);return A},is:function(A,$){var _=this.get(A);return(_!=null&&_!="")?true:false},remove:function($){this.set($,false,-this.defaultExps)}},mozlliaStorage={init:function(){this.domain=getHost();return this},set:function(_,$){window.globalStorage[this.domain].setItem(_,$)},get:function(A,$){try{var $=$||function(){},B=window.globalStorage[this.domain].getItem(A)}catch(_){}$(B);return B},is:function(_){var $=this.get(_);return($!=null&&$!="")?true:false},remove:function($){window.globalStorage[this.domain].removeItem($)}},flashStorage=(function(){function $(){var _=document.createElement("span");_.style.position="absolute";_.style.display="block";var $='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="1" height="1" id="GlobalSharedObject">'+'<param name="movie" value="js/SwfObject.swf?+'+new Date().getTime()+'" />'+'<param name="quality" value="low" />'+'<param name="flashvars" value="dbName=hao123&callbackName=FlashCallBack" />'+'<param name="wmode" value="transparent" />'+'<param name="swliveconnect" value="true" />'+'<param name="allowScriptAccess" value="always" />'+'<embed src="swf/SwfObject.swf?'+new Date().getTime()+'" flashvars="dbName=hao123&callbackName=FlashCallBack" quality="low" swLiveConnect="true" width="1" height="1" allowScriptAccess="always" wmode="transparent" name="GlobalSharedObject" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>'+"</object>";(document.body||document.documentElement).appendChild(_);_.innerHTML=$}function D(){return Browser.isIE?window.GlobalSharedObject:document.GlobalSharedObject}function C($,A){var _=D();_.set($,A)}function B($,A){var _=D(),A=A||function(){};data=_.get($);A(data);return data}function A(_){var $=B(_);return($!=undefined&&$!="")?true:false}function _($){C($,"")}return{init:$,set:C,get:B,is:A,remove:_}})(),userCookie={init:function($,B,A){var A=(A!==undefined)?A:365,_=new Date();_.setTime(_.getTime()+(86400*1000*A));this.domain=$||getHost();this.path=B||"/";this.expdate=_;this.time=A;return this},set:function(A,$,B){var _=this.expdate,B=B||this.domain;if(this.time==0)document.cookie=A+"="+$+";path="+this.path+";domain="+B;else document.cookie=A+"="+$+";expires="+_.toGMTString()+";path="+this.path+";domain="+B},get:function(C,_){var B=document.cookie.split(";"),C=C+"=",_=_||function(){};for(var $=0,A=B.length;$<A;$++)if(B[$].indexOf(C)!="-1"){var D=B[$].replace(C,"");_(D);return D}_(null);return null},is:function(_){var $=this.get(_);return($!=null&&$!="")?true:false},remove:function(_,$){$=$||this.domain;if(this.is(_))document.cookie=_+"="+((this.path)?"; path="+this.path:"")+((this.domain)?"; domain="+$:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT"}};if(!window.UserData){var UserData=null,bUseCookie=false;if(Browser.isIE)UserData=ieUserData.init();else if(Browser.isFF)UserData=mozlliaStorage.init();else if(Browser.isFlash){flashStorage.init();UserData=flashStorage}else if(Browser.isCookie){UserData=userCookie.init();bUseCookie=true}else alert("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6570\u636e\u5b58\u50a8\uff0c\u8bf7\u5f00\u542fCookie\u6216\u5b89\u88c5flash6.0\u4ee5\u4e0a\u7248\u672c\uff01")}var MailLogin={mailCache:[],sendMail:function(){var B=G("hao_mail_username").value,D=G("hao_mail_passwd").value,F=G("hao_mail_options"),A=document.mail,_=F.selectedIndex,I=Config.MailConfig[_],H={u:B,p:D};if(I.val==0){alert("\u60a8\u6ca1\u6709\u9009\u62e9\u90ae\u7bb1\uff01");return}if(trim(H.u)==""){alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01");return}if(trim(H.p)==""){alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01");return}if(this.mailCache.index!=_){this.mailCache.index=_;for(var J=0,E=this.mailCache.length;J<E;J++)A.removeChild(this.mailCache[J]);this.mailCache=[]}A.action=I.action;for(J in I.params){var $=Ci(J,format(I.params[J],H));this.mailCache.push($);A.appendChild($)}G("hao_mail_username").value=H.u;G("hao_mail_passwd").value="";userCookie.init(".hao123.com").set("HAOMAILUN",H.u);userCookie.init(".hao123.com").set("HAOMAILSV",F[_].value);A.submit();G("hao_mail_username").value=B;var C=G("hao_mail_options").selectedIndex;UserTrack.send({level:"1",page:"index",type:"mail",index:C})},change:function(_){var $=Config.MailConfig[_.selectedIndex];if($.type=="link"){UserTrack.send({level:"1",page:"index",type:"mail",index:_.selectedIndex});window.open($.action);MailLogin.updateHisData();MailLogin.updateSelectMail(MailLogin.hismail)}},updateSelectMail:function(A){var B=Config.MailConfig,$=0;try{if(A)for(var D=0,C=B.length;D<C;D++)if(typeof B[D].mail!="undefined"&&A===B[D].mail)$=D}catch(_){}G("hao_mail_options").selectedIndex=$},updateHisData:function(){MailLogin.hisuser=trim(userCookie.get("HAOMAILUN")||"");MailLogin.hismail=trim(userCookie.get("HAOMAILSV")||"")},init:function(){MailLogin.updateHisData();MailLogin.updateSelectMail(MailLogin.hismail)}},DynamicForm=(function(){var $="web";function D($){for(var A=0,_=$.length;A<_;A++)document.f.removeChild($[A]);return[]}var K={},B=[],A=null,J=[],E=null;function F(_,A){var D=C("input"),B=C("input"),$=C("input");D.type=B.type=$.type="hidden";D.name="oq",B.name="rsp",$.name="f";D.value=A;B.value=_-1;if(document.f.action=="http://zhidao.baidu.com/q")$.value="sug";else $.value="3";J.push(D);J.push(B);J.push($);document.f.appendChild(D);document.f.appendChild(B);document.f.appendChild($)}function _(){if(DynamicForm.sugCurIndex!=null)F(DynamicForm.sugCurIndex,DynamicForm.oq);if(DynamicForm.sugCurIndex==null&&J.length!=0)J=D(J);var _=cache.get("CURRENT_TAB_SCOURCE"),$=G("kww").value;if(B[0])B[0].value=$;document.f.submit();DynamicForm.sugCurIndex=null;J=D(J)}function H(O,I,_){var I=I,E=cache.set("CURRENT_TAB_SCOURCE",I),M=Config.FormConfig;$=I;J();var H=function(_,A){if(_.setSelectionRange){_.focus();_.setSelectionRange(A,A)}else if(_.createTextRange){var $=_.createTextRange();$.collapse(true);$.moveEnd("character",A);$.moveStart("character",A);$.select()}},N=G("kww"),L=N.value.length;H(N,L);function F(){var $=G("hao_img_logo");$.href=M[I].url;$.childNodes[0].src=M[I].imgLogo;$.childNodes[0].alt=M[I].imgAlt}function P(){if(K.key)K.key.className="tab_item";else G("wegTab").className="tab_item";O.className="tab_cur";K.key=O}function C(){var $=document.f;$.action=M[I].action;if(B.length!=0)B=D(B);for(var A in M[I].params){var _=Ci(A,M[I].params[A]);B.push(_);$.appendChild(_)}}function J(){var $=G("hao_search_content");$.innerHTML=A()}function A(){if(Config.FormConfig[I].content==""){var _=Config.FormConfig[I].record;if(_)for(var A=0,$=_.length;A<$;A++)Config.FormConfig[I].content+='<a href="'+_[A].href+'">'+_[A].text+"</a>&nbsp;&nbsp;&nbsp;"}return Config.FormConfig[I].content}if(!_)P();C();F();J()}function I(){return $}return{tab:H,submit:_,sugCurIndex:A,oq:E,getCurTabType:I}})();function bottomForm(){var $=document.bf.key.value;if(document.bf.sto[0].checked)if(byId("content").offsetWidth==990)window.open("http://www.baidu.com/s?tn=hao123&word="+$,"mspg6");else window.open("http://www.baidu.com/s?tn=sitehao123_1_pg&word="+$,"mspg6");if(document.bf.sto[1].checked)window.open("http://www.google.cn/search?hl=zh-CN&q="+$,"mspg4");if(document.bf.sto[2].checked)window.open("http://www.gougou.com/search?id=1&search="+$,"mspg1");if(document.bf.sto[3].checked)window.open("http://map.baidu.com/m?word="+$,"mspg14");if(document.bf.sto[4].checked)window.open("http://bk.baidu.com/?kw="+$+"&submit=search","mspg13");if(document.bf.sto[5].checked)window.open("http://search.hao123.com/search.php?query="+$,"mspg12");return false}function morePopup(_,A){var _=_||window.event,B=_.target||_.srcElement,C=G("hao_more_event"),$=G("hao_more_popup");switch(A){case"down":if($.style.display==""){C.border="1px solid #fff";$.style.display="none"}else{C.style.border="1px dotted #B0BEC7";$.style.display=""}if(_.stopPropagation)_.stopPropagation();else _.cancelBubble=true;break;case"over":C.style.border="1px solid #B0BEC7";break;case"out":C.style.border="1px solid #fff";break;case"click":setTimeout(function(){if($.style.display==""){C.border="1px solid #fff";$.style.display="none"}},200);break}}on(document.body,"mousedown",morePopup,"click");var indexWeather={init:function($,_){loadXSAjax({t:1,onsuccess:function(){if(typeof HaoForecast=="undefined"||HaoForecast==null)indexWeather.error();else indexWeather.show(HaoForecast)},onerror:function(){indexWeather.error()}})},show:function(B){var _=B.forecast,$=_.length,H="/shezhi.html",A=B.URL,F='<div id="weather"><div class="city"><span>'+indexWeather.getCityName(B.Name)+'</span>&nbsp;<a href="/shezhi.html">[\u66f4\u6362]</a><br><a target="_blank" href="'+A+'#7d" title="\u6700\u8fd17\u65e5\u5929\u6c14\u8be6\u60c5">\u4e03\u65e5\u5929\u6c14</a></div><a target="_blank" href="'+A+'">',E=[{className:"today",text:"\u4eca\u5929"},{className:"tomorrow",text:"\u660e\u5929"}];for(var I=0;I<$;I++){if(I==2)break;var D=indexWeather.getWeather(_[I].Weather),C=indexWeather.getIconImage(D);F+='<div class="'+E[I].className+'"><img width="24" height="24" src="images/iw/'+C+'.png" /><p><span>'+E[I].text+"</span> "+D+'</p><p class="current">'+_[I].Tmin+"\u2103&nbsp;~&nbsp;"+_[I].Tmax+"\u2103</p></div>"}F+="</a></div>";G("forecast").innerHTML=F},getWeather:function($){var _=$.indexOf("\u8f6c");if(_>0)$=$.substring(0,_);if(byteLength($)>9){_=$.indexOf("-");if(_>0)$=$.substring(_+1);else $=$.substring(0,3)}return $},getCityName:function($){if($&&$.length>4)$=$.substring(0,4);return $},getIconImage:function($){var _={"\u6674":"a0","\u591a\u4e91":"a1","\u9634":"a2","\u9635\u96e8":"a3","\u96f7\u9635\u96e8":"a4","\u96f7\u9635\u96e8\u4f34\u6709\u51b0\u96f9":"a5","\u96e8\u5939\u96ea":"a6","\u5c0f\u96e8":"a7","\u4e2d\u96e8":"a8","\u5927\u96e8":"a9","\u66b4\u96e8":"a10","\u5927\u66b4\u96e8":"a11","\u7279\u5927\u66b4\u96e8":"a12","\u9635\u96ea":"a13","\u5c0f\u96ea":"a14","\u4e2d\u96ea":"a15","\u5927\u96ea":"a16","\u66b4\u96ea":"a17","\u96fe":"a18","\u51bb\u96e8":"a19","\u6c99\u5c18\u66b4":"a20","\u5c0f\u96e8-\u4e2d\u96e8":"a21","\u5c0f\u5230\u4e2d\u96e8":"a21","\u4e2d\u96e8-\u5927\u96e8":"a22","\u4e2d\u5230\u5927\u96e8":"a22","\u5927\u96e8-\u66b4\u96e8":"a23","\u5927\u5230\u66b4\u96e8":"a23","\u66b4\u96e8-\u5927\u66b4\u96e8":"a24","\u5927\u66b4\u96e8-\u7279\u5927\u66b4\u96e8":"a25","\u5c0f\u96ea-\u4e2d\u96ea":"a26","\u5c0f\u5230\u4e2d\u96ea":"a26","\u4e2d\u96ea-\u5927\u96ea":"a27","\u4e2d\u5230\u5927\u96ea":"a27","\u5927\u96ea-\u66b4\u96ea":"a28","\u5927\u5230\u66b4\u96ea":"a28","\u6d6e\u5c18":"a29","\u626c\u6c99":"a30","\u5f3a\u6c99\u5c18\u66b4":"a31"};return _[$]},error:function(){var $='<a href="javascript:void(0)" onclick="indexWeather.init(); return false" style="color:#999;">\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\uff0c\u5929\u6c14\u52a0\u8f7d\u5931\u8d25...<b>\u70b9\u6b64\u91cd\u8bd5</b></a>';G("forecast").innerHTML=$}},lunarInfo=new Array(19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42448,83315,21200,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46496,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19415,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448),nStr1=new Array("\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"),nStr2=new Array("\u521d","\u5341","\u5eff","\u5345","\u3000");function lYearDays(A){var $,_=348;for($=32768;$>8;$>>=1)_+=(lunarInfo[A-1900]&$)?1:0;return(_+leapDays(A))}function leapDays($){if(leapMonth($))return((lunarInfo[$-1900]&65536)?30:29);else return(0)}function leapMonth($){return(lunarInfo[$-1900]&15)}function monthDays(_,$){return((lunarInfo[_-1900]&(65536>>$))?30:29)}function Lunar(D){var $,C=0,B=0,_=new Date(1900,0,31),A=(D-_)/86400000;this.dayCyl=A+40;this.monCyl=14;for($=1900;$<2050&&A>0;$++){B=lYearDays($);A-=B;this.monCyl+=12}if(A<0){A+=B;$--;this.monCyl-=12}this.year=$;this.yearCyl=$-1864;C=leapMonth($);this.isLeap=false;for($=1;$<13&&A>0;$++){if(C>0&&$==(C+1)&&this.isLeap==false){--$;this.isLeap=true;B=leapDays(this.year)}else B=monthDays(this.year,$);if(this.isLeap==true&&$==(C+1))this.isLeap=false;A-=B;if(this.isLeap==false)this.monCyl++}if(A==0&&C>0&&$==C+1)if(this.isLeap)this.isLeap=false;else{this.isLeap=true;--$;--this.monCyl}if(A<0){A+=B;--$;--this.monCyl}this.month=$;this.day=A+1}function cDay($){var _;switch($){case 10:_="\u521d\u5341";break;case 20:_="\u4e8c\u5341";break;break;case 30:_="\u4e09\u5341";break;break;default:_=nStr2[Math.floor($/10)];_+=nStr1[Math.floor($%10)]}return(_)}var indexTime={init:function(){XSAjax.send({url:"http://utility.hao123.com/time.php?callback=indexTime.show",json:{r:Math.random()},onsuccess:function(){},onerror:function(){indexTime.error()}})},show:function($){(function(){var C="\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d",G="\u6b63\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u51ac\u814a",D='<a href="http://app.baidu.com/365rili">{0}\u5e74{1}\u6708{2}\u65e5 {3} &nbsp;\u661f\u671f{4} <span>{5}:{6}<span></a>',F=0,E=8;function B($,_){return $.replace(/{(\d)}/g,function(A,$){return _[$]})}function _($){return $<10?"0"+$:$}window.baidu_time=function($){initTime=$;A($);F=setInterval(function(){$+=60000;A($)},60000);var _=new Lunar(new Date($))};function A(F){var H=((-1*(new Date()).getTimezoneOffset())-(E*60))*60000,$=new Date(F-H),I=new Lunar($),A=G.substr(I.month-1,1)+"\u6708"+(I.isLeap?"\u95f0":"")+cDay(I.day);document.getElementById("time").innerHTML=B(D,[_($.getFullYear()),($.getMonth()+1),$.getDate(),A,C.charAt($.getDay()),_($.getHours()),_($.getMinutes())])}window.baidu_time($*1000)})()},error:function(){var $='<a href="javascript:void(0)" onclick="indexTime.init(); return false" style="color:#999;">\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\uff0c\u65f6\u95f4\u52a0\u8f7d\u5931\u8d25...<b>\u70b9\u6b64\u91cd\u8bd5</b></a>';G("time").innerHTML=$}};function byId($){return document.getElementById($)}function byTag($){return document.getElementsByTagName($)}function f(){return false}var theme={};theme.cookie={};theme.node={head:byTag("head")[0],init:function(B,A){var _={link:["rel","stylesheet"],style:["type","text/css"],script:["type","text/javascript"]},$={link:"href",script:"src"},C=null;if(byId(A))C=byId(A);else{C=document.createElement(B);C.id=A;C.setAttribute(_[B][0],_[B][1]);if(B!="style")C.setAttribute($[B],"about:blank");theme.node.head.appendChild(C)}return C},setStyle:function(_,$){if(_.styleSheet)_.styleSheet.cssText=$;else _.innerHTML=$},loader:{js:function(B,A,_,C){if(byId(A))_();else{var $=document.createElement("script");$.id=A;$.type="text/javascript";$.src=B;theme.node.head.appendChild($);$.onload=$.onreadystatechange=function(){if($.readyState&&$.readyState=="loading")return;_()};$.onerror=function(){theme.node.head.removeChild($);if(C)C()}}}}};theme.init=function(){theme.cookie.bgImg=trim(userCookie.get("bgImg")||"");theme.cookie.style=trim(userCookie.get("style")||"");theme.cookie.skinFolder=trim(userCookie.get("skinFolder")||"");var $=theme.cookie.skinFolder,_=theme.cookie.style,B=theme.cookie.bgImg,A=theme.node.init("link","themeLinkNode"),C=theme.node.init("style","userDefineStyleNode"),D="";D+=$||"";if(D.length>0)A.setAttribute("href","css/theme/skin/"+D+"/style.css");else{D+=_||"";if(D.length>0)A.setAttribute("href","css/theme/style/"+D+"/style.css");else A.setAttribute("href","about:blank")}if(B!="undefined"&&B!=null&&B.length>0)theme.node.setStyle(C,"body{background:url(images/bg/"+B+");}.left .box_outer, .bottom .box_outer,.box_body,.right .box_outer,.right .box_body,.bottom .box_outer,.bottom .box_body,.bg1,.bg2,#hao_my_like,#hao_my_site{background:none !important;}");else theme.node.setStyle(C,"")};theme.layer={show:function(){byId("themeLinkTip").style.display="none";theme.layer.btn=byId("btnTemple");theme.layer.wrap=byId("templeBox");theme.layer.box=byId("templeBoxContent");var $=theme.layer;$.btn.onclick=function(){return false};$.btn.style.cssText="background:#E6F4D0 url(images/theme_logo.gif) no-repeat 4px 5px; border-color:#DEE7F2;";$.btn.title="\u5173\u95ed\u66f4\u6362\u4e3b\u9898\u64cd\u4f5c\u6846";$.wrap.style.display="";if(!byId("loaderThemeScript")){$.loading=document.createElement("div");$.loading.id="templeBoxLoading";$.loading.innerHTML="\u6b63\u5728\u52a0\u8f7d\u4e2a\u6027\u5316\u6a21\u5757\uff0c\u8bf7\u7a0d\u5019...\u5982\u679c\u6301\u7eed\u65f6\u95f4\u8fc7\u957f\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01";$.wrap.appendChild($.loading);$.wrap.style.height="32px";theme.node.loader.js("js/theme.js?v=201110181200","loaderThemeScript",function(){setTimeout(function(){$.box.style.display="";$.wrap.removeChild($.loading);fx($.wrap,10,{height:250});byId("container").className="body_bg_down";document.body.className="body_bg_down";$.btn.onclick=theme.layer.control.hide},50)},function(){$.loading.innerHTML="\u53ef\u80fd\u56e0\u4e3a\u7f51\u901f\u592a\u6162\uff0c\u4e2a\u6027\u5316\u6a21\u5757\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5\uff01"})}else{$.box.style.display="";$.wrap.style.height="0px";fx($.wrap,10,{height:250});byId("container").className="body_bg_down";document.body.className="body_bg_down";$.btn.onclick=theme.layer.control.hide}}};theme.init();var bdRecord=(function(){var config={};config.recordClickNumber=10;config.recordClickWeight=5;config.recordClickShowNumber=10;config.recordSearchNumber=3;config.recordSearchWeight=2;config.recordSearchShowNumber=3;function scope(A,E,$){var A=A||window.event,C=A.target||A.srcElement,D={};if(C.tagName.toUpperCase()=="A"){var _=trim(sPurity(_(C.innerHTML)));if(_=="")return;D={anchor:encodeURIComponent(_),url:encodeURIComponent(C.href),count:0}}if(C.tagName.toUpperCase()=="AREA"){var B=trim(sPurity(_(C.alt)));D={anchor:encodeURIComponent(B),url:encodeURIComponent(C.href),count:0}}if(D.anchor==undefined||D.url==undefined)return;if(E)searchPolicy($,E);else clickPolicy(D)}function insertSort(C,$){var _,$=$||false;for(var B=1;B<C.length;B++){_=C[B];if($==false)for(var A=B;A>0&&_.count<C[A-1].count;A--)C[A]=C[A-1];else for(A=B;A>0&&_.count>C[A-1].count;A--)C[A]=C[A-1];C[A]=_}return C}function isClose($){if(userCookie.is("HAORECORDSTATUS")){var _=parseInt(userCookie.get("HAORECORDSTATUS"));if($=="click")if(_==1||_==3)return true;if($=="search")if(_==2||_==3)return true;return false}return false}function searchPolicy(v,tabType,isCode){if(isClose("search")||tabType!="web")return;v=trim(sPurity(sText(v))),v=isCode?v:encodeURIComponent(v);if(v==""||/(^https?)|(^ftp)/.test(v))return false;var aData=UserData.is("HAOSEARCHRECORD")?eval("("+UserData.get("HAOSEARCHRECORD")+")"):[],aData=insertSort(aData,true),isExist=false,params={anchor:v,count:0};for(var i=0;i<aData.length;i++){if(params.anchor==aData[i].anchor){aData[i].count+=1;aData=insertSort(aData,true);isExist=true;break}isExist=false}if(isExist==false){params.count=1;if(aData.length==config.recordSearchNumber)aData.splice(config.recordSearchWeight,1);aData.push(params)}UserData.set("HAOSEARCHRECORD",jsonToString(aData))}function clickPolicy(params){if(isClose("click"))return;var aData=UserData.is("HAORECORD")?eval("("+UserData.get("HAORECORD")+")"):[],aData=insertSort(aData,true),isExist=false;for(var i=0;i<aData.length;i++){if(params.url==aData[i].url&&params.anchor==aData[i].anchor){aData[i].count+=1;aData=insertSort(aData,true);isExist=true;break}isExist=false}if(isExist==false){params.count=1;if(aData.length==config.recordClickNumber)aData.splice(config.recordClickWeight-1,1);aData.push(params)}UserData.set("HAORECORD",jsonToString(aData))}function printSearchRecord(id,tabType){if(isClose("search")||tabType!="web")return;var aData=UserData.is("HAOSEARCHRECORD")?eval("("+UserData.get("HAOSEARCHRECORD")+")"):[],aDataLength=aData.length<config.recordSearchShowNumber?aData.length:config.recordSearchShowNumber;if(aDataLength==0)return;var tStr='<table><tr><td monkey="record_search" align=right >';for(var i=0;i<aDataLength;i++){var anchor=trim(sPurity(sText(decodeURIComponent(aData[i].anchor))));if(anchor=="")continue;var content=byteSlice(anchor,10);tStr+="<a onmousedown='bdRecord.searchPolicy(\""+anchor+'","web",true)\' href="http://www.soso.com/q?wd='+anchor+'&unc=d400367_5&cid=union.s.wh" onmousedown="bdRecord.scope(event)">'+content+"</a>&nbsp;&nbsp;"}tStr+='</td><td align="center" width="50px" monkey="record_clear">'+'<a style="color:#205001" href="javascript:void(0)" onclick="bdRecord.close(\'search\');return false;">[\u6e05\u9664]</a><td><tr></table>';G(id).innerHTML=tStr;Config.FormConfig.web.content=tStr}function printClickRecord(id){if(isClose("click"))return;var aData=UserData.is("HAORECORD")?eval("("+UserData.get("HAORECORD")+")"):[],aDataLength=aData.length<config.recordClickShowNumber?aData.length:config.recordClickShowNumber;if(aDataLength==0)return;var tStr='<b style="color:#666">\u5feb\u6377\u8bbf\u95ee\uff1a</b>';for(var i=0;i<aDataLength;i++){var anchor=trim(sPurity(sText(decodeURIComponent(aData[i].anchor))));if(anchor=="")continue;tStr+='<a href="'+decodeURIComponent(aData[i].url)+'" >'+anchor+"</a>"}G(id).innerHTML=tStr+'<a style="color:#205001" href="javascript:void(0)" onclick="bdRecord.close(\'click\');return false;">[\u6e05\u9664]</a>';G(id).style.display="block"}function closeRecord(_){var $={click:1,search:2},A=0;userCookie.init();if(userCookie.is("HAORECORDSTATUS")){A=parseInt(userCookie.get("HAORECORDSTATUS"))+$[_];userCookie.set("HAORECORDSTATUS",A)}else if(_=="click"){userCookie.set("HAORECORDSTATUS","1");UserData.remove("HAORECORD")}else if(_=="search"){userCookie.set("HAORECORDSTATUS","2");UserData.remove("HAOSEARCHRECORD")}removeRecord(_)}function removeRecord($){switch($){case"click":UserData.remove("HAORECORD");G("BDRecord").style.display="none";break;case"search":UserData.remove("HAOSEARCHRECORD");G("hao_search_content").innerHTML="";break}}return{scope:scope,searchPolicy:searchPolicy,printSearchRecord:printSearchRecord,print:printClickRecord,remove:removeRecord,close:closeRecord}})();function tonglan(P){function U($,_){return $.replace(/#\{([^}]*)\}/mg,function($,A){return $=_[A]})}var R=G("tonglan");if(!R)return;var M="down",O=P.td_count_name||"HAO123TC",K="HAO123CLOSE",T=P.td_count_show||8,$=1,J=P.flag_no_expires||14,H=P.flag_close_expires||0.125,N="http://www.hao123.com/",L=P.home_url||N,F=null,I=P.page||"index",S='<div class="tonglan"><span>#{tip}</span><a class="down_btn" #{downstyle} href="#{down_url}" #{down_onclick}>&nbsp;</a><a class="no_btn" href="#" onclick="return false">#{no_tip}</a><a class="close_btn">&nbsp;</a></div>',A=0;if(!P.down_url){P.down_url="#";P.down_onclick='onclick="return false"'}else P.down_onclick="";if(!P.down_style)P.downstyle="";else{P.downstyle='style="background-image:#{bcimg};width:#{width};background-position:#{bcpos}"';P.downstyle=U(P.downstyle,P.down_style)}!P.tip&&(P.tip="0125\u63a8\u51fa\u684c\u9762\u7248\u5566\uff01\u544a\u522b\u4e3b\u9875\u7be1\u6539\uff0c\u4ece\u6b64\u5b89\u5168\u65e0\u5fe7~");!P.no_tip&&(P.no_tip="\u4e0d\u518d\u63d0\u793a");S=U(S,P);function D(){if(P.filtrex&&P.filtrex.test(document.URL))return;if(trim(userCookie.get(K)||"")==="ct")return;var B=trim(userCookie.get(O)||"");if(B&&B==="c")return;var C=UA.browser.split(",")[0].toLowerCase(),A=UA.shell.split(",")[0].toLowerCase();if(C==="msie"&&(!A||A==="tencenttraveler")){M="home";if(P.isHome){var $={level:1,page:I,type:"service"};_()?($.setHome=true):($.setHome=false);UserTrack.send($);if($.setHome)return}}else if(P.target&&P.target==="ie")return;if(E())Q()}function E(){if(!userCookie.get(O))userCookie.init(".hao123.com",null,$).set(O,1);else{var _=parseInt(userCookie.get(O))+1;_=_>T?T:_;userCookie.init(".hao123.com",null,$).set(O,_);if(_>=T)return true}return false}function B(){var A=G("setHome");try{if(!A.style.behavior)A.style.behavior="url(#default#homepage)";A.setHomePage(L);UserTrack.send({level:1,page:I,position:"pusher",type:"click",position:"pop",setHome:_()});C()}catch($){return}}function _(){var A=G("setHome");try{A.style.behavior="url(#default#homepage)";var $=A.isHomePage(L)||A.isHomePage(N)||A.isHomePage(N+"index.htm")||A.isHomePage(N+"?url")||A.isHomePage(N+"index.html");return $}catch(_){return false}}function Q(){R.style.width=document.body.scrollWidth+"px";R.onclick=function($){$=$||window.event;var _=$.srcElement||$.target;if(/_btn$/ig.test(_.className)){F=_.className.split("_")[0];if(F!="down"){if(F==="no"){userCookie.init(".hao123.com",null,J).set(O,"c");userCookie.remove(K,".hao123.com")}else userCookie.init(".hao123.com",null,H).set(K,"ct");!P.onbeforeClose?(C()):(P.onbeforeClose(function(){C()}))}else if(baidu.lang.isFunction(P.down_callback))P.down_callback();else if(baidu.lang.isString(P.down_callback)&&P.down_callback==="sethome")B();UserTrack.send({level:1,page:I,position:"pusher",type:"click",fb:F})}};R.innerHTML=S;R.style.display="";UserTrack.send({level:1,page:I,position:"pusher",type:"comp",pt:M})}function C(){G("tonglan").style.display="none";G("tonglan").innerHTML="";A=1}D()}var indexMing={data:Config.MingConfig,init:function(_){var $={};$.url=_.url||"/js/mcfg.js";$.timeOut=_.timeOut||3;$.nnTimeOut=_.nnTimeOut||3000;baidu.sio.callByServer(_.url+"?r="+Math.random()+"&callback=indexMing.update",{timeOut:$.timeOut,onfailure:function(){indexMing.show(indexMing.data)}});indexMing.timer=setTimeout(function(){if(!indexMing.hasUpdated)indexMing.show(indexMing.data)},$.nnTimeOut)},show:function(B){clearTimeout(indexMing.timer);var $=document.getElementById("hao_left_ming"),A=$.getElementsByTagName("span");for(var _=0;_<B.length;_++)A[2*_+1].innerHTML='<a href="'+B[_].href+'" target="_blank">'+B[_].text+"</a>"},update:function(data){data=eval(data);if(!data||!isType.Array(data))data=Config.MingConfig;indexMing.show(data)}},indexCarouselBanner={init:function(A){indexCarouselBanner.imgs=A.images||[];var $=indexCarouselBanner.imgs.length;if($==0)return;var B=new Date().getSeconds(),_=B%$;indexCarouselBanner.show(indexCarouselBanner.imgs[_])},show:function($){G("hao123_index_banner").innerHTML='<a href="'+$.link+'" target="_blank"><img src="images/'+$.img+'" height="60px" width="240px" style="border: 1px solid rgb(170, 170, 170);"/></a>'}}
function ResumeError() { 
return true; 
} 
window.onerror = ResumeError;



