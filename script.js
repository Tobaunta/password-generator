window.onload = function() {
    // variables

    // password container
    const password = document.getElementById('password');
    const copy = document.getElementById('copy');

    // generator container

    // slider
    let sliderValue = document.getElementById('slider-value');
    const slider = document.getElementById('length-slider');

    // checkboxes
    const uppercaseCheckbox = document.getElementById('uppercase-checkbox');
    const lowercaseCheckbox = document.getElementById('lowercase-checkbox');
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');

    // strength
    let strengtValue = 0;
    const strengthText = document.getElementById('strength-text');
    const strengthBar1 = document.getElementById('bar1');
    const strengthBar2 = document.getElementById('bar2');
    const strengthBar3 = document.getElementById('bar3');
    const strengthBar4 = document.getElementById('bar4');
    const strengthBar5 = document.getElementById('bar5');

    // generate button
    const generateButton = document.getElementById('generate');


    // characters
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChars = '0123456789';
    const symbolsChars = '~`! @#$%^&*()_-+={[}]|\:;"<,>.?/';

    // initialize
    slider.style.background = `linear-gradient(90deg, #a638f6 49%, #2a2438 49%)`;

    
    // event listeners

    // generate password
    generateButton.addEventListener('click', function(){
        let charsToUse = '';
        let tempPassword = '';
        strengtValue = 0;
        if(uppercaseCheckbox.checked){
            charsToUse += upperCaseChars;
            strengtValue ++;
        }
        if(lowercaseCheckbox.checked){
            charsToUse += lowerCaseChars;
            strengtValue ++;
        }
        if(numbersCheckbox.checked){
            charsToUse += numbersChars;
            strengtValue ++;
        }
        if(symbolsCheckbox.checked){
            charsToUse += symbolsChars;
            strengtValue ++;
        }
        if(sliderValue.innerText > 9){
            strengtValue ++;
        }
        for (let i = 0; i <= sliderValue.innerText; i++) {
            tempPassword += charsToUse.charAt(Math.floor(Math.random() * charsToUse.length));
        }
        password.innerText = tempPassword;
        if(strengtValue > 4){
            strengthText.innerText = 'Super';
            strengthBar1.style.backgroundColor = '#4abea0';
            strengthBar2.style.backgroundColor = '#4abea0';
            strengthBar3.style.backgroundColor = '#4abea0';
            strengthBar4.style.backgroundColor = '#4abea0';
            strengthBar5.style.backgroundColor = '#4abea0';
        } else if(strengtValue > 3){
            strengthText.innerText = 'Great';
            strengthBar1.style.backgroundColor = '#4abea0';
            strengthBar2.style.backgroundColor = '#4abea0';
            strengthBar3.style.backgroundColor = '#4abea0';
            strengthBar4.style.backgroundColor = '#4abea0';
            strengthBar5.style.backgroundColor = '#a638f6';
        } else if(strengtValue > 2){
            strengthText.innerText = 'Good';
            strengthBar1.style.backgroundColor = '#ffa257';
            strengthBar2.style.backgroundColor = '#ffa257';
            strengthBar3.style.backgroundColor = '#ffa257';
            strengthBar4.style.backgroundColor = '#a638f6';
            strengthBar5.style.backgroundColor = '#a638f6';
        } else if(strengtValue > 1){
            strengthText.innerText = 'Bad';
            strengthBar1.style.backgroundColor = '#be4b4b';
            strengthBar2.style.backgroundColor = '#be4b4b';
            strengthBar3.style.backgroundColor = '#a638f6';
            strengthBar4.style.backgroundColor = '#a638f6';
            strengthBar5.style.backgroundColor = '#a638f6';
        } else {
            strengthText.innerText = 'NO';
            strengthBar1.style.backgroundColor = '#a638f6';
            strengthBar2.style.backgroundColor = '#a638f6';
            strengthBar3.style.backgroundColor = '#a638f6';
            strengthBar4.style.backgroundColor = '#a638f6';
            strengthBar5.style.backgroundColor = '#a638f6';
        }
    });

    // copy password
    copy.addEventListener('click', function(){
        navigator.clipboard.writeText(password.innerText);
    })


    // functions

    // slider functionality
    slider.oninput = function() {
        sliderValue.innerText = this.value;
        sliderBar = this.value * 5 - 1;
        slider.style.background = `linear-gradient(90deg, #a638f6 ${sliderBar}%, #2a2438 ${sliderBar}%)`;
    }
}