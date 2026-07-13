const alertBox = document.getElementById("status-notification");
const updateButton = document.getElementById("update-btn");
function updater(){
alertBox.innerHTML = "<strong>Updated Text!</strong>";
}
updateButton.addEventListener("click",updater);