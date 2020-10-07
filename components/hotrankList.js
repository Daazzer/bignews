function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function hotrankList(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"hotrankList.pug":"each hotrankItem, index in hotrankItems\r\n  li\r\n    case index\r\n      when 0\r\n        span.first #{index + 1}\r\n        a(href=`article.html?id=${hotrankItem.id}`)= hotrankItem.title\r\n      when 1\r\n        span.second #{index + 1}\r\n        a(href=`article.html?id=${hotrankItem.id}`)= hotrankItem.title\r\n      when 2\r\n        span.third #{index + 1}\r\n        a(href=`article.html?id=${hotrankItem.id}`)= hotrankItem.title\r\n      default\r\n        span #{index + 1}\r\n        a(href=`article.html?id=${hotrankItem.id}`)= hotrankItem.title"};
;var locals_for_with = (locals || {});(function (hotrankItems) {;pug_debug_line = 1;pug_debug_filename = "hotrankList.pug";
// iterate hotrankItems
;(function(){
  var $$obj = hotrankItems;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var hotrankItem = $$obj[index];
;pug_debug_line = 2;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 3;pug_debug_filename = "hotrankList.pug";
switch (index){
case 0:
;pug_debug_line = 5;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cspan class=\"first\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = index + 1) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${hotrankItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hotrankItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
case 1:
;pug_debug_line = 8;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cspan class=\"second\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = index + 1) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${hotrankItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hotrankItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
case 2:
;pug_debug_line = 11;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cspan class=\"third\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = index + 1) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${hotrankItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hotrankItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
default:
;pug_debug_line = 14;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 14;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = index + 1) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 15;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${hotrankItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hotrankItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var hotrankItem = $$obj[index];
;pug_debug_line = 2;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 3;pug_debug_filename = "hotrankList.pug";
switch (index){
case 0:
;pug_debug_line = 5;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cspan class=\"first\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = index + 1) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${hotrankItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hotrankItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
case 1:
;pug_debug_line = 8;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cspan class=\"second\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = index + 1) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${hotrankItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hotrankItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
case 2:
;pug_debug_line = 11;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cspan class=\"third\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = index + 1) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${hotrankItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hotrankItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
default:
;pug_debug_line = 14;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 14;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = index + 1) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 15;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${hotrankItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "hotrankList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hotrankItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);
}.call(this,"hotrankItems" in locals_for_with?locals_for_with.hotrankItems:typeof hotrankItems!=="undefined"?hotrankItems:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}