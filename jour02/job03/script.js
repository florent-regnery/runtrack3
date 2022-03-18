
document.addEventListener('DOMContentLoaded', () => {
  function addone() {

      let compt = document.getElementById("compteur").innerHTML;
      document.getElementById("compteur").innerHTML = ++compt;
  }

  let bouton = document.querySelector('#button')
  bouton.addEventListener("click", (e) => {
      addone()
      console.log(addone)
  })
  }

)