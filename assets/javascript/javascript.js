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
    $('#food-spot-'+i).append("<h4>Address: "+'<a href="'+yelp_data.businesses[i].url+'" target="_blank">'+
                                              yelp_data.businesses[i].location.address1+", "+
                                              yelp_data.businesses[i].location.city+" "+
                                              yelp_data.businesses[i].location.state+" "+
                                              yelp_data.businesses[i].location.zip_code+"</a></h4>");
    $('#food-spot-'+i).append("<h4>Open/Closed: "+yelp_data.businesses[i].is_closed+"</h4>");

    var add_button = $('<button>');
    add_button.addClass('btn btn-sm btn-success');
    add_button.text('Add To List');
    add_button.attr('id', 'craving');
    add_button.attr('value', yelp_data.businesses[i].name);
    $('#food-spot-'+i).append(add_button);
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

// CLEAR BUTTON = REMOVES RESULTS FROM #RESULTS-SECTION =================>>
$('#clear-button').on('click',function(){
  $('#results-section').empty();
});

// MY BITE-LIST (WHAT TO EAT NEXT) ======================================>>
function renderToEatList(eat_list){
  $('to-eat-list').empty();

  // Giving a value to my listed item ===================================>>
  for (var i=0;i<eat_list.length;i++){
    var eat_item = $('<p>');
    eat_item.text(eat_list[i]);

  // Creating a visible button for my list ==============================>>
    var done_item = $('<button>');
    done_item.attr("data-to-do", i);
    done_item.addClass('checkbox btn btn-outline-info btn-sm btn-block');
    done_item.text("✓");

  // The text of my item becomes a button ===============================>>
    eat_item = eat_item.prepend(done_item);
  
  // Adding the complete item (as a button) to my list ==================>>
    $("#to-eat-list").append(eat_item);
  }
}

