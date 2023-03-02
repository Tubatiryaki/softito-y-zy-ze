function addComponent(){

    var component= document.getElementById("component").value;
    let result;

    switch(component){
        case "Button":
            result=addButton();
            break;

        case "Div":
            result=addDiv();

            break;    
    }


   
    
    document.getElementById("content").innerHTML+=result;
    
    }

    function addButton(){
        var buttonColor=document.getElementById("btnColor").value;
        var textColor=document.getElementById("textColor").value;
        var buttonSize=document.getElementById("btnSize").value;
        var buttonText=document.getElementById("Text").value;
        var addClass=document.getElementById("addClass").value;
        
        var button="<button class='btn btn-"+buttonColor+" "+addClass+" "+buttonSize+" text-"+textColor+"'>"+buttonText+"</button>"+buttonText+"</button>";
        return button;
    }

    function addDiv(){
var bgColor=document.getElementById("Color").value;
var textColor=document.getElementById("textColor").value;
var Text=document.getElementById("Text").value;
var addClass=document.getElementById("addClass").value;

var div="<div class='bg-"+bgColor+" "+addClass+" text-"+textColor+"'>"+Text+"</div>";
return div;
    }