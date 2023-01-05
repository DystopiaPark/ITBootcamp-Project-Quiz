// QUESTION OBJECTS===============================================================
let pitanje1 = {
  tekst: "Koji je najmanji broj tonova koji mogu saciniti akord'?",
  odgovori: ["11", "5", "3", "2"],
  indeksOdgovora: 2,
};
let pitanje2 = {
  tekst:
    "Koji stepen je povisen za polu ton u lidijskom modusu u odnosu na jonski?",
  odgovori: ["sesti", "drugi", "peti", "cetvrti"],
  indeksOdgovora: 3,
};
let pitanje3 = {
  tekst: "Koliko zica ima klasicna gitara'?",
  odgovori: ["4", "6", "12", "8"],
  indeksOdgovora: 1,
};
let pitanje4 = {
  tekst: "Pesma 'Eleanor Rigby' Bitlsa je pisana u kom muzickom modusu?",
  odgovori: ["Frigijskom", "Eolskom", "Dorijskom", "Lokrijskom"],
  indeksOdgovora: 2,
};
let pitanje5 = {
  tekst: "Koliko Hz je standardizovana A4 nota?",
  odgovori: ["330", "440", "550", "600"],
  indeksOdgovora: 1,
};
let pitanje6 = {
  tekst: "Ko se smatra ocem 'musique concrete' pokreta?",
  odgovori: ["Pjer Safer", "Delia Derbisajr", "Klaus Sulce", "Luidji Rusolo"],
  indeksOdgovora: 0,
};
let pitanje7 = {
  tekst:
    "Koji album je izglasan kao najbolji od 1996 do 2021 od strane posetioca sajta Pitchfork?",
  odgovori: [
    "Radiohead- In Rainbows",
    "Radiohead- Ok Computer",
    "Radiohead- Moon Shaped Pool",
    "Radiohead- Kid A",
  ],
  indeksOdgovora: 3,
};
let pitanje8 = {
  tekst: "Kako se zove gitarista grupe Led Zeppelin?",
  odgovori: ["Angus Jang", "Slash", "Dzimi Pejdz", "Rendi Rouds"],
  indeksOdgovora: 2,
};
let pitanje9 = {
  tekst: "Koji instrument je svirao Nikolo Paganini?",
  odgovori: ["Tarabuku", "Violinu", "Daire", "Bongose"],
  indeksOdgovora: 1,
};
let pitanje10 = {
  tekst: "Kako se zove prvi album benda 'The Strokes'?",
  odgovori: [
    "Is that all?",
    "What else is there?",
    "Is this it?",
    "Who goes there?",
  ],
  indeksOdgovora: 2,
};
// CREATE AND SHUFFLE ARRAY=========================================================
let nizMuzika = [
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

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
shuffle(nizMuzika);
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
kvizFunkcija(nizMuzika);

// POSALJI BTN=========================================================================

let posaljiBtn = document.getElementById("posalji-btn");
posaljiBtn.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    let inputRadios = document.getElementsByName(`answers${i + 1}`);
    for (let j = 0; j < 4; j++)
      if (inputRadios[j].checked) {
        if (j == nizMuzika[i].indeksOdgovora) {
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
