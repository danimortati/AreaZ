window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 500) { // ajuste o valor 50 conforme necessário
        header.style.backgroundColor = '#333'; // cor totalmente escura
    } else {
        header.style.backgroundColor = 'rgba(51, 51, 51, 0.8)'; // cor transparente
    }
});
