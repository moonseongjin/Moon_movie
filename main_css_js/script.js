/* 현재 상영작 메뉴*/
const movieMenu = document.querySelectorAll('.movie_menu li');
const tabContent = document.querySelectorAll('#tab_content > div');
/*sub_slide 버튼*/
const slide = document.querySelector('.sub_list');
const prevBtn = document.querySelector('.first');
const hide = document.querySelector('.hide');
const hide2 = document.querySelector('.hide2');
const nextBtn = document.querySelector('.end');
/* 할인 이벤트 메뉴 */
let panelQuestion = document.querySelectorAll('.panel');
let btnCollapse = document.getElementsByClassName('name2');
/* 하단 저작권에 ' |' 를 반복문 사용하여 추가 */
const separator = " |";
const copyrightElements = document.querySelectorAll('.copyright');
/* pageYOffset */
const header = document.querySelector('.main_nav');

function showContent(num) {
    tabContent.forEach(function (item) {
        item.style.display = 'none';

    });
    tabContent[num].style.display = 'block';

}
showContent(0);

/*메뉴 클릭 이벤트*/

movieMenu.forEach(function (item, idx) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
     
        showContent(idx);
        
        moveHightlight(idx);
       
    });
});

/*sub_slide 버튼*/

let left = 0;

hide2.classList.remove('hide2');

nextBtn.addEventListener('click',function(e){
  e.preventDefault();
  slide.style.left = '-100%';
  hide.classList.remove('hide');
  hide2.classList.add('hide2');
});

prevBtn.addEventListener('click',function(e){
  e.preventDefault();
  slide.style.left = '0%';  
  hide.classList.add('hide');
  hide2.classList.remove('hide2');
});

/* 할인 이벤트 메뉴 */

for (var pq of panelQuestion) {

    pq.addEventListener('click', function () {
        hideAll();
        this.classList.add('active');
    });
}
function hideAll() {
    for (q of panelQuestion) {
        q.classList.remove('active');
    }
}
btnCollapse[0].addEventListener('click', hideAll);


/* 하단 저작권에 ' |' 를 반복문 사용하여 추가 */

for (let i = 0; i < copyrightElements.length; i++) {
  const childElements = copyrightElements[i].querySelectorAll('li');

  for (let j = 0; j < childElements.length - 1; j++) {
    childElements[j].textContent += separator;

  }
}

/* pageYOffset */
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {

  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos < currentScrollPos) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  prevScrollPos = currentScrollPos;
});