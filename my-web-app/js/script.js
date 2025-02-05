document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
    console.log(`Имя: ${name}, Email: ${email}, Сообщение: ${message}`);

    // Очистка формы
    document.getElementById('contactForm').reset();
});