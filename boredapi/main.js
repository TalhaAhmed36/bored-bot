const task = document.getElementById('task');
const button = document.getElementById('button');



button.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        task.textContent = "🎯" + " "  + data.activity;
    })
})