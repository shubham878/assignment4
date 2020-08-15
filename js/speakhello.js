(function (window) {
	var hellospeaker={};
	var speakWord="hello";
	 hellospeaker.speak = function speak (name) {
    console.log(speakWord +""+ name);
  
 }
 window.hellospeaker=hellospeaker;

}
 )(window);

