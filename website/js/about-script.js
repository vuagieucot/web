$(document).ready(function() {
    /* display the first section which is summary about the resort */
    toAbout(); 
}); 

function toLocation() {
    /* display the information about location of the resort */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>Location</h1> \
    <h4>Locates at Amazon Rainforest.</h4> \
    <p>Nine countries share the Amazon basin—most of the rainforest, 58.4%, is contained within the borders of Brazil. The other eight countries \ include Peru with 12.8%, Bolivia with 7.7%, Colombia with 7.1%, Venezuela with 6.1%, Guyana with 3.1%, Suriname with 2.5%, French Guyana with 1.4%, and Ecuador with 1%.</p> \
    <!--Source: https://en.wikipedia.org/wiki/Amazon_rainforest#Location--> \
    \
    <p>Locating in the middle of the rainforest, you can have full experience of the nature. You will be exploring every corner of Amazon and enjoy the luxurious lifestyle or take part in the wildlife with local friendly animals.</p> \
    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.093070111085!2d-62.224635276118384!3d-3.4653051596450553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sau!4v1590894996891!5m2!1sen!2sau\" width=\"400\" height=\"300\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>"; 
    $("#location-button").addClass("current-button");
    $("#weather-button").removeClass("current-button");
    $("#about-button").removeClass("current-button");
}

function toWeather() {
    /* display the information about the weather of the resort */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>Weather</h1> \
    <h4>Tropical Rainforest.</h4> \
    <p>The Amazon Rainforest is a tropical rainforest and is located very close to the Equator. The average temperature lies around 25 to 27 degrees Celsius. This place is idyllic for enjoying a vacation.</p>\
    <!--source: https://amazonrainforestjpm.weebly.com/climate-in-the-amazon.html-->\
    <p>Here is a guide to weather at Amazon rainforest by month.</p>\
    <p>It is recommended that visitors check weather before planning going to Amazy Stay resort for best experience.</p>\
    <br><br>\
    <table id=\"weather-table\"> \
        <!--Source: https://galapagosinsiders.com/travel-blog/climate-weather-amazon-rainforest-temperatures/-->\
        <tr>\
            <td>&nbsp;</td>\
            <td><strong>&nbsp;Jan&nbsp;</strong></td>\
            <td><strong>&nbsp;Feb</strong></td>\
            <td><strong>&nbsp;Mar</strong></td>\
            <td><strong>&nbsp;Apr&nbsp;</strong></td>\
            <td><strong>&nbsp;May&nbsp;</strong></td>\
            <td><strong>&nbsp;Jun&nbsp;</strong></td>\
            <td><strong>&nbsp;Jul&nbsp;</strong></td>\
            <td><strong>&nbsp;Aug&nbsp;</strong></td>\
            <td><strong>&nbsp;Sep&nbsp;</strong></td>\
            <td><strong>&nbsp;Oct&nbsp;</strong></td>\
            <td><strong>&nbsp;Nov&nbsp;</strong></td>\
            <td><strong>&nbsp;Dec</strong>&nbsp;</td>\
        </tr>\
        <tr>\
            <td>&nbsp;<strong>C&deg;&nbsp;</strong></td>\
            <td>&nbsp;25</td>\
            <td>&nbsp;25.3</td>\
            <td>&nbsp;25.1</td>\
            <td>&nbsp;24.9</td>\
            <td>&nbsp;24.8</td>\
            <td>&nbsp;24.4</td>\
            <td>&nbsp;24.1</td>\
            <td>&nbsp;25.6</td>\
            <td>&nbsp;25</td>\
            <td>&nbsp;25.2</td>\
            <td>&nbsp;25.6</td>\
            <td>&nbsp;25.4</td>\
        </tr> \
    </table>";
    $("#location-button").removeClass("current-button");
    $("#weather-button").addClass("current-button");
    $("#about-button").removeClass("current-button");
}

function toAbout() {
    /* display the summary about the resort */
    var content = document.getElementById("nav-parag");
    content.innerHTML = "<h1>Amazy Stay</h1> \
    <h4>Best Resort Ever</h4> \
    <p>The most luxurious resort locate in the Amazon Rainforest.</p> \
    <p>With 40 treehouses, 60 appartments and villas and your choice of special location, enjoy your most luxurious lifestyle with private walking track exploring the rainforest, taking in the incredible nature around you and all while not bothering about other people. This experience is exclusively designed for people who want private or romantic time together enjoying the magic of nature.</p> \
    <p>You can participate in a number of guide tours to enjoy exploring and experiencing Amazon Rainforest. You will be walking through every corner of the great forest, underwater or up above the sky. Alternatively, self-guided tour is available for those who love exploring and enjoy the beaty at their own pace.</p> \
    <p>Numerous activities are waiting for you. Many local friendly animal are well trained to play with human, you can book one day at special area to behold and take part in the wild life, have meals with friendly animals. Our crocodiles are well trained and can be ridden at ease, you can ride on the crocodile of your choice and have sailing race with others. Visitors can also have climbing competition with local monkeys and lots of different activities awaiting for you.</p> \
    <p>Fresh, local produce from the forest, extraordinary nature brings you huge variety of dishes. Visitors at villa can enjoy their meals at their own place, with our top masterchief coming and cook for you.</p> \
    <p>At Amazy Stay, we aspire to deliver the most welcoming, professional and fascinating experiences at you will never forget once join.</p>";
    $("#location-button").removeClass("current-button");
    $("#weather-button").removeClass("current-button");
    $("#about-button").addClass("current-button");
}