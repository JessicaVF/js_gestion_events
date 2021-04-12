"strict use";
// au clic dans #wrapper (n'importe où), dupliquer le <span> (avec la méthode cloneNode() par exemple)
let wrapper = document.getElementById("wrapper");
let toClone = document.getElementsByTagName("span");
wrapper.addEventListener("click", function () {
  let cloned = toClone[0].cloneNode(true);
  wrapper.appendChild(cloned);
});

// au clic sur le lien #inner, ajouter dans la console le texte "Le lien a été cliqué", mais sans dupliquer le span
let inner = document.getElementById("inner");
inner.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("Le lien a été cliqué 	(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄");
});
//lorsqu'on tape quelque chose dans le champ email, afficher le contenu du champ #email dans #form-result (pendant que l'on tape ou lorsqu'on sort du champ)
let email = document.getElementById("email");
let formResult = document.getElementById("form-result");
email.oninput = function (event) {
  event.preventDefault();
  formResult.innerText = email.value;
};
