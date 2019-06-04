//  =============================== GLOBAL VARIABLES ===============================>>
var token = "Bearer GDx5KhPwYk7gxWz0fa4bK4UbYUtl7lt4HSuk2nomFxp2UJim7d55IXu43LbBGcQcOT6eLF98sZURGQ5qRaQ9Do6ePnnM_lx_4nq3MN7WafdRNmWDmtKRnkSHO83kXHYx";
var yelp_search_url = "https://api.yelp.com/v3/businesses/search?";
var cors_anywhere_url = "https://cors-anywhere.herokuapp.com/";
var address = "";
var food = "";


// MY AJAX CALL/FUNCTION ===========================================================>>
function get_food(queryURL){
  $.ajax({url: queryURL, method: "GET", headers: {Authorization: token}}).done(function(yelp_data){    
      $('#results-section').empty();
      // console.log(yelp_data);

    for (var i=0; i<yelp_data.businesses.length;i++){
        // console.log(yelp_data.businesses[i].name);
        // console.log(yelp_data.businesses[i].phone);
        // console.log(yelp_data.businesses[i].price);
        // console.log(yelp_data.businesses[i].rating);
        // console.log(yelp_data.businesses[i].is_closed);
        imageUrl= yelp_data.businesses[i].image_url;
        var foodImage = $("<img>");
        foodImage.attr("src", imageUrl);

    var food_div = $('<div>');
    food_div.addClass('card  bg-dark food-result');
    food_div.attr('id', 'food-spot-'+i);
    // food_div.attr('style',"background: url("+yelp_data.businesses[i].image_url+")")
    $('#results-section').append(food_div);
    $('#food-spot-'+i).append("<h3>Name: "+yelp_data.businesses[i].name+"</h3>");
    $('#food-spot-'+i).append(foodImage);
    $('#food-spot-'+i).append("<h4>Phone#: "+yelp_data.businesses[i].display_phone+"</h4>");
    $('#food-spot-'+i).append("<h4>Budget ($ - $$$$): "+yelp_data.businesses[i].price+"</h4>");
    $('#food-spot-'+i).append("<h4>Rating: "+yelp_data.businesses[i].rating+"</h4>");
    $('#food-spot-'+i).append("<h4>Address: "+'<a href="'+yelp_data.businesses[i].url+'" target="_blank">'+
                                              yelp_data.businesses[i].location.address1+", "+
                                              yelp_data.businesses[i].location.city+" "+
                                              yelp_data.businesses[i].location.state+" "+
                                              yelp_data.businesses[i].location.zip_code+"</a></h4>");
    $('#food-spot-'+i).append("<h4>Open/Closed: "+yelp_data.businesses[i].is_closed+"</h4>");
    $('#food-spot-'+i).attr("data-name", yelp_data.businesses[i].name);
    var add_button = $('<button>');
    add_button.addClass('btn btn-sm btn-success craving');
    add_button.text('Add To List');
    add_button.attr('data-name', yelp_data.businesses[i].name);
    add_button.attr('type', 'submit')
    $('#food-spot-'+i).append(add_button);
  
    }
  });
};

// MY ON-CLICK FOR MY SEARCH =======================================================>>
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

// CLEAR BUTTON = REMOVES RESULTS FROM #RESULTS-SECTION ============================>>
$('#clear-button').on('click',function(){
  $('#food').val("");
  $('#address').val("");
  $('#results-section').empty();
});

// CLEAR #TO-EAT-LIST & LOCALSTORAGE ===============================================>>
$('#clear-eat-list').on('click',function(){
  $('#to-eat-list').empty();
  localStorage.clear();
});

// ========================== EAT-LIST FUNCTIONS ===================================>>

// FUNCTION RENDERS MY EAT_LIST ====================================================>>
function showMeFood(eat_list) {
  $("#to-eat-list").empty(); // empties out the html

  // RENDER MY EAT_LIST
  for (var i = 0; i < eat_list.length; i++) {
    var grub_item = $("<p>");
    // grub_item.text(eat_list[i]); // <<------ (THIS IS AN OPTIONAL PREFERENCE)

    // THIS CREATES MY LISTED ITEM WITH A ✓
    var food_done = $("<button>");
    food_done.attr("data-to-eat", i);
    food_done.addClass("checkbox");
    food_done.text("✓"+" "+eat_list[i]);

    // APPENDING BUTTON TO THE <P>
    grub_item = grub_item.prepend(food_done);

    // ADDING THE BUTTON TO THE TO-EAT-LIST DIV
    $("#to-eat-list").append(grub_item);
  }
}

// ON-CLICK FUNCTION FOR THE BUTTON GENERATED FROM OUR AJAX ALL ====================>>
$(document).on("click", '.craving', function(event) {
  event.preventDefault();

  // GET THE DATA-NAME FROM THE BUTTON CLICKED & STORE AS A VARIABLE
  var eat_task = $(this).data('name');

// ADDING OUR NEW EAT-LIST ITEM TO THE LOCALSTORAGE
  eat_list.push(eat_task);

// UPDATE MY EAT-LIST 
  showMeFood(eat_list);

// SAVES MY EAT-LIST TO LOCALSTORAGE / TURN THE LIST FROM AN ARRAY INTO A STRING
  localStorage.setItem("toeatlist", JSON.stringify(eat_list));
});

//  ON-CLICK FUNCTION THAT WILL DELETE AN ITEM FROM THE LIST ======================>>
$(document).on("click", ".checkbox", function() {
  var to_eat_number = $(this).attr("data-to-eat");

// DELETES THE MARKED ITEM 
  eat_list.splice(to_eat_number, 1);

// UPDATE MY EAT-LIST 
  showMeFood(eat_list);

// SAVES MY EAT-LIST TO LOCALSTORAGE / TURN THE LIST FROM AN ARRAY INTO A STRING
  localStorage.setItem('toeatlist', JSON.stringify(eat_list));
});

// LOADS MY EAT-LIST FROM LOCALSTORAGE ============================================>>
// JSON.parse TURNS THE ARRAY INTO A STRING
  var eat_list = JSON.parse(localStorage.getItem('toeatlist'))

// CHECKING IF EAT_LIST EXISTS 
// IF NOT SET EAT_LIST AS AN EMPTY ARRAY
  if(!Array.isArray(eat_list)){
    eat_list =[];
  }

// RENDER MY EAT_LIST ON PAGE LOAD 
  showMeFood(eat_list);