function fbpost(){
  $.ajax({
    url: "https://reddit.com/r/aww/hot",
    method: 'get',
    headers: {Access-Control-Allow-Origin:"*"},
    error: function(status){

    },
    success: function(data, status){
      console.log(data);
      var url = "https://developers.facebook.com/docs/";
      var caption = "facebook docs"
      showui(url, caption);
    }
  });

}

function showui(url, caption){
  FB.ui({
    method: 'feed',
    link: url,
    caption: caption,
  }, function(response){});
}
