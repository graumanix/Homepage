let dark = false;
    let body = document.querySelector('body');

    document.querySelector('#dark').onclick = function() {
        if (dark == false)
        {
            body.style.backgroundColor = "rgb(53, 53, 53)";
            document.querySelector('#dark').innerHTML = "Light";
            document.querySelector('#dark').className = "btn btn-light"
            document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-dark"
            dark = true;
        }
        else
        {
            body.style.backgroundColor = "rgb(220, 220, 220)";
            document.querySelector('#dark').innerHTML = "Dark";
            document.querySelector('#dark').className = "btn btn-dark"
            document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light"
            dark = false;
        }
    }