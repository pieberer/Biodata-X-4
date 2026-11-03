console.log("i know you're here.")

function studentPage(id) {
    //alert("hi " + id);
    console.log(id)

    window.location.href = "students/student.html";
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