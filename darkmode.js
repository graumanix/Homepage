let dark = false;
let body = document.querySelector('body');
  
document.querySelector('#dark').onclick = function() 
{
    if (dark == false)
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        localStorage.setItem("sheet", 'darkmode.css');
        dark = true;
    }
    else
    {
        document.querySelector('#dark').className = "btn btn-dark right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById('theme').setAttribute('href', 'light.css');
        localStorage.setItem("sheet", 'light.css');
        dark = false;
    }
}

function swapsheet(sheet)
{
    document.getElementById('theme').setAttribute('href', sheet);
    localStorage.setItem("sheet", sheet);
    if (dark == true)
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
    }
    else
    {
        document.querySelector('#dark').className = "btn btn-dark right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
    }
}

window.onload = _ => swapsheet(localStorage.getItem("sheet") || "default.css");