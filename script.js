function insert_Row() {
    const table = document.getElementById("sampleTable");
     const newRow = table.insertRow(0);
    
    const rowCount = table.rows.length;
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    cell1.innerHTML =  "New Cell1";
    cell2.innerHTML =  "New Cell2"; 
  
}
