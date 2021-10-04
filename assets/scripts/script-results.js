const apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
const apikey = '&apiKey=e31330a3bd494aaa8323e1a4293b775d';

fetch(apiUrl + "apples" + apikey)
  .then(function (res){
    if(res.ok){
      res.json().then( function (data){
        console.log(data)
        //collect data in variables
        //send to function to populate results page
      })
    }else {
      alert('problem occured' + res.statusText)
    }
  })
  .catch(function (error){
    alert('unable to connect')
  })