
const roles = ["Frontend разработчик", "UI дизайнер", "Студент"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = roles[i];
    if (!isDeleting) {
        document.getElementById("typing").textContent = current.slice(0, ++j);
        if (j === current.length) isDeleting = true;
    } else {
        document.getElementById("typing").textContent = current.slice(0, --j);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(type, 100);
}
if(document.getElementById("typing")) type();


// Валидация формы
function validateForm() {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Введите корректный email");
        return false;
    }
    alert("Сообщение отправлено!");
    return false;
}
