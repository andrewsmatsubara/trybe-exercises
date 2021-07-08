function changeBackgroundColor(){
    let bgColor = document.querySelector('.btn-background-color');
    let originalColor = document.body.style.backgroundColor;
    let anotherColor = 'blue';

    bgColor.addEventListener('click', function(){
        if(document.body.style.backgroundColor === anotherColor){
            document.body.style.backgroundColor = originalColor;
        }else{
            document.body.style.backgroundColor = anotherColor;
        }
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
        }
    });
}

function changeLineHeight(){

}

function changeFontFamily(){

}

changeBackgroundColor();
changeTextColor();
changeFontSize();
changeLineHeight();
changeFontFamily()