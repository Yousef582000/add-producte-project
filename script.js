var proudectname = document.getElementById('p-name');
var proudectprice = document.getElementById('p-price');
var proudectcategory = document.getElementById('p-category');
var proudectdec = document.getElementById('p-dec');
var mainbtn =document.getElementById('mainbtn');

var arrcontainer;
if (localStorage.getItem("product dat") == null) {
    arrcontainer = [];
} else {
    arrcontainer = JSON.parse(localStorage.getItem("product dat"));
    display();
}

function addproudect() {

    if (checkinput() == true) {
        var proudect = {
            name: proudectname.value,
            price: proudectprice.value,
            category: proudectcategory.value,
            dec: proudectdec.value
        }
        arrcontainer.push(proudect);
        localStorage.setItem("product dat", JSON.stringify(arrcontainer));
        display();
        clear();

    } else {
        window.alert("plese enter the values ");
    }


}

function clear() {
    proudectname.value = "";
    proudectprice.value = "";
    proudectcategory.value = "";
    proudectdec.value = "";

     mainbtn.innerHTML='add producte';
}


function display() {
    var cartona = ``;
    for (var i = 0; i < arrcontainer.length; i++)

    {
        cartona += `<tr><td>${i+1}</td>  <td>${arrcontainer[i].name}</td> 
     <td>${arrcontainer[i].price}</td>  
     <td>${arrcontainer[i].category}</td> 
       <td>${arrcontainer[i].dec}</td>  
       <td><button onclick="changeformtoupdate(${i})" class="btn-outline-warning w-100">update</button> </td>
       <td> <button onclick="deleteprodcut(${i});" class="btn-outline-danger w-100">delete</button></td>
       
       </tr>`
    }
    document.getElementById('t-body').innerHTML = cartona;


}

function checkinput() {
    if (proudectname.value != "" && proudectprice.value != "" && proudectcategory != "" && proudectdec != "") {
        return true;
    } else {
        return false;
    }

}

function deleteprodcut(index) {
    arrcontainer.splice(index, 1);

    localStorage.setItem("product dat", JSON.stringify(arrcontainer));
    display();
}

 
function searchproduct(searchTerm){
    var cartona=`` ;
    for(var i=0 ; i<arrcontainer.length ;i++)
{
    if(arrcontainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true)
    {
       
        cartona += `<tr><td>${i+1}</td><td>${arrcontainer[i].name}</td> 
     <td>${arrcontainer[i].price}</td>  
     <td>${arrcontainer[i].category}</td> 
       <td>${arrcontainer[i].dec}</td>  
       <td><button class="btn-outline-warning w-100">update</button> </td>
       <td> <button onclick="deleteprodcut(${i});" class="btn-outline-danger w-100">delete</button></td>
       
       </tr>`
    }
    else
    {
        alert("prouducte not found")
    }


}
document.getElementById('t-body').innerHTML = cartona;
}
function changeformtoupdate(index){
    proudectname.value=arrcontainer[index].name;
     proudectprice.value=arrcontainer[index].price;
     proudectcategory.value=arrcontainer[index].category;
     proudectdec.value =arrcontainer[index].dec;
     deleteprodcut(index);
     mainbtn.innerHTML='update';

     
}
