
// function changeText() {
//     $("#card_text").text("New word");
// }

// function changeText2() {
//     $("#card_text").text("Nd");
// }
let audioName = "1_and_you.mp3";
function playAudio() {
    new Audio("https://www.wiley.com/college/nummikoski/0470646322/flash/audio/ch01/" + audioName).play();
}
function changeCard(data) {
    let keyList = [];
    let arrList = [];
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            keyList.push(key);
            arrList.push(data[key]);
        }
    }
    let key = Math.floor(Math.random()*keyList.length);
    audioName = keyList[key];
    $("#fcard_info_front").text(arrList[key][0]);
    $("#fcard_info_back").text(arrList[key][1]);
}
function nextCard(result) {
    fetch("./words.json")
    .then(response => {
        return response.json();
    })
    .then(data => changeCard(data));
}

// function test() {
//     let probList = []
//     for (const i of Array(68).keys()) {
//         probList.push(10);
//     }
//     localStorage.setItem("record", probList);
//     let copyStorage = localStorage.getItem("record");
//     for (let i in copyStorage) {
//         console.log(copyStorage[i])
//     }
//     //localStorage.setItem("record", newProb);
//     //console.log(localStorage.getItem("record"));
// }