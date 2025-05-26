const plate = document.getElementById("card-section");
const pack = document.getElementById("pack");
const container = document.getElementById("card-container");
const pile = document.getElementById("pile");
const pile_img = document.getElementById("pile-img");

// constants for "credits" and "binder"
const credits = document.getElementById("credits");
const binder = document.getElementById("binder");
const backButton = document.getElementById("backButton");

//cards
const display_card = document.getElementById("display-card");
const moving_card = document.getElementById("moving-card");
const moving_img = document.getElementById("moving-img");
const card_back = document.getElementById("card-back");
const card_front = document.getElementById("card-front");

//packs
const deletion_pack =
{ 
  cards:
  [
    "channel-deletion.jpg",
    "channel-deletion.jpg", 
    "channel-deletion.jpg", 
    "channel-deletion.jpg", 
    "channel-deletion.jpg", 
    "channel-deletion.jpg", 
    "channel-deletion.jpg", 
    "channel-deletion.jpg", 
    "channel-deletion.jpg"
  ],
  used: false
}
const filler_pack = 
{
  cards:
  [
    "carrit.jpg",
    "chadius.jpg",
    "onlyhope.jpg",
    "last-laugh.jpg",
    "gtlw.jpg",
    "teal-magician.jpg",
    "scar-apartheid.jpg",
    "toff-e.jpg",
    "waiting-for-youngpups.jpg"
  ],
  used: false
};
var packs = [deletion_pack, filler_pack];
var pack_count = 0;
const PACK_COUNT_MAX = 2;

var cur_card = 0;
var selected_pack;
var selected_card;

var firstClick = false;
var id = null;

//For move animation later, refers to position of the pile. 
var pile_pos = 0;

function RandPack()
{
  cur_card = 0;
  if(pack_count != PACK_COUNT_MAX)
  {
    do
    {
      const random = Math.floor(Math.random() * packs.length);
      selected_pack = packs[random];
    }while(selected_pack.used == true)
    selected_pack.used = true;
    pack_count++;
  }
  else
  {
  //temporarily turned this off for testing purposes lol
	//window.location.replace("tmp.html");
  }
}

function NextCard()
{
  selected_card = "media/cards/" + selected_pack.cards[cur_card];
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
	  
	//unhides the credits button and binder on pack opening 
	  credits.style.display = "block";
	  binder.style.display = "inline-flex";
	  
      RandPack();
      firstClick = true;
    } 
    else 
    {
      width+=5;
      plate.style.width = width + "px";
      pack.style.marginLeft = "50px";
	  pack.style.float = "left";
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
	{
		card_front.style.display = "none";
		
	//prevent further moving around of other elements	
		pack.style.marginRight = "0px";
	}
	MoveAnimation();
}

//Made some adjustments to the dimensions due to addition of the credits button
//Changed position of the pile to a variable for possible adjustments later
 
function MoveAnimation()
{
  var pos = 0;
  
//Adjust this variable if pile will be moved somewhere
  pile_pos = 609;
  
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() 
  {
    if (pos == pile_pos) 
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
    else if (pos < pile_pos)
    {
      pos+=7;
	  
	  if (pile_pos-pos < 7)
	  {
//Just in case the dimensions aren't divisible by 7		  
		  pos+=pile_pos-pos;
	  }
	  
	  moving_card.style.left = pos + "px";
    }
	else 
	{

//Added this to stop the animation even if dimensions weren't exact		
		moving_card.style.left = pile_pos;
	}
  }
}

function openBinder()
{
	//initiates transition
		binder.style.width = "1300px";
		
		binder.addEventListener("transitionend", viewBinder); 
}

function viewBinder () 
{
	if (binder.style.width == "1300px")
	{
	//shows back button
		backButton.style.display = "inherit";
	}
}

function closeBinder()
{
	binder.style.width = "0px";
	backButton.style.display = "none";
	
}
