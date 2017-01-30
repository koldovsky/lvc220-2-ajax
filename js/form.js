$(function() {
    $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/YOUR-EMAIL-HERE",
            method: "POST",
            data: {
                name: $('#client-name').val(),
                email: $('#client-email').val()
            },
            dataType: "json"
        })
        .done(function(data){
            $('form').html('<h1>Thank you!</h1>' 
              + '<p> Additional info: ' + JSON.stringify(data) + '</p>');
        });
    });
});