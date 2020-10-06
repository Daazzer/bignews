function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function commentList(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"commentList.pug":"if comments\r\n  each comment in comments\r\n    tr\r\n      td= comment.author\r\n      td= comment.content\r\n      td= comment.title\r\n      td= comment.date + ' ' + comment.time\r\n      td= comment.state\r\n      td.text-center\r\n        if comment.state === '已通过'\r\n          |\r\n          |\r\n          a.btn.btn-warning.btn-xs.btn-reject(href=\"javascript:void(0);\" data-id=comment.id) 拒绝\r\n        else if comment.state === '待审核'\r\n          |\r\n          |\r\n          a.btn.btn-info.btn-xs.btn-pass(href=\"javascript:void(0);\" data-id=comment.id) 批准\r\n        |\r\n        |\r\n        a.btn.btn-danger.btn-xs.btn-delete(href=\"javascript:void(0);\" data-id=comment.id) 删除\r\nelse"};
;var locals_for_with = (locals || {});(function (comments) {;pug_debug_line = 1;pug_debug_filename = "commentList.pug";
if (comments) {
;pug_debug_line = 2;pug_debug_filename = "commentList.pug";
// iterate comments
;(function(){
  var $$obj = comments;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var comment = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 4;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 4;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.author) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 5;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 5;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.content) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 6;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 6;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.title) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 7;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 7;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.date + ' ' + comment.time) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 8;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 8;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.state) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 9;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd class=\"text-center\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "commentList.pug";
if (comment.state === '已通过') {
;pug_debug_line = 11;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 12;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 12;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 13;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-warning btn-xs btn-reject\""+" href=\"javascript:void(0);\""+pug_attr("data-id", comment.id, true, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "拒绝\u003C\u002Fa\u003E";
}
else
if (comment.state === '待审核') {
;pug_debug_line = 15;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 16;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 16;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 17;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-info btn-xs btn-pass\""+" href=\"javascript:void(0);\""+pug_attr("data-id", comment.id, true, false)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "批准\u003C\u002Fa\u003E";
}
;pug_debug_line = 18;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 19;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 19;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 20;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-danger btn-xs btn-delete\""+" href=\"javascript:void(0);\""+pug_attr("data-id", comment.id, true, false)) + "\u003E";
;pug_debug_line = 20;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "删除\u003C\u002Fa\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var comment = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 4;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 4;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.author) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 5;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 5;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.content) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 6;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 6;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.title) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 7;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 7;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.date + ' ' + comment.time) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 8;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 8;pug_debug_filename = "commentList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = comment.state) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 9;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ctd class=\"text-center\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "commentList.pug";
if (comment.state === '已通过') {
;pug_debug_line = 11;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 12;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 12;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 13;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-warning btn-xs btn-reject\""+" href=\"javascript:void(0);\""+pug_attr("data-id", comment.id, true, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "拒绝\u003C\u002Fa\u003E";
}
else
if (comment.state === '待审核') {
;pug_debug_line = 15;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 16;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 16;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 17;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-info btn-xs btn-pass\""+" href=\"javascript:void(0);\""+pug_attr("data-id", comment.id, true, false)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "批准\u003C\u002Fa\u003E";
}
;pug_debug_line = 18;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 19;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 19;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "";
;pug_debug_line = 20;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-danger btn-xs btn-delete\""+" href=\"javascript:void(0);\""+pug_attr("data-id", comment.id, true, false)) + "\u003E";
;pug_debug_line = 20;pug_debug_filename = "commentList.pug";
pug_html = pug_html + "删除\u003C\u002Fa\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

}}.call(this,"comments" in locals_for_with?locals_for_with.comments:typeof comments!=="undefined"?comments:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}