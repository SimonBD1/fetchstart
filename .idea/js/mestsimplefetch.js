console.log("jeg er i fetchURL.js")

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return fetch(url).then(response => response.json());
}

async function actionFetchUrl(btn) {
    const url = inpUrl.value;
    const jsonOutput = await fetchAnyUrl(url)
    console.log("jsonOutput=" + jsonOutput)
    console.log(url)
    textArea.textContent = jsonOutput
}


const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetch = document.getElementById("pbFetchUrl")
pbFetch.addEventListener('click', actionFetchUrl)
