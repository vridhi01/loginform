require(
    [
        'jquery',
        'mage/translate',
        'mage/url'
    ],
    function($, $t, $url) {
        $('.external-js-ajax').submit(function(event) {
            if ($(this).valid()) {
                let formValue = $(this).find('#email').val();
                $.ajax({
                    url: $url.build('ajaxtutorial/index/ajax'), // using mage/url library to get the url
                    data: { email: formValue },
                    method: 'POST',
                    showLoader: true
                }).done(function(data) {
                    alert(data);
                    $('.result-content').text($t('You Entered: ') + data.email);
                }).fail(function(data) {
                    console.log($t('Something Went Wrong') + data);
                });
            } else {
                console.log($t('Something Went Wrong'));
            }
            event.preventDefault();
        });
    });