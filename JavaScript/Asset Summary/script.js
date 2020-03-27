var assetArray =[];
var assetTypeCountMaintain ={};
var temp;
var assetTypeArr =[]

class Asset
{
    constructor(assetId,type,supplier,manufacturer,quantity=0) 
    {
        this.assetId=assetId;
        this.type=type;
        this.supplier=supplier;
        this.manufacturer=manufacturer;
        this.quantity=quantity;
      }
}
function addAsset() {

    assetId=document.getElementById("asset_id").value;
    type = document.getElementById("type").value;
    supplier = document.getElementById("supplier").value;
    manufacturer = document.getElementById("manufacturer").value;
    
    newAsset= new Asset(assetId,type,supplier,manufacturer)
    assetArray.push(newAsset);

    //Incrementing Asset
    if(assetTypeCountMaintain[type] == null)
    {
      assetTypeCountMaintain[type] = 1;
   
    }
    else
    {
      assetTypeCountMaintain[type] += 1;
    }

    //Clearing text boxes
    document.getElementById("asset_id").value=" ";
    document.getElementById("type").value=" ";
    document.getElementById("supplier").value=" ";
    document.getElementById("manufacturer").value=" ";

}

function displayAsset() 
{
    assetTypeAr = Object.keys(assetTypeCountMaintain);

    document.getElementById('result').getElementsByTagName('h3')[0].innerHTML='Asset Details';

    temp = "<tr><th>Asset Type</th><th>Quantity</th></tr>";
    
     for(i=0; i < Object.keys(assetTypeCountMaintain).length; i++)
     {
        temp += "<tr><td>"+assetTypeAr[i]+"</td><td>"+
        assetTypeCountMaintain[assetTypeAr[i]]+"</td></tr>"
     }
    
    
     document.getElementById('tab').innerHTML=temp;
     assetArray =[];
     delete  newAsset;
     assetTypeCountMaintain={};
}