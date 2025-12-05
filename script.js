function addStudent() {
    // Table के tbody को select करें
    let table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    
    // New row create करें
    let newRow = table.insertRow();
    
    // Cells create करें
    let nameCell = newRow.insertCell(0);
    let ageCell = newRow.insertCell(1);
    let branchCell = newRow.insertCell(2);
    
    // Data set करें
    nameCell.innerHTML = "Rahul";
    ageCell.innerHTML = "22";
    branchCell.innerHTML = "CSE";
}
