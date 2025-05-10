const plate = document.getElementById("card-section");
const pack = document.getElementById("pack");
const card = document.getElementById("card");
const card_btn = document.getElementById("card-btn")
const pile = document.getElementById("pile");
const card_img = document.getElementById("card-img");
const pile_img = document.getElementById("pile-img");

var files = 
[
    "chadius.jpg",
    "channel-deletion.jpg",
    "gtlw.jpg",
    "mimikyuchris.jpg", 
    "russian-snow.jpg", 
    "shhark.jpg", 
    "sloth.jpg", 
    "yy-of-the-undercity.jpg",
    "yy-the-wildfyre.jpg"
];

var remaining_cards = 0;
var selected_card;

function RandCard()
{
    const random = Math.floor(Math.random() * files.length)
    selected_card = "media/cards/" + files[random];
}