export function check() {
    const checkB = document.querySelector(".BtnF");
    const checkBut = document.querySelector(".InputCheck");
    if (checkBut.checked) {
        checkB.type = "submit";
        checkB.classList.add("checked");
    } else {
        checkB.type = "button";
        checkB.classList.remove("checked");
    }
}
export function checkBtn() {
    const checkB = document.querySelector(".BtnF");
    if (checkB.type == "button") {
        alert("Ознакомтесь с нашими правилами!");
    }
}
