function helloUser() {
    let userName = prompt('Введите ваше имя:', 'Алекс');
    let description = 'Приятно познакомиться!';
    console.log(`Привет, ${userName}`);
    alert(`Привет, ${userName}!`);
    document.getElementById("UserName").innerHTML = `Привет, ${userName}!`;
    document.getElementById("Description").innerHTML = description;
}