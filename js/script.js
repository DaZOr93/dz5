buttonAlert.onclick = function () {
    alert('Hello, Palmo');
};
buttonRead.onclick = function () {
    inputText.value = "Hello, World";
};
buttonTextInConsole.onclick = function () {
    console.log(inputTextInConsole.value);
};
buttonHReplace.onclick = function () {
    let valueH1 = document.querySelector('div > h1:first-child').innerHTML;
    let valueH2 = document.querySelector('div > h1:last-child').innerHTML;
    document.querySelector('div > h1:first-child').innerHTML = valueH2;
    document.querySelector('div > h1:last-child').innerHTML = valueH1;
};
replaceColor.onclick = function () {
    replaceColor.previousElementSibling.classList.toggle('colorRed');

}
inputDisabled.onclick = function () {
    if (inputDisabled.previousElementSibling.disabled) {
        inputDisabled.previousElementSibling.disabled = false;
    } else {
        inputDisabled.previousElementSibling.disabled = true;
    }
}
blockColor.onclick = function () {
    let colorFirstClass = blockColor.querySelector('div > div:first-child').classList[0];
    let colorLastClass = blockColor.querySelector('div > div:last-child').classList[0];
    blockColor.querySelector('div > div:first-child').classList.remove(colorFirstClass);
    blockColor.querySelector('div > div:first-child').classList.add(colorLastClass);
    blockColor.querySelector('div > div:last-child').classList.remove(colorLastClass);
    blockColor.querySelector('div > div:last-child').classList.add(colorFirstClass);

}
let counter = 0;
addLi.onclick = function () {
    counter++;
    const addedLi = document.createElement('li')
    addedLi.innerText = counter;
    ulList.append(addedLi);
}
addfruitList.onclick = function () {
    let fruits = fruit.value.split(',');
    for (let value of fruits) {
        const addedLi = document.createElement('li')
        addedLi.innerText = value.trim();
        fruitList.append(addedLi);
    }
    fruit.value = '';
}

function checkPassword(str) {
    let digit = 0;
    let capitalLetter = 0;
    for (let char of str) {
        if ((char !== ' ') && (isFinite(char))) {
            digit++
        }
        if ((char !== ' ') && (!isFinite(char)) && (char === char.toUpperCase())) {
            capitalLetter++
        }
    }
    return (str.length >= 6) && (digit >= 1) && (capitalLetter >= 1);
}

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms) {
    }
}

function myForm() {
    let errol = 0;
    let login = document.forms["regform"]["login"].value;
    let email = document.forms["regform"]["email"].value;
    let age = document.forms["regform"]["age"].value;
    let password = document.forms["regform"]["password"].value;
    let passwordAgain = document.forms["regform"]["passwordAgain"].value;
    let re = /\S+@\S+\.\S+/;
    let messageErrorLogin = document.querySelector('.login .colorRed');
    let messageErrorEmail = document.querySelector('.email .colorRed');
    let messageErrorAge = document.querySelector('.age .colorRed');
    let messageErrorPassword = document.querySelector('.password .colorRed');
    let messageErrorPasswordAgain = document.querySelector('.passwordAgain .colorRed');
    let messageSuccess = document.querySelector('.form .colorGreen');

    if ((login.length <= 3) || (login.length >= 21)) {
        errol = 1;
        document.querySelector('.login input').classList.add('borderRed');
        messageErrorLogin.innerText = 'Логин должен быть не меньше 4 и не больше 20 символов';
        messageErrorLogin.style.display = 'block';
    } else if ((login.indexOf('.') !== -1) ||
        (login.indexOf('_') !== -1) ||
        (login.indexOf('/') !== -1) ||
        (login.indexOf('\\') !== -1) ||
        (login.indexOf('|') !== -1) ||
        (login.indexOf(',') !== -1)) {
        errol = 1;
        document.querySelector('.login input').classList.add('borderRed');
        messageErrorLogin.innerText = 'Логин не должен содержать символы . _ / \\ | ,';
        messageErrorLogin.style.display = 'block';
    } else {
        document.querySelector('.login input').classList.remove('borderRed');
        messageErrorLogin.style.display = 'none'
    }
    if (email.trim() === '') {
        errol = 1;
        document.querySelector('.email input').classList.add('borderRed');
        messageErrorEmail.innerText = 'Емейл не должен быть пустым';
        messageErrorEmail.style.display = 'block';
    } else if (!re.test(email)) {
        errol = 1;
        document.querySelector('.email input').classList.add('borderRed');
        messageErrorEmail.innerText = 'Емейл должен меть формать text@text.text';
        messageErrorEmail.style.display = 'block';
    } else {
        document.querySelector('.email input').classList.remove('borderRed');
        messageErrorEmail.style.display = 'none'
    }
    if (age.trim() === '') {
        errol = 1;
        document.querySelector('.age input').classList.add('borderRed');
        messageErrorAge.innerText = 'Возраст  не должен быть пустым';
        messageErrorAge.style.display = 'block';
    } else if (Math.sign(age) !== 1) {
        errol = 1;
        document.querySelector('.age input').classList.add('borderRed');
        messageErrorAge.innerText = 'Возраст может быть только положительным числом';
        messageErrorAge.style.display = 'block';
    } else {
        document.querySelector('.age input').classList.remove('borderRed');
        messageErrorAge.style.display = 'none'
    }
    if (!checkPassword(password)) {
        errol = 1;
        document.querySelector('.password input').classList.add('borderRed');
        messageErrorPassword.innerText = 'Пароль - должен быть не менее 6 символов, иметь хотя бы одну заглавную букву и хотя бы одну цифру';
        messageErrorPassword.style.display = 'block';
    } else {
        document.querySelector('.password input').classList.remove('borderRed');
        messageErrorPassword.style.display = 'none'
    }
    if (password !== passwordAgain) {
        errol = 1;
        document.querySelector('.passwordAgain input').classList.add('borderRed');
        messageErrorPasswordAgain.innerText = 'Пароли не совпадают';
        messageErrorPasswordAgain.style.display = 'block';
    } else {
        document.querySelector('.passwordAgain input').classList.remove('borderRed');
        messageErrorPasswordAgain.style.display = 'none'
    }
    if (errol === 0) {
        messageSuccess.innerText = 'Регистрация успешна';
        messageSuccess.style.display = 'block';
        document.forms["regform"]["login"].value = '';
        document.forms["regform"]["email"].value = '';
        document.forms["regform"]["age"].value = '';
        document.forms["regform"]["password"].value = '';
        document.forms["regform"]["passwordAgain"].value = '';
    }
    return false
}

function addBasket(elem) {
    let nameProduct = elem.previousElementSibling.innerHTML;
    let productListBasket = document.getElementById('basketList');
    const addedProduct = document.createElement('li');
    addedProduct.className = 'list-group-item';
    addedProduct.innerText = nameProduct;
    productListBasket.append(addedProduct);
}

function clearBasket() {
    document.getElementById('basketList').innerHTML = '';

}
let result;
function buttonCalc(elm) {
    let valueButton = elm.innerHTML;
    if ((valueButton !== '=') && (valueButton !== 'Del')) {
        if (result === 1) {
            calcInput.value = '';
            result = 0;
        }
        calcInput.value = calcInput.value + valueButton;
    }
    if (valueButton === '=') {
        calcInput.value = eval(calcInput.value);
        result = 1;
    }
    if (valueButton === 'Del') {
        calcInput.value = '';
    }
}