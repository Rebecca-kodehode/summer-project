const characters = {
  violet: {
    name: "Violet Sorrengail",
    img: "images/Violet.png",
    desc: "Stubborn, intelligent dragon <br> rider and key rebel leader.",
    age: "20",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Rider",
    dragons: [
      { name: "Tairneanach (Tairn)", type: "Black", tail: "Morningstartail" },
      {
        name: "Andarnaurram (Andarna)",
        type: "Gold → Iridescent",
        tail: "Feathertail → Scorpiontail",
      },
    ],
    signets: ["Lightning manipulation", "Time-slowing", "Dreamwalking"],
    weapons: ["Daggers", "Poisons"],
    languages: [
      "Navarrian",
      "Old Language",
      "Sign Language",
      "Krovian",
      "Venin dialect",
      "Dragon empathy",
    ],
    traits: [
      "Strategic",
      "Physically fragile but mentally resilient",
      "Scribe-trained",
      "Proven leader",
    ],
  },
  xaden: {
    name: "Xaden Riorson",
    img: "images/Xaden.png",
    desc: "Duke of Tyrrendor, lieutenant rider,<br> and Violet’s bonded partner.",
    age: "23",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Wingleader → Lieutenant Rider",
    rank: "Lieutenant Rider",
    dragons: [{ name: "Sgaeyl", type: "Blue", tail: "Daggertail" }],
    signets: ["Shadow summoning", "Inntinnsic (Intention-reading)"],
    weapons: ["Rider blade", "Daggers"],
    languages: ["Navarrian", "Old Language", "Sign Language"],
    traits: [
      "Strategic leader",
      "Protective",
      "Burdened noble",
      "Emotionally complex",
    ],
  },
  rhiannon: {
    name: "Rhiannon Matthias",
    img: "images/Rhiannon.png",
    desc: "Violet’s courageous best friend and Flame Section leader.",
    age: "20",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2 → Squad Leader",
    rank: "Rider",
    dragons: [{ name: "Feirge", type: "Green", tail: "Daggertail" }],
    signets: ["Object summoning (telekinetic)"],
    weapons: ["Rider blade"],
    languages: ["Navarrian", "Sign Language"],
    traits: ["Loyal", "Compassionate", "Brave fighter", "Natural leader"],
  },
  liam: {
    name: "Liam Mairi",
    img: "images/Liam.png",
    desc: "Violet’s childhood friend and steadfast red daggertail rider.",
    age: "20",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Rider",
    dragons: [{ name: "Deigh", type: "Red", tail: "Daggertail" }],
    signets: ["Farsight"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Protective", "Dependable", "Honorable"],
  },
  sloane: {
    name: "Sloane Mairi",
    img: "images/Sloane.png",
    desc: "Young, determined day-rider and Liam’s sister.",
    age: "19",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Cadet",
    dragons: [{ name: "—", type: "N/A", tail: "—" }],
    signets: ["—"],
    weapons: ["Basic Rider training"],
    languages: ["Navarrian"],
    traits: ["Resilient", "Eager learner", "Strong-willed"],
  },
  mira: {
    name: "Mira Sorrengail",
    img: "images/Mira.png",
    desc: "Violet’s older sister, veteran rider and protector.",
    age: "23",
    quadrant: "Riders Quadrant",
    section: "Eastern Wing",
    squad: "Lieutenant Rider",
    rank: "Lieutenant Rider",
    dragons: [{ name: "Teine", type: "Green", tail: "Clubtail" }],
    signets: ["Ward-extension"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Protective", "Experienced", "Principled"],
  },
  brennan: {
    name: "Brennan Sorrengail",
    img: "images/Brennan.png",
    desc: "Violet’s brother, rebel leader, and healer.",
    age: "Deceased (pre-Series)",
    quadrant: "Riders (former)",
    section: "Fourth Wing",
    squad: "Rider",
    rank: "Rider",
    dragons: [{ name: "Marbh", type: "Orange", tail: "Scorpiontail" }],
    signets: ["Mending"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Healer", "Secret rebel", "Loyal brother"],
  },
  ridoc: {
    name: "Ridoc Gamlyn",
    img: "images/Ridoc.png",
    desc: "Sarcastic, loyal frost wielder with his brown swordtail.",
    age: "20",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Rider",
    dragons: [{ name: "Aotrom", type: "Brown", tail: "Swordtail" }],
    signets: ["Ice-wielding"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Funny under pressure", "Reliable", "Courageous"],
  },
  sawyer: {
    name: "Sawyer Henrick",
    img: "images/Sawyer.png",
    desc: "Steadfast, red-swordtail rider skilled in metallurgy.",
    age: "21",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Rider",
    dragons: [{ name: "Sliseag", type: "Red", tail: "Swordtail" }],
    signets: ["Metallurgy"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Loyal", "Practical", "Solid fighter"],
  },
  dain: {
    name: "Dain Aetos",
    img: "images/Dain.png",
    desc: "Violet’s ex-friend whose memory-<br>reading signet shifts their bond.",
    age: "20",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Rider",
    dragons: [{ name: "Cath", type: "Red", tail: "Swordtail" }],
    signets: ["Retrocognition"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Conflicted", "Emotionally complex", "Once-trusted friend"],
  },
  jesinia: {
    name: "Jesinia Neilwart",
    img: "images/Jesinia.png",
    desc: "Scribe-turned-rider researcher crucial to Violet’s mission.",
    age: "20",
    quadrant: "Scribe Quadrant (converted)",
    section: "",
    squad: "",
    rank: "Cadet→Rider",
    dragons: [{ name: "—", type: "", tail: "" }],
    signets: ["Research aptitude"],
    weapons: ["—"],
    languages: ["Navarrian", "Scribe code"],
    traits: ["Intellectual", "Analytical", "Supportive"],
  },
  imogen: {
    name: "Imogen Cardulo",
    img: "images/Imogen.png",
    desc: "Quiet, intense rider and key member of Violet’s group.",
    age: "22",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Rider",
    dragons: [{ name: "—", type: "", tail: "" }],
    signets: ["—"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Steadfast", "Calm under pressure", "Loyal"],
  },
  bodhi: {
    name: "Bodhi Durran",
    img: "images/Bodhi.png",
    desc: "Dry‑humored, loyal rebel planner among Xaden’s allies.",
    age: "22",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Rider",
    dragons: [{ name: "—", type: "", tail: "" }],
    signets: ["—"],
    weapons: ["—"],
    languages: ["Navarrian"],
    traits: ["Wry humor", "Quiet loyalty", "Strategic"],
  },
  garrick: {
    name: "Garrick Tavis",
    img: "images/Garrick.png",
    desc: "Xaden’s childhood friend and a dependable rider.",
    age: "23",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Rider",
    dragons: [{ name: "—", type: "", tail: "" }],
    signets: ["—"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Loyal", "Skilled", "Trustworthy"],
  },
  aaric: {
    name: "Aaric Graycastle (Cam Tauri)",
    img: "images/Aaric.png",
    desc: "Royal first‑year who becomes a strategic ally of Violet.",
    age: "18",
    quadrant: "Riders Quadrant",
    section: "Fourth Wing",
    squad: "Flame Section, Squad 2",
    rank: "Cadet",
    dragons: [{ name: "—", type: "", tail: "" }],
    signets: ["—"],
    weapons: ["Rider blade"],
    languages: ["Navarrian"],
    traits: ["Royal blooded", "Curious", "Emerging leadership"],
  },
};

function openModal(id) {
  const char = characters[id];
  if (!char) return;

  // Set modal content
  document.getElementById("modal-img").src = char.img;
  document.getElementById("modal-img").alt = char.name;
  document.getElementById("modal-name").textContent = char.name;
  document.getElementById("modal-desc").innerHTML = char.desc;

  // Remove old extra info
  const oldInfo = document.querySelector(".char-info");
  if (oldInfo) oldInfo.remove();

  // Create and insert updated extra info
  const extraInfo = `
  <div class="char-info">
    <div class="char-info-block"><strong>Age:</strong><span class="info-text">${
      char.age
    }</span></div>
    <div class="char-info-block"><strong>Quadrant:</strong><span class="info-text">${
      char.quadrant
    }</span></div>
    <div class="char-info-block"><strong>Section:</strong><span class="info-text">${
      char.section
    }</span></div>
    <div class="char-info-block"><strong>Squad:</strong><span class="info-text">${
      char.squad
    }</span></div>
    <div class="char-info-block"><strong>Rank:</strong><span class="info-text">${
      char.rank
    }</span></div>
    <div class="char-info-block"><strong>Dragons:</strong><span class="info-text">${char.dragons
      .map((d) => `${d.name} (${d.type} ${d.tail})`)
      .join("<br>")}</span></div>
    <div class="char-info-block"><strong>Signets:</strong><span class="info-text">${char.signets.join(
      ", "
    )}</span></div>
    <div class="char-info-block"><strong>Weapons:</strong><span class="info-text">${char.weapons.join(
      ", "
    )}</span></div>
    <div class="char-info-block"><strong>Languages:</strong><span class="info-text">${char.languages.join(
      ", "
    )}</span></div>
    <div class="char-info-block"><strong>Traits:</strong><span class="info-text">${char.traits.join(
      ", "
    )}</span></div>
  </div>
`;

  document
    .getElementById("modal-desc")
    .insertAdjacentHTML("afterend", extraInfo);

  // Show modal
  document.getElementById("character-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("character-modal").style.display = "none";
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("character-modal");
  if (e.target === modal) {
    closeModal();
  }
});
