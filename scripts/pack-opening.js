var count = 0;
const available_cards = ["gtlw.jpg", "mimikyuchris.jpg", "russian-snow.jpg", "sloth.jpg", "channel-deletion.jpg", "shhark.jpg", "yy-of-the-undercity.jpg", "yy-the-wildfyre.jpg", "chadius.jpg"]

function GetRandomElement() 
{
    return available_cards[Math.floor(Math.random() * available_cards.length)];
}

function Open()
{
    document.getElementById("card").style.display = "block"
    document.getElementById("pack").style.display = "none" 
    document.getElementById("card").src = "cards/" + GetRandomElement();
    count = 15;
}

function NextCard()
{
    if(count != 0)
    {
        count--;
        if(count == 0)
        {
            document.getElementById("card").style.display = "none";
            document.getElementById("pack").style.display = "block";
        }
        else
        {
            document.getElementById("card").src = "cards/" + GetRandomElement();
        }
    }
}