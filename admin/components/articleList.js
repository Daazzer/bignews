function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function articleList(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\\articleList.pug":"if articles\r\n  each article in articles\r\n    tr\r\n      td= article.title\r\n      td= article.author\r\n      td= article.category\r\n      td.text-center= article.date\r\n      td.text-center= article.state\r\n      td.text-center.\r\n        #[a.btn.btn-default.btn-xs(href=`article_edit.html?id=${article.id}` data-id=article.id) 编辑]\r\n        #[a.btn.btn-danger.btn-xs.delete(href=\"javascript:void(0);\" data-id=article.id) 删除]\r\nelse"};
;var locals_for_with = (locals || {});(function (articles) {;pug_debug_line = 1;pug_debug_filename = ".\\articleList.pug";
if (articles) {
;pug_debug_line = 2;pug_debug_filename = ".\\articleList.pug";
// iterate articles
;(function(){
  var $$obj = articles;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var article = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.title) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.author) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.category) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd class=\"text-center\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.date) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd class=\"text-center\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.state) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd class=\"text-center\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "";
;pug_debug_line = 10;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-default btn-xs\""+pug_attr("href", `article_edit.html?id=${article.id}`, true, false)+pug_attr("data-id", article.id, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "编辑\u003C\u002Fa\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-danger btn-xs delete\""+" href=\"javascript:void(0);\""+pug_attr("data-id", article.id, true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "删除\u003C\u002Fa\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var article = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.title) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.author) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.category) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd class=\"text-center\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.date) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd class=\"text-center\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.state) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ctd class=\"text-center\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "";
;pug_debug_line = 10;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-default btn-xs\""+pug_attr("href", `article_edit.html?id=${article.id}`, true, false)+pug_attr("data-id", article.id, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "编辑\u003C\u002Fa\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-danger btn-xs delete\""+" href=\"javascript:void(0);\""+pug_attr("data-id", article.id, true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "删除\u003C\u002Fa\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\articleList.pug";
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

}}.call(this,"articles" in locals_for_with?locals_for_with.articles:typeof articles!=="undefined"?articles:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}