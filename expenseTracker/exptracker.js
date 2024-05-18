document.addEventListener('DOMContentLoaded', () => {
    const inputFormElements = document.getElementById("inputForm");
    const outputFormElements = document.querySelector("#outputTable tbody");
    const status = document.getElementById('status');

    inputFormElements.addEventListener('submit', (event) => {
        event.preventDefault();
        const amount = document.getElementById("amountInput").value;
        const category = document.getElementById("categoryInput").value;
        const date = document.getElementById("dateInput").value;

        if (amount && category && date) {
            status.innerText = "";
            elementsAdd({ amount, category, date });
            inputFormElements.reset();
        } else {
            status.innerText = "Fill all the fields";
        }

    });

    function elementsAdd(singleRow) {
        const insertRow = document.createElement('tr');
        insertRow.innerHTML = `
            <td>${singleRow.amount}</td>
            <td>${singleRow.category}</td>
            <td>${singleRow.date}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>`;

        insertRow.querySelector('.edit').addEventListener('click', () => editRow(insertRow, singleRow));
        insertRow.querySelector('.delete').addEventListener('click', () => deleteRow(insertRow));

        outputFormElements.appendChild(insertRow);
    }

    function editRow(row, singleRow) {
        document.getElementById('amountInput').value = singleRow.amount;
        document.getElementById('categoryInput').value = singleRow.category;
        document.getElementById('dateInput').value = singleRow.date;

        outputFormElements.removeChild(row);
    }

    function deleteRow(row) {
        outputFormElements.removeChild(row);
    }
});
