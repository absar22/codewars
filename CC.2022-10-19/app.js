// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  //   return "";
    let value = weight / height **2
    if(value <= 18.5){
      return 'Underweight'
    }else if (value <= 25.0){
      return 'Normal'
    }else if (value <= 30.0){
      return 'Overweight'
    }else if (value > 30){
      return 'Obese'
    }
    return value
    
    
  }
  
  console.log(bmi(12,34))