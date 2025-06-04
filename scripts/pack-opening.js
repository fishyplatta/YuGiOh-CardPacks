const plate = document.getElementById("card-section");
const pack = document.getElementById("pack");
const packImg = document.getElementById("pack-img");
const container = document.getElementById("card-container");
const pile = document.getElementById("pile");
const pile_img = document.getElementById("pile-img");

// constants for "credits" and "binder"
const credits = document.getElementById("credits");
const binder = document.getElementById("binder");
const backButton = document.getElementById("backButton");

// site credits screen
const complete_Button = document.getElementById("completeButton");

//cards
const display_card = document.getElementById("display-card");
const moving_card = document.getElementById("moving-card");
const moving_img = document.getElementById("moving-img");
const card_back = document.getElementById("card-back");
const card_front = document.getElementById("card-front");

//packs
const cards = 
[
	{"file" : "carrit", "pulled" : false, "name" : "Carrit", "by" : "shhark"},
	{"file" : "chadius", "pulled" : false, "name" : "Chadius IV, Future Youngpup", "by": "Chadius DaLion IV"},
	{"file" : "channel-deletion", "pulled" : false, "name" : "Channel Deletion!!!", "by": "Mizuhashi"},
	{"file" : "g-byakko", "pulled" : false, "name" : "Youngpup G Byakko", "by": "G Byakko"},
	{"file" : "gtlw", "pulled" : false, "name" : "Get the Last Word", "by": "Mizuhashi"},
	{"file" : "last-laugh", "pulled" : false, "name" : "Last Laugh", "by": "Mizuhashi"},
	{"file" : "mimikyuchris", "pulled" : false, "name" : "Mimikyuchris", "by": "MimikyuChris"},
	{"file" : "onlyhope", "pulled" : false, "name" : "0nlyHoPe", "by": "Bernie [0nlyHoPe]"},
	{"file" : "piece-of-hope", "pulled" : false, "name" : "Little Piece of Hope", "by": "Little Piece of Hope"},
	{"file" : "russian-snow", "pulled" : false, "name" : "TheRussianSnowman Last of the Snowpup's", "by": "TheRussianSnowman"},
	{"file" : "scally-wagon", "pulled" : false, "name" : "Scally_Wagon", "by": "Scally_Wagon"},
	{"file" : "scar-apartheid", "pulled" : false, "name" : "S.C.A.R. Apartheid", "by": "Mizuhashi"},
	{"file" : "shhark", "pulled" : false, "name" : "Youngpup Shhark", "by": "shhark"},
	{"file" : "skelly-pup", "pulled" : false, "name" : "Skelly in the 'Pup' Closet", "by": "Restless Skellywag"},
	{"file" : "sloth", "pulled" : false, "name" : "Idol Fan Sloth", "by": "Idol Fan Sloth (ARSLOTHES)"},
	{"file" : "teal-magician", "pulled" : false, "name" : "Teal Magician Youngpup", "by": "Teal"},
	{"file" : "toff-e", "pulled" : false, "name" : "Toff E, Fyrefly Scheduler", "by": "Toff E Willow"},
	{"file" : "waiting-for-youngpups", "pulled" : false, "name" : "Waiting for the Youngpups", "by": "Idol Fan Sloth (ARSLOTHES)"},
	{"file" : "yenfestation", "pulled" : false, "name" : "The Yenfestation", "by": "Samo"},
	{"file" : "yy-of-the-undercity", "pulled" : false, "name" : "Yena Youngblood of the Undercity", "by": "Mizuhashi"},
	{"file" : "yy-the-wildfyre", "pulled" : false, "name" : "Yena Youngblood the Wildfyre", "by": "Mizuhashi"},
	{"file" : "cackling-city", "pulled" : false, "name" : "The Cackling City", "by": "Toff E Willow"},
	{"file" : "cs-the-wildfyre", "pulled" : false, "name" : "Cersea Soulstorm the Wildfyre", "by": "Mizuhashi"},
	{"file" : "dd-the-wildfyre", "pulled" : false, "name" : "Daisy Dandelion the Wildfyre", "by": "Fezzdog"},
	{"file" : "fezzdoge", "pulled" : false, "name" : "Fezzdog", "by": "Fezzdog"},
	{"file" : "haha-youngpups", "pulled" : false, "name" : "HAHAHAHAHA! The Youngpups are Here!", "by": "Fishy, Mizuhashi, Fezzdog"},
	{"file" : "jumpscare", "pulled" : false, "name" : "White Woman Jumpscare", "by": "Rubbertoe"},
	{"file" : "lost-shore", "pulled" : false, "name" : "Lost Oracle of Shore", "by": "LostShore"},
	{"file" : "lostshore-yeeter", "pulled" : false, "name" : "LostShore First Yeeter of Yena", "by": "LostShore"},
	{"file" : "louis-cypher", "pulled" : false, "name" : "Louis Cypher, Youngpup Yilkmancer", "by": "Louis Cypher"},
	{"file" : "lucian-last-pup", "pulled" : false, "name" : "Lucian, The Last YoungPup", "by": "Lucian, The Last Youngpup"},
	{"file" : "nebby", "pulled" : false, "name" : "The Poppet Menace: Nebby", "by": "Nebby, Fezzdog, G Byakko"},
	{"file" : "rp-the-wildfyre", "pulled" : false, "name" : "Riki Poppet the Wildfyre", "by": "G Byakko"},
	{"file" : "seer-cipher", "pulled" : false, "name" : "Cackling Youngpup Seer - CipherEnigma", "by": "CipherEnigma"},
	{"file" : "sesbian-lex", "pulled" : false, "name" : "Sesbian Lex", "by": "Teal"},
	{"file" : "toff-e-fyrefly", "pulled" : false, "name" : "Toff E, the Fyrefly", "by": "Toff E Willow"},
	{"file" : "toystory", "pulled" : false, "name" : "Toystoryteletubbyism", "by": "Toystoryteletubbyism"},
	{"file" : "void", "pulled" : false, "name" : "Youngpup Void Call", "by": "t̴̥̆h̵̗̋e̶͕͂ ̵̣̍v̸͉̈́o̵͖̅i̵͝d"},
	{"file" : "waned-wolf", "pulled" : false, "name" : "The Wolf Who Waned", "by": "Mizuhashi"},
	{"file" : "wild-frontiers", "pulled" : false, "name" : "WILD FRONTIERS", "by": "KJ_PlayZ"},
	{"file" : "yanksky", "pulled" : false, "name" : "Yansky the Lurker", "by": "Yansky"},
	{"file" : "yena-secondblood", "pulled" : false, "name" : "Yena Secondblood", "by": "Shhark, Mizuhashi"},
	{"file" : "youngpup-linked", "pulled" : false, "name" : "???", "by": "Slylander"},
	{"file" : "youngpup-star", "pulled" : false, "name" : "Youngpup Star", "by": "StarCrap"},
	{"file" : "youngpup-token", "pulled" : false, "name" : "Youngpup Token", "by": "Mizuhashi"},
	{"file" : "youngpup-zombie", "pulled" : false, "name" : "Youngpup Zombie", "by": "StarCrap"}
]
const packs = 
[
//  {"cards" : [2,2,2,2,2,2,2,2,2], "opened": false}, => commented out tester
  {"cards" : [0,1,7,5,4,15,11,6,17], "opened": false},
  {"cards" : [3,10,13,9,12,14,16,18,20], "opened": false},
  {"cards" : [21,24,31,33,38,41,26,42,22], "opened": false},
  {"cards" : [27,25,44,45,37,29,34,35,23], "opened": false},
  {"cards" : [8,39,40,43,19,36,44,28,32], "opened": false}
]
var pack_count = 0;
const PACK_COUNT_MAX = packs.length;

var cur_card = 0;
var selected_pack;
var selected_card;

var firstClick = false;
var id = null;

//For move animation later, refers to position of the pile. 
var pile_pos = 0;

//For Randomizer
var randomize = false;

//For table 
let cardBinder = "";
let cellCounter = 0;
let cardFinder = 0;
var cardsLength = cards.length;

cardBinder = "<tr> <th></th> <th>Your Collection!</th> <th></th></tr> <tr>"

function RandPack()
{
  if(pack_count < PACK_COUNT_MAX)	  
  {
    do
    {
      const random = Math.floor(Math.random() * packs.length);
      selected_pack = packs[random];
    }while(selected_pack.opened == true)
    selected_pack.opened = true;
    pack_count++;
  }
  else
  {
	pack.style.display = "none";
	packImg.style.display = "none";	
	container.style.display = "none";
	complete_Button.style.display = "flex";
	
	//changed the switch to site credits into a button	
  }
}

function SiteCredits()
{
	window.location.replace("siteCredits.html");
}

function RandCard()
{
  const random = Math.floor(Math.random() * cards.length);
  selected_card = "media/cards/" + cards[random].file + ".jpg";
  cardFinder = random;
}

function NextCard()
{
  if(!randomize)
  {
    //the cards in the packs store the index then we go to cards to get the actual data
    var card_index = selected_pack.cards[cur_card];
    selected_card = "media/cards/" + cards[card_index].file + ".jpg";
    cards[card_index].pulled = true;
	cardFinder = card_index;
  }
  else
  {
    RandCard();
  }
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

//Validation for deciding whether to choose a random card or pack
function ChoosePackOrCard()
{
  pack.style.display = "none";
  container.style.display = "block";
  card_front.style.display = "block";
  cur_card = 0;
  if(!randomize)
  {
    RandPack();
  }
  else
  {
    RandCard();
  }
  firstClick = false;
}

function OpenPack()
{
  if(plate.style.width != "1400px")
  {
    AnimateWindow();
  }
  else if(firstClick)
  {
    ChoosePackOrCard();
  }
}

function FlipCard()
{
  container.style.transitionDuration = "0.5s";
  container.classList.toggle("is-flipped")
  NextCard();
  display_card.src = selected_card;
  moving_img.src = selected_card;
  
  
  // add card to table
  cardBinder += "<td><img src= \"";
  cardBinder += selected_card;
  cardBinder += "\" alt= \"";
  cardBinder += cards[cardFinder].name;
  cardBinder += "\" class = \"binderImage\"><br>";
  cardBinder += cards[cardFinder].name;
  cardBinder += "<br>By: ";
  cardBinder += cards[cardFinder].by;
  cardBinder += "</td>";

  cellCounter++;
  
  if (cellCounter == 3)
  {
	  cardBinder += "</tr>"
	  cellCounter = 0;
  }
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
		tableOpen();
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

function Cheater()
{
  randomize = true;
}

function tableOpen()
{	
	document.getElementById("table").innerHTML = cardBinder;
	
}
