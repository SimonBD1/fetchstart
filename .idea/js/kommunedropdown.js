console.log("jeg er i kommunedropdown")

const urlKommune = "https://api.dataforsyningen.dk/kommuner";
pbFetchKommuner = document.getElementById("pbFetchKommuner");
const ddKommuner = document.getElementById("ddKommuner");
const divTag = document.getElementById("atags");

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url);
    return fetch(url).then(response => response.json());
}

function fillDropDownObj(item) {
    const el = document.createElement("option");
    el.textContent = item.navn;
    el.value = item.kode;
    el.kommune = item;
    ddKommuner.appendChild(el);
}

function inputChanged(key) {
    const selindex = ddKommuner.selectedIndex;
    const selectedOption = ddKommuner.options[selindex];
    const kommune = selectedOption.value;
    const kom2 = selectedOption.kommune;
    createAtag(kom2);
}

function createAtag(komObj) {
    const aTag = document.createElement("a");
    aTag.setAttribute("href", komObj.href); // Use the correct property name
    aTag.innerText = komObj.navn;
    divTag.appendChild(aTag);
    const br = document.createElement("br");
    divTag.appendChild(br);
}

async function fetchKommuner(urlKommune) {
    let kommuneArr = await fetchAnyUrl(urlKommune);
    console.log(kommuneArr);
    ddKommuner.innerHTML = "";
    kommuneArr.forEach(fillDropDownObj);
}

function actionFetch() {
    const kommuner = fetchKommuner(urlKommune);
    console.log(kommuner);
}

pbFetchKommuner.addEventListener('click', actionFetch);
ddKommuner.addEventListener('change', inputChanged);
