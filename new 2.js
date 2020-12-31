var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 * Recent Post with Spy effect for blogger.com
 * Widget Bloggerized By - NBT 
 * URL -  http://www.NewBloggerTips.com/
 * Script By Abu Farhan (www.abu-farhan.com)
 */
jQuery(function(){jQuery("ul.spy").simpleSpy(limitspy,intervalspy).bind("mouseenter",function(){jQuery(this).trigger("stop")}).bind("mouseleave",function(){jQuery(this).trigger("start")})});(function(e){e.fn.simpleSpy=function(f,g){f=f||4;g=g||5000;return this.each(function(){var l=e(this),k=true,i=[],m=f,o=0,h=l.find("> li:first").height();l.find("> li").each(function(){i.push("<li>"+e(this).html()+"</li>")});o=i.length;l.wrap('<div class="spyWrapper" />').parent().css({height:h*f});l.find("> li").filter(":gt("+(f-1)+")").remove();l.bind("stop",function(){k=false}).bind("start",function(){k=true});function n(){if(k){var p=e(i[m]).css({height:0,opacity:0,display:"none"}).prependTo(l);l.find("> li:last").animate({opacity:0},1000,function(){p.animate({height:h},1000).animate({opacity:1},1000);e(this).remove()});m++;if(m>=o){m=0}}setTimeout(n,g)}n()})}})(jQuery);function showrecentposts(z){document.write('<ul class="spy">');j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var o=0;o<numposts;o++){var w=z.feed.entry[o];var g=w.title.$t;var f;var p;if(o==z.feed.entry.length){break}for(var l=0;l<w.link.length;l++){if(w.link[l].rel=="alternate"){p=w.link[l].href;break}}for(var l=0;l<w.link.length;l++){if(w.link[l].rel=="replies"&&w.link[l].type=="text/html"){f=w.link[l].title.split(" ")[0];break}}if("content" in w){var r=w.content.$t}else{if("summary" in w){var r=w.summary.$t}else{var r=""}}postdate=w.published.$t;if(j>imgr.length-1){j=0}img[o]=imgr[j];s=r;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){img[o]=d}cmtext=(text!="no")?'<i><font color="'+acolor+'">('+f+" "+text+")</font></i>":"";var q=[1,2,3,4,5,6,7,8,9,10,11,12];var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var u=postdate.split("-")[2].substring(0,2);var h=postdate.split("-")[1];var t=postdate.split("-")[0];for(var e=0;e<q.length;e++){if(parseInt(h)==q[e]){h=x[e];break}}var n=(showPostDate)?'<i><font color="'+acolor+'"> ('+u+" "+h+" "+t+")</font></i>":"";g=(aBold)?"<b>"+g+"</b>":g;var v='<li><a href="'+p+'"><img src="'+img[o]+'" width="'+thumbwidth+'" height="'+thumbheight+'" class="recent-thumb"/></a><a href="'+p+'" class="recent-link">'+g+'</a><div class="spydate">'+n+'</div><div class="spycomment">'+cmtext+"</div>";document.write(v);j++}document.write("</ul>")}document.write('<script src="'+home_page+"feeds/posts/default?max-results="+numposts+'&orderby=published&alt=json-in-script&callback=showrecentposts"><\/script>');

}
/*
     FILE ARCHIVED ON 14:55:00 Mar 29, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:14:48 Dec 31, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 140.81
  exclusion.robots: 0.097
  exclusion.robots.policy: 0.089
  RedisCDXSource: 2.447
  esindex: 0.007
  LoadShardBlock: 111.328 (3)
  PetaboxLoader3.datanode: 105.837 (4)
  CDXLines.iter: 23.083 (3)
  load_resource: 144.446
  PetaboxLoader3.resolve: 128.273
*/