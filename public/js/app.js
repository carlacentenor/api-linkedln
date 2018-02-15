
// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}


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

function onError(error) {
  console.log(error);
}


function getProfileData() {
  IN.API.Raw('/people/~').result(onSuccess).error(onError);
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(response).error(onError);
}

