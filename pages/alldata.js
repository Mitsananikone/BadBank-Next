import fetch from 'cross-fetch';

export default function AllData(){
  // Fetch the data from the API
  fetch('/api/account/all')
  .then(response => response.json())
  .then(data => {
    // Get a reference to the table body
    const tableBody = document.getElementById('table-body');

    // Loop through the data and create a row for each item
    data.forEach(item => {
      const row = document.createElement('tr');

      // Create a cell for each property and add it to the row
      const nameCell = document.createElement('td');
      nameCell.innerText = item.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement('td');
      emailCell.innerText = item.email;
      row.appendChild(emailCell);

      const passwordCell = document.createElement('td');
      passwordCell.innerText = item.password;
      row.appendChild(passwordCell);

      const balanceCell = document.createElement('td');
      balanceCell.innerText = item.balance;
      row.appendChild(balanceCell);

      // Add the row to the table body
      tableBody.appendChild(row);
    });
  });
  return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
      <tbody id="table-body">
  
      </tbody>
  </table>

  );

}
