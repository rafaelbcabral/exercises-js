function renderTransactions(transactionsData) {
  const transaction = document.createElement('div')
  transaction.classList.add('transactions')
  transaction.id = `transacao-${transactionsData.id}`

  const name = document.createElement('h3')
  name.classList.add('transactions-name')
  name.textContent = transactionsData.name

  const value = document.createElement('div')
  value.classList.add('transactions-value')
  value.innerHTML = transactionsData.value

  transaction.append(name, value)
  document.querySelector('#transactions').appendChild(transaction)
}

async function fetchTransactions() {
  const transactions = await fetch("http://localhost:3000/transactions").then(res => res.json())
  transactions.forEach(renderTransactions)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchTransactions()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
  ev.preventDefault()

  const transactionsData = {
    name: document.querySelector('#name').value,
    value: document.querySelector('#value').value
  }

  const response = await fetch('http://localhost:3000/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionsData)
  })

  const savedTransactions = await response.json()
  form.reset()
  renderTransactions(savedTransactions)

  console.log(savedTransactions)
})