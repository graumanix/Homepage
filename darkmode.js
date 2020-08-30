let dark = false;
let body = document.querySelector('body');
  
document.querySelector('#dark').onclick = function() 
{
    if (dark == false)
    {
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        localStorage.setItem("sheet", 'darkmode.css');
        dark = true;
    }
    else
    {
        document.getElementById('theme').setAttribute('href', 'light.css');
        localStorage.setItem("sheet", 'light.css');
        dark = false;
    }
}

function swapsheet(sheet)
{
    document.getElementById('theme').setAttribute('href', sheet);
    localStorage.setItem("sheet", sheet);
}

window.onload = _ =>
 swapStyleSheet(
  localStorage.getItem("sheet") || "default.css"
 );