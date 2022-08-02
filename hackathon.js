var mySong=document.getElementById("mySong");
var icon=document.getElementById("redLike");
icon.onclick=function(){
    if(mySong.paused){
        mySong.play();
        icon.src="final like red.png";
    }
    else{
        mySong.pause();
        icon.src="like button.png";
    }
}