function toggleWorkingDetails() {
    var workingCheckbox = document.getElementById('working');
    var workingDetails = document.getElementById('workingDetails');
    workingDetails.style.display = workingCheckbox.checked ? 'block' : 'none';
}

function calculateSalary() {
    var hours = parseFloat(document.getElementById('hours').value) || 0;
    var rate = parseFloat(document.getElementById('rate').value) || 0;
    var taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
    
    var salary = hours * rate * (1 - (taxRate / 100));
    
    document.getElementById('salary').textContent = salary.toFixed(2);
}