let $firstnameUser = $('.firstname');
let $lastnameUser = $('.lastname');
let $headlineUser = $('.headline');
let $connectionsUser = $('#connections');
let $imgUser = $('#photo-user');
let $imgPost = $('.img-post');
let $btnPost = $('.bg-info');
let $text = $('#text');
let $contPost = $('.container-post');
$btnPost.disabled = true;

function getInfoUser() {
  let url = localStorage.pictureUrl;
  $imgUser.attr('src', url);
  $imgPost.attr('src', url);
  $firstnameUser.text(localStorage.firstName);
  $lastnameUser.text(localStorage.lastName);
  $headlineUser.text(localStorage.headline);
  $connectionsUser.text(localStorage.connections); 
}

getInfoUser();

$('#tab1').on('click', function(event) {
  event.preventDefault();
  $(this).tab('show');
});

$btnPost.on('click', post);

function post(event) {
  let textPost = $text.val();
  $contPost.append(`<div class="row cont-post">
  <div class="col-4">
  <img  alt="photo" class="img-post rounded-circle img-fluid" src=${localStorage.pictureUrl}>
  <p>${localStorage.firstName}</p>
  </div>
  <div class="col-8">
  <p>${textPost}</p>
  </div>
  </div>`);
};
