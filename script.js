(function(){
  const WORDS = [
["ELEFANTE","Animal grande com uma tromba"],
["TIGRE","Felino com listras pelo corpo"],
["GIRAFA","Animal com pescoço muito comprido"],
["ZEBRA","Animal com listras pretas e brancas"],
["LEÃO","Felino conhecido por sua juba"],
["URSO","Animal grande que vive em florestas"],
["LOBO","Animal que vive e caça em grupos"],
["RAPOSA","Animal pequeno e muito ágil"],
["COELHO","Animal com orelhas compridas"],
["TARTARUGA","Animal protegido por uma carapaça"],
["JACARÉ","Réptil que vive perto de rios"],
["CROCODILO","Grande réptil que vive na água"],
["HIPOPÓTAMO","Animal grande que gosta de água"],
["RINOCERONTE","Animal que possui um grande chifre"],
["CANGURU","Animal australiano que pula"],
["COALA","Animal que vive em árvores"],
["PREGUIÇA","Animal conhecido por se mover devagar"],
["TAMANDUÁ","Animal que se alimenta de formigas"],
["TATU","Animal protegido por uma carapaça"],
["CAPIVARA","Grande roedor que vive perto da água"],
["ONÇA","Grande felino encontrado na América"],
["ANTA","Mamífero que vive em florestas"],
["VEADO","Animal que possui pernas compridas"],
["MORCEGO","Mamífero que consegue voar"],
["ESQUILO","Pequeno animal que gosta de sementes"],
["CASTOR","Animal conhecido por construir represas"],
["HIENA","Animal que vive em grupos"],
["CHIMPANZÉ","Primata muito inteligente"],
["GORILA","Grande primata africano"],
["ORANGOTANGO","Primata de pelos alaranjados"],
["PAVÃO","Ave famosa por sua cauda colorida"],
["PAPAGAIO","Ave que consegue imitar sons"],
["TUCANO","Ave com um bico grande"],
["ARARA","Ave conhecida por suas cores"],
["CORUJA","Ave que costuma ser ativa à noite"],
["FALCÃO","Ave conhecida por voar rapidamente"],
["PINGUIM","Ave que não voa e nada muito bem"],
["FLAMINGO","Ave conhecida pela plumagem rosada"],
["CISNE","Ave aquática de pescoço comprido"],
["PATO","Ave que gosta de viver perto da água"],
["GALO","Ave conhecida pelo seu canto"],
["PERU","Ave de grande porte"],
["CANÁRIO","Ave pequena conhecida pelo canto"],
["BEIJA-FLOR","Ave pequena que se alimenta de néctar"],
["PELICANO","Ave que possui um grande bico"],
["EMA","Ave grande encontrada na América do Sul"],
["AVESTRUZ","Maior ave do mundo"],
["BALEIA","Grande mamífero que vive no oceano"],
["ORCA","Mamífero marinho muito poderoso"],
["TUBARÃO","Predador dos oceanos"],
["RAIA","Animal marinho de corpo achatado"],
["POLVO","Animal marinho com oito braços"],
["LULA","Animal marinho com tentáculos"],
["CARANGUEJO","Animal que possui duas pinças"],
["LAGOSTA","Animal marinho com grandes antenas"],
["CAMARÃO","Pequeno animal que vive na água"],
["ESTRELA DO MAR","Animal marinho com formato de estrela"],
["CAVALO MARINHO","Pequeno animal que vive no oceano"],
["ÁGUA VIVA","Animal marinho de corpo gelatinoso"],
["FOCA","Mamífero marinho que nada muito bem"],
["LEÃO MARINHO","Mamífero que vive próximo ao mar"],
["CAMELO","Animal adaptado ao deserto"],
["DROMEDÁRIO","Animal que possui uma corcova"],
["LHAMA","Animal encontrado na região dos Andes"],
["ALPACA","Animal conhecido pelos pelos macios"],
["CABRA","Animal doméstico que gosta de subir"],
["OVELHA","Animal criado para produzir lã"],
["PORCO","Animal doméstico conhecido pelo focinho"],
["VACA","Animal criado para produzir leite"],
["BOI","Animal usado na agricultura"],
["BURRO","Animal parecido com o cavalo"],
["JUMENTO","Animal usado como animal de carga"],
["RATO","Pequeno roedor encontrado em vários lugares"],
["HAMSTER","Pequeno roedor doméstico"],
["PORQUINHO-DA-ÍNDIA","Pequeno roedor de estimação"],
["DONINHA","Pequeno mamífero muito ágil"],
["GAMBÁ","Animal conhecido pelo cheiro forte"],
["OURIÇO","Animal que possui espinhos"],
["TOUPEIRA","Animal que vive debaixo da terra"],
["MANGUSTO","Pequeno mamífero muito ágil"],
["SURICATO","Animal pequeno que vive em grupos"],
["SAPO","Anfíbio que vive em lugares úmidos"],
["RÃ","Anfíbio conhecido pelos seus saltos"],
["PERERECA","Pequeno anfíbio que vive perto da água"],
["SALAMANDRA","Anfíbio de corpo comprido"],
["IGUANA","Réptil que pode viver em árvores"],
["LAGARTO","Réptil encontrado em vários ambientes"],
["CAMALEÃO","Réptil conhecido por mudar de cor"],
["COBRA","Réptil que não possui pernas"],
["JABUTI","Réptil terrestre com carapaça"],
["CASCAVEL","Cobra que possui um chocalho na cauda"],
["PÍTON","Cobra grande que não possui veneno"],
["LAGARTIXA","Pequeno réptil encontrado em casas"],
["FORMIGA","Inseto que vive em colônias"],
["BORBOLETA","Inseto que começa como lagarta"],
["MARIPOSA","Inseto parecido com a borboleta"],
["JOANINHA","Pequeno inseto com pintas"],
["GRILO","Inseto conhecido pelo seu som"],
["GAFANHOTO","Inseto com grandes pernas traseiras"],
["LIBÉLULA","Inseto que costuma voar perto da água"],
 ];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MAX_LIVES = 6;
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const deck = shuffle(WORDS);
  let index = 0;
  let score = 0;
  let word = "";
  let hint = "";
  let guessed = new Set();
  let wrongCount = 0;
  let over = false;
  const els = {
    rig: document.getElementById("rig"),
    word: document.getElementById("word"),
    hint: document.getElementById("hint"),
    keyboard: document.getElementById("keyboard"),
    wordNum: document.getElementById("wordNum"),
    wordTotal: document.getElementById("wordTotal"),
    scoreCount: document.getElementById("scoreCount"),
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalText: document.getElementById("modalText"),
    nextBtn: document.getElementById("nextBtn"),
  };
  els.wordTotal.textContent = deck.length;
  function buildRig(){
    els.rig.innerHTML = `
        <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="150" x2="100" y2="150" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="150" x2="40" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="18" x2="112" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="62" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="112" y1="18" x2="112" y2="34" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/>
        <circle id="part0" class="part" cx="112" cy="47" r="13" fill="none" stroke="#FFD23F" stroke-width="5"/>
        <line id="part1" class="part" x1="112" y1="60" x2="112" y2="96" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part2" class="part" x1="112" y1="70" x2="97" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part3" class="part" x1="112" y1="70" x2="127" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part4" class="part" x1="112" y1="96" x2="99" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
        <line id="part5" class="part" x1="112" y1="96" x2="125" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
      </svg>`;
}
  function normalize(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function startWord(){
    if(index >= deck.length){
      showEndOfDeck();
      return;
    }
    const pick = deck[index];
    word = pick[0];
    hint = pick[1];
    guessed = new Set();
    wrongCount = 0;
    over = false;
    els.overlay.classList.remove("show");
    els.wordNum.textContent = index + 1;
    els.scoreCount.textContent = score;
    buildRig();
    els.hint.textContent = "Dica: " + hint;
    renderWord();
    buildKeyboard();
  }
  function showEndOfDeck(){
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você completou todas as palavras! 🎉";
    els.modalText.innerHTML = "Placar final: <b>" + score + "</b> de <b>" + deck.length + "</b>";
    els.nextBtn.textContent = "Jogar novamente";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    launchConfetti();
    els.nextBtn.onclick = () => { index = 0; score = 0; startWord(); };
  }
  function renderWord(){
    els.word.innerHTML = "";
    word.split("").forEach(ch => {
      if(ch === " "){
        const s = document.createElement("div");
        s.className = "letter-slot space";
        els.word.appendChild(s);
        return;
      }
      const slot = document.createElement("div");
      slot.className = "letter-slot";
      const normCh = normalize(ch);
      if(guessed.has(normCh)){
        slot.textContent = ch;
        slot.classList.add("reveal");
      }
      els.word.appendChild(slot);
    });
  }
  function buildKeyboard(){
    els.keyboard.innerHTML = "";
    const rows = [
      ALPHABET.slice(0,9),
      ALPHABET.slice(9,18),
      ALPHABET.slice(18,26).concat(["Ç"])
    ];
    rows.forEach(rowLetters => {
      const row = document.createElement("div");
      row.className = "kb-row";
      rowLetters.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "key";
        btn.textContent = letter;
        btn.addEventListener("click", () => handleGuess(letter, btn));
        row.appendChild(btn);
      });
      els.keyboard.appendChild(row);
    });
  }
  function handleGuess(letter, btnEl){
    if(over || guessed.has(letter)) return;
    guessed.add(letter);
    btnEl.disabled = true;
    const normWord = normalize(word);
    if(normWord.includes(letter)){
      btnEl.classList.add("correct");
      renderWord();
      checkWin();
    } else {
      btnEl.classList.add("wrong");
      const part = document.getElementById("part" + wrongCount);
      if(part) part.classList.add("show");
      wrongCount++;
      if(wrongCount >= MAX_LIVES){
        loseWord();
      }
    }
  }
  function checkWin(){
    const normWord = normalize(word);
    const allGuessed = normWord.split("").every(ch => ch === " " || guessed.has(ch));
    if(allGuessed){
      winWord();
    }
  }
  function winWord(){
    over = true;
    score++;
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você acertou! 🎉";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    launchConfetti();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function loseWord(){
    over = true;
    els.modal.className = "modal lose";
    els.modalTitle.textContent = "Ah, não! 💥";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function disableKeyboard(){
    document.querySelectorAll(".key").forEach(k => k.disabled = true);
  }
  function launchConfetti(){
    const colors = ["#FF4D8D","#FFD23F","#06D6A0","#FF8C42","#A78BFA"];
    for(let i=0;i<40;i++){
      const piece = document.createElement("div");
      piece.className = "confetti";
      piece.style.left = Math.random()*100 + "vw";
      piece.style.background = colors[Math.floor(Math.random()*colors.length)];
      piece.style.animationDuration = (2 + Math.random()*1.5) + "s";
      piece.style.animationDelay = (Math.random()*0.4) + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }
  function findKey(letter){
    return Array.from(document.querySelectorAll(".key")).find(b => b.textContent === letter);
  }
  document.addEventListener("keydown", (e) => {
    // Enter ou espaço avançam para a próxima palavra quando o modal está aberto
    if((e.key === "Enter" || e.key === " ") && els.overlay.classList.contains("show")){
      e.preventDefault();
      els.nextBtn.click();
      return;
    }
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      e.preventDefault();
      const btn = findKey(letter);
      if(btn && !btn.disabled){
        btn.classList.add("key-pressed");
        handleGuess(letter, btn);
      }
    }
  });
  document.addEventListener("keyup", (e) => {
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      const btn = findKey(letter);
      if(btn) btn.classList.remove("key-pressed");
    }
  });
  startWord();
})();