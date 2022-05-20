/* let answer=confirm("вам есть 18?");
if(answer == true) {
    console.log('проходите')
} else {
    console.log('уходи')
} 

const num = 50;
if (num < 49) {
    console.log('неправильно')
} else if (num>100) {
    console.log('много')
} else {
    console.log('верно')
} */

/* for(let i = 1; i < 8; i++) {
    console.log(i);
} */

/* function logging( a, b ) {
    console.log( a + b )
}

logging(3,5);
logging(7,8); */
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
       /*  adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></button>'
        


      });
  });
      