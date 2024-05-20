function toggleWorkingDetails(working) {
    var workingDetails = document.getElementById("workingDetails");
    if (working) {
        workingDetails.style.display = "block";
    } else {
        workingDetails.style.display = "none";
    }
}

function calculateSalary() {
    var hours = parseFloat(document.getElementById('hours').value) || 0;
    var rate = parseFloat(document.getElementById('rate').value) || 0;
    var taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
    var isValid = true;
    var errorMessage = '';

    if (hours <= 0 || isNaN(hours)) {
        errorMessage += 'Please enter a valid number of hours.\n';
        isValid = false;
    }

    if (rate <= 0 || isNaN(rate)) {
        errorMessage += 'Please enter a valid hourly rate.\n';
        isValid = false;
    }

    if (taxRate < 0 || taxRate > 100 || isNaN(taxRate)) {
        errorMessage += 'Please enter a valid tax rate between 0 and 100.\n';
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
        return;
    }

    var salary = hours * rate * (1 - (taxRate / 100));
    document.getElementById('salary').textContent = salary.toFixed(2);
}

