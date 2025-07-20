/* 
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...

Per fare questo bonus potremmo aver bisogno di del metodo string.includes() 😉

*/

//voglio che al click si accenda la lampadina

// mi seleziono il button #switchOnOff

const buttonEl = document.getElementById("switchOnOff");
buttonEl.style.backgroundColor = "violet";
buttonEl.style.height = "40px";
buttonEl.style.width = "120px";
buttonEl.style.borderRadius = "10px";
buttonEl.style.border = "none";
buttonEl.style.color = "white";

//voglio che al click l'immagine cambi e che da spenta si accenda
// prendo il bottone e gli dico tramite la dot notation .addEventListener che al click deve sostitutire l'immagine da spenta.png (che è quella presente in pagina html e che ho ripreso nella variabile all'interno della funzione per selezionarmela) ad accesa.png

buttonEl.addEventListener("click", function accendiLampadina(accensione) {
  const imgElOff = document.getElementById("off");
  imgElOff.src = "./img/accesa.png";
});
