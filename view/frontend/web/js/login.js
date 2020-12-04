require(
    [
        'jquery',
        'mage/translate',
        'mage/url'
    ],
    function($, $t, $url) {
        $('.form-login').submit(function(event) {
            if ($(this).valid()) {
                var emailvalue = $(this).find('#email').val();
                var passvalue = $(this).find('#pass').val();
                console.log(emailvalue);
                console.log(passvalue);
                $.ajax({
                    url: $url.build('customer/account/loginpost'), // using mage/url library to get the url
                    data: {
                        email: emailvalue,
                        password: passvalue
                    },
                    method: 'POST',
                    showLoader: true
                }).done(function(data) {
                    // $('.result-content').text($t('You Entered: ') + data.email);
                }).fail(function(data) {
                    console.log($t('Something Went Wrong') + data);
                });
            } else {
                console.log($t('Something Went Wrong'));
            }
            event.preventDefault();
        });
    });