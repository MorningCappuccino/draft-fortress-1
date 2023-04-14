const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function (e) {
        e.preventDefault();
        popUp.classList.add('active');

    })
closePopUp.addEventListener('click',()=> {
    popUp.classList.remove('active')
}) 

const openRegister = document.getElementById('open_register');
const closeRegister = document.getElementById('close_register');
const register = document.getElementById('register_up');

// openRegister = addEventListener('click', function(e) {
//     e.preventDefault();
//     openPopUp.classList.remove('active')
// })

closeRegister.addEventListener('click', ()=> {
    registerUp.classList.remove('active')
})