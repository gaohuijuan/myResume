// 解决click的300ms延迟
FastClick.attach(document.body);

//动态计算rem的值
~function (){
    var winW=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=winW/640*100+"px";
}();

//初始化Swiper
new Swiper(".swiper-container",{
    loop:true,
    direction : 'vertical',
    onSlidePrevEnd:changeEnd,
    onSlideNextEnd:changeEnd


});

//当切换结束的时候，我们需要做的事情：清除所有slide块的id，再让当前活动块拥有对应的的ID 即可，拥有对应的ID才会有对应的动画
function changeEnd(swiper){
    var n=swiper.activeIndex,
        slideAry=swiper.slides;//

    [].forEach.call(slideAry,function(slide,index){
        if(n===index){
            if(n===7){
                slide.id="page1";
                return;
            }else if(n===0){
                slide.id="page6";
                return;
            }
            //if(n===7){
            //
            //}else if(n===8){
            //    slide.id="page6";
            //    return;
            //}
            slide.id="page"+n;
            return;
        }
        slide.id=null;
    });
    console.log(n);
}

//音视频的自动播放
var music=document.getElementById("music"),musicAudio=document.getElementById("musicAudio");
window.setTimeout(function(){
   musicAudio.play();
    musicAudio.addEventListener("canplay",function(){
        music.style.display="block";
        music.className="music move";
    },false)
},1000);
music.addEventListener("click",function(){
    if(musicAudio.paused){
        musicAudio.play();
        music.className="music move";
        return;
    }
    musicAudio.pause();
    music.className="music";
},false);








