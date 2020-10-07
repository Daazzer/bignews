function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function articleInfoContent(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"articleInfoContent.pug":"if article\r\n  |#{article.author} 发布于 #{article.date}&nbsp;&nbsp;&nbsp;分类：#{article.category}&nbsp;&nbsp;&nbsp;阅读：( #{article.read} )&nbsp;&nbsp;&nbsp;评论：( #{article.comments} )\r\nelse"};
;var locals_for_with = (locals || {});(function (article) {;pug_debug_line = 1;pug_debug_filename = "articleInfoContent.pug";
if (article) {
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.author) ? "" : pug_interp));
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + " 发布于 ";
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.date) ? "" : pug_interp));
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + "&nbsp;&nbsp;&nbsp;分类：";
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.category) ? "" : pug_interp));
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + "&nbsp;&nbsp;&nbsp;阅读：( ";
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.read) ? "" : pug_interp));
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + " )&nbsp;&nbsp;&nbsp;评论：( ";
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = article.comments) ? "" : pug_interp));
;pug_debug_line = 2;pug_debug_filename = "articleInfoContent.pug";
pug_html = pug_html + " )";
}}.call(this,"article" in locals_for_with?locals_for_with.article:typeof article!=="undefined"?article:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}