function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function commonNewsList(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"commonNewsList.pug":"each commonNewsItem in commonNewsItems\r\n  .common_news_list\r\n    a.list_pic(href=`article.html?id=${commonNewsItem.id}`)\r\n      img(src=commonNewsItem.cover alt=\"commonNewsPic\")\r\n    h4\r\n      a(href=`article.html?id=${commonNewsItem.id}`)= commonNewsItem.title\r\n    p!= commonNewsItem.intro\r\n    .new_info\r\n      |\r\n      |\r\n      span.\r\n        标签：#{commonNewsItem.category}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\r\n        #[i.fa.fa-eye]\r\n        &nbsp;阅读( #{commonNewsItem.read} )&nbsp;&nbsp;&nbsp;\r\n        #[i.fa.fa-commenting]\r\n        &nbsp;评论( #{commonNewsItem.comments} )\r\n      |\r\n      |\r\n      b 发布于 #{commonNewsItem.date}"};
;var locals_for_with = (locals || {});(function (commonNewsItems) {;pug_debug_line = 1;pug_debug_filename = "commonNewsList.pug";
// iterate commonNewsItems
;(function(){
  var $$obj = commonNewsItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var commonNewsItem = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cdiv class=\"common_news_list\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"list_pic\""+pug_attr("href", `article.html?id=${commonNewsItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", commonNewsItem.cover, true, false)+" alt=\"commonNewsPic\"") + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 5;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 6;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${commonNewsItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fh4\u003E";
;pug_debug_line = 7;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 7;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (null == (pug_interp = commonNewsItem.intro) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 8;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cdiv class=\"new_info\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 10;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 10;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 11;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "标签：";
;pug_debug_line = 12;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.category) ? "" : pug_interp));
;pug_debug_line = 12;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;";
;pug_debug_line = 13;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 13;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 13;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-eye\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 13;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 14;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 14;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "&nbsp;阅读( ";
;pug_debug_line = 14;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.read) ? "" : pug_interp));
;pug_debug_line = 14;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + " )&nbsp;&nbsp;&nbsp;";
;pug_debug_line = 15;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 15;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 15;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-commenting\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 15;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 16;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 16;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "&nbsp;评论( ";
;pug_debug_line = 16;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.comments) ? "" : pug_interp));
;pug_debug_line = 16;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + " )\u003C\u002Fspan\u003E";
;pug_debug_line = 17;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 18;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 18;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 19;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 19;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "发布于 ";
;pug_debug_line = 19;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.date) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var commonNewsItem = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cdiv class=\"common_news_list\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"list_pic\""+pug_attr("href", `article.html?id=${commonNewsItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", commonNewsItem.cover, true, false)+" alt=\"commonNewsPic\"") + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 5;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 6;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `article.html?id=${commonNewsItem.id}`, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fh4\u003E";
;pug_debug_line = 7;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 7;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (null == (pug_interp = commonNewsItem.intro) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 8;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cdiv class=\"new_info\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 10;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 10;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 11;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "标签：";
;pug_debug_line = 12;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.category) ? "" : pug_interp));
;pug_debug_line = 12;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;";
;pug_debug_line = 13;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 13;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 13;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-eye\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 13;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 14;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 14;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "&nbsp;阅读( ";
;pug_debug_line = 14;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.read) ? "" : pug_interp));
;pug_debug_line = 14;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + " )&nbsp;&nbsp;&nbsp;";
;pug_debug_line = 15;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 15;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 15;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-commenting\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 15;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 16;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 16;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "&nbsp;评论( ";
;pug_debug_line = 16;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.comments) ? "" : pug_interp));
;pug_debug_line = 16;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + " )\u003C\u002Fspan\u003E";
;pug_debug_line = 17;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 18;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 18;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "";
;pug_debug_line = 19;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 19;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + "发布于 ";
;pug_debug_line = 19;pug_debug_filename = "commonNewsList.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = commonNewsItem.date) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);
}.call(this,"commonNewsItems" in locals_for_with?locals_for_with.commonNewsItems:typeof commonNewsItems!=="undefined"?commonNewsItems:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}