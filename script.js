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
    const lowerCaseCheckbox = document.getElementById('uppercase-checkbox');
    const upperCaseCheckbox = document.getElementById('lowercase-checkbox');
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');

    // strength
    const strengthValue = document.getElementById('strength-value');
    const strengthBar1 = document.getElementById('bar1');
    const strengthBar2 = document.getElementById('bar2');
    const strengthBar3 = document.getElementById('bar3');
    const strengthBar4 = document.getElementById('bar4');

    // generate button
    const generateButton = document.getElementById('generate');


    // characters
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChars = '0123456789';
    const symbolsChars = '!"#¤%&/()=?`^*_-:.;,<>';
    let charsToUse = '';

    // initialize
    slider.style.background = `linear-gradient(90deg, #a638f6 49%, #2a2438 49%)`;


    // functions

    // slider functionality
    slider.oninput = function() {
        sliderValue.innerText = this.value;
        sliderBar = this.value * 5 - 1;
        slider.style.background = `linear-gradient(90deg, #a638f6 ${sliderBar}%, #2a2438 ${sliderBar}%)`;
    }
}