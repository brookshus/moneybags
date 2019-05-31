// Search ENDPOINT URL (GET): https://api.yelp.com/v3/businesses/search
// API KEY = GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx
// var yelp_obj = {
//     "url": cors_anywhere_url+yelp_search_url+"location="+address+"&term="+food,
//     "method": "GET",
//     "headers": {
//         "Authorization": token
//     }
// }

var token = "Bearer GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx";
var yelp_search_url = "https://api.yelp.com/v3/businesses/search?";
var cors_anywhere_url = "https://cors-anywhere.herokuapp.com/";
var address = "";
var food = "";

// MY AJAX CALL/FUNCTION =============================================>>
function get_food(queryURL){
  $.ajax({url: queryURL, method: "GET", headers: {Authorization: token}}).done(function(yelp_data){
      
      $('#results-section').empty();
      
      console.log(yelp_data);
    for (var i=0; i<yelp_data.businesses.length;i++){
        // console.log(yelp_data.businesses[i].name);
        // console.log(yelp_data.businesses[i].phone);
        // console.log(yelp_data.businesses[i].price);
        // console.log(yelp_data.businesses[i].rating);
        // console.log(yelp_data.businesses[i].is_closed);

    var food_div = $('<div>');
    food_div.addClass('card');
    food_div.attr('id', 'food-spot-'+i);
    // food_div.attr('style',"background: url("+yelp_data.businesses[i].image_url+")")
    $('#results-section').append(food_div);

    $('#food-spot-'+i).append("<h3>Name: "+yelp_data.businesses[i].name+"</h3>");
    $('#food-spot-'+i).append("<h4>Phone#: "+yelp_data.businesses[i].display_phone+"</h4>");
    $('#food-spot-'+i).append("<h4>Budget ($ - $$$$): "+yelp_data.businesses[i].price+"</h4>");
    $('#food-spot-'+i).append("<h4>Rating: "+yelp_data.businesses[i].rating+"</h4>");
    $('#food-spot-'+i).append("<h4>Address: "+yelp_data.businesses[i].location.display_address[0]+", "+yelp_data.businesses[i].location.display_address[1]+"</h4>");
    $('#food-spot-'+i).append("<h4>Open/Closed: "+yelp_data.businesses[i].is_closed+"</h4>");
    }
  });
};

// MY ON-CLICK FUNCTIONS ===============================================>>
$('#search-button').on('click',function(){

    food = $('#food').val().trim();
    address = $('#address').val().trim();
    var new_url = cors_anywhere_url+yelp_search_url+"location="+address+"&term="+food;

    // console.log(food);
    // console.log(address);
    // console.log(new_url);
    
    get_food(new_url);
    return false;

});

$('#clear-button').on('click',function(){
  $('#results-section').empty();
});