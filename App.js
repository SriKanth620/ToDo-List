const form = document.querySelector('.form1');
const input = document.querySelector('.initial');
const container = document.querySelector('.container');
const main = document.querySelector('main');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addtextcontent();
})
function addtextcontent(){
    let val= input.value; 
    if(val =="")
    {
        alert("First fill the task");
    }
    else{
    const container = document.createElement("div");
    container.classList.add("container");
    main.append(container);  
    const box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
    const input1 = document.createElement("input");
    input1.classList.add("taskinput");
    input1.type= "text";
    input1.value= val;
    input1.setAttribute("readonly", "readonly");
    box.append(input1);
    const button1 = document.createElement("button");
    button1.classList.add("done");
    button1.innerText= "DONE";
    const button2 = document.createElement("button");
    button2.classList.add("edit");
    button2.innerText= "EDIT";
    const button3 = document.createElement("button");
    button3.classList.add("delete");
    button3.innerText= "DELETE";
    box.append(button1);
    box.append(button2);
    box.append(button3);
    // const delete = document.querySelector('.delete');
    button3.addEventListener("click", deletetext);
    function deletetext(){
        container.remove(box);
    }
    button2.addEventListener("click",edittext);
    function edittext(){
        input1.removeAttribute("readonly");
    }
    button1.addEventListener("click", donetext)
    function donetext(){
        input1.classList.add("strike");
    }
}
}

   