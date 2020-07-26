'use strict';
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
// 도큐먼트에서 마우스가 움직일때마다 호출
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`clientX : ${x}px, clientY : ${y}px`);
  // style 값을 전달할때는 px도 전달을 해줘야한다.(쓰지 않으면 아무반응 없음)
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});
