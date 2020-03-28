function card()
{
    paymentOption; 
    cardType;  
    cardNumber;  
    cvv; 
    expireDate;  
    amount;
}
function validate() {
    data = new card();
    data.paymentOption = document.getElementById("paymentOption").value;
    data.cardType = document.getElementById("cardType").value;
    data.cardNumber = document.getElementById("cardNumber").value;
    data.cvv = document.getElementById("cvv").value;
    data.expireDate = document.getElementById("expireDate").value;
    data.amount = document.getElementById("amount").value;

    
    //validating details
    if(data.paymentOption == "default")
    {
        document.getElementById("paymentOption").innerHTML = "Please select the payment option";
        flag = false;
    }
    if(data.cardType == "default")
    {
        document.getElementById("cardType").innerHTML = "Please select the card type";
        flag = false;
    }
    if(data.cardNumber === "")
    {
        document.getElementById("cardWarning").innerHTML = "Please enter the card number";
        flag = false;
    }
 
    else if((/^\d{16}$/.test(data.cardNumber)===false))
    {
        document.getElementById("cardWarning").innerHTML = "Card number must be a 16 digit number";
        flag=false;
    }
    else
    {
        flag=true;
    }
    
    if(data.cvv==="")
    {
        document.getElementById("cvvWarning").innerHTML = "Please enter the cvv number";
    }
    else if(/^\d{3}$/.test(data.cvv)===false)
    {
        document.getElementById("cvvWarning").innerHTML = "CVV must be a 3 digit number";
        flag=false;
    }
    else
    {
        flag = true;
    }
    if(data.amount == "")
    {
        document.getElementById("amountWarning").innerHTML = "Please enter the amount";
        flag=false;
    }
    
    if(data.expireDate == "")
    {
        document.getElementById("dateWarning").innerHTML = "Please enter the expiry date";
        flag=false;
    }
    else if(isFutureDate(data.expireDate)===false)
    {
        document.getElementById("dateWarning").innerHTML = "Expiry date should be a future date";
        flag=false;
    }
    else
    {
        flag=true;
    }
    
    if(flag===true)
    {
        proceedPayment();
            t = "<h2>Payment Successful</h2>";
        setTimeout( function(){document.getElementById("payment").innerHTML = t;},2000);
    
    }   
}
function  proceedPayment(){
    t = "<h2>Please Wait<br>Your payment is processing</h2>";
               
    document.getElementById("payment").innerHTML = t;
}

function isFutureDate(selectedDate){
    var today = new Date().getTime(),
    
    selectedDate = selectedDate.split("/");
    console.log("today =",today);
    console.log("selectedDate:",selectedDate);
    console.log("selectedDate.split("/") :",selectedDate);
    selectedDate = new Date(selectedDate[2], selectedDate[0]-1, selectedDate[1]).getTime();
    console.log("new Date(selectedDate[2], selectedDate[1] - 1, selectedDate[0]).getTime() :",selectedDate);
    return (today - selectedDate) < 0;
}