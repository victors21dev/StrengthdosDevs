// Icones
let icons = [
    ["success", '<i class="fa-solid fa-circle-check"></i>'], // success
    ["erro", '<i class="fa-solid fa-circle-exclamation"></i>'], // erro
    ["info", '<i class="fa-solid fa-circle-info"></i>'], // info
    ["warning", '<i class="fa-solid fa-triangle-exclamation"></i>'] // warning
]
let msgbox = document.querySelector("#msgbox")

let msg = {
    call: function (title, description, design){
        return new Promise((resolve)=>{
            resolve(
                msgbox.innerHTML = `
                <div class="msgbox ${icons[design][0]}">
                    <div class="msgbox-close" style="cursor:pointer" onclick=(msg.closeMsg(this))><i class="fa-solid fa-xmark"></i></div>
                    <div class="msgbox-grid-text">
                        <div>${icons[design][1]}</div>
                        <div class="title-description">
                            <div><strong>${title}</strong></div>
                            <div>${description}</div>
                        </div>
                    </div>
                    <div class="progress-bar"></div>
                </div>
                `
            )
        })
    },
    closeMsg: function(i){
        msgbox.innerHTML = ""
    }
}