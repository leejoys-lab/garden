//스크롤
function onScroll(event){
var scrollPos = $(document).scrollTop();
changeHeader();
}
function changeHeader(){
var scrollPos = $(document).scrollTop();
if(scrollPos > 300){
    $('body').addClass("scroll");
} else{
    $('body').removeClass("scroll");
}
if(scrollPos > 250){
    $('body').addClass("scroll_ready");
}else{
    $('body').removeClass("scroll_ready");
}
}


$(function(){
$(document).on("scroll", onScroll);


//퀵메뉴
$('#floating a,#floating button').on('mouseenter focusin',function(){
    $('#floating').addClass('active');
});

var floatingLeave =$('#container a:last-child,#footer a:first-child');

floatingLeave.on('focusin',function(){
    $('#floating').removeClass('active');	
})
$('#floating').on('mouseleave',function(){
    $('#floating').removeClass('active');
});
})



