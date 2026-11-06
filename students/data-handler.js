export async function loadData(id) {
    const path = 'data/' + id + '.json'

    const response = await fetch(path)

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json()

    return data
}