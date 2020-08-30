
document.querySelector('#dark').onclick = function() 
{
    dark = document.localStorage.getItem("dark")
    if (dark == "1")
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        localStorage.setItem("sheet", 'darkmode.css');
        localStorage.setItem("dark", "0");
    }
    else if (dark == "0")
    {
        document.querySelector('#dark').className = "btn btn-dark right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById('theme').setAttribute('href', 'light.css');
        localStorage.setItem("sheet", 'light.css');
        localStorage.setItem("dark", "1");
    }
    else
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        localStorage.setItem("sheet", 'darkmode.css');
        localStorage.setItem("dark", "0");
    }
}

function swapsheet(sheet)
{
    document.getElementById('theme').setAttribute('href', sheet);
    localStorage.setItem("sheet", sheet);
    dark = localStorage.getItem("dark");
    if (dark == "0")
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
    }
    else if (dark == "1")
    {
        document.querySelector('#dark').className = "btn btn-dark right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
    }
}

window.onload = _ => swapsheet(localStorage.getItem("sheet") || "default.css");

