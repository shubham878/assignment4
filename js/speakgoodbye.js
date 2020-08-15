(function (window) {
	var byespeaker={};
	var speakWord="good bye";
	 byespeaker.speak = function speak (name) {
    console.log(speakWord +""+ name);
  
 }
 window.byespeaker=byespeaker;

}
 )(window);

