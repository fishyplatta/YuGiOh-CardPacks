var count = 0;

function Open()
{
    document.getElementById("card").style.display = "block"
    document.getElementById("pack").style.display = "none"
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
            document.getElementById("card").innerHTML = "For card: " + count;
        }
    }
}