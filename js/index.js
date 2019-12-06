let btncalculate=document.getElementById("btncal");

function calculate(){
  let type=document.getElementById("code").value;
  let quacode=document.getElementById("qualification").value;
  let name=document.getElementById("name").value;
  let number=document.getElementById("num").value;
  let department=document.getElementById("dep").value;
  let hour=document.getElementById("hour").value;
  let ded;
  let salary;
  let net;
  let outnum=document.getElementById("outnum");
  let outname=document.getElementById("outname");
  let outtype=document.getElementById("outtype");
  let outhour=document.getElementById("outhour");
  let outsalary=document.getElementById("outsalary");
  let outded=document.getElementById("outded");
  let outnet=document.getElementById("outnet");



  if(type=="f"||type=="F"){
    if(quacode=="M"||quacode=="m"){
      salary=175*parseFloat(hour)+1500;
    }
    else if(quacode=="B"||quacode=="b"){
      salary=100*parseFloat(hour)+600;
    }
    else{
      alert("Please input vaild qualification code.")
    }
    
  }
  else if(type=="R"||type=="r"){
    if(hour>=160){
      salary=3200+(hour-160)*20;
    }
    else{
      salary=hour*20;
    }
  }
  else{
    alert("Please input vaild Employee type code.");
  }


  if(salary<=2500){
    ded=19.2;
  }
  else if(salary<=3000){
    ded=(salary-2500)*0.25+19.2;
  }
  else{
    ded=(salary-2500)*0.25+33;
  }

  net=salary-ded;

  outnum.innerHTML=number;
  outname.innerHTML=name;
  outdep.innerHTML=department;
  if(type=="f"||type=="F"){
    outtype.innerHTML="Faculty";
  }
  else if (type=="r"||type=="R"){
    outtype.innerHTML="Regular worker";
  }
  else{
    alert("Please input vaild Employee type code.");
  }

  outhour.innerHTML=hour;
  outsalary.innerHTML=`$${salary}`;
  outded.innerHTML=`$${ded}`;
  outnet.innerHTML=`$${net}`;

  console.log(`Enumber: ${number}`);
  console.log(`Name: ${name}`);
  console.log(`Department: ${department}`);

  if(type=="f"||type=="F"){
    console.log(`Employee type: Faculty`);
  }
  else if(type=="r"||type=="R"){
    console.log(`Employee type: Regular worker`);
  }
  console.log(`Hours: ${hour}`);
  console.log(`Salary: ${salary}`);
  console.log(`Deduction: ${ded}`);
  console.log(`Net pay: ${net}`);

}

btncalculate.addEventListener("click", calculate);
