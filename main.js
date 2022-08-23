const txtname = document.getElementById("fname");
const address = document.getElementById("address");
const credit = document.getElementById("credit");
const type = document.querySelector("#type");
const amount = document.querySelector("#amount");
const cType = document.querySelectorAll('input[name="CType"]');

const result = document.getElementById("result");

const makedon = document.getElementById("makedon");
const conf = document.getElementById("conf");

const final = {
    Name: "",
    address: "",
    credit: "",
    type: "",
    amount: "",
    ctype: ""
};

makedon.onclick = function fin(){
    if(txtname.value == "" || address.value == "" || credit.value == ""){
        alert("Please fill out the required fields");
    }else{
        let selectedCard;
        for (const radioButton of cType) {
            if (radioButton.checked) {
                selectedCard = radioButton.value;
                break;
            }
        }

        final.Name = txtname.value;
        final.address = address.value;
        final.credit = credit.value;
        final.type = type.value;
        final.amount = amount.value;
        final.ctype = selectedCard;
    
        result.innerText = 
        "Donation Summery \n " +
        "--------------------------------------------- \n" +
        "Name: " + final.Name + "\n" +
        "Address: " + final.address + "\n" +
        "Donation Name: " + final.type + "\n" +
        "Card Type: " + final.ctype + "\n" +
        "Credit Card Number: " + final.credit + "\n" +
        "Amount: " + final.amount + " LKR";
    }
}
document.getElementById("makedon").addEventListener("click", function(fin){
    event.preventDefault()
});

conf.onclick = function conf(){
    if(final.Name == "" || final.address == "" || final.credit == 0){
        alert("Please fill out the required fields")
    }else{
        alert("The donation is successful \n Thank you For your generous donation !!!")
        result.innerText = 
        "Donation Summery \n " +
        "------------------------------------------------- \n" +
        "Name: " + final.Name + "\n" +
        "Address: " + final.address + "\n" +
        "Donation Name: " + final.type + "\n" +
        "Card Type: " + final.ctype + "\n" +
        "Credit Card Number: " + final.credit + "\n" +
        "Amount: " + final.amount + " LKR \n" +
        "-------------Payment Recieved--------------";
        }
    
}
document.getElementById("conf").addEventListener("click", function(conf){
    event.preventDefault()
});