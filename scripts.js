// with Callback
const reportSection = document.getElementById("weather-report");
const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city");

let apiRequest = new XMLHttpRequest();

cityForm.addEventListener("submit", ($event) => {
  $event.preventDefault();
  const chosenCity = cityInput.value;
  apiRequest.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      chosenCity +
      "&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e"
  );
  apiRequest.send();
});

apiRequest.onreadystatechange = () => {
  if (apiRequest.readyState === 4) {
    if (apiRequest.status === 404) {
      return (reportSection.textContent = "Cannot be found!");
    }
    const response = JSON.parse(apiRequest.response);
    reportSection.textContent =
      "The weather in " +
      response.name +
      " is " +
      response.weather[0].main +
      ".";
    reportSection.style.cssText =
      "margin-top:1rem;background-color:pink;font-size:55px;border:2px dashed green;color:white;";
  }
};

/*  with Promises */
// cityForm.addEventListener("submit", ($event) => {
//   $event.preventDefault();
//   const chosenCity = cityInput.value;
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//       chosenCity +
//       "&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e"
//   )
//     .then((response) => {
//       console.log("resolved", response);
//       return response.json();
//     })
//     .then((data) => {
//       reportSection.textContent =
//         "The weather in " + data.name + " is " + data.weather[0].main + ".";
//       reportSection.style.cssText =
//         "margin-top:1rem;background-color:pink;font-size:55px;border:2px dashed green;color:white;";
//     })
//     .catch((err) => {
//       console.log("rejected", err);
//     });
// });

/* with Async Await */

// cityForm.addEventListener("submit", ($event) => {
//   $event.preventDefault();

//   const getTodos = async () => {
//     const chosenCity = cityInput.value;
//     const response = await fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//         chosenCity +
//         "&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e"
//     );
//     if (response === 404) {
//       throw new Error("Ayoo there is something wrong with your code over here");
//     }
//     const data = await response.json();
//     return data;
//   };

//   getTodos()
//     .then((data) => {
//       reportSection.textContent =
//         "The weather in " + data.name + " is " + data.weather[0].main + ".";
//       reportSection.style.cssText =
//         "margin-top:1rem;background-color:pink;font-size:55px;border:2px dashed green;color:white;";
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
