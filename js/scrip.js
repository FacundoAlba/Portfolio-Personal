let hideText_btn_1 = document.getElementById('hideText_btn_1');
let hideText_1 = document.getElementById('hideText_1');

hideText_btn_1.addEventListener('click', toggleText1);

function toggleText1(){
    hideText_1.classList.toggle('show')
    if (hideText_1.classList.contains('show')){
        hideText_btn_1.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
    }
    else {
        hideText_btn_1.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
    }
}

let hideText_btn_2 = document.getElementById('hideText_btn_2');
let hideText_2 = document.getElementById('hideText_2');

hideText_btn_2.addEventListener('click', toggleText2);

function toggleText2(){
    hideText_2.classList.toggle('show') 
    if (hideText_2.classList.contains('show')){
        hideText_btn_2.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
    }
    else {
        hideText_btn_2.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
    } 
}

let hideText_btn_3 = document.getElementById('hideText_btn_3');
let hideText_3 = document.getElementById('hideText_3');

hideText_btn_3.addEventListener('click', toggleText3);

function toggleText3(){
    hideText_3.classList.toggle('show')
    if (hideText_3.classList.contains('show')){
        hideText_btn_3.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
    }
    else {
        hideText_btn_3.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
    }
}







