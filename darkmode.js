let dark;

document.querySelector('#dark').onclick = function() 
{
    if (dark == "1")
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        sessionStorage.setItem("sheet", 'darkmode.css');
        sessionStorage.setItem("dark", "0");
    }
    else if (dark == "0")
    {
        document.querySelector('#dark').className = "btn btn-dark right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById('theme').setAttribute('href', 'light.css');
        sessionStorage.setItem("sheet", 'light.css');
        sessionStorage.setItem("dark", "1");
    }
    else
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        sessionStorage.setItem("sheet", 'darkmode.css');
        sessionStorage.setItem("dark", "0");
        dark = sessionStorage.getItem("dark");
    }
}

function swapsheet(sheet)
{
    document.getElementById('theme').setAttribute('href', sheet);
    sessionStorage.setItem("sheet", sheet);
    dark = sessionStorage.getItem("dark");
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

window.onload = _ => swapsheet(sessionStorage.getItem("sheet") || "default.css");

