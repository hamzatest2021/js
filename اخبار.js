<div id="24work">
<style>img.recent_thumb {padding:1px;width:55px;height:55px;border:0;float:right;margin:0 0 5px 10px;}.recent_posts_with_thumbs {
    float: left;
    width: 250;
    min-height: 70px;
    margin: auto;
    padding: 0;
    font-size: 12px;
}ul.recent_posts_with_thumbs li {
    padding-bottom: 5px;
    padding-top: 5px;
    float: right;
    white-space: nowrap;
    list-style: none;
}.recent_posts_with_thumbs a {text-decoration:none;}

.recent_posts_with_thumbs strong {
    font-size: 10px;
    float: right;
    display: flex;
    border: ridge;
    margin-left: 4px;
}

b {
    display: flex;
}

a {
    margin-top: 3;
}


</style>

<script style='text/javascript'>

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
thumburl=d;} else thumburl='https://web.archive.org/web/20130506120714/http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png';

}

var postdate = entry.published.$t;var cdyear = postdate.substring(0,4);var cdmonth = postdate.substring(5,7);var cdday = postdate.substring(8,10);var monthnames = new Array();monthnames[1] = "Jan";monthnames[2] = "Feb";monthnames[3] = "Mar";monthnames[4] = "Apr";monthnames[5] = "May";monthnames[6] = "Jun";monthnames[7] = "Jul";monthnames[8] = "Aug";monthnames[9] = "Sep";monthnames[10] = "Oct";monthnames[11] = "Nov";monthnames[12] = "Dec";document.write('<li class="clearfix">');


document.write('<b><a href="'+posturl+'" target ="_top">'+posttitle+'</a>');

    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");



     

var towrite='';var flag=0;
document.write('<strong>');

if(showpostdate==true) {towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;flag=1;}








document.write(towrite);
document.write('</strong></li>');
if(displayseparator==true) 
if (i!=(numposts-1))
document.write('');
}document.write('</ul>');



}
;document.write('');

}


</script>

<script style='text/javascript'>



var numposts = 5;

var showpostthumbnails = true;

var displaymore = true;

var displayseparator = true;

var showcommentnum = true;

var showpostdate = true;

var showpostsummary = true;

var numchars = 100;</script>



<script src='https://almal3ab24.blogspot.com/feeds/posts/default?orderby=published&alt=json-in-script&callback=showrecentpostswiththumbs'></script>



</span></div>