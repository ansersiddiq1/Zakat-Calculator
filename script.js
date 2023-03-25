window.onload = function () {
    document.getElementById("pdf-btn")
        .addEventListener("click", () => {
            const calculator = this.document.getElementById("calculator");
            console.log(calculator);
            console.log(window);
            html2pdf().from(calculator).save();
        })
}
// Function for calculating the values of all feild
function calculate() {
    let input_t1 = parseFloat(document.getElementById("input-t1").value);
    let input_t2 = parseFloat(document.getElementById("input-t2").value);
    let input_t3 = parseFloat(document.getElementById("input-t3").value);
    let input_t4 = parseFloat(document.getElementById("input-t4").value);
    let input_t5 = parseFloat(document.getElementById("input-t5").value);
    let input_t6 = parseFloat(document.getElementById("input-t6").value);
    let input_t7 = parseFloat(document.getElementById("input-t7").value);

    let sumTable2 = input_t1 + input_t2 + input_t3 + input_t4 + input_t5 + input_t6 + input_t7;
    // Display the result in Table 2 
    document.getElementById("outputTable2").innerHTML = sumTable2;
    // Display the final result of table 2
    document.getElementById("outputTable22").innerHTML = sumTable2;

    let inputValue1 = parseFloat(document.getElementById("input-value-1").value)
    let inputValue2 = parseFloat(document.getElementById("input-value-2").value)
    let inputValue3 = parseFloat(document.getElementById("input-value-3").value)
    let inputValue4 = parseFloat(document.getElementById("input-value-4").value)
    let inputValue5 = parseFloat(document.getElementById("input-value-5").value)
    let inputValue6 = parseFloat(document.getElementById("input-value-6").value)
    let inputValue7 = parseFloat(document.getElementById("input-value-7").value)
    let inputValue8 = parseFloat(document.getElementById("input-value-8").value)
    let inputValue9 = parseFloat(document.getElementById("input-value-9").value)

    let inputValue10 = parseFloat(document.getElementById("input-value-10").value)
    let inputValue11 = parseFloat(document.getElementById("input-value-11").value)
    let inputValue12 = parseFloat(document.getElementById("input-value-12").value)
    let inputValue13 = parseFloat(document.getElementById("input-value-13").value)
    let inputValue14 = parseFloat(document.getElementById("input-value-14").value)
    let inputValue15 = parseFloat(document.getElementById("input-value-15").value)
    let inputValue16 = parseFloat(document.getElementById("input-value-16").value)
    let inputValue17 = parseFloat(document.getElementById("input-value-17").value)
    let inputValue18 = parseFloat(document.getElementById("input-value-18").value)

    let sumTable1 = inputValue1 + inputValue2 + inputValue3 + inputValue4 + inputValue5 + inputValue6 + inputValue7 + inputValue8 + inputValue9 + inputValue10 + inputValue11 + inputValue12 + inputValue13 + inputValue14 + inputValue15 + inputValue16 + inputValue17 + inputValue18;
    // Display the result in table 1
    document.getElementById("outputTable1").innerHTML = sumTable1;
    // Display the final result of table 1 
    document.getElementById("outputTable11").innerHTML = sumTable1;
    // Display the Final Zakat Amount 
    let substractionOfTables = sumTable1 - sumTable2;
    let zakatAmount = (substractionOfTables * 2.5) / 100;
    document.getElementById("outputZakatAmount").innerHTML = zakatAmount;
}