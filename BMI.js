function calculate_bmi(weight, height) {
  var bmi = weight / (height * height);
  alert (bmi)
}

// دالة لتفسير قيمة BMI
function interpret_bmi(bmi) {
  if (bmi < 18.5) {
    alert ( "نحيف (Underweight)")
  } else if (bmi >= 18.5 && bmi < 25) {
    alert ("وزن طبيعي (Normal weight)")
  } else if (bmi >= 25 && bmi < 30) {
    alert ("زيادة في الوزن (Overweight)")
  } else {
    alert ( "سمنة (Obese)")
  }
}

// طلب إدخال قيمة الوزن والطول من المستخدم
var weight = parseFloat(prompt("الرجاء إدخال قيمة الوزن بالكيلوجرام:"));
var height = parseFloat(prompt("الرجاء إدخال قيمة الطول بالمتر:"));

// حساب قيمة BMI
var bmi = calculate_bmi(weight, height);

// تفسير قيمة BMI
var interpretation = interpret_bmi(bmi);
