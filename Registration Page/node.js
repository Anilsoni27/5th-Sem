const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const handleclick = () =>{
    console.log("name");
    console.log("email");
    console.log("password");
    console.log("btn");
}
btn.addEventListener("click",handleclick);
