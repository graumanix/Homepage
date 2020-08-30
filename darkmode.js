document.querySelector('#dark').onclick = function() 
{
    dark = localStorage.getItem("sheet");
    
    if(dark == null)
    {
        dark = true;
    }
    else if(dark == true)
    {
        dark = false;
    }
    else if(dark == false)
    {
        dark = true;
    }
}
document.querySelector('#dark').onclick = function() 
{
    if (dark == false)
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        localStorage.setItem("sheet", 'darkmode.css');
        dark = true;
        localStorage.setItem("dark", dark);
    }
    else
    {
        document.querySelector('#dark').className = "btn btn-dark right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById('theme').setAttribute('href', 'light.css');
        localStorage.setItem("sheet", 'light.css');
        dark = false;
        localStorage.setItem("dark", dark);
    }
}

function swapsheet(sheet)
{
    document.getElementById('theme').setAttribute('href', sheet);
    localStorage.setItem("sheet", sheet);
}

window.onload = _ => swapsheet(localStorage.getItem("sheet") || "default.css");