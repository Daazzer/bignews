function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function categorySelectList(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"categorySelectList.pug":"if categoryItems\r\n  if hasAll\r\n    option(value=\"\") 所有分类\r\n  each categoryItem in categoryItems\r\n    option(value=categoryItem.id)= categoryItem.name\r\nelse"};
;var locals_for_with = (locals || {});(function (categoryItems, hasAll) {;pug_debug_line = 1;pug_debug_filename = "categorySelectList.pug";
if (categoryItems) {
;pug_debug_line = 2;pug_debug_filename = "categorySelectList.pug";
if (hasAll) {
;pug_debug_line = 3;pug_debug_filename = "categorySelectList.pug";
pug_html = pug_html + "\u003Coption value=\"\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "categorySelectList.pug";
pug_html = pug_html + "所有分类\u003C\u002Foption\u003E";
}
;pug_debug_line = 4;pug_debug_filename = "categorySelectList.pug";
// iterate categoryItems
;(function(){
  var $$obj = categoryItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var categoryItem = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "categorySelectList.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", categoryItem.id, true, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = "categorySelectList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = categoryItem.name) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var categoryItem = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "categorySelectList.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", categoryItem.id, true, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = "categorySelectList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = categoryItem.name) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

}}.call(this,"categoryItems" in locals_for_with?locals_for_with.categoryItems:typeof categoryItems!=="undefined"?categoryItems:undefined,"hasAll" in locals_for_with?locals_for_with.hasAll:typeof hasAll!=="undefined"?hasAll:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}