function fbpost(){
  FB.ui({
    method: 'feed',
    link: 'https://developers.facebook.com/docs/',
    caption: 'An example caption',
  }, function(response){});
}
