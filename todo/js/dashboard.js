window.addEventListener("DOMContentLoaded", ()=>{
    localStrge = localStorage.getItem('session')
    let bouton = document.querySelector("button");
    let userConnect = document.querySelector(".userConnect")
    localStrge = JSON.parse(localStrge)
    userConnect.textContent = localStrge.name

    bouton.addEventListener("click", (e)=>{
        let input = document.querySelector("input");
        if (!input.value) {
            input.focus()
        }else{
            const data = {nom: input.value}
            const envoiTask = fetch("http://localhost:4000/addTask", {
                method:"POST",
                body: JSON.stringify(data)
            })
            .then(res =>res.json())
            .then(sucess => console.log(sucess))
            
            console.log(envoiTask);
        }
    })
})