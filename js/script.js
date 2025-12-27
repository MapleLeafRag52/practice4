document.addEventListener('DOMContentLoaded', () => {
    // Элементы
    const themeBtn = document.getElementById('theme-toggle');
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('modal');

    // 1. ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Меняем текст кнопки в зависимости от темы
            if (document.body.classList.contains('dark-mode')) {
                themeBtn.textContent = 'Light Mode';
            } else {
                themeBtn.textContent = 'Dark Mode';
            }
        });
    }

    // 2. МОДАЛЬНОЕ ОКНО (КОНТАКТЫ)
    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Чтобы страница не прыгала вверх
            modal.style.display = 'flex';
        });
    }

    // Закрытие на крестик
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Закрытие при клике на область вне окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});