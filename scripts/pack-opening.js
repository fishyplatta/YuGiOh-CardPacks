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

function OpenPack()
{
    plate.style.width = "1400px";
    pack.style.display = "none";
    card.style.display = "block";
    card.style.margin = "0 40px";
    remaining_cards = 9;
    RandCard();
    card_img.src = selected_card;
    pile.style.display = "block";
}

function NextCard()
{
    if(remaining_cards != 0)
    {
        remaining_cards--;
        pile_img.src = selected_card;
        RandCard();
        card_img.src = selected_card;
    }
    else
    {
        card.style.display = "none";
        plate.style.width - "650px";
        pack.style.display = "block";
    }
}