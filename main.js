let words = [
    "dolor",
    "sit",
    "amet",
    "The milkman",
    "brought",
    "donuts",
    "cheese",
    "along",
    "with",
    "milk",
    "and",
    "a bottle",
    "of whiskey",
    "to 10",
    "houses"
]

// let start = document.getElementById("start").disabled = true
let score = document.querySelector(".score")
let time = document.querySelector(".time")
let level = document.querySelector(".level")
let have = document.querySelector(".have")
let input = document.querySelector('input')
let text = document.getElementsByName('text')
let getlevel = document.getElementById('levels');
let coming = document.querySelector('.ones')
let randomWord = document.querySelector(".rword")

// get seleceted level
function getLevel() {
    document.getElementById("start").disabled = false
    defaul = document.getElementById('levels').value;
    levelName = document.getElementById('levels').options[document.getElementById('levels').selectedIndex].text;
    level.innerHTML = levelName;
    have.innerHTML = defaul;
    time.innerHTML = defaul;
}
getLevel();
input.value = ""
console.log(input)
input.onpaste = function () {
    return false
}
start.onclick = () => {
    start.remove()
    input.focus();

    gen();
}
let gen = () => {
    let word = words[Math.floor(Math.random() * words.length)];
    let index = words.indexOf(word);
    words.splice(index, 1);
    randomWord.style.display = "block"
    randomWord.innerHTML = word;
    coming.innerHTML = "";
    for (let i = 0; i < words.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode(words[i]);
        span.appendChild(txt);
        coming.appendChild(span)

    }
    play()
}

function play() {
    time.innerHTML = defaul
    let startI = setInterval(() => {
        time.innerHTML--;
        if (time.innerHTML == 0) {
            clearInterval(startI);
            time.style.color = 'red'
            console.log(randomWord.innerHTML, input.value)
            if (randomWord.innerHTML == input.value) {
                input.value = "";
                score.innerHTML++;
                if (words.length > 0) {
                    gen();
                }
                else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let tx = document.createTextNode('Great You finished');
                    span.appendChild(tx)
                    document.querySelector('.finish').appendChild(span)
                }
            } else {
                let span2 = document.createElement("span");
                span2.className = "bad";
                let tx = document.createTextNode("Game over");
                span2.appendChild(tx);
                randomWord.innerHTML = ""
                document.querySelector('.finish').appendChild(span2)
            }
        }
    }, 1000);
}