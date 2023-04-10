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

 fetch('http://localhost:3000/entity').then((res)=> {
  (res.json().then((res)))
  
 })
 

