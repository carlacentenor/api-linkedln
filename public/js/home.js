let $firstnameUser = $('#firstname');
let $lastnameUser = $('#lastname');
let $headlineUser = $('#headline');
let $connectionsUser = $('#connections');
let $imgUser = $('#photo-user');
let $imgPost = $('.img-post');
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

$('#tab1').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})