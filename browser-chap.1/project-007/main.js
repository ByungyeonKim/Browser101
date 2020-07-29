'use strict';
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

//https://csstriggers.com/
//성능 개선 버전!
//이미지와 리소스가 준비가 다 된 상태에서 로드가 되도록 -> 이미지를 불러오기 전에 getBoundingClientRect()함수가 호출되지 않도록 구현
addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    //Transform을 이용하면 Composite만 발생해서 성능이 개선된다.
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `
    translate(
      ${x - targetHalfWidth}px, 
      ${y - targetHalfHeight}px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});

//성능 개선하기 전!
/* 도큐먼트에서 마우스가 움직일때마다 호출
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // style 값을 전달할때는 px도 전달을 해줘야한다.(쓰지 않으면 아무반응 없음)
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;
  }); */
