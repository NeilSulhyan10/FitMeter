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

function imageUpdate(src){
    let image = document.querySelector("#answer img");
    if(!image){
    image = document.createElement("img");
    image.height = 275;
    image.width = 150;
    document.getElementById("answer").appendChild(image);
    }
    image.src = src;
}

function Calculate() {
    const radios = document.getElementsByName("sex");
    let sex;
    for(const radio of radios){
      if(radio.checked){
          sex = radio.value;
          break;
      }
    }
    if(!sex){
        alert("Please Select Your Gender.");
    }else{
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

    if (result <= 18.49){
        category.textContent = "Underweight";
        imageUpdate("Underweight.png");
    }else if (result > 18.49 && result <= 24.99){ 
        category.textContent = "Normal"; 
        imageUpdate("Normal.png");
    }else if (result > 24.99 && result <= 39.99){ 
        category.textContent = "OverWeight"; 
        imageUpdate("Overweight.png");
    }else if (result > 39.99){ 
        category.textContent = "Obese";
        imageUpdate("Obese.png");
    }
     
    let analyze,diff;
    if(sel1==="KG" && sel2==="Feet"){
    if(result > 24.99){
        analyze = (24.99 * Math.pow(h,2))/10.764;
        diff = w - analyze;
        document.getElementById("analyzeBMI").textContent = `Reduce your weight by ${diff.toFixed(4)} to be in normal BMI category.` ; 
    }else if(result<18.5){
        analyze = (18.5 * Math.pow(h,2))/10.764;
        diff = analyze - w;
        document.getElementById("analyzeBMI").textContent = `Increase your weight by ${diff.toFixed(4)} to be in normal BMI category.` ; 
    }else{
        document.getElementById("analyzeBMI").textContent = ``;
    } 
  }else if(sel1==="Pound" && sel2==="Inch"){
    if(result > 24.99){
        analyze = (24.99 * Math.pow(h,2))/703;
        diff = w - analyze;
        document.getElementById("analyzeBMI").textContent = `Reduce your weight by ${diff.toFixed(4)} to be in normal BMI category.` ; 
    }else if(result<18.5){
        analyze = (18.5 * Math.pow(h,2))/703;
        diff = analyze - w;
        document.getElementById("analyzeBMI").textContent = `Increase your weight by ${diff.toFixed(4)} to be in normal BMI category.` ;
    }else{
        document.getElementById("analyzeBMI").textContent = ``; 
  }
  }
  if(sex === "Male"){
    if (result <= 18.49){
        imageUpdate("Underweight.png");
    }else if (result > 18.49 && result <= 24.99){ 
        imageUpdate("Normal.png");
    }else if (result > 24.99 && result <= 39.99){ 
        imageUpdate("Overweight.png");
    }else if (result > 39.99){ 
        imageUpdate("Obese.png");
    }
  }else if(sex === "Female"){
    if (result <= 18.49){
        imageUpdate("Underweightf.png");
    }else if (result > 18.49 && result <= 24.99){ 
        imageUpdate("Normalf.png");
    }else if (result > 24.99 && result <= 39.99){ 
        imageUpdate("Overweightf.png");
    }else if (result > 39.99){ 
        imageUpdate("Obesef.png");
    }
  }  
 }
}
