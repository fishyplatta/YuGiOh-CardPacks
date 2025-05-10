const plate = document.getElementById("card-section");
const pack = document.getElementById("pack");
const container = document.getElementById("card-container")
const pile = document.getElementById("pile-img")

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
    function frame() {
      if (width == 1400) {
        clearInterval(id);
        pack.style.display = "none";
        container.style.display = "block"
      } else {
        width+=5;
        plate.style.width = width + "px";
        pack.style.marginLeft = "40.5px";
      }
    }
}

function FlipCard()
{
  container.classList.toggle("is-flipped")
}