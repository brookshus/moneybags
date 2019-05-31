var token = "Bearer 2o2Zl-dL9U6VXHCMBVjrJttr3gOV4ycHwaaCXzTk9X3nCW2853a3iVE1iiXO9PoWDHvHhyNs58oXDL29KGOilvHk992ysJc_2T9bCHr-nXAs7ljh0MAzaYKpFOPtXHYx";
var yelp_search_url = "https://api.yelp.com/v3/businesses/search?";
var cors_anywhere_url = "https://cors-anywhere.herokuapp.com/";
var city = "";



function get_hotel(queryURL){
  $.ajax({url: queryURL, method: "GET", headers: {Authorization: token}}).done(function(yelp_data){
     console.log(yelp_data);

    $('#results-section').empty();

    for (var i=0; i<yelp_data.businesses.length;i++){
        console.log(yelp_data.businesses[i].name);
        imageUrl= yelp_data.businesses[i].image_url;
        var hotelImage = $("<img>");
        hotelImage.attr("src", imageUrl);

    var hotel_div = $('<div>');
    hotel_div.addClass("card bg-secondary text-center");
    hotel_div.attr('id', 'hotel-spot-'+i);
    $('#results-section').append(hotel_div);
    $('#hotel-spot-'+i).append("<h2>"+yelp_data.businesses[i].name+"</h2>");
    $('#hotel-spot-'+i).append(hotelImage);
    $('#hotel-spot-'+i).append("<h4>" + "Phone Number:" + " " +yelp_data.businesses[i].phone+"</h4>");
    $('#hotel-spot-'+i).append("<h4>" + "Price:" + " " + yelp_data.businesses[i].price+"</h4>");
    $('#hotel-spot-'+i).append("<h4>" + "Rating:" + " " +yelp_data.businesses[i].rating+"</h4>");
    }
  });
}

$('#search-button').on('click',function(){

    city = $('#city').val().trim();
    var new_url = cors_anywhere_url+yelp_search_url+"location="+city+"&term=hotel";


    get_hotel(new_url);
    return false;

}) 