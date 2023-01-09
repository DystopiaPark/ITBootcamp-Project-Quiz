// QUESTION OBJECTS===============================================================
let pitanje1 = {
  tekst: "Ko je rezirao film '2001: Odiseja u svemiru'?",
  odgovori: [
    "Andrej Tarkovski",
    "Dejvid Linc",
    "Stenli Kjubrik",
    "Martin Skorseze",
  ],
  indeksOdgovora: 2,
};
let pitanje2 = {
  tekst: "U filmu 'Matrix' Neo je anagram za...?",
  odgovori: ["Eon", "Noe", "Eno", "One"],
  indeksOdgovora: 3,
};
let pitanje3 = {
  tekst: "U filmu 'Zero Theorem' Terry Gilliama glavni protagonista ceka sta?",
  odgovori: [
    "Da njegov brat dodje iz Jukatana",
    "Poziv",
    "Godoa",
    "Gospodina Klarksona",
  ],
  indeksOdgovora: 1,
};
let pitanje4 = {
  tekst: "Glava koje zivotinje se nalazi na krevetu u sceni filma 'Kum'?",
  odgovori: ["Pacova", "Kovrdzuljka", "Konja", "Psa"],
  indeksOdgovora: 2,
};
let pitanje5 = {
  tekst: "Ko glumi glavnu ulogu u filmu 'Bicentennial Man'?",
  odgovori: ["Bred Pit", "Robin Vilijams", "Sem Nil", "Patrik Stjuart"],
  indeksOdgovora: 1,
};
let pitanje6 = {
  tekst: "Ko glumi paraplegicara u filmu 'Gattaca'?",
  odgovori: ["Dzud Lov", "Robert Duval", "Ben Aflek", "Met Dejmon"],
  indeksOdgovora: 0,
};
let pitanje7 = {
  tekst: "Film Teri Gilijama nosi naziv 'Imaginarijum doktora...'?",
  odgovori: ["Strejndza", "Hausa", "Noa", "Parnasusa"],
  indeksOdgovora: 3,
};
let pitanje8 = {
  tekst:
    "U filmu 'The Core' naucnici pokusavaju da pokrenu zemljino jezgro pomocu?",
  odgovori: [
    "Radijacije",
    "Lasera",
    "Nuklearnih bombi",
    "Komete koja juri ka zemlji",
  ],
  indeksOdgovora: 2,
};
let pitanje9 = {
  tekst: "Ko je napisao muzicku temu za film 'Noc vestica'?",
  odgovori: [
    "Hans Zimerman",
    "Dzon Karpenter",
    "Angelo Badalamenti",
    "Petar Gabrijel",
  ],
  indeksOdgovora: 1,
};
let pitanje10 = {
  tekst: "Radnja kog filma se pretezno desava u vozu?",
  odgovori: ["Vozac", "Trka zivota", "Ledolomac", "Transporter"],
  indeksOdgovora: 2,
};
// CREATE AND SHUFFLE ARRAY=========================================================
let nizFilm = [
  pitanje1,
  pitanje2,
  pitanje3,
  pitanje4,
  pitanje5,
  pitanje6,
  pitanje7,
  pitanje8,
  pitanje9,
  pitanje10,
];

var rezultatiSection = document.getElementById("rezultati-section");

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

shuffle(nizFilm);

let kvizFunkcija = (niz) => {
  let quizForm = document.getElementById("quiz-form");
  let n = 4;
  for (let j = n; j >= 0; j--) {
    let div = document.createElement("div");
    let paragraph = document.createElement("p");
    quizForm.prepend(div);
    div.appendChild(paragraph);
    paragraph.textContent = `${j + 1}. ${niz[j].tekst}`;
    for (let i = 0; i < pitanje1.odgovori.length; i++) {
      let span = document.createElement("span");
      let inputCreation = document.createElement("input");
      let radioParagraph = document.createElement("p");
      inputCreation.name = `answers${j + 1}`;
      inputCreation.type = "radio";
      inputCreation.value = niz[j].odgovori[i];
      if (i == 0) {
        inputCreation.checked = true;
      } else {
        inputCreation.checked = false;
      }
      span.textContent = niz[j].odgovori[i];
      div.appendChild(radioParagraph);
      radioParagraph.appendChild(inputCreation);
      radioParagraph.appendChild(span);
    }
  }
};
kvizFunkcija(nizFilm);

// POSALJI BTN=========================================================================

let posaljiBtn = document.getElementById("posalji-btn");
posaljiBtn.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    let inputRadios = document.getElementsByName(`answers${i + 1}`);
    for (let j = 0; j < 4; j++)
      if (inputRadios[j].checked) {
        if (j == nizFilm[i].indeksOdgovora) {
          let tacnoParagraf = document.createElement("p");
          tacnoParagraf.style.color = `green`;

          tacnoParagraf.textContent = `Tačno ste odgovorili na ${
            i + 1
          }. pitanje`;
          rezultatiSection.appendChild(tacnoParagraf);
        } else {
          let netacnoParagraf = document.createElement("p");
          netacnoParagraf.style.color = `red`;
          netacnoParagraf.textContent = `Netačno ste odgovorili na ${
            i + 1
          }. pitanje`;
          rezultatiSection.appendChild(netacnoParagraf);
        }
      }
  }
  let allInputRadios = document.querySelectorAll("input");
  for (let z = 0; z < allInputRadios.length; z++) {
    allInputRadios[z].disabled = true;
  }
  window.scrollTo(0, document.body.scrollHeight);
  posaljiBtn.style.display = "none";
});

// RESET BTN=======================================================================

let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
  location.reload();
  window.scrollTo(0, 0);
});
