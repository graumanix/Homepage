let dark = false;
let body = document.querySelector('body');
  
function swapcss() 
{
    if (dark == false)
    {
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        localStorage.setItem("sheet", darkmode.css);
        dark = true;
    }
    else
    {
        document.getElementById('theme').setAttribute('href', 'light.css');
        localStorage.setItem("sheet", light.css);
        dark = false;
    }
}

document.querySelector('#dark').onclick = swapcss();

window.onload = _ =>
 swapcss();