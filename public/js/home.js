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
  $contPost.prepend(`<div class="row cont-post">
  <div class="col-3">
  <img  alt="photo" class="img-post rounded-circle img-fluid" src=${localStorage.pictureUrl}>
  <p class="name-post">${localStorage.firstName}</p>
  <hr class="line">
  <i class="fas reaction fa-thumbs-up"></i>
  <i class="fas reaction fa-comment-alt"></i>
  <i class="fas reaction fa-share"></i>
  </div>
  <div class="col-9 box-post">
  <p class="text">${textPost}</p>
  </div>
  </div>
  </div>`);
};

$text.focus();
moment().format('MMMM Do YYYY, h:mm:ss a');