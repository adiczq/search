const search = document.querySelector(".search");
const li = document.querySelectorAll("li");

// const searchin = (e) => {
//   const text = e.target.value.toLowerCase();
//   console.log(text);

//   li.forEach((el) => {
//     const task = el.textContent.toLowerCase();

//     if (task.indexOf(text) !== -1) {
//       el.style.display = "block";
//     } else {
//       el.style.display = "none";
//     }
//   });
// };

const searchin = () => {
  li.forEach((el) => {
    const match = new RegExp(search.value, "i").test(el.textContent);
    if (!match) {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  });
};

search.addEventListener("keyup", searchin);
