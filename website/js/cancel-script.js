$("document").ready(function() { 
    /* hide the showing email section */
    $("#submit-cancel-email").css("display","none");
});  
var email;
/* constantly check user input */
$("#cancel-email").on('keydown',function(e) { 
    // e.preventDefault();
    /* check if user enter a valid email address */
    var emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    if ($("#cancel-email").val().match(emailCheck)) {
        /* if the email is valid display, list of orders to user */
        $("#submit-cancel-email").css("display","inline-block");
    } else {
        /* otherwise hide the list */
        $("#submit-cancel-email").css("display","none");
    }
    /* if user hit enter check email again to proceed to next step */
    if(e.key == 'Enter') { 
        if ($("#cancel-email").val().match(emailCheck)) {
            showReservation();
        } else {
            alert("Not a valid email.");
        }
    }
});

$("#cancel-submit-email").submit(function(e) {
    e.preventDefault();
    /* display list of user's order */
    showReservation()
});

function showReservation() {
    /* hide the submit email form and display the reservation summary */
    $("#submit-cancel-email").css("display","none");
    email = $("#cancel-email").val();
    var content = document.getElementById("reservation-show");
    content.innerHTML = "<p>You have 1 reservation</p>\
        <p class=\"list-reservation-show\" onclick=\"processCancel()\"><span>&#10754;</span>Treehouse accommodation, 2 nights</p>";
}

function processCancel() {
    /* cancel reservation summary */
    var reservationSection = document.getElementById("cancel-section");
    reservationSection.innerHTML = "<section id=\"cancel-reservation-summary\">\
            <p>Treehouse Accommodation</p>\
            <hr>\
            <p>People: 1 Adult</p>\
            <p>Stay: 2 nights, Fri, April 04 - Sun, April 06</p>\
            <hr>\
            <p>Total price:  $1,007.94</p>\
            <hr>\
            <form>\
                <label for=\"cancel-confirm-email\">Confirm email</label>\
                <input type=\"text\" name=\"cancel-confirm-email\" id=\"cancel-confirm-email\">\
                <button type=\"button\" id=\"submit-cancel-button\" onclick=\"cancelConfirm()\">Submit</button>\
            </form>\
        </section>"; 
}

function cancelConfirm() {
    /* check if user type the same email */
    if (email != $("#cancel-confirm-email").val()) {
        alert("Wrong email address.");
        return;
    }
    var reservationSection = document.getElementById("cancel-section");
    reservationSection.innerHTML = "<br><br><h1 style=\"text-align:center;font-size:2em;color:rgb(56, 131, 27);\">Thank you.</h1><br> \
    <h4 style=\"text-align:center;font-size:2em;color:rgb(56, 131, 27);\">A confirmation email has been sent to your email address.</h4><br>\
    <a href=\"index.html\"><img src=\"images/homebutton.png\" alt=\"homepage button\" style=\"max-width:10%;display:block;margin:auto;overflow:hidden;\"></a><br>";
    window.scrollTo(0,200); 
}
