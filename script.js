https://api.redcircleapi.com/request?api_key=B53C1783A1D9456488669476C6A2783A&search_term=highlighter+pens&category_id=5zja3&type=search

var searchForm= document.getElementById('search-form')
var searchInput= document.getElementById('search-input')




searchForm.addEventListener('submit',function(event){
    event.preventDefault();

var search = searchInput.value.trim();

var apiURL = `https://api.redcircleapi.com/request?api_key=B53C1783A1D9456488669476C6A2783A&search_term=${search}&type=search`
fetch(apiURL).then(function(response){
    return response.json();
}).then(function(data){
    if(data.length===0){
        alert('product not found')
    }else{
       var item = data.search_results[0].product
       var title = data.search_results[0].product.title.trim()
       var getAll = data.search_results
       var getPrimary= data.search_results[0].offers.primary.price

       var currentItemTitle = document.createElement('h1');
       var currentContainer = document.getElementById('current')
       currentItemTitle.textContent= `Search: ${title} $${getPrimary}`
       currentContainer.appendChild(currentItemTitle)

   for(let i=0; i<getAll.length; i++){
  var allResults =document.createElement('p');
  allResults.textContent= `${getAll[i].products}`
  currentContainer.appendChild(allResults);

 

   }

console.log(getAll)
console.log(data)
fetchList(item,title,getAll)
    }
})

searchInput.value="";
current.innerHTML='';
})


