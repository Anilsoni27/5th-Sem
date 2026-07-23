console.log(add); // function def will be stored in memory before execution
add(3,4);
function add(a,b){
    console.log(a+b);
}
add(2,4);

// const add =add(a,b) =>{
//     console.log(a+b);
// }
// add(2,4);