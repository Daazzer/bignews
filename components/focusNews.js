function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function focusNews(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"focusNews.pug":"each picture, index in pictures\r\n  li(class=index===0 ? 'first': '')\r\n    a(href=`article.html?id=${picture.id}`)\r\n      img(src=picture.cover alt=\"newsPic\")\r\n    p= picture.title"};
;var locals_for_with = (locals || {});(function (pictures) {;pug_debug_line = 1;pug_debug_filename = "focusNews.pug";
// iterate pictures
;(function(){
  var $$obj = pictures;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var picture = $$obj[index];
;pug_debug_line = 2;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes([index===0 ? 'first': ''], [true]), false, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${picture.id}`, true, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", picture.cover, true, false)+" alt=\"newsPic\"") + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 5;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 5;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = picture.title) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var picture = $$obj[index];
;pug_debug_line = 2;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes([index===0 ? 'first': ''], [true]), false, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${picture.id}`, true, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", picture.cover, true, false)+" alt=\"newsPic\"") + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 5;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 5;pug_debug_filename = "focusNews.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = picture.title) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);
}.call(this,"pictures" in locals_for_with?locals_for_with.pictures:typeof pictures!=="undefined"?pictures:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}