function changeThumb(img) {
    console.log(img)
    document.querySelector('.zoro').src = `./assets/images/${img}.png`
}

function changeColor(color) {
    document.querySelector('.textBox h2 span').style.color = color
    document.querySelector('.textBox a').style.backgroundColor = color
}

function toggleMenu() {
    const menu = document.querySelector('.toggle')
    const navigation = document.querySelector('.navigation')
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
