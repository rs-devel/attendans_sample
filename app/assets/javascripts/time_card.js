const getajax = (() => {
    url = '/all_data'

    fetch(url, {
        method : "GET",
    }).then(function(response){
        if (response.ok) {
            appendHtml(response.json())
        }
    });
})

const appendHtml = ((resjson) => {
    console.log(resjson);
})

const sendajax = (() => {
    url = '/time_card_in'

    fetch(url, {
        method : "POST",
    }).then(function(response){
        if (response.ok) {
            console.log(response.url); 
        }
    });
})

const main = (() => {
    btnin  = document.getElementById("js-button-in");
    btnout = document.getElementById("js-button-out");

    btnin.addEventListener('click', () => {
        sendajax()
    });
    // btnin.addEventListener('click', sendajax(), false);
    getajax()
})

document.addEventListener('DOMContentLoaded', (event) => {
    main()
});

