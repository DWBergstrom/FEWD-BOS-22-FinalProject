
// Display appropriate race results on Results page when selecting form dropdown
$("select").change(function () {
    // hide all results elements
    $('.results').css('display','none');

    //display results from selected year and change heading to reflect
    $("select option:selected").each(function () {
        if($(this).val() == "2015") {
            $('.2015-results').css('display','table');
            $('#results-heading').text("2015 Results Below:");
        } 
        else if($(this).val() == "2014") {
            $('.2014-results').css('display','table');
            $('#results-heading').text("2014 Results Below:");
        }
        else if($(this).val() == "2013") {
            $('.2013-results').css('display','table');
            $('#results-heading').text("2013 Results Below:");
        }
        else if($(this).val() == "2012") {
            $('.2012-results').css('display','table');
            $('#results-heading').text("2012 Results Below:");
        }
    });
});