let dark = false;
    let body = document.querySelector('body');

    document.querySelector('#dark').onclick = function() {
        if (dark == false)
        {
            document.getElementById("#dark").classList.remove('btn-dark');
            document.getElementById("#dark").classList.add('btn-light');
            body.style.backgroundColor = "rgb(53, 53, 53)";
            document.querySelector('#dark').innerHTML = "Light";
            dark = true;
        }
        else
        {
            document.getElementById("#dark").classList.remove('btn-light');
            document.getElementById("#dark").classList.add('btn-dark');
            body.style.backgroundColor = "rgb(220, 220, 220)";
            document.querySelector('#dark').innerHTML = "Dark";
            dark = false;
        }
    }