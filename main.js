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

let buttonEl = document.getElementById("switchOnOff");
buttonEl.style.backgroundColor = "violet";
buttonEl.style.height = "40px";
buttonEl.style.width = "120px";
buttonEl.style.borderRadius = "10px";
buttonEl.style.border = "none";
buttonEl.style.color = "white";

//voglio che al click l'immagine cambi e che da spenta si accenda

//uso una variabile let (che si modifica ad ogni evento)che mi dice se la lampadina è accesa o spenta, all'inizio è spenta quindi la tengo su false
let lampOn = false;

//aggiungo l'evento al click, quindi che se si schiaccia il bottone la lampadina si deve accendere tramite la funzione
buttonEl.addEventListener(
  "click",
  function accendiLampadina(accensione, spegnimento) {
    const imgElOff = document.getElementById("off");
    if (lampOn) {
      //mi seleziono l'immagine della lampadina spenta
      imgElOff.src = "./img/spenta.png";
      //qui gli dico che se la lampadina è spenta è false
      lampOn = false;

      console.log("hai spento la lampadina");
    }
    //invece se è accesa è true e cambia l'immagine da spenta ad accesa
    else {
      imgElOff.src = "./img/accesa.png";
      lampOn = true;

      console.log("hai acceso la lampadina");
    }
  }
);

//Uso un'altra funzione per il cambio del testo al click del button da accendi a spegni e viceversa

//prendo il button e gli applico la dot notation .onclick
//scrivo la funzione
buttonEl.onclick = function switchOnOff() {
  //se il button è uguale a ACCENDI
  if (buttonEl.innerText === "ACCENDI") {
    //allora mi cambi il testo al click in SPEGNI
    buttonEl.innerText = "SPEGNI";
  }
  // se invece il button è uguale a SPEGNI
  else if (buttonEl.innerText === "SPEGNI") {
    // allora mi cambi il testo in accendi al click
    buttonEl.innerText = "ACCENDI";
  }
};
