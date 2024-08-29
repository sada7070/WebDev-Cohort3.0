let counter = 0;

function callback() {
    document.querySelectorAll("h4")[1].innerHTML = counter;
    counter++;
}

setInterval(callback, 1000);
