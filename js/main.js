// jqDocReady
$(document).ready(function () {
  // найти вкладки
  let tabsItem = $('.tabs-item');

  // клик по табу
  tabsItem.on('click', function (event) {
    event.preventDefault();

    // Присваиваем атрибут
    let activeContent = $(this).attr('href');

    // находим элемент с классом visidle и удаляем его
    $('.visible').toggleClass('visible');

    //  найдем элемент с id и присвоим класс
    $(activeContent).toggleClass('visible');

    // Присваивам класс активной вкладки

    $('.tabs-item-active').toggleClass('tabs-item-active');


    $(this).toggleClass('tabs-item-active');


  });
});