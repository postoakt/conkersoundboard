function PlayClip(e){
	var file = "audio/" + $(e).attr("folder") + "/" + $(e).attr("file") + ".mp3";
	console.log(file);
	var audio = new Audio(file);
	$(audio).bind("ended", function(){
		$(e).removeClass("redAnimation");
		$(e).addClass("defaultAnimation");
	});
	$(e).removeClass("defaultAnimation");
	$(e).addClass("redAnimation");
	audio.play();
}
