'use strict'

new Swiper('.swiper', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
    },
});
//---------------post------------------------------------------
function f1() {
  //1
  const xhr = new XMLHttpRequest();

  //2
  xhr.open('GET','http://localhost:3000/entity');
  //3
  xhr.onload = function () {
    console.log(xhr.status);
    console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
  }
  //4
  xhr.send();
}
f1();
function f2() {
  //1
  const xhr = new XMLHttpRequest();
  //2
  xhr.open('GET', 'http://localhost:3000/entity');
  //3
  xhr.onload = function () {
    console.log(xhr.status);
    console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);

    const divElement = document.querySelector('.swiper__text');

    let key;

    for (key in data) {
      divElement.innerHTML += 
      `<p class="swiper__text">${data[key].description}</p>
      <p class="swiper__sub-title" name="title">${data[key].title}</p>` 
    }
  }
  //4
  xhr.send();
}
  f2();

//работает----get---------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);
   
    const dataToSend = {
      title :  formData.get('title'),
      description : formData.get('description'),
    }
    console.log(dataToSend);
    
      let response = await fetch('http://localhost:3000/entity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify( dataToSend)
      });
      if (response.ok) {
        let result = await response.json();
      }
      
    }
    
  }
);




 