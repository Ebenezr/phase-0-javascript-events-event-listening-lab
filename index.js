
const alertEvent=()=> alert("I was clicked");

const addingEventListener =()=>{
  const input = document.getElementById("input");
  return input.addEventListener("click", alertEvent)};

addingEventListener();