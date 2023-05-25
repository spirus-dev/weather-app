async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=47417bfd04c74421b8c40607212411&q=${city}&aqi=no`
  );
  const responseData = await response.json();
  return responseData;
}

const form = document.querySelector("#inputForm");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  closeCard();
  const locationInput = document.querySelector("#location");
  city=locationInput.value;
  locationInput.value='';
  const data = await getWeather(city);
  console.log(data);
  const cardHeading=document.querySelector('.cardHeading');
  cardHeading.textContent=data.location.name;
  const weatherImage=document.querySelector('#weatherImage');
  weatherImage.src=`https:${data.current.condition.icon}`.replace('64x64','128x128');
  const condition=document.querySelector('#condition');
  condition.textContent=`${data.current.condition.text}`;
  const temperature=document.querySelector('#temperature');
  temperature.textContent=`${data.current.temp_c} °C`;
  const wind=document.querySelector('#wind');
  wind.textContent=`${data.current.wind_kph} Kph`;
  const card=document.querySelector('.card');
  card.style.visibility='visible';
}

const cardClose=document.querySelector('.cardClose');
cardClose.addEventListener('click',closeCard);

function closeCard(event){
    const card=document.querySelector('.card');
    card.style.visibility='hidden';
}
