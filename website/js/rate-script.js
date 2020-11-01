$(document).ready(function() {
    /* turn the rating to star icons */
    $('.rateus').barrating({
        theme: 'fontawesome-stars'
    });
    /* disable the select ability from the previous star rate */
    $('.ourrate').barrating({
        theme: 'fontawesome-stars',
        readonly: true,
        hoverState: false,
    });
});

function submitRate() {
    /* When user sent rating form, display to user the respond */
    var rateForm = document.getElementById("rating-parag");
    rateForm.innerHTML = "<br><br><h1 style=\"text-align:center;\">Thank you for rating us</h1> \
    <a href=\"index.html\"><img src=\"images/homebutton.png\" alt=\"homepage button\" style=\"max-width:5%;display:block;margin:auto;overflow:hidden;\"></a><br>";
    window.scrollTo(0,200);
}