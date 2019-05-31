// API KEY: vjqpjjdpsurf7n1tpkyq2w2b7p41ty47
// ENDPOINT: api/20181213/article.json
// limit: &count=
// LOCATION?: "/location_city=

$(document).ready(function() {

  var queryURL = "https://www.triposo.com/api/20181213/poi.json?tag_labels=cuisine-Pizza&tag_labels=cuisine-Beer&location_id=Berlin&count=10&order_by=-score&fields=name,best_for,coordinates,score,id"

  function get_events(queryURL){

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(triposo_data) {
      
      $('#events-section').empty();
      
      console.log(triposo_data);
      for (var i = 0; i < triposo_data.businesses.length;i++){
        // console.log(triposo_data.businesses[i].name);
        // console.log(triposo_data.businesses[i].phone);
        // console.log(triposo_data.businesses[i].price);
        // console.log(triposo_data.businesses[i].rating);
        // console.log(triposo_data.businesses[i].is_closed);

        var events_div = $('<div>');
        events_div.addClass('card');
        events_div.attr('id', 'event-spot-'+i);
        // events_div.attr('style',"background: url("+triposo_data.businesses[i].image_url+")")
        $('#events-section').append(events_div);

        var events_div = $('<div>');
        events_div.addClass('card');
        events_div.attr('id', 'event-spot-'+i);
        // events_div.attr('style',"background: url("+triposo_data.businesses[i].image_url+")")
        $('#events-section').append(events_div);

        $('#event-spot-'+i).append("<h3>Name: "+triposo_data.businesses[i].name+"</h3>");
        $('#event-spot-'+i).append("<h4>Phone#: "+triposo_data.businesses[i].display_phone+"</h4>");
        $('#event-spot-'+i).append("<h4>Budget ($ - $$$$): "+triposo_data.businesses[i].price+"</h4>");
        $('#event-spot-'+i).append("<h4>Rating: "+triposo_data.businesses[i].rating+"</h4>");
        $('#event-spot-'+i).append("<h4>Address: "+triposo_data.businesses[i].location.display_address[0]+", "+triposo_data.businesses[i].location.display_address[1]+"</h4>");
        $('#event-spot-'+i).append("<h4>Open/Closed: "+triposo_data.businesses[i].is_closed+"</h4>");

      };
    });
  };

  $('#search-button').on('click',function(){

    event = $('#events').val().trim();
    city = $('#city').val().trim();
    state = $$('#state').val().trim();
    var new_url = cors_anywhere_url+triposo_search_url+"location="+cityState+"&term="+event;
    // https://api.yelp.com/v3/businesses/search?location=portland,or&term=mexican

    // console.log(food);
    // console.log(address);
    // console.log(new_url);
    
    get_events(new_url);
    return false;

  });

};
