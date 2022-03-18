const heroSpanSlide = document.querySelector('.p-slider').children;
const spanLenght = heroSpanSlide.length;
let index = 0;
const spanInTimer = 2000;
const spanOutTimer = 1800;



function animateHeroSpan(){
  for (let i = 0; i < spanLenght; i++) {
    heroSpanSlide[i].classList.remove('span-in','span-out');
  }

  heroSpanSlide[index].classList.add('span-in');

  setTimeout(() => {
    heroSpanSlide[index].classList.add('span-out');
  }, spanOutTimer);

  setTimeout(() => {
    if(index == spanLenght-1){
      index = 0;
    }
    else{
      index++;
    }

    animateHeroSpan();
  }, spanInTimer);
}


window.onload = animateHeroSpan;

