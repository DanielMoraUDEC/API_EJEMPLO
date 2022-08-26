
function search(){

    let name = document.getElementById("name").value;
    fetch('https://pokeapi.co/api/v2/pokemon/'+name)
    .then(response => response.json())
    .then(json => showData(json))
    .catch(err => console.error(err)); 
}


function showData(data){
    let body = '';
    console.log(data);
    body +='<tr><td>'+data.id+'</td><td>'+data.name+'</td><td><ul><li>'+ data.moves[0].move.name+'</li><li>'+data.moves[1].move.name +'</li><li>'+data.moves[2].move.name +'</li></ul></td><td>'+data.types[0].type.name+'</td><td><img src="'+data.sprites.front_default+'"</img></td></tr>';
    document.getElementById('dobyTable').innerHTML = body;
}  

function init(){
    fetch('    https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    .then(response => response.json())
    .then(json => showDatainit(json))
    .catch(err => console.error(err)); 
}

function showDatainit(data){
    let body = '';
    data.results.forEach((element, index) => {
        body +='<tr><td>'+(index+1)+'</td><td>'+element.name+'</td></tr>';
    });

    document.getElementById('dobyTable').innerHTML = body;
}  

init();