fetch("data.json")
.then(reponse => reponse.json())
.then(data => showInfo(data));

function showInfo(data) {
  console.log(data.day);
}
