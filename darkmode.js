let dark = false;
    let body = document.querySelector('body');

    document.querySelector('#dark').onclick = function() {
        if (dark == false)
        {
            body.style.backgroundColor = "rgb(53, 53, 53)";
            document.querySelector('#dark').innerHTML = "Light";
            document.querySelector('#dark').className = "btn btn-light"
            dark = true;
        }
        else
        {
            body.style.backgroundColor = "rgb(220, 220, 220)";
            document.querySelector('#dark').innerHTML = "Dark";
            document.querySelector('#dark').className = "btn btn-dark"
            dark = false;
        }
    }