

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => showData(json))
  .catch(err => console.error(err)); 

  
function showData(data){

    let body = '';
    data.forEach(element => {
        body +='<tr><td>'+element.id+'</td><td>'+element.name+'</td><td>'+element.email+'</td><td>'+element.phone+'</td></tr>'
    });

    document.getElementById('dobyTable').innerHTML = body;
}  
