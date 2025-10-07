function oddOrEven() {
  const input = document.getElementById("input-odd-even");
  const inputValue = input.value;
  let msgError = document.querySelector(".error");
  let res = document.querySelector(".res");

  if (inputValue == "" || inputValue < 0) {
    msgError.style.display = "block";
    msgError.textContent = "[Error] insira dados válidos";
    msgError.style.color = "red";
    input.style.borderColor = "red";

    setTimeout(() => {
      msgError.style.display = "none";
      input.style.borderColor = "#000000";
    }, 2000);
  } else {
    if (inputValue % 2 == 0) {
      res.style.display = "block";
      res.textContent = `${inputValue} é par`;
    } else {
      res.style.display = "block";
      res.textContent = `${inputValue} é ímpar`;
    }
  }

  input.value = "";
}
