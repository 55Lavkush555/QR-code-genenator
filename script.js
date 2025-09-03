let qrContainer = document.querySelector(".qr-container")

document.querySelector("#generate").addEventListener("click", ()=> {
    let text = document.querySelector("input").value
    qrContainer.innerHTML = `<img src="http://api.qrserver.com/v1/create-qr-code/?data=${text}&size=200x200" alt="">`
})