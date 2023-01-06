// QUESTION OBJECTS===============================================================
let pitanje1 = {
  tekst: "Ko je napisao knjigu 'Majstor i Margarita'?",
  odgovori: [
    "Fjodor Dostojevski",
    "Franc Kafka",
    "Mihail Bulgakov",
    "Anton Cehov",
  ],
  indeksOdgovora: 2,
};
let pitanje2 = {
  tekst: "Cime se bavi protagonista knjige 'Bele Noci' Dostojevskog?",
  odgovori: ["Casovnicar", "Cistac snega", "Bastovan", "Drzavni cinovnik"],
  indeksOdgovora: 3,
};
let pitanje3 = {
  tekst: "Ko je napisao kratku pricu 'Oni sto odlaze iz Omelasa'?",
  odgovori: [
    "Emil Bronte",
    "Ursula K. Le Guin",
    "Virdzinija Vulf",
    "Dzejn Ostin",
  ],
  indeksOdgovora: 1,
};
let pitanje4 = {
  tekst:
    "'Cudesno putovanje Nilsa Holgersona kroz Svedsku' je delo koje spisateljice ?",
  odgovori: ["Dz. K. Rouling", "Margaret Atvud", "Selma Lagerlef", "Meri Seli"],
  indeksOdgovora: 2,
};
let pitanje5 = {
  tekst: "Koliko godina samoce je u delu Gabrijela Garsije Markesa'?",
  odgovori: ["23", "100", "101", "513"],
  indeksOdgovora: 1,
};
let pitanje6 = {
  tekst: "Koliko krugova pakla ima u Danteovoj 'Bozanstvenoj Komediji'?",
  odgovori: ["9", "3", "666", "13"],
  indeksOdgovora: 0,
};
let pitanje7 = {
  tekst:
    "Koji broj igra znacajnu ulogu u delu 'Autostoperski vodic kroz galaksiju' Daglasa Adamsa?",
  odgovori: ["12", "23", "221", "42"],
  indeksOdgovora: 3,
};
let pitanje8 = {
  tekst: "U kojoj ulici zivi Serlok Holms?",
  odgovori: ["Parklend strit", "Dedend strit", "Bejker strit", "Koast strit"],
  indeksOdgovora: 2,
};
let pitanje9 = {
  tekst: "Kakva noc se pominje u Geteovom 'Faustu'?",
  odgovori: ["Strasna noc", "Valpurgijska noc", "Vatrena noc", "Noc smiraja"],
  indeksOdgovora: 1,
};
let pitanje10 = {
  tekst: "Sta postaje Sidarta na kraju istoimenog romana Hermana Hesea?",
  odgovori: ["Biznismen", "Programer", "Splavar", "Portir"],
  indeksOdgovora: 2,
};
// CREATE AND SHUFFLE ARRAY=========================================================
let nizKnjizevnost = [
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
shuffle(nizKnjizevnost);
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
kvizFunkcija(nizKnjizevnost);

// POSALJI BTN=========================================================================

let posaljiBtn = document.getElementById("posalji-btn");
posaljiBtn.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    let inputRadios = document.getElementsByName(`answers${i + 1}`);
    for (let j = 0; j < 4; j++)
      if (inputRadios[j].checked) {
        if (j == nizKnjizevnost[i].indeksOdgovora) {
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
});

// RESET BTN=======================================================================

let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
  location.reload();
  window.scrollTo(0, 0);
});
