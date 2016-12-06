window.fbAsyncInit = function() {
  FB.init({
    appId      : '359867534367940',
    xfbml      : true,
    version    : 'v2.6'
  });

  FB.getLoginStatus(function(response) {
      checkLogin(response);
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


function checkLogin(response){
  console.log(response);
}
