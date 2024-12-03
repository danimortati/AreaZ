const filmes = [{
    id: 'filme1',
    src: 'https://i.ytimg.com/vi/lkn_OjfdZZA/maxresdefault.jpg',
    trailer: 'path_to_trailer1.mp4',
    sinopse: 'Sinopse do filme 1...',
    link: 'pagina_do_filme1.html'
 },
 {
    id: 'filme2',
    src: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/26E7C634EB29C137475AE05AC983080BAE7E2E3741C49987EEA2539A40A9262C/scale?width=1200&aspectRatio=1.78&format=jpeg',
    trailer: 'path_to_trailer2.mp4',
    sinopse: 'Sinopse do filme 2...',
    link: 'pagina_do_filme2.html'
 },
 {
    id: 'filme3',
    src: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9AAED309BF9197B5A212AC1FBCF377D707FCE3F99886AB5001EE6BA9FFD7A84C/scale?width=1200&aspectRatio=1.78&format=jpeg',
    trailer: 'path_to_trailer3.mp4',
    sinopse: 'Sinopse do filme 3...',
    link: 'pagina_do_filme3.html'
 },
 {
    id: 'filme4',
    src: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/876ED2BAE885F9FD5C4294CFAC4BF1B5D58459F6962272061578765946E2C099/scale?width=1200&aspectRatio=1.78&format=jpeg',
    trailer: 'path_to_trailer4.mp4',
    sinopse: 'Sinopse do filme 4...',
    link: 'pagina_do_filme4.html'
 },
 {
    id: 'filme5',
    src: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/713EAC98B3CEC6A774A84243AD1FA532576F243B8A152FEA0C03C4E32BBFE018/scale?width=1200&aspectRatio=1.78&format=jpeg',
    trailer: 'path_to_trailer5.mp4',
    sinopse: 'Sinopse do filme 5...',
    link: 'pagina_do_filme5.html'
 },
 {
    id: 'filme6',
    src: 'https://i.ytimg.com/vi/pgodQwuynaY/maxresdefault.jpg',
    trailer: 'path_to_trailer6.mp4',
    sinopse: 'Sinopse do filme 6...',
    link: 'pagina_do_filme6.html'
 },
];
const movieList = document.querySelector('.movie-list');
filmes.forEach(filme => {
 const movieElement = document.createElement('img');
 movieElement.src = filme.src;
 movieElement.alt = filme.id;
 movieElement.onclick = () => openModal(filme.id);
 movieList.appendChild(movieElement);
});

function openModal(filmeId) {
 const modal = document.getElementById('movieModal');
 const video = modal.querySelector('video');
 const description = modal.querySelector('.movie-description');
 const watchBtn = modal.querySelector('.watch-btn');
 const filme = filmes.find(f => f.id === filmeId);
 video.src = filme.trailer;
 description.textContent = filme.sinopse;
 watchBtn.onclick = () => window.location.href = filme.link;
 modal.style.display = 'flex';
}
document.getElementById('movieModal').addEventListener('click', function (event) {
 if (event.target === this) {
    closeModal();
 }
});

function closeModal() {
 const modal = document.getElementById('movieModal');
 modal.style.display = 'none';
}

function scrollMovies(direction) {
 const movieList = document.querySelector('.movie-list');
 let scrollAmount = 0;
 const scrollSpeed = 5;
 const scrollDistance = 245; // Largura de um filme
 const slide = setInterval(function () {
    if (direction === 'left') {
       movieList.scrollLeft -= scrollSpeed;
    } else {
       movieList.scrollLeft += scrollSpeed;
    }
    scrollAmount += scrollSpeed;
    if (scrollAmount >= scrollDistance) {
       clearInterval(slide);
    }
 }, 1);
}

function toggleMenu() {
 const menu = document.querySelector('.menu');
 menu.classList.toggle('active');
}

function toggleProfileMenu() {
  var dropdown = document.getElementById('profileDropdown');
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
  } else {
      dropdown.style.display = "none";
  }
}

document.addEventListener('click', function(event) {
  var dropdown = document.getElementById('profileDropdown');
  var userProfile = document.querySelector('.user-profile');

  // Verifica se o clique não foi no menu suspenso ou no ícone de perfil
  if (!userProfile.contains(event.target)) {
      dropdown.style.display = "none";
  }
});