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

       var currentItemTitle = document.createElement('h1');
       var currentContainer = document.getElementById('current')
       currentItemTitle.textContent= `Search: ${title} `
       currentContainer.appendChild(currentItemTitle)

       console.log(item)
console.log(title)
console.log(getAll)
    }
})


})


