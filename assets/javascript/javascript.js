// Search ENDPOINT URL (GET): https://api.yelp.com/v3/businesses/search
// API KEY = GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx

var token = "Bearer GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx"
var yelp_search_url = "https://api.yelp.com/v3/businesses/search?"
var cors_anywhere_url = "https://cors-anywhere.herokuapp.com/"
var address = ""
var food = ""

var settings = {
    "url": cors_anywhere_url+yelp_search_url+"location=97225&term=pizza",
    "method": "GET",
    "headers": {
      "Authorization": token
    }
  }
  
  $.ajax(settings).done(function(response){
    console.log(response);
  });

