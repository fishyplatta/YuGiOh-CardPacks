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

//packs
const deletion_pack = [
  "channel-deletion.jpg",
  "channel-deletion.jpg", 
  "channel-deletion.jpg", 
  "channel-deletion.jpg", 
  "channel-deletion.jpg", 
  "channel-deletion.jpg", 
  "channel-deletion.jpg", 
  "channel-deletion.jpg", 
  "channel-deletion.jpg"
];
const filler_pack = [
  "carrit.jpg",
  "chadius.jpg",
  "onlyhope.jpg",
  "last-laugh.jpg",
  "gtlw.jpg",
  "teal-magician.jpg",
  "scar-apartheid.jpg",
  "toff-e.jpg",
  "waiting-for-youngpups.jpg"
];
var packs = [deletion_pack, filler_pack];

var cur_card = 0;
var selected_pack;
var selected_card;

var firstClick = false;
var id = null;

function RandPack()
{
  cur_card = 0;
  const random = Math.floor(Math.random() * packs.length);
  selected_pack = packs[random];
}

function NextCard()
{
  selected_card = "media/cards/" + selected_pack[cur_card];
  cur_card++;
}

function AnimateWindow()
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
      RandPack();
      firstClick = true;
    } 
    else 
    {
      width+=5;
      plate.style.width = width + "px";
      pack.style.marginLeft = "40.5px";
    }
  }
}

function OpenPack()
{
  if(plate.style.width != "1400px")
  {
    AnimateWindow();
  }
  else if(firstClick)
  {
    RandPack();
    card_front.style.display = "block";
    cur_card = 0;
    pack.style.display = "none";
    container.style.display = "block"; 
    firstClick = false;
  }
}

function FlipCard()
{
  container.style.transitionDuration = "0.5s";
  container.classList.toggle("is-flipped")
  NextCard();
  display_card.src = selected_card;
  moving_img.src = selected_card;
}

function MoveCard()
{
    card_back.style.display = "none";
    container.style.transitionDuration = "0s";
    container.classList.toggle("is-flipped")
    moving_card.style.display = "block";
    if(cur_card == 9)
      card_front.style.display = "none";
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
      if(cur_card == 9)
      {
        container.style.display = "none";
        pack.style.display = "block";
        firstClick = true;
      }
    } 
    else 
    {
      pos+=7;
      moving_card.style.left = pos + "px";
    }
  }
}