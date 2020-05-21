var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

//trigering Action Fetch api

button.addEventListener('click',function(){
fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0f91ec65ce9099b9b43a35a9f89f6f26')
.then(response => response.json())
.then(data => {

  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0]['description'];
  

name.innerHTML = nameValue;
temp.innerHTML = tempValue;
desc.innerHTML = descValue;

})

.catch(err => alert("Wrong city name!"))
})


