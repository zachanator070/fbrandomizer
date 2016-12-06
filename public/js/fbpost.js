function fbpost(){
  $.ajax({
    url: "/url",
    method: 'get',
    error: function(status){

    },
    success: function(data, status){
      console.log(data);
      showui(data.url, data.caption);
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
