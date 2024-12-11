document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const videoCards = document.querySelectorAll('.video-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remova a classe 'active' de todos os botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Adicione a classe 'active' ao botão clicado
            button.classList.add('active');

            // Pegue a categoria do botão clicado
            const category = button.getAttribute('data-category');

            // Mostre ou esconda os vídeos com base na categoria
            videoCards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
