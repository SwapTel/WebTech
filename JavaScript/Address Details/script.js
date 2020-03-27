var addArr=[];

function addAddress()
{
    var data = new Object();
    data.name = document.getElementById('name').value;
    data.doorNumber =  document.getElementById('doorNumber').value;
    data.streetName = document.getElementById('streetName').value;
    data.city = document.getElementById('city').value;
    data.state = document.getElementById('state').value;
    data.country = document.getElementById('country').value;

    //append data to array
    addArr.push(data);
}
function displayAddressDetails()
{
    if (addArr.length == 0)
        document.getElementById('result').innerHTML='No details to diaplay';
    else
    {
        var tb = "";
        tb += "<table border = '1' id='resultTable'>"+"<tr>"+
        "<th>Name</th><th>DoorNumber</th><th>Street</th><th>City</th><th>State</th><th>Country</th>"
        +"</tr>";

        for( i = 0; i < addArr.length; i++)
        {
            tb += "<tr><td>"+
            addArr[i].name+"</td>"+
            "<td>"+addArr[i].doorNumber+"</td>"+
            "<td>"+addArr[i].streetName+"</td>"+
            "<td>"+addArr[i].city+"</td>"+
            "<td>"+addArr[i].state+"</td>"+
            "<td>"+addArr[i].country+
            "</td></tr>";
        }

        tb += "</table>";
    }
    
    document.getElementById('result').innerHTML=tb;
}
function searchAddressByState()
{
    var state=document.getElementById('searchbox').value;

    var flag=false;
    var index;
    for(i = 0; i < addArr.length; i++){
     
      if(addArr[i].state==state)
      {
       
  
        flag = true;
        index = i;
      }
    }
  
    if(flag==false)
    {
        document.getElementById('result').innerHTML="No Address found in the "+ state +" state";
    }
   
    else
     {
        var t="";
        t+="<table border='1' id='resultTable'>"+
        "<tr>"+
        "<th>Name</th><th>DoorNumber</th><th>Street</th><th>City</th><th>State</th><th>Country</th>"
        +"</tr>";
        t+="<tr><td>"+
        addArr[index].name+"</td>"+"<td>"
        +addArr[index].doorNumber+"</td>"+"<td>"
            +addArr[index].streetName+"</td>"+"<td>"
                +addArr[index].city+"</td>"+"<td>"
                    +addArr[index].state+"</td>"+"<td>"
                        +addArr[index].country+
        
        "</td></tr>";
        t+="</table>";
    
        document.getElementById('result').innerHTML=t;
    
    }
}
