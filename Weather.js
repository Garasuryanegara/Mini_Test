const axios = require("axios");

const API_KEY = "0f412bb79efdd192b5297c4dcbd98369";
const city = "Jakarta";
const unit = "metric";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`;

const fetch = async () => {
  try {
    const response = await axios.get(url);
    const result = response.data.list;
    // index of array that should be mapped for get same clock time everyday
    const indexMapped = [3, 11, 19, 27, 35];

    // map the index and return the formatted value
    const mappedResult = indexMapped.map((index) => {
      const weather = result[index];
      const date = new Date(weather.dt_txt.split(" ")[0]);

      //date formatted value
      const day = date.toString().split(" ")[0];
      const month = date.toString().split(" ")[1];
      const formattedDate = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;

      //temperature value
      const temperature = weather.main.temp.toFixed(2);
      return `${formattedDate}: ${temperature}°C`;
    });
    console.log("Weather Forecast:");
    mappedResult.forEach((item) => {
      console.log(item);
    });
  } catch (error) {
    console.log(error);
  }
};

fetch();
