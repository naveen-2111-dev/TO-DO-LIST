document.addEventListener("DOMContentLoaded", () => {
  var EventAdder = document.querySelector(".TaskAdder");
  var InputValue;

  function setmyLocalData(value) {
    let values = JSON.parse(localStorage.getItem("input")) || [];
    values.unshift(value);
    localStorage.setItem("input", JSON.stringify(values));
  }

function ContentRender(localInput, inputValue) {
  const message = document.createElement("div");
  message.setAttribute("class", "messages");
  const data = document.createElement("div");
  data.setAttribute("class", "data");
  data.innerHTML = localInput;
  const deleted = document.createElement("button");
  deleted.setAttribute("class", "delete");
  deleted.innerHTML = "&times";

  deleted.addEventListener("click", () => {
    message.remove();

    let values = JSON.parse(localStorage.getItem("input")) || [];
    const index = values.findIndex((msg) => msg === inputValue);

    if (index !== -1) {
      let del = values.splice(index, 1);
      localStorage.setItem("input", JSON.stringify(values));
    }
  });

  message.appendChild(data);
  message.appendChild(deleted);
  const mainparent = document.querySelector(".listofdata");
  mainparent.appendChild(message);
}


  EventAdder.addEventListener("click", () => {
    InputValue = document.querySelector(".prompt").value;

    if (InputValue) {
      setmyLocalData(InputValue);
      renderAllStoredData();
    } else {
      alert("Fill the input field");
    }
  });

  function renderAllStoredData() {
    const localDataArray = JSON.parse(localStorage.getItem("input")) || [];
    localDataArray.forEach((data) => {
      ContentRender(data, data);
    });
  }

  renderAllStoredData();
});