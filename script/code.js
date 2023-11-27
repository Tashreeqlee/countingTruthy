let booleanArray = [true, true, true, false, true, true, false];
let trueCount = booleanArray.filter(Boolean).length;

document.getElementById("trueCount").textContent = trueCount;