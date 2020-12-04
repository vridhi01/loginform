require(
    [
        'jquery',
        'mage/translate',
        'mage/url'
    ],
    function($, $t, $url) {
        $('#fetchdata').on('click', function(event) {
            console.log('hello');
            if ($(this).valid()) {
                $.ajax({
                    url: $url.build('ajaxtutorial/index/fetchdata'),
                    method: 'GET',
                    showLoader: true,
                }).done(function(data) {

                    console.log(data);
                    var len = data.length;
                    var tr_str;
                    var name = data[0].name;
                    console.log(name);

                    for (var i = 0; i < len; i++) {
                    var id = data[i].crud_id;
                    var name = data[i].name;
                    var age = data[i].age;
                    var designation = data[i].designation;
                    tr_str += "<tr>" +
                        "<td>" + id + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td>" + age + "</td>" +
                        "<td>" + designation + "</td>" +
                        "</tr>";
                }
                $("#userTable tbody").html(tr_str);
                  
                }).fail(function(data) {
                    console.log($t('Something Went Wrong') + data);
                });
            } else {
                console.log($t('Something Went Wrong'));
            }
            event.preventDefault();
        });
    });