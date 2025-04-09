let user_password;
let correctness;
let check=0;
let password = 'ECE6TH';



document.getElementById("submit").onclick = function () {
    user_password=document.getElementById("UserPassword").value;
    user_password= user_password.toUpperCase();
    console.log(user_password);

    if (user_password === password){
        console.log(password)
        window.location.href = "sem_6_studiMaterials.html";
        console.log("redirect done")
        }
    else{
        alert("Incorrect Password, Try again")
    }

};

