


var idList=["content"];


var listItem=document.createElement("option");
var itemText=document.createTextNode("content");
listItem.appendChild(itemText);


function addComponent(){
var listItem=document.createElement("option");
var itemText=document.createTextNode(document.getElementById("addId").value);
listItem.appendChild(itemText);
    document.getElementById("componentId").appendChild(listItem);

    idList.push(document.getElementById("addId").value)
}


function select(){
    var component=document.getElementById("component").value;
    alert(component);
    if(component=="Button"){
        selectButtonShow();
    }
    else{
        selectButtonHide();
    }
}

function selectButtonHide(){
    document.getElementById("btnSize").style.display=none; //Display gizlemek icin
display="none";
}
function selectButtonShow(){
    document.getElementById("btnSize").style.display=none; //Display gizlemek icin
display="block";
}