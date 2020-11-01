/* cache of the current image index to be shown in the small library */
var currentImg = 1;
$(document).ready(function() {
    /* when the document first load, show the first image */
    showImage(currentImg);
});

function showImage(idx) {
    /* retrieved the elements that will be shown to the display section */
    var images = document.getElementsByClassName("small-gallery-show");
    /* retrieved the elements that locate in the selection section */
    var image_elements = document.getElementsByClassName("img-box-item");
    /* retrieved the element that is used to describe the image */
    var imgCaption = document.getElementById("img-caption");
    /* if the specified idx is bigger than the number of images, wrap back to index 1 */
    if (idx > images.length) {
        currentImg = 1
    }
    /* if the specified idx is less than 1, wrap to the last image */
    if (idx < 1) {
        currentImg = images.length
    }
    /* hide all images in display section */
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    /* set all images from selection section to unselected flag */
    for (var i = 0; i < image_elements.length; i++) {
        image_elements[i].className = image_elements[i].className.replace(" current-img-show", "");
    }
    /* Display the image in display section with the given idx and set image in selection section with the given idx to be selected flag */
    images[currentImg-1].style.display = "block";
    image_elements[currentImg-1].className += " current-img-show";
    /* use the alt value of the image for description */
    imgCaption.innerHTML = image_elements[currentImg-1].alt;
}

function changeImg(change) {
    /* change the current image index to an amount of change value */
    showImage(currentImg += change);   
}

function toImage(n) {
    /* set the current image index to given n */
    currentImg = n;
    showImage(currentImg);
}