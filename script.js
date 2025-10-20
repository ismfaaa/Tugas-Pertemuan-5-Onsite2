const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const inputUser = input.value;
    if(inputUser.trim() === ""){
        errorMessage.textContent = "Field tidak boleh kosong";
        input.classList.add("invalid");
        return;
    } else {
        errorMessage.textContent = "";
        input.classList.remove("invalid");
        input.classList.add("valid");
        const newItem = document.createElement("li");
        newItem.textContent = inputUser;
        list.append(newItem);
        input.value = "";
    }
});