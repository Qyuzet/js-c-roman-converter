const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  let remaining = num;

  for (let { value, numeral } of romanNumerals) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
};

const convertNumber = () => {
  const num = parseInt(numberInput.value);

  if (!numberInput.value) {
    output.textContent = "Please enter a valid number";
    return;
  }

  if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = convertToRoman(num);
};

convertBtn.addEventListener("click", convertNumber);
numberInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    convertNumber();
  }
});
