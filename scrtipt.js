"use strict";
    //массивы для спиcков
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const nations = ["American", "Russian"];

    //циклы по массивам
    for (let year = 1995; year <= 2023; year++) {
        let select = document.querySelector("#year")
        let options = document.createElement("option")
        select.appendChild(options).innerHTML = year;
    }

    for (let month1 of month) {
        let select = document.querySelector("#mounth")
        let options = document.createElement("option");
        select.appendChild(options).innerHTML = month1;
    }

    for (let nations1 of nations) {
        let select = document.querySelector("#Nations")
        let options = document.createElement("option");
        select.appendChild(options).innerHTML = nations1;
    }

    for (let day = 1; day <= 31; day++) {
        let select = document.querySelector("#day")
        let options = document.createElement("option");
        select.appendChild(options).innerHTML = day;
    }

    //Валидация формы
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const inputEmail = document.querySelector('#E-mail');
const btn = document.querySelector('#btn')
const passwordRegexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/iu;
const inputPassword = document.querySelector('#Password');

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

//Отправка формы
btn.addEventListener('click', async () => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const inputEmail = document.querySelector('#E-mail');
    const passwordRegexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    const inputPassword = document.querySelector('#Password');

    if (EMAIL_REGEXP.test(inputEmail.value) &&
        passwordRegexp.test(inputPassword.value)) {
        const form = {
            email: inputEmail.value,
            password: inputPassword.value
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
                const btn = document.querySelector('#btn');
                btn.classList.add('swing');
            })
    } else {
        inputEmail.style.borderColor = 'red';
        inputPassword.style.borderColor = 'red';
        inputPassword.style.color = 'rgba(255, 34, 34, 1)';
        inputEmail.style.color = 'rgba(255, 34, 34, 1)';
    }
})
