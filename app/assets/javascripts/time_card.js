const getajax = (() => {
    url = '/all_data'

    fetch(url, {
        method : "GET",
    }).then(function(response){
        if (response.ok) {
            return response.json();
        } else {
            return 'error'
        }
    }).then(function(resjson){
        appendHtml(resjson)
    });;
})

const appendHtml = ((resjson) => {
    const tbl = document.getElementById('testtb');
    console.log(resjson);

    resjson.forEach(element => {
        addElm = []
        addElm.push(`<tr>`);
        addElm.push(`<td class="text-center">${element.start_time}</td>`);
        addElm.push(`<td class="text-center"></td>`);
        addElm.push(`<td class="text-center"></td>`);
        addElm.push(`<td class="text-center"></td>`);
        addElm.push(`<td class="text-center">0分</td>`);
        addElm.push(`</tr>`);
        html = addElm.join('')

        tbl.insertAdjacentHTML('beforeend', html);
    });
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
