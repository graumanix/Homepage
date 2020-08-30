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

window.onload = _ => function()
{
    let sheet = localStorage.getItem("sheet") || "default.css"
    document.getElementById('theme').setAttribute('href', sheet);
    localStorage.setItem("sheet", sheet);
}
