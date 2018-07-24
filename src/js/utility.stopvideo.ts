export function stopVideo(element) {
  var iframe = element.querySelector("iframe");
  var video = element.querySelector("video");
  if (iframe !== null) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if (video !== null) {
    video.pause();
  }
}
