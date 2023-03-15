$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});

$(function () {
    mainInit();
});

function mainInit() {
    pop_close()
}

function pop_close(){
    let close = document.querySelector('#header p.close ');
    let seoulNews = document.querySelector('.seoul-news');

    close.addEventListener('click',function(e){
        seoulNews.classList.add('hide');
      })
}
