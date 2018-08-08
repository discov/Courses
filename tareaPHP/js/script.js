/*// This is the URL of the video you want to load
var videoUrl = 'http://www.vimeo.com/181964440';
        
// This is the oEmbed endpoint for Vimeo (we're using JSON)
// (Vimeo also supports oEmbed discovery. See the PHP example.)
var endpoint = 'https://www.vimeo.com/api/oembed.json';
// Tell Vimeo what function to call
var callback = 'embedVideo';
// Put together the URL



var url = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback ;
// This function puts the video on the page
function embedVideo(video) {
    document.getElementById('embed').innerHTML = unescape(video.html);
}
// This function loads the data from Vimeo
function init() {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);
    document.getElementsByTagName('head').item(0).appendChild(js);
}
// Call our init function when the page loads
window.onload = init;*/
/*
$(document).ready(function() {
  
    $("img[data-vimeo-id]").each(function(index) {
        var vimeoId = $(this).data('vimeo-id');
        // Endpoint: https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/
        $.getJSON('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + vimeoId, {
            format: "json",
            width: "300"
        },
        function(data) {
            $("img[data-vimeo-id=" + vimeoId + "]").attr('src', data.thumbnail_url);
        });
    });
  
});*/
$(document).ready(function() {
    
    $(document).on('click', '.vidSecScroll', function () {
        // your function here
        var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);
        player.getPaused().then(function(paused) {
            // paused = whether or not the player is paused
            if(paused) player.play();
            else player.pause();
        }).catch(function(error) {
            // an error occurred
            console.log("something went wrong :s"+error);
        });
        
    });
});