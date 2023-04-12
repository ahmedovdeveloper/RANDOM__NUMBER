  const minEl = document.getElementById("min");
  const maxEl = document.getElementById("max");

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const geerator = () => {

  const min = Number(minEl.value);
  const max = Number(maxEl.value);

  if (min === "" || max == "") {
    alert("ILTIMOS MIN VA MAX GA QIYMAT KIRITING");
  }

  if (min > max) {
    alert("MIN SONI MAX SONIDAN KICHIK BOLISHI KERE");
  }

  if (min == max) {
    alert("BU SONLA TENG");
  }
  const textConEl = document.querySelector("#placeholder");
  textConEl.textContent = getRandomNumber(min, max);
};

const btn = document.getElementById("generator");
btn.addEventListener("click", geerator);
