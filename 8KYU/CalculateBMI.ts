// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

export function bmi(weight: number, height: number): string {
  const massIndex: number = weight / height ** 2;

  if (massIndex <= 18.5) {
      return 'Underweight';
  } else if (massIndex <= 25.0) {
      return 'Normal';
  } else if (massIndex <= 30.0) {
      return 'Overweight';
  } else {
      return 'Obese';
  }
}
//so we have our inputs as numbers and we supposed to find the mass index my dividing the weight by the hight squared