window.onload = function(){
function changeBackgroundColor(){
    let bgColor = document.querySelector('.btn-background-color');
    let bgColorAgain = document.body.style.backgroundColor;
    let originalColor = 'white';
    let anotherColor = 'blue';

    bgColor.addEventListener('click', function(){
        if(document.body.style.backgroundColor === anotherColor){
            document.body.style.backgroundColor = originalColor;
        }else{
            document.body.style.backgroundColor = anotherColor;
        }
        localStorage.setItem('5.4-background-color', document.body.style.backgroundColor)
    });
}


function changeTextColor(){
    let textColor = document.querySelector('.btn-text-color');
    let anotherColor = 'green';
    let originalColor = 'black';
    let paragraph = document.getElementsByTagName('p');

    textColor.addEventListener('click', function(){
        for(let index = 0; index < paragraph.length; index += 1){
            if(paragraph[index].style.color === anotherColor){
                paragraph[index].style.color = originalColor;
            }else{
                paragraph[index].style.color = anotherColor;
            }
            localStorage.setItem('5.4-font-color', paragraph[index].style.color)
        }
    });
}

function changeFontSize(){
    let textSize = document.querySelector('.btn-font-size');
    let paragraph = document.getElementsByTagName('p');
    let originalSize = '20px';
    let anotherSize = '30px';

    textSize.addEventListener('click', function(){
        for(let index = 0; index < paragraph.length; index += 1){
            if(paragraph[index].style.fontSize === anotherSize){
                paragraph[index].style.fontSize = originalSize;
            }else{
                paragraph[index].style.fontSize = anotherSize;
            }
            localStorage.setItem('5.4-font-size', paragraph[index].style.fontSize);
        }
    });
}

function changeLineHeight(){
    let heightBetween = document.querySelector('.btn-line-height');
    let paragraph = document.getElementsByTagName('p');
    let originalHeight = '20px';
    let anotherHeight = '30px';

    heightBetween.addEventListener('click', function(){
        for(let index = 0; index < paragraph.length; index += 1){
            if(paragraph[index].style.lineHeight === anotherHeight){
                paragraph[index].style.lineHeight = originalHeight;
            }else{
                paragraph[index].style.lineHeight = anotherHeight;
            }
            localStorage.setItem('5.4-line-height', paragraph[index].style.lineHeight);
        }
    });
}

function changeFontFamily(){
    let fontStyle = document.querySelector('.btn-font-family');
    let paragraph = document.getElementsByTagName('p');
    let originalFamily = 'arial';
    let anotherFamily = 'verdana';

    fontStyle.addEventListener('click', function(){
        for(let index = 0; index < paragraph.length; index += 1){
            if(paragraph[index].style.fontFamily === anotherFamily){
                paragraph[index].style.fontFamily = originalFamily;
            }else{
                paragraph[index].style.fontFamily = anotherFamily;
            }
            localStorage.setItem('5.4-font-family', paragraph[index].style.fontFamily);
        }
    });
}

changeBackgroundColor();
changeTextColor();
changeFontSize();
changeLineHeight();
changeFontFamily()

let savedBackground = localStorage.getItem('5.4-background-color');
document.body.style.backgroundColor = savedBackground;

let paragraph = document.getElementsByTagName('p');

let savedFontColor = localStorage.getItem('5.4-font-color');
for(let index = 0; index < paragraph.length; index += 1){
    paragraph[index].style.color = savedFontColor;
}

let savedFontSize = localStorage.getItem('5.4-font-size');
for(let index = 0; index < paragraph.length; index += 1){
    paragraph[index].style.fontSize = savedFontSize;
}

let savedLineHeight = localStorage.getItem('5.4-line-height');
for(let index = 0; index < paragraph.length; index += 1){
    paragraph[index].style.lineHeight = savedLineHeight;
}

let savedFontFamily = localStorage.getItem('5.4-font-family');
for(let index = 0; index < paragraph.length; index += 1){
    paragraph[index].style.fontFamily = savedFontFamily;
}
}