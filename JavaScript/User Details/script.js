function User()
{
    var name;
    var address;
    var mobileNumber;
    var email;
}

function validate()
{
    var flag = false;
    var data = new User();
    data.name = document.getElementById("name").value;
    data.address = document.getElementById("address").value;
    data.mobileNumber = document.getElementById("mobile").value;
    data.email = document.getElementById("email").value;

    if(data.name == "")
    {
        document.getElementById("nameWarning").innerHTML = "Please Enter the Name";
        flag = false;
    }
    else
        flag = true;

    if(data.mobileNumber == "")
    {
        document.getElementById("mobileWarning").innerHTML = "Please Enter the mobile number";
        flag = false;
    }
    else if((/^\d{10}$/.test(data.mobileNumber)===false))
    {
        document.getElementById("mobileWarning").innerHTML = "Invalid MobileNumber";
        flag = false;
    }
    else
        flag = true;
    
    if(data.email == "")
    {
        document.getElementById("emailWarning").innerHTML = "Please Enter the E-mail";
        flag = false;

    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)===false)
    {
        document.getElementById('emailWarning').innerHTML="Invalid Email";
        flag = false;
    }
    else
        flag = true;
    
    if(flag == true)
    {
        bindValues(data.name,data.address,data.mobileNumber,data.email);
    }
}

function bindValues(name,address,mobileNumber,email)
{
    storeData = new User();
    storeData.name = name;
    storeData.address = address;
    storeData.mobileNumber = mobileNumber;
    storeData.email = email;

    dispData = "Name :"+storeData.name+
    "<br> Address :"+storeData.address+
    "<br>Mobile Number :"+ storeData.mobileNumber+
    "<br> Email :"+ storeData.email;

    document.getElementById('result').innerHTML = dispData;
}