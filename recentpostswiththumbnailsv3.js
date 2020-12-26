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

function showrecentpostswiththumbs(json) {document.write('<ul class="recent_posts_with_thumbs">'); for (var i = 0; i < numposts; i++) {var entry = json.feed.entry[i];var posttitle = entry.title.$t;var posturl;if (i == json.feed.entry.length) break;for (var k = 0; k < entry.link.length;k++){
if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if (entry.link[k].rel == 'alternate') {posturl = entry.link[k].href;break;}}var thumburl;try {thumburl=entry.media$thumbnail.url;}catch (error)


{
s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
thumburl=d;} else thumburl='https://web.archive.org/web/20120103102033/http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png';

}


var postdate = entry.published.$t;var cdyear = postdate.substring(0,4);var cdmonth = postdate.substring(5,7);var cdday = postdate.substring(8,10);var monthnames = new Array();monthnames[1] = "Jan";monthnames[2] = "Feb";monthnames[3] = "Mar";monthnames[4] = "Apr";monthnames[5] = "May";monthnames[6] = "Jun";monthnames[7] = "Jul";monthnames[8] = "Aug";monthnames[9] = "Sep";monthnames[10] = "Oct";monthnames[11] = "Nov";monthnames[12] = "Dec";document.write('<li class="clearfix">');


if(showpostthumbnails==true) 
document.write('<img class="recent_thumb" src="'+thumburl+'"/>');
document.write('<b><a href="'+posturl+'" target ="_top">'+posttitle+'</a></b><br>');

    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");


if (showpostsummary == true) {

      if (postcontent.length < numchars) {
          document.write('<i>');
         document.write(postcontent);
          document.write('</i>');}
      else {
          document.write('<i>');
         postcontent = postcontent.substring(0, numchars);
         var quoteEnd = postcontent.lastIndexOf(" ");
         postcontent = postcontent.substring(0,quoteEnd);
         document.write(postcontent + '...');
          document.write('</i>');}
}

var towrite='';var flag=0;
document.write('<br><strong>');

if(showpostdate==true) {towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;flag=1;}

if(showcommentnum==true) 
{
if (flag==1) {towrite=towrite+' | ';}
if(commenttext=='1 Comments') commenttext='1 Comment';
if(commenttext=='0 Comments') commenttext='No Comments';
commenttext = '<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';
towrite=towrite+commenttext;
flag=1;
;
}

if(displaymore==true) 
{
if (flag==1) towrite=towrite+' | ';
towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">More -></a>';
flag=1;
;
}




document.write(towrite);

document.write('</strong></li>');
if(displayseparator==true) 
if (i!=(numposts-1))
document.write('<hr size=0.5>');
}document.write('</ul>');



}

}
/*
     FILE ARCHIVED ON 10:20:33 Jan 03, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:46:41 Dec 26, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 8.515
  esindex: 0.012
  PetaboxLoader3.resolve: 260.864
  exclusion.robots.policy: 0.188
  exclusion.robots: 0.216
  load_resource: 277.428
  LoadShardBlock: 130.301 (3)
  CDXLines.iter: 20.859 (3)
  PetaboxLoader3.datanode: 144.108 (4)
  captures_list: 170.963
*/