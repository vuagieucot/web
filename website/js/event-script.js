$(document).ready(function() {
    /* when document is opened, show the first event section */
    toFirstEvent(); 
}); 

function toFirstEvent() {
    /* display the first event in the Events page */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>Special Events</h1>\
            <h4>The greatest resort locating in Amazon Rainforest, surrounded by diversed and fertile ecosystems with large forests and rivers, Amazy Stay is an ideal place for your private and special events.</h4>\
            <p>Come to Amazy Stay, what you can do will only be limited by your imagination. Our most professional and expert team will be assigned with you to make any of your dream events come true.</p> \
            <img id=\"first-event-img\" src=\"images/pexels-photo-3756353.jpeg\" alt=\"Couple having romantic meal together\">\
            <p>For more information and booking events with us, please <a class=\"offer-to-contact\" href=\"media.html\">contact</a> for more detail.</p>";
    /* give the flag 'current-button' to the first button */
    $("#first-button").addClass("current-button");
    $("#second-button").removeClass("current-button");
    $("#third-button").removeClass("current-button");
}

function toSecondEvent() {
    /* display the first event in the Events page */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>Weddings</h1>\
    <h4>Let us celebrate with you.</h4>\
            <p>Possessing exclusively large land area, Amazy Stay can provide couples any wedding designs or plans, private wedding or the biggest known wedding ever.</p>\
            <p>We promise to deliver to you best experience ever. Your ceremony can be conducted in private garden, on luxury yatch, under the water or on the highest view point at Amazon. Food and wine are top rate. Our expert team will never disappoint you.</p>\
            <img id=\"second-event-img\" src=\"images/man-and-woman-kissing-948185.jpg\" alt=\"Spouses kissing\">\
            <p>Do <a class=\"offer-to-contact\" href=\"media.html\">contact us</a> now to book your only and greatest wedding ever.</p>";
    /* give the flag 'current-button' to the second button */
    $("#first-button").removeClass("current-button");
    $("#second-button").addClass("current-button");
    $("#third-button").removeClass("current-button");    
}

function toThirdEvent() {
    /* display the first event in the Events page */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>Social Events</h1>\
            <h4>Special activities and competitions are regularly held by Amazy Stay for people who like making friends with other visitors and local animals.</h4>\
            <p>At Amazy Stay, we regularly organize some events to connect people and animals together. There is a wide range of activities that are held at Amazy Stay:</p>\
            <ul class=\"offer-options-stay\">\
                <li>Climbing competition with local monkeys.</li>\
                <li>Sailing race - crocodile rider.</li>\
                <li>Camping Night.</li>\
                <li>Wildlife experience.</li>\
                <li>Feeding the local friendly sloths.</li>\
            </ul>\
            <p>Our purpose of building these activities is to help people understand more about the animal environments. This will connect us humen together and also to the nature that we are living in.</p>\
            <p>These activities are totally non-profit and people who joining our event will get special prize.</p>\
            <br>\
            <p>The activity 'Feeding the local sloths' is currently unavailable. We are sorry for this inconvenience. We will update news as soon as possible when this activity is opened. You can contact us <a class=\"offer-to-contact\" href=\"media.html\">here</a> for more information</p>";
    /* give the flag 'current-button' to the third button */
    $("#first-button").removeClass("current-button");
    $("#second-button").removeClass("current-button");
    $("#third-button").addClass("current-button");    
}