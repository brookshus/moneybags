var queryURL = "https://www.triposo.com/api/20181213/location.json?id=" + city name + "&account=3OMP060J&token=642ccecupgdo9potsfeu2wipq4tqp74x"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    });
