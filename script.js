let grocerys=["Milk","Bread","Eggs"];

function groceryList(){
    document.getElementById("main").innerHTML=grocerys.toString();
}
function Add(){
    grocerys.push(prompt("Enter grocery"));
    groceryList();
}
function Remove(){
    alert("Removing "+grocerys.pop());
    groceryList();
}