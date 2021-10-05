var recipeId = localStorage.getItem('recipeId');

function getFullInfo(){
    fetch('https://api.spoonacular.com/recipes/'+recipeId+'/information?apiKey=e31330a3bd494aaa8323e1a4293b775d')
    .then(function (res){
      if(res.ok){
        res.json().then(function(data){
          console.log(data)
        })
      }
    })
  }
  getFullInfo()