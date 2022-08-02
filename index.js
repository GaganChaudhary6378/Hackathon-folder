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
let mySong2=document.getElementById("mySong2");
let icon2=document.getElementById("redLike2");
icon2.onclick=function(){
    if(mySong2.paused){
        mySong2.play();
        icon2.src="final like red.png";
    }else{
        mySong2.pause();
        icon2.src="like button.png";
    }
}
let mySong3=document.getElementById("mySong3");
let icon3=document.getElementById("redLike3");
icon3.onclick=function(){
    if(mySong3.paused){
        mySong3.play();
        icon3.src="final like red.png";
    }else{
        mySong3.pause();
        icon3.src="like button.png";
    }
}
let mySong4=document.getElementById("mySong4");
let icon4=document.getElementById("redLike4");
icon4.onclick=function(){
    if(mySong4.paused){
        mySong4.play();
        icon4.src="final like red.png";
    }else{
        mySong4.pause();
        icon4.src="like button.png"
    }
}
let mySong5=document.getElementById("mySong5");
let icon5=document.getElementById("redLike5");
icon5.onclick=function(){
    if(mySong5.paused){
        mySong5.play();
        icon5.src="final like red.png";
    }else{
        mySong5.pause();
        icon5.src="like button.png"
    }
}