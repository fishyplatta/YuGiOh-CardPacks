const plate = document.getElementById("card-section");
const pack = document.getElementById("pack");
const container = document.getElementById("card-container");
const pile = document.getElementById("pile");
const pile_img = document.getElementById("pile-img");

//cards
const display_card = document.getElementById("display-card");
const moving_card = document.getElementById("moving-card");
const moving_img = document.getElementById("moving-img");
const card_back = document.getElementById("card-back");
const card_front = document.getElementById("card-front");

var files = 
[
  "carrit.jpg",
  "chadius.jpg",
  "channel-deletion.jpg",
  "g-byakko.jpg",
  "gtlw.jpg",
  "last-laugh.jpg",
  "mimikyuchris.jpg", 
  "russian-snow.jpg",
  "scally-wagon.jpg",
  "scar-apartheid.jpg", 
  "shhark.jpg", 
  "skelly-pup.jpg",
  "sloth.jpg",
  "teal-magician.jpg", 
  "yenfestation.jpg",
  "yy-of-the-undercity.jpg",
  "yy-the-wildfyre.jpg"
];

var remaining_cards = 0;
var selected_card;

var firstClick = true;
var id = null;

function RandCard()
{
    const random = Math.floor(Math.random() * files.length)
    selected_card = "media/cards/" + files[random];
}

function OpenPack()
{
  var width = 650;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() 
  {
    if (width == 1400) 
    {
      clearInterval(id);
      pack.style.display = "none";
      container.style.display = "block";
      pile.style.display = "block";
    } 
    else 
    {
      width+=5;
      plate.style.width = width + "px";
      pack.style.marginLeft = "40.5px";
    }
  }
}

function FlipCard()
{
  container.style.transitionDuration = "0.5s";
  container.classList.toggle("is-flipped")
  RandCard();
  display_card.src = selected_card;
  moving_img.src = selected_card;
}

function MoveCard()
{
  card_back.style.display = "none";
  container.style.transitionDuration = "0s";
  container.classList.toggle("is-flipped")
  moving_card.style.display = "block";
  MoveAnimation();
}

function MoveAnimation()
{
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() 
  {
    if (pos == 679) 
    {
      clearInterval(id);
      pile_img.src = selected_card;
      moving_card.style.display = "none";
      moving_card.style.left = 0+"px";
      card_back.style.display = "block";
    } 
    else 
    {
      pos+=7;
      moving_card.style.left = pos + "px";
    }
  }
}