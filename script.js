$('.burger-btn').on('click',function(){
    $('.bar').toggleClass('cross');  //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('nav').toggleClass('open');  //.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
    $('body').toggleClass('noscroll');  
    $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
   });

