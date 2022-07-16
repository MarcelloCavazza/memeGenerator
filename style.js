var memesFromApi = null
window.addEventListener('load', () => {
    doFetchAsync();
});
let buttonRandom = document.querySelector("#buttonRandom")

var fname = null
async function doFetchAsync() {
    const res = await fetch('https://api.imgflip.com/get_memes');
    apiData = await res.json();
    memesFromApi = apiData.data.memes
    work()
}
buttonRandom.addEventListener('click', ()=>{
    work()
})

function work(){
    setEventListenerSubtitle()
}

function setEventListenerSubtitle(){
    setRandomMeme()
    fname = document.querySelector("#fname")
    fname.addEventListener("keypress", (event)=>{
        const keyName = event.key;
        if(keyName == "Enter"){
            let subtitleField = document.querySelector("#subtitle")
            let inputfield = document.querySelector("#fname")
            let valueInserted = inputfield.value
            
            inputfield.style.display = "none"
            subtitleField.style.display = "block"
            subtitleField.innerHTML = valueInserted
        }
    })
}

function setRandomMeme(){
    let randomMemeid = generateRandom()
    let memeDiv = document.querySelector('#memeGenetaed')
    memeDiv.innerHTML = `<div id="memeCreatedRnadom"><img src="${memesFromApi[randomMemeid].url}"></div><div><input type="text" id="fname" name="fname"><div style="display: none;" id="subtitle"><div></div>`
}

function generateRandom() {
    let min = 0
    let max = memesFromApi.length

    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor( rand * difference);

    rand = rand + min;

    return rand;
}