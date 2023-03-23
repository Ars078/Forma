"use strict";
    //массивы для спиcков
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const nations = ["America", "Russian", "Japan"];
    let yearSelect = document.querySelector("#year")
    let monthSelect = document.querySelector("#mounth");
    let daySelect = document.querySelector("#day");
    let nationsSelect = document.querySelector("#Nations");
    // let options = document.createElement("option");
   
    //циклы по массивам
    for (let year = 1995; year <= 2023; year++) {
        let options = document.createElement("option");
        yearSelect.appendChild(options).innerHTML = year;
    }

    for (let month1 of month) {
        let options = document.createElement("option");
        monthSelect.appendChild(options).innerHTML = month1;
    }

    for (let day = 1; day <= 31; day++) {
        let options = document.createElement("option");
        daySelect.appendChild(options).innerHTML = day;
    }

    for (let nations1 of nations) {
        let options = document.createElement("option");
        nationsSelect.appendChild(options).innerHTML = nations1;
    }

    //Валидация формы
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const inputEmail = document.querySelector('#E-mail');
const btn = document.querySelector('#btn')
const passwordRegexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/iu;
const inputPassword = document.querySelector('#Password');
const inputConfirmPassword = document.querySelector('#Confirm');
const inputFirstName = document.querySelector('#firstName');
const inputLastName = document.querySelector('#lastName');

inputFirstName.addEventListener('input', () => {
    if (inputFirstName.value) {
        inputFirstName.style.background = "url('./image/Shape1.svg') no-repeat right";
        inputFirstName.style.borderColor = 'rgba(242, 242, 242, 1)';
        inputFirstName.style.color = 'rgba(17, 17, 17, 1)';
    } else {
        inputFirstName.style.background = 'none';
    }
})

inputLastName.addEventListener('input', () => {
    if (inputLastName.value) {
        inputLastName.style.background = "url('./image/Shape1.svg') no-repeat right";
        inputLastName.style.borderColor = 'rgba(242, 242, 242, 1)';
        inputLastName.style.color = 'rgba(17, 17, 17, 1)';
    } else {
        inputLastName.style.background = 'none';
    }
})

inputEmail.addEventListener('input', () => {
    if (EMAIL_REGEXP.test(inputEmail.value)) {
        inputEmail.style.background = "url('./image/Shape1.svg') no-repeat right";
        inputEmail.style.borderColor = 'rgba(242, 242, 242, 1)';
        inputEmail.style.color = 'rgba(17, 17, 17, 1)';
    } else {
        inputEmail.style.background = 'none';
    }
})

inputPassword.addEventListener('input', () => {
    if (passwordRegexp.test(inputPassword.value)) {
        inputPassword.style.background = "url('./image/Shape1.svg') no-repeat right";
        inputPassword.style.borderColor = 'rgba(242, 242, 242, 1)';
        inputPassword.style.color = 'rgba(17, 17, 17, 1)';
    } else {
        inputPassword.style.background = 'none'
    }
})

inputConfirmPassword.addEventListener('input', () => {
    if (inputConfirmPassword.value === inputPassword.value) {
        inputConfirmPassword.style.background = "url('./image/Shape1.svg') no-repeat right";
        inputConfirmPassword.style.borderColor = 'rgba(242, 242, 242, 1)';
        inputConfirmPassword.style.color = 'rgba(17, 17, 17, 1)';
    } else {
        inputConfirmPassword.style.background = 'none'
    }
})

//Отправка формы
btn.addEventListener('click', async () => {
    const inputFirstName = document.querySelector('#firstName');
    const inputLastName = document.querySelector('#lastName');
    const inputConfirmPassword = document.querySelector('#Confirm');
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const inputEmail = document.querySelector('#E-mail');
    const passwordRegexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    const inputPassword = document.querySelector('#Password');
    const spinner = document.querySelector('.submit-spinner_hide');
    if (EMAIL_REGEXP.test(inputEmail.value) &&
        passwordRegexp.test(inputPassword.value) && inputFirstName.value &&
        inputLastName.value && inputConfirmPassword.value === inputPassword.value) {

        spinner.style.display = 'block';
        const form = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            email: inputEmail.value,
            password: inputPassword.value,
            confirmPassword: inputConfirmPassword.value
        };

        const response = await fetch('https://641474ed9172235b86955d9c.mockapi.io/forma', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(form)
        });
        const result = await response.json()
            .then(() => {
                const formSucses = document.querySelector('.form_successfully')
                const displayNone = document.querySelector('.content')
                formSucses.style.display = 'block';
                displayNone.style.display = 'none';
            })
            .catch(() => {
                spinner.style.display = 'none';
                const btn = document.querySelector('#btn');
                btn.classList.add('swing');
            })
    } else {
        inputFirstName.style.borderColor = 'red';
        inputLastName.style.borderColor = 'red';
        inputConfirmPassword.style.borderColor = 'red';
        inputEmail.style.borderColor = 'red';
        inputPassword.style.borderColor = 'red';
        inputEmail.style.color = 'rgba(255, 34, 34, 1)';
    }
})
