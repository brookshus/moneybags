// Search ENDPOINT URL (GET): https://api.yelp.com/v3/businesses/search
// API KEY = GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx

var token = "Bearer GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx";
var yelp_search_url = "https://api.yelp.com/v3/businesses/search?";
var cors_anywhere_url = "https://cors-anywhere.herokuapp.com/";
var address = "portland or";
var food = "pizza";

var yelp_obj = {
    "url": cors_anywhere_url+yelp_search_url+"location="+address+"&term="+food,
    "method": "GET",
    "headers": {
      "Authorization": token
    }
  }

  $.ajax(yelp_obj).done(function(yelp_data){
    console.log(yelp_data);

    for (var i=0; i<yelp_data.businesses.length;i++){
        console.log(yelp_data.businesses[i].categories[0].alias)
    }
  });

$('#search-button').on('click',function(){

    food = $('#food').val().trim();
    address = $('#address').val().trim();
    console.log(food);
    console.log(address);

    return false;
})