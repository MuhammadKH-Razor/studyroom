/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[5],{338:function(ha,da,f){function aa(e,f,h){f.endsWith("/")||(f+="/");h=h||{};var n=h.disableWebsockets||!1;this.CM=h.singleServerMode||!1;f.endsWith("blackbox/")||(f+="blackbox/");this.yl=h.uploadData||null;this.Zs=h.uriData||null;this.PG=h.cacheKey||null;this.Of=Object(w.a)(f,null,n);this.Ge=f;this.eA=e;this.Ze=null;this.Hj=ea();this.bm=ea();this.$u=!1;this.Lf=this.Md=this.$d=this.Ee=null;this.gf=[];this.Ev=[];this.cache={};this.timeStamp=
0;this.zf=[];this.Ag=[];this.tA=null;this.Yz=!1;this.NC=this.id=null;this.MB=this.AJ=fa;this.nx=0;this.jB=!1;this.rY=1;this.Fw={};this.dw=null;this.tp(!0)}function ea(){var e={promise:null,resolve:null,reject:null,state:0,result:null,request:null,Km:function(){return 1===(e.state&1)},BX:function(){return 2===(e.state&2)},kh:function(){return!e.BX()&&!e.Km()},oX:function(){return 4===(e.state&4)},YL:function(){e.state|=4}};e.promise=new Promise(function(f,h){e.resolve=function(){if(0===e.state||4===
e.state)e.state=1,e.result=arguments[0],f.apply(null,arguments)};e.reject=function(){if(0===e.state||4===e.state)e.state=2,h.apply(null,arguments)}});return e}function fa(){return!1}function ba(e,f,h){if(!(f in n))return!0;f=n[f];for(var r=0;r<f.length;r++){var w=e;var x=f[r];var y=h;if(x.name in w){var aa="",ba=!1;w=w[x.name];switch(x.type){case "s":aa="String";ba=Object(z.isString)(w);break;case "a":aa="Array";ba=Object(z.isArray)(w);break;case "n":aa="Number";ba=Object(z.isNumber)(w)&&Object(z.isFinite)(w);
break;case "o":aa="Object",ba=Object(z.isObject)(w)&&!Object(z.isArray)(w)}ba||y.reject('Expected response field "'+x.name+'" to have type '+aa);x=ba}else y.reject('Response missing field "'+x.name+'"'),x=!1;if(!x)return!1}return!0}f.r(da);var z=f(0);f.n(z);var y=f(1);ha=f(39);var x=f(29),w=f(355),r=f(71);f=f(280);var n={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",
type:"a"},{name:"size",type:"n"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}]};aa.prototype=Object(z.extend)(aa.prototype,{MS:function(){var e=this;return new Promise(function(f,h){var n=new XMLHttpRequest;n.open("GET",e.Ge+"ck");n.withCredentials=e.zm();n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?f():h())};
n.send()})},J_:function(e,f){this.AJ=e||fa;this.MB=f||fa},eH:function(){var e=this;this.bm=ea();this.Hj=ea();return this.Of.oA().then(function(){e.$u=!1;e.id=null;e.Yz=!1;return e.MS()})},BC:function(){this.AJ();this.ow();this.Ee&&(this.Ee.kh()?this.$e(this.Ee.request):this.Ee.Km()&&this.MB(this.Ee.result.url,"pdf")&&(this.Ee=null,this.wL()));this.Lf&&this.Lf.kh()&&this.$e(this.Lf.request);this.$d&&this.$d.kh()?this.$e(this.$d.request):this.Md&&this.Md.kh()&&this.oJ(this.Md.request);var e;for(e=0;e<
this.zf.length;e++)this.zf[e]&&this.zf[e]&&(this.zf[e].kh()?this.$e(this.zf[e].request):this.zf[e].Km()&&this.MB(this.zf[e].result.url,"image")&&(this.zf[e]=null,this.kx(e)));for(e=0;e<this.Ag.length;e++)this.Ag[e]&&this.Ag[e]&&this.Ag[e].kh()&&!this.Ag[e].oX()&&this.$e(this.Ag[e].request);for(e=0;e<this.gf.length;e++)this.gf[e]&&this.gf[e].kh()&&this.$e(this.gf[e].request)},ow:function(){var e=this;this.$u||(this.timeStamp=Date.now(),this.Of.kD(function(f){e.DY(f)}).then(function(){clearInterval(e.pC);
e.pC=null},function(f){Object(y.e)("Blackbox connection failed:"+f);e.$u=!1;if(!e.pC){var h=0;e.Yz=!0;e.NC=0;e.pC=setInterval(function(){50>h++&&e.BC()},5E3)}}),this.$u=!0)},B1:function(){var e=this,f=createPromiseCapability();if(this.yl){var h=new FormData;h.append("file",this.yl.fileHandle,this.yl.fileHandle.name);var n=this.yl.loadCallback;var r="upload";var w=this.yl.extension}else if(this.Zs){h={uri:this.Zs.uri,J4:this.Zs.shareId};h=Object.keys(h).map(function(e){return e+"="+(h[e]?encodeURIComponent(h[e]):
"")}).join("&");var y="application/x-www-form-urlencoded; charset=UTF-8";n=this.Zs.loadCallback;r="url";w=this.Zs.extension}else return Promise.resolve();var z=new XMLHttpRequest;z.open("POST",Object(x.h)(e.Ge,"AuxUpload?ext="+w+"&type="+r+"&bcid="+this.Of.clientId));z.withCredentials=this.zm();y&&z.setRequestHeader("Content-Type",y);z.addEventListener("load",function(){if(z.readyState===z.DONE&&200===z.status){var h=JSON.parse(z.response);e.eA=h.uri;n(h);f.resolve(h)}});z.addEventListener("error",
function(){f.reject(z.statusText+" "+JSON.stringify(z))});this.yl&&null!=this.yl.onProgress&&(z.upload.onprogress=function(f){e.yl.onProgress(f)});z.send(h);return f.promise},$_:function(e){this.dw=e},rW:function(e){this.password&&this.Hj.Km()?e(this.password):this.dw(e)},CZ:function(e){this.password=e||null;this.Hj.Km()||(this.ow(),this.$e({t:"pages"}));return this.Hj.promise},Hs:function(e){this.tA=e||null;this.Hj.Km()||(this.ow(),this.$e({t:"pages"}));return this.Hj.promise},gH:function(e){e=Object.assign(e,
{uri:encodeURIComponent(this.eA)});this.tA&&(e.ext=this.tA);this.Ze&&(e.c=this.Ze);this.password&&(e.pswd=this.password);this.PG&&(e.cacheKey=this.PG);return e},$e:function(e){e=this.gH(e);this.Of.send(e)},bj:function(e){return e},DY:function(e){var f=this,h=e.data,n=e.err,w=e.t;if(n&&f.dw&&"This document could not be decrypted with the given password"===n)f.dw(function(e){f.CZ(e)});else switch(w){case "upload":n?f.C1.reject(n):f.C1.resolve("Success");break;case "pages":n?f.Hj.reject(n):ba(h,w,f.Hj)&&
f.Hj.resolve(h);break;case "config":n?f.bm.reject(n):ba(h,w,f.bm)&&(h.id&&(f.id=h.id),h.serverVersion&&(f.P1=h.serverVersion,Object(y.f)("[WebViewer Server] server version: "+f.P1)),h.serverID?(f.nx=h.serverID===f.NC&&f.jB?f.nx+1:0,f.NC=h.serverID):f.nx=0,f.jB=!1,f.bm.resolve(h));break;case "health":n?f.bm.reject(n):ba(h,w,f.bm)&&(e=h.unhealthy,this.CM&&(e=h.isDead),!f.k3&&e&&1>=f.nx&&(f.jB=!0,f.eH().then(function(){f.BC()},function(){f.BC()})));break;case "pdf":h.url=f.Ge+"../"+encodeURI(h.url)+
"?bcid="+this.Of.clientId;n?f.Ee.reject(n):ba(h,w,f.Ee)&&f.Ee.resolve(h);break;case "docmod":h.url=f.Ge+"../"+encodeURI(h.url)+"?bcid="+this.Of.clientId;n?f.Fw[h.rID].reject(n):ba(h,w,f.Ee)&&f.Fw[h.rID].resolve(h);break;case "xod":if(n)this.$d&&this.$d.kh()&&this.$d.reject(n),this.Md&&this.Md.kh()&&this.Md.reject(n);else if(h.notFound)h.noCreate||this.$d&&this.$d.kh()&&this.$d.resolve(h),this.Md&&this.Md.kh()&&this.Md.resolve(h);else{h.url&&(h.url=f.Ge+"../"+encodeURI(h.url)+"?bcid="+this.Of.clientId);
if(!this.Md||this.Md.Km())this.Md=ea(),this.Md.request={t:"xod",noCreate:!0};this.$d||(this.$d=ea(),this.$d.request={t:"xod"});this.Md.resolve(h);this.$d.resolve(h)}break;case "annots":if(n)f.Lf.reject(n);else if(ba(h,w,f.Lf)){f.Lf.YL();var x=new XMLHttpRequest;e=f.Ge+"../"+encodeURI(h.url);var z=h.hasAppearance?e+".xodapp?bcid="+this.Of.clientId:null;e+="?bcid="+this.Of.clientId;x.open("GET",e);x.responseType="text";x.withCredentials=this.zm();x.addEventListener("load",function(){x.readyState===
x.DONE&&200===x.status&&f.Lf.resolve({DD:x.response,BG:z})});x.addEventListener("error",function(){f.Lf.reject(x.statusText+" "+JSON.stringify(x))});x.send()}break;case "image":var aa=this.zf[h.p];n?aa.promise.reject(n):ba(h,w,aa)&&(aa.result=h,aa.result.url=f.Ge+"../"+encodeURI(aa.result.url)+"?bcid="+this.Of.clientId,aa.resolve(aa.result));break;case "tiles":aa=h.rID;e=this.gf[aa];this.gf[aa]=null;this.Ev.push(aa);if(n)e.reject(n);else if(ba(h,w,e)){for(n=0;n<h.tiles.length;n++)h.tiles[n]=f.Ge+
"../"+encodeURI(h.tiles[n])+"?bcid="+this.Of.clientId;e.resolve(h)}break;case "text":aa=this.Ag[h.p];if(n)aa.reject(n);else if(ba(h,w,aa)){aa.YL();var da=new XMLHttpRequest;da.open("GET",f.Ge+"../"+encodeURI(h.url)+"?bcid="+this.Of.clientId);da.withCredentials=this.zm();da.addEventListener("load",function(){da.readyState===da.DONE&&200===da.status&&(aa.result=JSON.parse(da.response),aa.resolve(aa.result))});da.addEventListener("error",function(e){aa.reject(da.statusText+" "+JSON.stringify(e))});da.send()}break;
case "progress":"loading"===h.t&&f.trigger(r.a.Events.DOCUMENT_LOADING_PROGRESS,[h.bytes,h.total])}},wI:function(){this.ow();return this.bm.promise},JU:function(){this.Lf||(this.Lf=ea(),this.Lf.request={t:"annots"},this.$e(this.Lf.request));return this.Lf.promise},kx:function(e){this.zf[e]||(this.zf[e]=ea(),this.zf[e].request={t:"image",p:e},this.$e(this.zf[e].request));return this.zf[e].promise},DZ:function(e){this.Ag[e]||(this.Ag[e]=ea(),this.Ag[e].request={t:"text",p:e},this.$e(this.Ag[e].request));
return this.Ag[e].promise},EZ:function(e,f,h,n){var r=this.gf.length;this.Ev.length&&(r=this.Ev.pop());this.gf[r]=ea();this.gf[r].request={t:"tiles",p:e,z:f,r:h,size:n,rID:r};this.$e(this.gf[r].request);return this.gf[r].promise},wL:function(){this.Ee||(this.Ee=ea(),this.Ee.request={t:"pdf"},this.Yz?this.Ee.resolve({url:this.eA}):this.$e(this.Ee.request));return this.Ee.promise},NI:function(e){var f=this,h=new XMLHttpRequest,n=this.Ge+"aul?id="+this.id+"&bcid="+this.Of.clientId,r=new FormData,w={};
e.annots&&(w.annots="xfdf");e.watermark&&(w.watermark="png");e.redactions&&(w.redactions="redact");w={t:"docmod",reqID:this.rY++,parts:w};e.print&&(w.print=!0);var x=this.gH(w);r.append("msg",JSON.stringify(x));return Promise.all([e.annots,e.watermark,e.redactions].map(function(e){return Promise.resolve(e)})).then(function(e){var w=e[0],y=e[1],z=e[2];w&&r.append("annots",w);y&&r.append("watermark",e.watermark);z&&r.append("redactions",z);f.Fw[x.reqID]=ea();h.open("POST",n);h.withCredentials=f.zm;
h.send(r);return f.Fw[x.reqID].promise})},oJ:function(){this.Md||(this.Md=ea(),this.Md.request={t:"xod",noCreate:!0},this.$e(this.Md.request));return this.Md.promise},FZ:function(){this.$d||(this.$d=ea(),this.$d.request={t:"xod"},this.$e(this.$d.request));return this.$d.promise},ml:function(){return!0},request:function(){},gL:function(){},abort:function(){for(var e=0;e<this.gf.length;e++)this.gf[e]&&(this.gf[e].resolve(null),this.gf[e]=null,this.Ev.push(e));this.close()},tx:function(e){this.Ze=this.Ze||
{};this.Ze.headers=e},I3:function(){return this.Ze?Object(z.omit)(this.Ze.headers,["Cookie","cookie"]):null},tp:function(e){this.Ze=this.Ze||{};this.Ze.internal=this.Ze.internal||{};this.Ze.internal.withCredentials=e},zm:function(){return this.Ze&&this.Ze.internal?this.Ze.internal.withCredentials:null},getFileData:function(){return Promise.reject()}});Object(ha.b)(aa);Object(f.a)(aa);Object(f.b)(aa);da["default"]=aa},355:function(ha,da,f){function aa(f){for(var z="",y=0;y<f;y++)z+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*
Math.random()));return z}function ea(f,z,y){function x(f,e,r){function h(e){w().then(function(f){ca&&!da?setTimeout(function(){h(e)},1):f.send(JSON.stringify(e))})}function n(e,f,n){var w=window.createPromiseCapability(),ha=!1,ia=w;z=e;aa=f;ba=n;y=null;try{e=ea?fa+"/"+ea:fa+"/ws";e+="?bcid="+r;var ja=new WebSocket(e);ja.onopen=function(){w.resolve();ha=!0;w=null;ca=!1;x.resolve(ja);aa&&aa()};ja.onerror=function(e){ca=da=!0;w&&w.reject(e);y&&y.reject()};ja.onclose=function(){x=window.createPromiseCapability();
ca=!0;y||(y=window.createPromiseCapability());y.resolve();ba&&ba();z&&ha&&z({t:"health",data:{unhealthy:!0,isDead:!0}})};ja.onmessage=function(e){e&&e.data&&(e=JSON.parse(e.data),e.hb?h({hb:!0}):e.end?close():z(e))}}catch(Aa){w.reject(Aa),w=null}return ia.promise}function w(){ca&&z&&n(z);return x.promise}var x=window.createPromiseCapability(),y=null,z,aa,ba=null,ca=!1,da=!1,ea=e,fa=function(e){var f=e.indexOf("://"),h="ws://";0>f?f=0:(5===f&&(h="wss://"),f+=3);var n=e.lastIndexOf("/");0>n&&(n=e.length);
return h+e.slice(f,n)}(f);return{send:h,kD:n,oA:function(){return y?y.promise:w().then(function(e){y=window.createPromiseCapability();z=null;e.close();return y.promise})},clientId:r}}function w(f){var e=f.lastIndexOf("/");0>e&&(e=f.length);return f.slice(0,e)}var r=aa(8);return window.WebSocket&&!y?x(f,z,r):function(f,e,r){function h(e){(ca?ca.promise:Promise.resolve(ba)).then(function(f){var h=new XMLHttpRequest;f=aa?z+"/"+aa+"pf?id="+f:z+"/pf?id="+f;f+="&bcid="+r;var n=new FormData;n.append("data",
JSON.stringify(e));h.open("POST",f);h.withCredentials=!0;h.send(n)})}function n(){ba=0;ca||(ca=window.createPromiseCapability())}function x(){y=new XMLHttpRequest;var e=z+"/pf";e=0!==ba?e+("?id="+ba+"&uc="+ja):e+("?uc="+ja);ja++;y.open("GET",e,!0);y.withCredentials=!0;y.setRequestHeader("Cache-Control","no-cache");y.setRequestHeader("X-Requested-With","XMLHttpRequest");var f=y,r=!1;y.onreadystatechange=function(){a:if(3<=f.readyState&&!r){try{var e=f.responseText.length}catch(Ba){Object(fa.f)("caught exception");
break a}if(0<e)try{var w=f.responseText.split("\n");for(w[w.length-1]&&w.pop();0<w.length&&3>w[w.length-1].length;)"]"===w.pop()&&n();0<w.length&&3>w[0].length&&w.shift();for(e=0;e<w.length;++e)w[e].endsWith(",")&&(w[e]=w[e].substr(0,w[e].length-1));0===ba&&0<w.length&&(ba=JSON.parse(w.shift()).id,e=ca,ca=null,e.resolve(ba));var y;for(e=0;e<w.length;++e)(y=JSON.parse(w[e]))&&y.end?close():y&&y.hb&&y.id===ba?h({hb:!0}):ha(y)}catch(Ba){}da||(r=!0,x())}};y.send()}var y,z=w(f),aa=e,ba=0,ca=window.createPromiseCapability(),
da=!1,ea=null,ha=null,ja=0;return{send:h,kD:function(e,f,h){ha=e;ea=h;da=!1;n();x();f&&f();return Promise.resolve()},oA:function(){n();ha=null;da=!0;ea&&ea();y.abort();return Promise.resolve()},clientId:r}}(f,z,r)}f.d(da,"a",function(){return ea});var fa=f(1)}}]);}).call(this || window)
