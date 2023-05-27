const url = 'https://restcountries.com/v3.1/all'
const btn = document.querySelector('button')
const root = document.querySelector("#root")
const input = document.querySelector("input")

async function render() {
    const req = await fetch(url)
    const res = await req.json()
    console.log("res: ", res);
    show(res)
}



function show(param) {
    for (const item of param) {
        root.innerHTML+=`
        <h1>${item.name.common}</h1>
        <img width=400px src=${item.flags.svg} />
        
        `
    }
}

btn.onclick=()=>{
    render()
    root.innerHTML=''
}


const nameUrl = 'https://restcountries.com/v3.1/name/'


async function dead(name = 'kyrgyzstan') {
    const respons = await fetch(nameUrl+name)
    const data = await respons.json()
    console.log("data: ", data);
    show(data)
}



input.onchange=()=>{
    dead(input.value)
    root.innerHTML=''
    input.value = ''
}