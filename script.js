const newImgBtn = document.getElementById('newImg');

const img = document.querySelector('img');
const error = document.querySelector('#error');
const loading = document.querySelector('#loading');
const searchBar = document.querySelector('.searchBar');
let searchSubject = 'hello';

window.onload = displayImg(searchSubject);

newImgBtn.addEventListener('click', function () {
  searchSubject = searchBar.value;
  displayImg(searchSubject);
  console.log('loading img');
  loading.textContent = "loading..."
});

function displayImg(searchSubject) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=jY18ONt5IDRmflfIxQHTJIhq2ZBdCP2e&s=${searchSubject}`;
  fetch(url, { mode: 'cors' })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    img.src = response.data.images.original.url
    loading.textContent = "";
    error.style.display = "none";
    img.style.display = "block";
  })
  .catch(e => {
    console.log(e)
    error.style.display = "block";
    img.style.display = "none";
    loading.textContent = ""
  });
  
}