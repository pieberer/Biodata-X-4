let dir = 'data/' + 1 + '.json'

async function load(id) {
    try {
        path = 'data/' + id + '.json'
        const response = await fetch(path)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()

        console.log(path)
        console.log(response)
        console.log(data)

        return data
    } catch (err) {
        console.error(err)
    }
}

const data = load('1')

document.getElementById('about').textContent = data.name
console.log(data)
