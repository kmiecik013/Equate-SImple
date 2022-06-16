function creatineClearance(sex, age, weight, creatine) {
 
  value = (((140 - age)* weight)/(72*creatine));



  if (sex === "female") {
    return "Your Creatine Clearance value is " + Math.round(value*0.85*100)/100 ;  
  }

  else if (sex === "male") {

    return "Your Creatine Clearance value is " + Math.round(value*100)/100; 
}

  else if (sex !== "male" || "female") {
    return "All genders are welcome! but i still need to figure out your creatine "
  }
}

console.log(creatineClearance("male", 40, 60, 0.9))
console.log(creatineClearance("female", 40, 60, 0.9))
console.log(creatineClearance("none", 40, 60, 0.9))