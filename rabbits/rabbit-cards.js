rabbits = [
    `
    <div class="dropdown">
        <h1>New Zealand White</h1>
        <div class="dropdown-content">
            <h4 id="b-nzw">New Zealand White</h4>
            <h4 id="b-gc">Giant Chinchilla</h4>
            <h4 id="b-r">Rex</h4>
            <h4 id="b-c">Californian</h4>
            <h4 id="b-gf">Giant Flemish</h4>
        </div>
    </div>
    <img src="images/rabbits/newzealand.jpg" alt="new-zealand-white">
    <section class="stats">
        <h4 class="title">W:</h4>
        <p class="stat">10lbs</p>
        <h4 class="title">BA:</h4>
        <p class="stat">6.5 Months</p>
        <h4 class="title">GP:</h4>
        <p class="stat">31 Days</p>
        <h4 class="title">LS:</h4>
        <p class="stat">6 Kits</p>
        <h4 class="title">MT:</h4>
        <p class="stat">10 Weeks</p>
        <h4 class="title">MBR:</h4>
        <p class="stat">3.5lbs</p>
    </section>
    `,
    `
    <div class="dropdown">
        <h1>Giant Chinchilla</h1>
        <div class="dropdown-content">
            <h4 id="b-nzw">New Zealand White</h4>
            <h4 id="b-gc">Giant Chinchilla</h4>
            <h4 id="b-r">Rex</h4>
            <h4 id="b-c">Californian</h4>
            <h4 id="b-gf">Giant Flemish</h4>
        </div>
    </div>
    <img src="images/rabbits/giant-chinchilla-rabbit.webp" alt="new-zealand-white">
    <section class="stats">
        <h4 class="title">W:</h4>
        <p class="stat">14lbs</p>
        <h4 class="title">BA:</h4>
        <p class="stat">5 Months</p>
        <h4 class="title">GP:</h4>
        <p class="stat">111 Days</p>
        <h4 class="title">LS:</h4>
        <p class="stat">7 Kits</p>
        <h4 class="title">MT:</h4>
        <p class="stat">11 Weeks</p>
        <h4 class="title">MBR:</h4>
        <p class="stat">6lbs</p>
    </section>
    `,
    `
    <div class="dropdown">
        <h1>Rex</h1>
        <div class="dropdown-content">
            <h4 id="b-nzw">New Zealand White</h4>
            <h4 id="b-gc">Giant Chinchilla</h4>
            <h4 id="b-r">Rex</h4>
            <h4 id="b-c">Californian</h4>
            <h4 id="b-gf">Giant Flemish</h4>
        </div>
    </div>
    <img src="images/rabbits/rex.jpg" alt="new-zealand-white">
    <section class="stats">
        <h4 class="title">W:</h4>
        <p class="stat">9lbs</p>
        <h4 class="title">BA:</h4>
        <p class="stat">4.5 Months</p>
        <h4 class="title">GP:</h4>
        <p class="stat">32 Days</p>
        <h4 class="title">LS:</h4>
        <p class="stat">8 Kits</p>
        <h4 class="title">MT:</h4>
        <p class="stat">15 Weeks</p>
        <h4 class="title">MBR:</h4>
        <p class="stat">3.75lbs</p>
    </section>
    `,
    `
    <div class="dropdown">
        <h1>Californian</h1>
        <div class="dropdown-content">
            <h4 id="b-nzw">New Zealand White</h4>
            <h4 id="b-gc">Giant Chinchilla</h4>
            <h4 id="b-r">Rex</h4>
            <h4 id="b-c">Californian</h4>
            <h4 id="b-gf">Giant Flemish</h4>
        </div>
    </div>
    <img src="images/rabbits/californian.jpg" alt="new-zealand-white">
    <section class="stats">
        <h4 class="title">W:</h4>
        <p class="stat">8.8lbs</p>
        <h4 class="title">BA:</h4>
        <p class="stat">6.5 Months</p>
        <h4 class="title">GP:</h4>
        <p class="stat">31 Days</p>
        <h4 class="title">LS:</h4>
        <p class="stat">6 Kits</p>
        <h4 class="title">MT:</h4>
        <p class="stat">11 Weeks</p>
        <h4 class="title">MBR:</h4>
        <p class="stat">3.5lbs</p>
    </section>
    `,
    `
    <div class="dropdown">
        <h1>Giant Flemish</h1>
        <div class="dropdown-content">
            <h4 id="b-nzw">New Zealand White</h4>
            <h4 id="b-gc">Giant Chinchilla</h4>
            <h4 id="b-r">Rex</h4>
            <h4 id="b-c">Californian</h4>
            <h4 id="b-gf">Giant Flemish</h4>
        </div>
    </div>
    <img src="images/rabbits/flemish.png" alt="new-zealand-white">
    <section class="stats">
        <h4 class="title">W:</h4>
        <p class="stat">18lbs</p>
        <h4 class="title">BA:</h4>
        <p class="stat">7 Months</p>
        <h4 class="title">GP:</h4>
        <p class="stat">29 Days</p>
        <h4 class="title">LS:</h4>
        <p class="stat">8 Kits</p>
        <h4 class="title">MT:</h4>
        <p class="stat">11 Weeks</p>
        <h4 class="title">MBR:</h4>
        <p class="stat">4.25lbs</p>
    </section>
    `
]
const left_card = document.getElementById("left-card");
const right_card = document.getElementById("right-card")
let b_nzw;
let b_gc;
let b_r;
let b_c;
let b_gf;

function setButtons(card) {
    b_nzw = findChild(card,"b-nzw");
    b_gc = findChild(card,"b-gc");
    b_r = findChild(card,"b-r");
    b_c = findChild(card,"b-c");
    b_gf = findChild(card,"b-gf");

    b_nzw.addEventListener('click', (e) => {
        e.preventDefault();
        card.innerHTML = rabbits[0];
        setButtons(card);
    })

    b_gc.addEventListener('click', (e) => {
        e.preventDefault();
        card.innerHTML = rabbits[1];
        setButtons(card);
    })

    b_r.addEventListener('click', (e) => {
        e.preventDefault();
        card.innerHTML = rabbits[2];
        setButtons(card);
    })

    b_c.addEventListener('click', (e) => {
        e.preventDefault();
        card.innerHTML = rabbits[3];
        setButtons(card);
    })

    b_gf.addEventListener('click', (e) => {
        e.preventDefault();
        card.innerHTML = rabbits[4];
        setButtons(card);
    })
    Compare();
}

function findChild(pElem, tID) {
    let target = pElem.querySelector(`#${tID}`);
    return target;
}

function Initialize() {
    let r1 = Math.floor(Math.random()*5);
    let r2 = Math.floor(Math.random()*5);

    left_card.innerHTML = rabbits[r1];
    right_card.innerHTML = rabbits[r2];

    setButtons(left_card);
    setButtons(right_card);
    Compare();
}

function Compare() {
    const l_list = Array.from(left_card.querySelectorAll(`.stat`));
    const r_list = Array.from(right_card.querySelectorAll(`.stat`));

    const l_values = [
        parseFloat(l_list[0].textContent.slice(0,-3)),
        12 - parseFloat(l_list[1].textContent.slice(0, -7)),
        100 - parseFloat(l_list[2].textContent.slice(0,-5)),
        parseFloat(l_list[3].textContent.slice(0,-5)),
        100 - parseFloat(l_list[4].textContent.slice(0,-6)),
        parseFloat(l_list[5].textContent.slice(0,-3))
    ]

    const r_values = [
        parseFloat(r_list[0].textContent.slice(0,-3)),
        12 - parseFloat(r_list[1].textContent.slice(0, -7)),
        100 - parseFloat(r_list[2].textContent.slice(0,-5)),
        parseFloat(r_list[3].textContent.slice(0,-5)),
        100 - parseFloat(r_list[4].textContent.slice(0,-6)),
        parseFloat(r_list[5].textContent.slice(0,-3))
    ]

    for (i=0; i<l_list.length; i++) {
        if (l_values[i] > r_values[i]) {
            l_list[i].style.color = "greenyellow";
            r_list[i].style.color = "red";
        } else if (l_values[i] < r_values[i]) {
            l_list[i].style.color = "red";
            r_list[i].style.color = "greenyellow";
        } else {
            l_list[i].style.color = "var(--primary-color)";
            r_list[i].style.color = "var(--primary-color)";
        }
    }
}

Initialize();