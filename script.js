const button = document.querySelector(".recipe .input #btn")
const title = document.querySelector(".recipe .ing #title")
const ing = document.querySelector(".recipe .ing #ingri")
const inst = document.querySelector(".recipe .ing #instructions")
button.addEventListener('click', function(){
    const input = document.querySelector(".recipe .input #inp").value;
    axios.get(`https://api.api-ninjas.com/v1/recipe?query=${input}`, {
    headers: { 'X-Api-Key': 'GN1asSXdZR8vkunHj5oY/w==4buPWNXSEHu2C2eu' }
})
.then(function (response) {
  title.textContent = `Title: ` + response.data[0].title;
  ing.textContent = `Ingredients: : ` + response.data[0].ingredients;
  inst.textContent = `instructions: ` + response.data[0].instructions;
  console.log(response.data[0].ingredients);
})
.catch(function (error) {
  // handle error
  title.textContent = "Error!";
  ing.textContent = "Error!";
  inst.textContent = "Error!";
})
})