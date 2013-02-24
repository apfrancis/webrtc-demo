
// shim getUserMedia
navigator.getUserMedia = navigator.getUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
window.URL = window.URL || window.webkitURL;

function hasGetUserMedia() {
  // Note: Opera is unprefixed.
  return !!navigator.getUserMedia;
}

var video = document.querySelector('video');
if (hasGetUserMedia()) {
    navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
        video.src = window.URL.createObjectURL(localMediaStream);
    },function(){
        alert('no chance sunshine');
    });
} else {
  alert('getUserMedia() is not supported in your browser');
}