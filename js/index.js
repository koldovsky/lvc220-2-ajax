loaded.innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('btn-get').addEventListener('click', function(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var htmlCode = '<table><tr><th>Name</th><th>Address</th></tr>';
            var clientData = JSON.parse(xhr.responseText);
            clientData.forEach(function(el) {
                htmlCode += '<tr><td>' + el.name + '</td><td>' + el.address + '</td></tr>';
            })
            htmlCode += '</table>';
            document.getElementById('client-data').innerHTML = htmlCode;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
});
