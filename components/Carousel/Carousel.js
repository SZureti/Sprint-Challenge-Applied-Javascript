class Carousel {
    constructor(element) {
        this.element = element;
        this.photos = document.querySelectorAll('.carousel-img');
        this.photos = Array.from(this.photos).map(photo => {
            return new Photo(photo);
        });
    }
}
this.state = 0;
this.leftArrow = this.element.querySelector('.left-button');
this.leftArrow.addEventListener('click', () => this.shiftLeft());
this.rightArrow = this.element.querySelector('.right-button');
this.rightArrow.addEventListener('click', () => this.shiftRight());
this.activePhoto = this.photos[this.state];
this.init();

init(){
    this.activePhoto.makeVisible();
}

updateActive(newActive){
    this.activePhoto.makeHidden();
    this.activePhoto = newActive;
    this.activePhoto.makeVisible();
}

shiftLeft(){
    if (this.state < 1){
        this.state += this.pictures.length - 1;
    } else {
        this.state -= 1;
    }
    this.updateActive(this.picture[this.state]);
}

shiftRight(){
    // this.imgs.forEach(img => img.setAttribute('style', 'display:none'));
    // this.img.nextImage(-1);
    if (this.state >= this.pictures.length - 1){
        this.state = 0
    } else {
        this.state += 1;
    }
    this.updateActive(this.picture[this.state]);
}

//display photos
class Photos {
    constructor(photo){
        this.photo = photo;
    }
    makeVisible(){
        this.photo.classList.add('active-photo');
    }
    makeHidden(){
        this.photo.classList.remove('active-photo');
    }
}

let carousel = document.querySelector('.carousel');
new Carousel('carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
