function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function attentionList(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"attentionList.pug":"each attentionItem in attentionItems\r\n  li\r\n    a(href=\"javascript:void(0);\")= attentionItem.intro"};
;var locals_for_with = (locals || {});(function (attentionItems) {;pug_debug_line = 1;pug_debug_filename = "attentionList.pug";
// iterate attentionItems
;(function(){
  var $$obj = attentionItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var attentionItem = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = "attentionList.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 3;pug_debug_filename = "attentionList.pug";
pug_html = pug_html + "\u003Ca href=\"javascript:void(0);\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "attentionList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = attentionItem.intro) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var attentionItem = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = "attentionList.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 3;pug_debug_filename = "attentionList.pug";
pug_html = pug_html + "\u003Ca href=\"javascript:void(0);\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "attentionList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = attentionItem.intro) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);
}.call(this,"attentionItems" in locals_for_with?locals_for_with.attentionItems:typeof attentionItems!=="undefined"?attentionItems:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}