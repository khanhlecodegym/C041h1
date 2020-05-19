let text = 'thanh 123';

for(let i = 0; i < text.length ; i++ ) {
    console.log(text[i]);
}

let objImage = document.getElementById('image');

let isChange = true;

function changeImage()
{
    console.log(objImage);
    if(isChange) {
        objImage.src = 'images/codegym.JPG';
        
    } else {
        objImage.src = 'images/car.jpg';
    }

    isChange = !isChange;
    
}