function checkSleep() {
  const age = parseInt(document.getElementById("age").value);
  const hours = parseFloat(document.getElementById("sleepHours").value);
  
  if (isNaN(age) || isNaN(hours)) {
  document.getElementById("result").innerText = "⚠️ Please enter both your age and sleep hours.";
  return;
}

  let min = 0, max = 24;

  if (age < 4) { min = 12; max = 15; }
  else if (age <= 5) { min = 10; max = 13; }
  else if (age <= 13) { min = 9; max = 11; }
  else if (age <= 17) { min = 8; max = 10; }
  else if (age <= 64) { min = 7; max = 9; }
  else { min = 7; max = 8; }

  let result = "";
  if (hours < min) result = `😴 Not enough sleeping! Recommended sleeping time is ${min}~${max}.`;
  else if (hours > max) result = `🛌 Oversleeping! Recommended sleeping time is ${min}~${max}.`;
  else result = `✅ Having enough sleep! (Recommended: ${min}~${max})`;

  document.getElementById("result").innerText = result;
}
