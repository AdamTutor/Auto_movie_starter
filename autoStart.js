
var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', "1.mp4");

video.appendChild(source);
video.play();
