// Search ENDPOINT URL (GET): https://api.yelp.com/v3/businesses/search
// API KEY = GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx

var token = "Bearer GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx";
var yelp_search_url = "https://api.yelp.com/v3/businesses/search?";
var cors_anywhere_url = "https://cors-anywhere.herokuapp.com/";
var address = "97225";
var food = "pizza";

var yelp_obj = {
    "url": cors_anywhere_url+yelp_search_url+"location="+address+"&term="+food,
    "method": "GET",
    "headers": {
        "Authorization": token
    }
}

function get_food(){
  $.ajax(yelp_obj).done(function(yelp_data){
    // console.log(yelp_data);

    $('#results-section').empty();

    for (var i=0; i<yelp_data.businesses.length;i++){
        // console.log(yelp_data.businesses[i].name);
        // console.log(yelp_data.businesses[i].phone);
        // console.log(yelp_data.businesses[i].price);
        // console.log(yelp_data.businesses[i].rating);
        // console.log(yelp_data.businesses[i].is_closed);

    var food_div = $('<div>');
    food_div.addClass(card);
    food_div.attr('id', 'food-spot-'+i);
    $('#food-section').append(food_div)

    }
  });
}

$('#search-button').on('click',function(){

    food = $('#food').val().trim();
    address = $('#address').val().trim();

    console.log(food);
    console.log(address);

    
    get_food();
    return false;

})