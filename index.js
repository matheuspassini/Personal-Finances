const form = document.querySelector('#form')
const buttonSave = document.getElementById('save')

async function getTransactions() {
    try {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        return data

    } catch (error) {
        alert(error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getTransactions()
})

buttonSave.addEventListener('click', async (ev) => {
    ev.preventDefault()

    const transaction = {
        name: document.querySelector('#name').value,
        amount: document.querySelector('#amount').value,
        id: document.querySelector('#id').value
    }

    try {
        const posting = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })

        await posting.json()

    } catch (error) {
        alert(error)
    }
})
