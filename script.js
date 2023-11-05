const body = document.getElementById("body");
const text = document.getElementById("text");
const author = document.getElementById("author");
const btnNext = document.getElementById("new-quote");

async function fetchData() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();

  text.innerText = data?.content;
  author.innerText = data?.author;
}

function nextQuote() {
  btnNext.innerText = "Wait...";

  setTimeout(() => {
    fetchData()
      .then(() => {
        btnNext.innerText = "Next Quote";

        document.body.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, 2000);
}

window.addEventListener("DOMContentLoaded", function () {
  fetchData()
    .then(() => {
      document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    })
    .catch((err) => {
      alert(err.message);
    });
});
