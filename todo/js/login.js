const login = document.querySelector("form");

login.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const data = {
    email: email,
    password: password,
  };
  console.log(data);

  let messageErreur = document.querySelector(".erreur-login");
  const envoiServer = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {   
        console.log(res);
        if (res === "Email ou mot de passe incorrect") {
            messageErreur.textContent = res.message;
            messageErreur.style.color = "red";
        }
        messageErreur.textContent = res.message;
        messageErreur.style.color = "green";
        let {password, ...rest} = res

        setTimeout(()=>{
          localStorage.setItem("session", JSON.stringify(rest))
            window.location.href="./dashboard.html"
        },2000) 
      
    })
    .catch((error) => console.log(error));
});
