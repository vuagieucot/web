$(document).ready(function() {
    /* put the image on the top of the inactive section */
    $("#expand").removeClass("invisible");
    $("#cover").removeClass("invisible");
    /* if user click the link 'Forget your password?' display the forget password form */
    $("#login-forget").click(function(event) {
        event.preventDefault();
        var formContent = document.getElementById("login");
        formContent.innerHTML = "<section class=\"login-header\">\
                <img src=\"images/homebutton-black.png\" alt=\"button to homepage\">\
                <h1>Email Request</h1>\
            </section>\
            <hr>\
            <section class=\"login-form\">\
                <form id=\"login-detail\">\
                    <section>\
                        <label for=\"login-email\">Email</label>\
                        <input type=\"text\" name=\"login-email\">\
                    </section>\
            \
                    \
                </form>\
                \
                <section class=\"buttons\">\
                    <button class=\"login-button\" onclick=\"sendRequest()\">Request</button>\
                    <button class=\"transitor\" onclick=\"toRegister()\">Register &#9664;</button>\
                </section>\
            </section>";
    });
})

function toRegister() {
    /* change the current active section to register section */
    $("#expand").animate({left: "0%"}, "fast", function() {
        $("#cover").animate({left: "0%"});
    });    
}

function toLogin() { 
    /* change the current active section to login section */
    $("#expand").animate({left: "50%"}, "fast", function() {
        $("#cover").animate({left: "50%"}); 
    });  
}

function welcomenewcomer() {
    /* if user finish filling the form of register, display to user 'welcome new member' */
    /* retrieved the name, email and password from user's input */
    var name = $("#register-name").val();
    var email = $("#register-email").val();
    var password = $("#register-password").val();
    /* check if user did not finish all input */
    if (name == "" || email == "" || password == "") {
        alert("Please complete your register detail.");
        return;
    }
    /* regular expression to check if user's email has form similar to 'myemail@mail.com' */
    var emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!email.match(emailCheck)) {
        alert("Please enter a valid email.\nYour email should be in form somename@domain.sometopleveldomain");
        return;
    }
    /* display the respond to user */
    var content = document.getElementById("login-or-register");
    content.innerHTML = "<div style=\"width:100%; height:100%;\"><br><br><h1 style=\"text-align:center;font-size:2em;\">Welcome to Amazy Stay!</h1> \
    <a href=\"index.html\"><img src=\"images/homebutton.png\" alt=\"homepage button\" style=\"max-width:20%;display:block;margin:auto;overflow:hidden;margin-top: 18%;\"></a><br><div>";
    /* scroll the page to the viewport of the respond */
    window.scrollTo(0,200);
}

function welcomeback() { 
    /* if user finish filling the form of login, display to user 'welcome back member' */
    /* retrieved the email and password from user's input */
    var email = $("#login-email").val();
    var password = $("#login-password").val();
    /* check if user did not finish all input */
    if (email == "" || password == "") {
        alert("Please complete your login detail.");
        return;
    }
    /* regular expression to check if user's email has form similar to 'myemail@mail.com' */
    var emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!email.match(emailCheck)) {
        alert("Please enter a valid email.\nYour email should be in form somename@domain.sometopleveldomain");
        return;
    }
    /* display the respond to user */
    var content = document.getElementById("login-or-register");
    content.innerHTML = "<div style=\"width:100%; height:100%;\"><br><br><h1 style=\"text-align:center;font-size:2em;\">Welcome back!</h1> \
    <a href=\"index.html\"><img src=\"images/homebutton.png\" alt=\"homepage button\" style=\"max-width:20%;display:block;margin:auto;overflow:hidden;margin-top: 18%;\"></a><br><div>";
    /* scroll the page to the viewport of the respond */
    window.scrollTo(0,200);
}

function sendRequest() {
    /* if user submit the form of forget password */
    var content = document.getElementById("login-or-register");
    content.innerHTML = "<div style=\"width:100%; height:100%;\"><br><br><h1 style=\"text-align:center;font-size:2em;\">An email has been send to you email address.</h1> \
    <h4 style=\"text-align:center;font-size:1.5em;\">Please check and confirm.</h4> \
    <a href=\"index.html\"><img src=\"images/homebutton.png\" alt=\"homepage button\" style=\"max-width:20%;display:block;margin:auto;overflow:hidden;margin-top: 15%;\"></a><br><div>";
    window.scrollTo(0,200);   
}

