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
function getReviews() {
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

    const divElements = document.querySelectorAll('.swiper-slide');

    console.log(divElements);
    // let key;
    // divElements[0].innerHTML +=  `<p class="swiper__text">${data[0].description}</p>
    // <p class="swiper__sub-title" name="title">${data[0].title}</p>`;
    // divElements[1].innerHTML +=  `<p class="swiper__text">${data[1].description}</p>
    // <p class="swiper__sub-title" name="title">${data[1].title}</p>`;
    // divElements[2].innerHTML +=  `<p class="swiper__text">${data[2].description}</p>
    // <p class="swiper__sub-title" name="title">${data[2].title}</p>`;

    // for (key in data) {
    //   divElement.innerHTML += 
    //   `<p class="swiper__text">${data[key].description}</p>
    //   <p class="swiper__sub-title" name="title">${data[key].title}</p>` 
    // }
    let arr = data.slice(0,3);
    console.log(arr);

    for (let i = 0 ; i < 3; i++) {
      divElements[i].innerHTML +=  `<p class="swiper__text">${data[i].description}</p>
     <p class="swiper__sub-title" name="title">${data[i].title}</p>`;
    }
  }
  //4
  xhr.send();
}
getReviews();

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




 