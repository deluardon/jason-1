// https://jsonplaceholder.typicode.com/users

function lodData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => add(data))
}
function add(user){
    const ul=document.getElementById("users");
    for(const users of user){
        const li=document.createElement("li");
        li.innerText=users.name;
        ul.appendChild(li);
    }
}


