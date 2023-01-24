const stock = JSON.parse(localStorage.getItem('stock')) || {
    apples: 10,
    bananas: 20,
    oranges: 5
  };
  
  function addToStock(item, quantity) {
    stock[item] = (stock[item] || 0) + quantity;
    localStorage.setItem('stock', JSON.stringify(stock));
  }
  
  
  function removeFromStock(item, quantity) {
    stock[item] -= quantity;
    localStorage.setItem('stock', JSON.stringify(stock));
  }
  
  function checkStock(item) {
    return stock[item] || 0;
  }
  
  function updateTable() {
    const tbody = document.querySelector('#stock-table tbody');
    tbody.innerHTML = '';
    for (const item in stock) {
      const row = document.createElement('tr');
      const itemCell = document.createElement('td');
      itemCell.textContent = item;
      row.appendChild(itemCell);
      const quantityCell = document.createElement('td');
      quantityCell.textContent = stock[item];
      row.appendChild(quantityCell);
      tbody.appendChild(row);
    }
  }
  
  const addButton = document.querySelector('#add-button');
  addButton.addEventListener('click', () => {
    const itemInput = document.querySelector('#item');
    const item = itemInput.value;
    const quantityInput = document.querySelector('#quantity');
    const quantity = quantityInput.value;
    addToStock(item, quantity);
    updateTable();
  });
  
  const removeButton = document.querySelector('#remove-button');
  removeButton.addEventListener('click', () => {
    const itemInput = document.querySelector('#item');
    const item = itemInput.value;
    const quantityInput = document.querySelector('#quantity');
    const quantity = quantityInput.value;
    removeFromStock(item, quantity);
    updateTable();
  });
  
  updateTable();
  