function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function commentDetailList(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"commentDetailList.pug":"each commentItem in commentItems\r\n  .comment_detail_list\r\n    .person_pic.fl= commentItem.author.substr(0, 1)\r\n    .name_time.fl\r\n      b= commentItem.author\r\n      span= commentItem.date\r\n    .comment_text.fl= commentItem.content"};
;var locals_for_with = (locals || {});(function (commentItems) {;pug_debug_line = 1;pug_debug_filename = "commentDetailList.pug";
// iterate commentItems
;(function(){
  var $$obj = commentItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var commentItem = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cdiv class=\"comment_detail_list\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cdiv class=\"person_pic fl\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commentItem.author.substr(0, 1)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cdiv class=\"name_time fl\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 5;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commentItem.author) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 6;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commentItem.date) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cdiv class=\"comment_text fl\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commentItem.content) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var commentItem = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cdiv class=\"comment_detail_list\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cdiv class=\"person_pic fl\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commentItem.author.substr(0, 1)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cdiv class=\"name_time fl\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 5;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commentItem.author) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 6;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commentItem.date) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + "\u003Cdiv class=\"comment_text fl\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "commentDetailList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commentItem.content) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);
}.call(this,"commentItems" in locals_for_with?locals_for_with.commentItems:typeof commentItems!=="undefined"?commentItems:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}