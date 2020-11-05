const celsiusToFahrenheit = (degree) => {
  return ((9 / 5) * degree + 32).toFixed(1);
};

const tableBody = document.querySelector("table tbody");

for (let i = 1; i <= 100; i++) {
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${i}</td>
    <td>${celsiusToFahrenheit(i)}</td>
  `;
  tableBody.appendChild(tr);
}
