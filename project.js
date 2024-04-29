function weightchanger(){
    let x,sel;
    x=parseFloat(document.getElementById("weight").value);
    sel=document.getElementById("selector1").value;    
    if(sel==="Pound"){
        x*=2.205;
    }else{
        x/=2.205;    
    }
    document.getElementById("weight").value=x.toFixed(2);
}

function heightchanger(){
    let x,sel;
    x=parseFloat(document.getElementById("height").value);
    sel=document.getElementById("selector2").value;
    if(sel==="Inch"){
        x*=12;
    }else{
        x/=12;
    }
    document.getElementById("height").value=x.toFixed(2);
}

function Calculate() {
    let w = parseFloat(document.getElementById("weight").value);
    let h = parseFloat(document.getElementById("height").value);

    if (isNaN(w) || isNaN(h) || h === 0) {
        document.getElementById("result1").textContent = "Invalid input";
        return;
    }

    let sel1,sel2,result;
    sel1=document.getElementById("selector1").value;
    sel2=document.getElementById("selector2").value;


    if(sel1==="KG" && sel2==="Feet"){
     result = (w / Math.pow(h, 2)*10.764);
    document.getElementById("result1").innerHTML = result.toFixed(2);
    }else if(sel1==="Pound" && sel2==="Inch"){
        result = (w / Math.pow(h, 2)*703);
        document.getElementById("result1").innerHTML = result.toFixed(2);
    }else if(sel1==="Pound" && sel2==="Feet"){
        alert("Please select Pound With Inch");
    }else if(sel1==="KG" && sel2==="Inch"){
        alert("Please select KG with Feet.");
    }

    let categoryElement = document.getElementById("category");
    if (result <= 18.4){
        categoryElement.textContent = "Underweight";
    }else if (result > 18.4 && result <= 24.99){ 
        categoryElement.textContent = "Normal"; 
    }else if (result > 24.99 && result <= 39.99){ 
        categoryElement.textContent = "OverWeight"; 
    }else if (result > 39.99){ 
        categoryElement.textContent = "Obese";
    }
}
