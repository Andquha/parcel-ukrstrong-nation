import jquery from "jquery";

window.$ = window.jQuery = jquery; 

// --PRELOADER----PRELOADER----PRELOADER----PRELOADER----PRELOADER----PRELOADER----PRELOADER--
$(document).ready(function(){
  let loader = $('.loader'),                      //Селектор прелодера
    loadertext = $('.loader_text'),               //Текст в прелоадере
    loaderblack = $('.loader_black'),             //Фон в прелоадере
    imgCount = $('img'),                          //Список картинок присуцтвующих на странице
    percent = Math.floor(100/(imgCount.length + 1)),    //Количество процентов за 1 картинку 
    progress = 0,                                 //Прогресс
    loadetImg = 0;                                //Картинок загружено

  loaderblack.css("height", progress +'%');       //Поднимаем фон в зависимотси от прогресса
  loadertext.html(progress+"%");                  //Записываем количество прогресса в текст прелоадера

  for(let i = 0; i < imgCount.length; i++){       //Делаем цыкл
      var imgCopy = new Image();                  //Создаем новую картинку
      imgCopy.src = document.images[i].src;       //К новой картинке подвязываем путь существующей картинки
      imgCopy.onload = imgLoad;                   //По загрузе картинки Делаем команду
      imgCopy.onerror = imgLoad;                  //По НЕ! загрузки картинки делаем команду
  }

  let imgBack = new Image();  
  imgBack.src = "https://ukrstrongnation.com.ua/src/main_page/back.png";
  imgBack.onload = imgLoad;
  imgBack.onerror = imgLoad;


  function imgLoad(){                               //Сама команда
    progress += percent;                            //Повишаем прогресс на количество процентов за картинку
    loadetImg ++;                                   //ПОвишаем количество загруженних картинок
    loaderblack.css("height", progress +'%');       //Поднимаем фон в зависимотси от прогресса
    loadertext.html(progress+"%");                  //Записываем количество прогресса в текст прелоадера
    if(progress >= 100 || loadetImg == imgCount.length + 1){
      loader.fadeOut('slow');
      loadertext.fadeOut('slow');
      loadertext.html(100+"%"); 
      loaderblack.css("height", 100 +'%');
    }
  }
})
// --PRELOADER----PRELOADER----PRELOADER----PRELOADER----PRELOADER----PRELOADER----PRELOADER--


  // --MAP----MAP----MAP----MAP----MAP----MAP----MAP----MAP----MAP--
  let allStates = $("svg.Ukraine > path");
  
  allStates.on("mouseover", function() {
    
    allStates.removeClass("active");
    allStates.attr('fill' , "#AFB78E");
    clear();
    $(this).addClass("active");
    $(this).attr('fill' , "#849464");
    switch ($(this).attr('id')){
      case "lutsk":
        rendercircles(111, "КГ", "касок");
        console.log("lutsk")
        break
      case "rivne":
        rendercircles(222, "КГ", "касок");
        console.log("rivne")
        break
      case "lviv":
        rendercircles(333, "КГ", "касок");
        console.log("lviv")
        break
      case "ujgorod":
        rendercircles(444, "КГ", "касок");
        console.log("ujgorod")
        break
      case "ivanofrankivsk":
        rendercircles(555, "КГ", "касок");
        console.log("ivanofrankivsk")
        break
      case "chernivci":
        rendercircles(666, "КГ", "касок");
        console.log("chernivci")
        break
      case "ternopil":
        rendercircles(777, "КГ", "касок");
        console.log("ternopil")
        break
      case "hmelnitsc":
        rendercircles(888, "КГ", "касок");
        console.log("hmelnitsc")
        break
      case "chernigiv":
        rendercircles(999, "КГ", "касок");
        console.log("chernigiv")
        break
      case "gitomir":
        rendercircles(101, "КГ", "касок");
        console.log("gitomir")
        break
      case "kiev":
        rendercircles(102, "КГ", "касок");
        console.log("kiev")
        break
      case "vinitsa":
        rendercircles(103, "КГ", "касок");
        console.log("vinitsa")
        break
      case "odesa":
        rendercircles(104, "КГ", "касок");
        console.log("odesa")
        break
      case "mikalaiv":
        rendercircles(105, "КГ", "касок");
        console.log("mikalaiv")
        break
      case "kirovograd":
        rendercircles(106, "КГ", "касок");
        console.log("kirovograd")
        break
      case "cherkasi":
        rendercircles(107, "КГ", "касок");
        console.log("cherkasi")
        break
      case "poltava":
        rendercircles(108, "КГ", "касок");
        console.log("poltava")
        break
      case "sumi":
        rendercircles(109, "КГ", "касок");
        console.log("sumi")
        break
      case "harkiv":
        rendercircles(110, "КГ", "касок");
        console.log("harkiv")
        break
      case "lugansk":
        rendercircles(111, "КГ", "касок");
        console.log("lugansk")
        break
      case "doneck":
        rendercircles(112, "КГ", "касок");
        console.log("doneck")
        break
      case "dnipropet":
        rendercircles(113, "КГ", "касок");
        console.log("dnipropet")
        break
      case "zaporig":
        rendercircles(114, "КГ", "касок");
        console.log("zaporig")
        break
      case "herson":
        rendercircles(115, "КГ", "касок");
        console.log("herson")
        break
      case "krim":
        rendercircles(116, "КГ", "касок");
        console.log("krim")
        break
    }
  });
  // --MAP----MAP----MAP----MAP----MAP----MAP----MAP----MAP----MAP--
  
  let spawn_big = [[-10, 70], [70, 12]];
  
  let spawn_midle = [[-12, 32], [60, -4], [5, 90]];
  
  let spawn_small = [[55, 24], [-12, 16], [70, 83]];
  
  function rendercircles(number, subnamber, name){
    for(let i=0;i<spawn_big.length;i++){
      $('.map_content_circles').append(
        "<div class=" + "circles_item_big" + " style=" + "top:" + spawn_big[i][0] + "%;left:" + spawn_big[i][1] + "%;>" +
          "<p class=" + "item_number_big" + ">" + number + "<span>" + subnamber + "</span></p>" +
          "<p class=" + "item_name_big" + ">" + name + "</p>" +
        "</div>")
    }
  
    for(let i=0;i<spawn_midle.length;i++){
      $('.map_content_circles').append(
        "<div class=" + "circles_item_midle" + " style=" + "top:" + spawn_midle[i][0] + "%;left:" + spawn_midle[i][1] + "%;>" +
          "<p class=" + "item_number_midle" + ">" + number + "<span>" + subnamber + "</span></p>" +
          "<p class=" + "item_name_midle" + ">" + name + "</p>" +
        "</div>")
    }
  
    for(let i=0;i<spawn_small.length;i++){
      $('.map_content_circles').append(
        "<div class=" + "circles_item_small" + " style=" + "top:" + spawn_small[i][0] + "%;left:" + spawn_small[i][1] + "%;>" +
          "<p class=" + "item_number_small" + ">" + number + "<span>" + subnamber + "</span></p>" +
          "<p class=" + "item_name_small" + ">" + name + "</p>" +
        "</div>")
    }
  }
  
  function clear(){
    $('.map_content_circles').html('');
  }
  
  // --CLOCK----CLOCK----CLOCK----CLOCK----CLOCK----CLOCK----CLOCK----CLOCK----CLOCK--
  
  window.setInterval(function(){
    let date = new Date();
    let date2 = new Date(2022, 2, 24, 0, 0, 0, 0);
  
    let days = Math.floor((date - date2)/(1000*60*60*24));
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    if(hours < 10){hours = "0" + hours};
    if(minutes < 10){minutes = "0" + minutes};
    if(seconds < 10){seconds = "0" + seconds};
  
    let clock = days + " ДНІВ " + hours + ":" + minutes + ":" + seconds 
  
    $('.achievement_time').html(clock);
  }, 1000);
  
  // --CLOCK----CLOCK----CLOCK----CLOCK----CLOCK----CLOCK----CLOCK----CLOCK----CLOCK--
  