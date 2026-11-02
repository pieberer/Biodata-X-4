const card = document.getElementById("image")
const audio = new Audio("assets/test/vine-boom.mp3");

console.log("i know you're here.")

card.addEventListener("click", function() {
    audio.play;
    console.log("clicked");
    console.log(audio)
});

