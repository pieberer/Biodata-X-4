let dir = 'data/' + 1 + '.json'

const aboutTemplate = ""

async function load(id) {
    try {
        path = 'data/' + id + '.json'
        const response = await fetch(path)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        data = await response.json()

        document.getElementById("name").textContent = data.name
    } catch (err) {
        console.error(err)
    }
}
load(1)

function back() {
    window.location.href = "../index.html";
}