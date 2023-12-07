
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,20,10,5,1]; 

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage(); 
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            let amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plate?");
        }
    } else {
        showMessage("Innvalid Bill Amount")
    }
});

function calculateChange(amountToBeReturned){
    // go over all the available
    for (let i = 0; i<availableNotes.length; i++){
        // no of notes need for the domination

        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); // 2010 / 2000 = 1 || 10 / 500 = 0
        
        // amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i]; //2010 % 2000 = 10 || 10 % 500 = 10

        // updating the number of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none"
}

function showMessage(msg) {
    message.style.display = "block"
    message.innerText =msg;
}