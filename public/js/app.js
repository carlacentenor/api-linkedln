
// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
  localStorage.firstName = data.firstName;
  localStorage.headline = data.headline;
  localStorage.lastName = data.lastName;
}

function response(data) {
  localStorage.pictureUrl = data.pictureUrl;
  localStorage.connections = data.numConnections;
  window.location.href = 'views/home.html';
}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Raw('/people/~').result(onSuccess).error(onError);
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(response).error(onError);
}

/* var liLogin = function() { // Setup an event listener to make an API call once auth is complete
  IN.UI.Authorize().params({'scope': ['r_basicprofile', 'r_emailaddress']}).place();
  IN.Event.on(IN, 'auth', getProfileData);
};

const getUser = () =>{
  liLogin();
  // window.location.href = '../views/home.html';
};

var btn = document.querySelector('.btn-signin');
btn.addEventListener('click', getUser);

var getProfileData = function() { 
  IN.API.Profile('me').fields('id,firstName,lastName,email-address,picture-urls::(original),public-profile-url,location:(name)').result(function(me) {
    var profile = me.values[0];
    var id = profile.id;
    var firstName = profile.firstName;
    var lastName = profile.lastName;
    var emailAddress = profile.emailAddress;
    var pictureUrl = profile.pictureUrls.values[0];
    var profileUrl = profile.publicProfileUrl;
    var country = profile.location.name;
  });
};
*/