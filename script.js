console.log("i know you're here.")

function studentPage(event) {
    const id = event.target.dataset.id;
    console.log(id)
    //window.location.href = "students/student.html?id=" + id;
}
document.querySelectorAll(".student-card").forEach(card => {
    card.addEventListener("click", studentPage)
})


function isMobileDevice() {
    return (
        window.innerWidth < 768 &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    );
    }

if (isMobileDevice()) {
    alert("Tolong nyalakan mode desktop.")
}


let current = 0
const slides = document.querySelectorAll(".carousel img")

function showSlide(index) {
    slides[current].classList.remove("active")
    current = (index + slides.length) % slides.length
    slides[current].classList.add("active")
    console.log(current);
}
function changeSlide(dir) {
    showSlide(current + dir)
}