
function update(){
    title = document.getElementById("title").value;
    desc = document.getElementById("comment").value;
    if(localStorage.getItem('itemsJson') == null){
        itemsJsonarray = [];
        itemsJsonarray.push([title,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonarray));
    }
    else{
        itemsJsonarrayStr = localStorage.getItem('itemsJson');
        itemsJsonarray = JSON.parse(itemsJsonarrayStr);
        itemsJsonarray.push([title,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonarray));


    }   
        let tablebody = document.getElementById('tablebody');
        let str = "";
        itemsJsonarray.forEach((element,index) => {
            str += `<tbody id="tablebody">
    
            
            <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]} </td>
            <td><button class="btn-sm btn btn-primary" onclick="deleted(${index})">Delete</button></td>
            </tr>
            </tbody>`
        });
        tablebody.innerHTML = str;
    
}
additem = document.getElementById("additem");
additem.addEventListener("click",update);
update();
function deleted(item){
    // itemsJsonarrayStr = localStorage.getItem('itemsJson');
    // itemsJsonarray = JSON.parse(itemsJsonarrayStr);
    // delete itemsJsonarray[item];
    // update();
    console.log("delete");
}

