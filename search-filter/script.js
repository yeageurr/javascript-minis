const log = console.log;
const dataSet = ["Banana", "Apple", "Avocado", "Jackfruit", "Grapes"];
const theading = ["Student Name", "Age", "Course Program", "Issued Email"];

const formBox = document.getElementById('search');
const inputField = document.getElementById('input');
const wrapper = document.getElementById('box');


function displayData(fruits) {
  wrapper.innerHTML = "";
  for(let item of fruits) { wrapper.innerHTML += `<p class='content'>${item}</p>` };
}

displayData(dataSet);

formBox.addEventListener('submit', function(e) {
  e.preventDefault();
  const keyword = inputField.value.toLowerCase();
  const filteredData = dataSet.filter(function(item) {
    return item.toLowerCase().includes(keyword);
  });

  displayData(filteredData);
})