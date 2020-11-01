/* variable to retrieve the input from user for booking */
var stay, arrive, leave, adult, children, infant, promo;

$(document).ready(function() {
    /* display the first process in booking page */
    toChooseStay();
}); 

function toPayMethod() {
    /* display to user payment methods */
    var process = document.getElementById("book-process");
    process.innerHTML = "<section class=\"go-back\">\
                <img src=\"images/gobackbutton.png\" alt=\"go back button\" onclick=\"toChooseStay()\">\
            </section>\
            <section class=\"choose-method\">\
                <br><br>\
                <p>Available Payment Options</p>\
                <button class=\"choose-payment-option\" onclick=\"toPayCredit()\">Credit/Debit Card</button><br>\
                <button class=\"choose-payment-option\" onclick=\"toPayCash()\">Cash</button>\
            </section>";
    /* give the current process 'process-current' flag */
    $("#choose-accommodation").removeClass("process-current");
    $("#choose-paymethod").addClass("process-current");
    $("#summary").removeClass("process-current");
    $("#pay-confirmation").removeClass("process-current");
}

function fowardToPayMethod() {
    /* get values from user input */
    stay = $("#accommodation").val();
    arrive = $("#arrive").val();
    leave = $("#leave").val();
    adult = $("#adults").val();
    children = $("#children").val();
    infant = $("#infants").val();
    promo = $("#promo").val();
    /* check if user did not make selections */
    if (stay == "0") {
        alert("You need to choose type of accommodation.");
        return;
    }
    if (arrive == "" || leave == "") {
        alert("Please specify you arriving and leaving date.");
        return;        
    }
    /* check if user select invalid dates */
    if (arrive > leave) {
        alert("Leaving date should be after arriving date.");
        return;        
    }
    /* check if there is no adult specified */
    if (adult <= 0) {
        alert("Adults requred.");
        return;       
    }
    /* the promo is meant to be blank, since user did not really receive promo code */
    if (promo != "") {
        alert("You promo code is not valid.");
        return;         
    }
    toPayMethod();
} 

function toConfirmCashPay() {
    /* get values from user input */
    var name = $("#cash-name").val();
    var email = $("#cash-email").val();
    var phone = $("#cash-phone").val();
    /* check if user did not finish filling the form */
    if (name == "" || email == "" || phone == "") {
        alert("Please complete your contact detail.");
        return;
    }
    /* regular expression to check if user's email has the format like 'somename@domain.sometopleveldomain' */
    var emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!email.match(emailCheck)) {
        alert("Please enter a valid email.\nYour email should be in form somename@domain.sometopleveldomain");
        return;
    }
    /* regular expression to check if user enter valid phone number */
    var phoneCheck = /^\d+$/;
    if (!phone.match(phoneCheck)) {
        alert("Please enter a valid phone number.\nShould contain numbers only.");
        return;
    }
    /* give the current process 'process-current' flag */ 
    $("#choose-accommodation").removeClass("process-current");
    $("#choose-paymethod").removeClass("process-current");
    $("#summary").removeClass("process-current");
    $("#pay-confirmation").addClass("process-current");
    var process = document.getElementById("book-process");
    process.innerHTML = "<br><br><h1 style=\"text-align:center;font-size:2em;color:rgb(56, 131, 27);\">Thank you.</h1><br> \
    <h4 style=\"text-align:center;font-size:2em;color:rgb(56, 131, 27);\">We will contact you soon to proceed the payment.</h4><br>\
    <a href=\"index.html\"><img src=\"images/homebutton.png\" alt=\"homepage button\" style=\"max-width:10%;display:block;margin:auto;overflow:hidden;\"></a><br>";
    window.scrollTo(0,200); 
}

function backToHomepage() { 
    window.location.href = 'index.html';
}

function toConfirmPaid() {
    /* get values from user input */
    var name = $("#cardname").val();
    var cardnum = $("#cardnum").val();
    var expim = $("#exmonth").val();
    var expiy = $("#exyear").val();
    var cvv = $("#cvv").val();
    /* check if user did not finish the form */
    if (name == "" || cardnum == "" || expim == "" || expiy == "" || cvv == "") {
        alert("Please complete your payment detail.");
        return;
    }
    /* regular expression to check if user enter valid card number */
    var cardNumCheck = /^\d{16}$/;
    if(!cardnum.match(cardNumCheck)) {
        alert("Please enter a valid card number.\nCard number should be 16 digits.");
        return;
    }
    /* check if user enter valid date */
    if (!(1<= expim && expim <= 12)) {
        alert("Please enter a valid month.");
        return;
    }  
    /* check if user enter valid cvv */
    var cvvCheck = /^\d{3}$/;
    if (!(cvv.match(cvvCheck))) {
        alert("CVV is the three digits at the back of your card.");
        return;
    }
    /* give the current process 'process-current' flag */
    $("#choose-accommodation").removeClass("process-current");
    $("#choose-paymethod").removeClass("process-current");
    $("#summary").removeClass("process-current");
    $("#pay-confirmation").addClass("process-current");  
    var process = document.getElementById("book-process");
    process.innerHTML = "<br><br><h1 style=\"text-align:center;font-size:2em;color:rgb(56, 131, 27);\">Congratulate! We receive your payment.</h1><br> \
    <h4 style=\"text-align:center;font-size:2em;color:rgb(56, 131, 27);\">A confirmation has been sent to your email.</h4><br>\
    <a href=\"index.html\"><img src=\"images/homebutton.png\" alt=\"homepage button\" style=\"max-width:10%;display:block;margin:auto;overflow:hidden;\"></a><br>";
    window.scrollTo(0,200); 
}

function toPayCredit() { 
    /* display the credit payment section */
    var pricePerNight = 675.29;
    /* calculate the number of days staying */
    var arriveDate = new Date(arrive);
    var leaveDate = new Date(leave);
    var days = (leaveDate.getTime() - arriveDate.getTime()) / (1000 * 3600 * 24);
    /* calculate the total price */
    var priceTotal = pricePerNight * days;
    var numOfPeople = adult + " Adults";
    var stayImg;
    /* change image if user choose different accommodation */
    if (stay == "Appartment") {
        stayImg = "reehouse.jpg";
    } else if (stay == "Treehouse") {
        stayImg = "accommodation_image.jpg";
    } else {
        stayImg = "alan-j-hendry-zVf-R-r3szw-unsplash.jpg";
    }
    /* calculate the people going */
    if (children > 0) {
        numOfPeople += ", " + children + " Children";
    }
    if (infant > 0) {
        numOfPeople += ", " + infant + " Infants";
    }
    var process = document.getElementById("book-process");
    process.innerHTML = "<section class=\"go-back\">\
            <img src=\"images/gobackbutton.png\" alt=\"go back button\" onclick=\"toPayMethod()\">\
        </section>\
        <section class=\"pay-stay-confirm\">\
            <form class=\"pay-stay\">\
                <section id=\"stay-credit-form\">\
                    <nav class=\"pay-stay-header\">Credit/Debit Card</nav>\
                    <section id=\"fill-form\">\
                        <label for=\"cardname\">Card Holder Name</label>\
                        <input type=\"text\" name=\"cardname\" id=\"cardname\">\
                        <label for=\"cardnum\">Card Number</label>\
                        <input type=\"text\" name=\"cardnum\" id=\"cardnum\">\
                        <section class=\"small-section\">\
                            <section class=\"exdate\">\
                                <label for=\"exmonth\">Expiry Date</label>\
                                <section>\
                                    <input type=\"text\" name=\"exmonth\" id=\"exmonth\">\
                                    <input type=\"text\" name=\"exyear\" id=\"exyear\"> \
                                </section>\
                            </section>\
                            <section class=\"f-cvv\">\
                                <label for=\"cvv\">CVV</label>\
                                <input type=\"text\" name=\"cvv\" id=\"cvv\">\
                            </section>\
                        </section><br><br>\
                    </section>\
                </section>\
                <section id=\"pay-summary-form\">\
                    <nav class=\"pay-stay-header\">Your Order Summary</nav>\
                    <section id=\"stay-summary\">\
                        <section id=\"inside-summary\">\
                            <p>Accommodation</p>\
                            <img src=\"images/"+stayImg+"\" alt=\"you choice of accommodation\" class=\"stay-chocie\">\
                            <p class=\"type-stay\">"+stay+"</p> \
                            <hr>\
                            <p>People: "+numOfPeople+"</p>\
                            <p>From "+arrive+" to "+leave+" ("+days+" days)"+"</p>\
                            <hr>\
                            <p>Price per Night: <span>$613.90</span></p>\
                            <p>Taxes & Fees per Night: <span>$61.39</span></p>\
                            <hr>\
                            <p>Total: <span>"+"$"+priceTotal.toFixed(2)+"</span></p>\
                        </section>\
                        <section class=\"pay-buttons\">\
                            <button type=\"button\" class=\"pay-cancel-button\" onclick=\"backToHomepage()\">Cancel</button>\
                            <button type=\"button\" class=\"pay-confirm-button\" onclick=\"toConfirmPaid()\">Pay</button>\
                        </section>\
                    </section>\
                </section>\
            </form>\
        </section>";
    /* give the current process 'process-current' flag */
    $("#choose-accommodation").removeClass("process-current");
    $("#choose-paymethod").removeClass("process-current");
    $("#summary").addClass("process-current");
    $("#pay-confirmation").removeClass("process-current");
}

function toPayCash() {
    /* give the current process 'process-current' flag */
    $("#choose-accommodation").removeClass("process-current");
    $("#choose-paymethod").removeClass("process-current");
    $("#summary").addClass("process-current");
    $("#pay-confirmation").removeClass("process-current");
    var process = document.getElementById("book-process");
    process.innerHTML = "<section class=\"go-back\">\
            <img src=\"images/gobackbutton.png\" alt=\"go back button\" onclick=\"toPayMethod()\">\
        </section>\
        <form class=\"contact-request\"> \
            <h1>Please enter your contact detail.</h1>\
            <p>We will contact you soon for cash payment.</p><br>\
            <label for=\"cash-name\">Enter your fullname</label><br>\
            <input class=\"form-input\" type=\"text\" name=\"cash-name\" id=\"cash-name\"><br> <br>\
            <label for=\"cash-email\">Enter your email</label><br>\
            <input class=\"form-input\" type=\"text\" name=\"cash-email\" id=\"cash-email\"><br><br>\
            <label for=\"cash-phone\">Enter your phone number</label><br>\
            <input class=\"form-input\" type=\"text\" name=\"cash-phone\" id=\"cash-phone\"><br><br>\
            <label for=\"cash-message\">Message</label><br>\
            <textarea id=\"message\" name=\"cash-message\" id=\"cash-message\" rows=\"10\" cols=\"60\"></textarea><br><br>\
            <button class=\"nav-button\" type=\"button\" onclick=\"toConfirmCashPay()\">Submit</button>\
        </form>";
}

function toChooseStay() {
    var process = document.getElementById("book-process");
    process.innerHTML = "<form id=\"book-form\">\
            <section class=\"form-half\">\
                <section class=\"form-book\">\
                    <label for=\"accommodation\">Choose a stay</label>\
                    <select name=\"accommodation\" id=\"accommodation\">\
                        <option value=\"0\">Select</option><option value=\"Appartment\">Appartment</option>\
                        <option value=\"Villa\">Villa</option>\
                        <option value=\"Treehouse\">Treehouse</option> \
                    </select>\
                </section>\
                <section class=\"form-book\">\
                    <label for=\"arrive\">Arrive</label>\
                    <input type=\"date\" id=\"arrive\" name=\"arrive\">\
                </section>\
                <section class=\"form-book\">\
                    <label for=\"leave\">Leave</label>\
                    <input type=\"date\" id=\"leave\" name=\"leave\">\
                </section>\
            </section>\
            <section class=\"form-half\">\
                <section class=\"form-book\">\
                    <label for=\"adults\">Adults</label>\
                    <input type=\"number\" id=\"adults\" name=\"adults\" min=\"1\" max=\"10\">\
                </section>\
                <section class=\"form-book\">\
                    <label for=\"children\">Children</label>\
                    <input type=\"number\" id=\"children\" name=\"children\" min=\"0\" max=\"10\">\
                </section>\
                <section class=\"form-book\">\
                    <label for=\"infants\">Infants</label>\
                    <input type=\"number\" id=\"infants\" name=\"infants\" min=\"0\" max=\"10\">\
                </section>\
                <section class=\"form-book\">\
                    <label for=\"promo\">Promo</label>\
                    <input type=\"text\" id=\"promo\">\
                </section>\
            </section>\
        </form>\
        <section id=\"submit-form\">\
            <button id=\"submit-stay\" onclick=\"fowardToPayMethod()\">Continue</button>\
        </section>\
        <p>For special offers, click <span onclick=\"toSpecialOffer()\">here</span>";
    /* give the current process 'process-current' flag */
    $("#choose-accommodation").addClass("process-current");
    $("#choose-paymethod").removeClass("process-current");
    $("#summary").removeClass("process-current");
    $("#pay-confirmation").removeClass("process-current");
}

function toSpecialOffer() { 
    /* redirect website to offer.html page */
    window.location.href = "offer.html";
}