$(document).ready(function() {
    /* when document is opened, show user the first section */
    toFirstOffer(); 
}); 

function toFirstOffer() {
    /* first section of special offer page */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>Family Holiday & Packages</h1> \
            <h4>The Family package provides you with the ultimate experience at Amazy Stay, with an affordable price. This is great deals for families of 4 or more people.</h4> \
            <p>From $499.99 per night.</p> \
            <p>Fairly low price is applied to families or groups of 4 or more people. You still have access to our services like standard booking.</p> \
            <p>Visitors have a wide range of stays to choose for this deals:</p> \
            <ul class=\"offer-options-stay\">\
                <li>Appartments locating at foothills of the Amazon mountain.</li>\
                <li>Brazil area's appartments.</li>\
                <li>Sahara desert's villas.</li>\
                <li>Middle-height treehouses.</li>\
                <li>Mixed accommodations in Amazonas area.</li>\
            </ul>\
            <p>Private camping nights are exclusive for this offer, with only $129 extra. Visitors can enjoy their private campfire and picnic together in a very own area and professional servants.</p>  \
            <p>Special offers are not opened for booking online. Please <a class=\"offer-to-contact\" href=\"media.html\">contact us</a> for more detail.</p>";
    /* give the flag of 'current-button' to the first button */
    $("#first-button").addClass("current-button");
    $("#second-button").removeClass("current-button");
    $("#third-button").removeClass("current-button");
}

function toSecondOffer() {
    /* second section of special offer page */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>For Newly Married Couple</h1> \
            <h4>This deal is exclusive for new spouses who loves adventures and natures.</h4> \
            <p>From $699.99 per night.</p> \
            <p>This deal is exclusive for new spouses who loves adventures and natures. Couples are provided private and romantic stay with free in-room breakfast and spa.</p> \
            <p>Photographers are available for rent. With 80% discount, you can save all of your newly married moments while exploring Amazon. Couples can also choose one of the top rate accommodation at Amazy Stay:</p> \
            <ul class=\"offer-options-stay\">\
                <li>Top-height treehouse.</li>\
                <li>Villa at Amazon's center.</li>\
                <li>Villa on river bank.</li>\
                <li>Exclusive resort at Para area, private yatch included.</li> \
            </ul>\
            <p>Especially, you can give us your own design for the place. Furnitures and decorations will be modified according to your preferences.</p>  \
            <p>Special offers are not opened for booking online. Please <a class=\"offer-to-contact\" href=\"media.html\">contact us</a> for more detail.</p>";
    /* give the flag of 'current-button' to the second button */
    $("#first-button").removeClass("current-button");
    $("#second-button").addClass("current-button");
    $("#third-button").removeClass("current-button");
}

function toThirdOffer() {
    /* third section of special offer page */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>Loyal Customer Packages & Deals</h1> \
            <h4>Deal that is especially made for our special customer.</h4> \
            <p>From $0 per night.</p> \
            <p>This deal is exclusive for customers who have used our services more than twice. You are provided with many preferential options. All of below are included:</p> \
            <ul class=\"offer-options-stay\">\
                <li>Any accommodation.</li>\
                <li>Free guide and photographer.</li>\
                <li>Special gift for joining any activity.</li> \
                <li>Top rate chief cooks at your private place.</li> \
            </ul>\
            <p>Especially, you can experience being captain of our 560 ft long submarine for 1 day. Underwater adventures are totally under your control. Our professional submarine captain will be training you to be a true submarine sailor.</p> \
            <p>Your luck will decide the price of this deal. You will be accessing fortune wheeling to get the cheapest price ever, no bigger than $1500 for all services.</p>  \
            <p>Special offers are not opened for booking online. Please <a class=\"offer-to-contact\" href=\"media.html\">contact us</a> for more detail.</p>";
    /* give the flag of 'current-button' to the third button */
    $("#first-button").removeClass("current-button");
    $("#second-button").removeClass("current-button");
    $("#third-button").addClass("current-button");
}