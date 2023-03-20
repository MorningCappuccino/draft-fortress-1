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

(async () => {
    let user = {
      name: 'John',
      surname: 'Smith'
    };
    
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });
        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
        } 
        return await response.json();
    
    let result = await response.json();
    alert(result.message);
    })()
//'https://jsonplaceholder.typicode.com/users'

// fetch('http://localhost:3000/entity')
// .then(data => {
//         console.log(data);
//         return data.text();
// })
// .then(data => {
//     console.log(data);
// });

// fetch('http://localhost:3000/entity', {
//     method: 'POST', 
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',

//     },
//     body: 'hello',
// })
//     .then(response => response.text())
//     .then(response => {
//         console.log(response);
//     })

// // const response = await fetch(url, {
// //     method: 'POST',
// //     body: database,
// // });
// //     if (!response.ok) {
// //         throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);

// //     }
// //     return await response.json();

// //     const form = () => {
// //     const formData = document.querySelector('.form-data');
        
// //         const data = {
            
// //         }
// //     }