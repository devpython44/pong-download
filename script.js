document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем значения из формы
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    
    // Создаем новый элемент отзыва
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `<h3>${name}</h3><p>${review}</p>`;
    
    // Добавляем отзыв в контейнер отзывов
    document.getElementById('reviews-container').appendChild(reviewItem);
    
    // Очищаем форму
    document.getElementById('review-form').reset();
});
