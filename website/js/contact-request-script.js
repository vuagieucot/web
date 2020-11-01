function submitRequest() {
    /* Retrieved the element with id 'social-parag' */
    var content = document.getElementById("social-parag");
    content.innerHTML = "<br><br><h1 style=\"text-align:center;\">Thank you for submiting the request</h1> \
    <h4 style=\"text-align:center;\">We will contact you soon</h4>\
    <a href=\"index.html\"><img src=\"images/homebutton.png\" alt=\"homepage button\" style=\"max-width:5%;display:block;margin:auto;overflow:hidden;\"></a><br>";
    window.scrollTo(0,200);
}