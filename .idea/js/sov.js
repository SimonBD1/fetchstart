function sov(ms) {
    console.log("skaber nyt promise")
    const prom = new Promise(dummyFunction => setTimeout(dummyFunction, ms))
    return prom
}

console.log("start")
async function doSomethingAsync() {
    console.log("111")
    await sov(2000)
    console.log("1111 færdig med at sove")
}
sov(2000).then(() => {
    console.log("vi har sovet 2 sekunder")
})

console.log("start 1")
doSomethingAsync()
console.log("slut1")