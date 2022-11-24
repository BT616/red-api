https://api.redcircleapi.com/request?api_key=B53C1783A1D9456488669476C6A2783A&search_term=highlighter+pens&category_id=5zja3&type=search

fetch('https://api.redcircleapi.com/request?api_key=B53C1783A1D9456488669476C6A2783A&type=search')
.then((response) =>{
    if(response.ok){
        return response.json();
    }else{
        throw new error('network response error')
    }
})
.then(data=>{
    console.log(data)
})

