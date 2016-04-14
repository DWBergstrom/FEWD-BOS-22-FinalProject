
// Display appropriate photo grid on Photos page when selecting form dropdown
$("select").change(function () {
    // hide all results elements
    $('.photo-list').css('display','none');

    //display photos from selected year and change heading to reflect
    $("select option:selected").each(function () {
        if($(this).val() == "2015") {
            $('.2015-photos').css('display','inline');
            $('.2015-photos').css('list-style-type','none');
            $('.2015-photos').css('margin-left','20px');
            $('.photo-grid-wrapper').css('height','500px');
            $('#photos-heading').text("Photos from the 2015 race:");
        } 
        else if($(this).val() == "2014") {
            $('.2014-photos').css('display','inline');
            $('.2014-photos').css('list-style-type','none');
            $('.2014-photos').css('margin-left','20px');
            $('.photo-grid-wrapper').css('height','620px');
            $('#photos-heading').text("Photos from the 2014 race:");
        }
        else if($(this).val() == "2013") {
            $('.2013-photos').css('display','inline');
            $('.2013-photos').css('list-style-type','none');
            $('.2013-photos').css('margin-left','20px');
            $('.photo-grid-wrapper').css('height','750');
            $('#photos-heading').text("Photos from the 2013 race:");
        }
    });
});