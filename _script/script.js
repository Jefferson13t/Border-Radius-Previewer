function ver() {
    let pri = document.getElementById('pri').value;
    let seg = document.getElementById('seg').value;
    let ter = document.getElementById('ter').value;
    let qua = document.getElementById('qua').value;
    valid(Number(pri), Number(seg),Number(ter), Number(qua))
}
function valid(pri, seg, ter, qua) {
    if(pri % 2 != 0 && pri % 2 != 1) {
        pri = '0';
    }
    if(seg % 2 != 0 && seg % 2 != 1) {
        seg = '0';
    }
    if(ter % 2 != 0 && ter % 2 != 1) {
        ter = '0';
    }
    if(qua % 2 != 0 && qua % 2 != 1) {
        qua = '0';
    }
   exibir(pri, seg, ter, qua)
}

function exibir(pri, seg, ter, qua) {
    if (pri != 0 && seg !=0 && ter != 0 && qua != 0) {
        document.querySelector("div#ex").style.borderRadius = `${pri}px ${seg}px ${ter}px ${qua}px`    
        document.getElementById("copy").innerText = `border-radius: ${pri}px ${seg}px ${ter}px ${qua}px;`
    } else if (pri != 0 && seg !=0 && ter != 0 ){
        document.querySelector("div#ex").style.borderRadius = `${pri}px ${seg}px ${ter}px ${seg}px`    
        document.getElementById("copy").innerText = `border-radius: ${pri}px ${seg}px ${ter}px;`
    } else if(pri != 0 && seg !=0 ) {
        document.querySelector("div#ex").style.borderRadius = `${pri}px ${seg}px ${pri}px ${seg}px`
        document.getElementById("copy").innerText = `border-radius: ${pri}px ${seg};`

    }
    else if(pri != 0) {
        document.querySelector("div#ex").style.borderRadius = `${pri}px ${pri}px ${pri}px ${pri}px`
        document.getElementById("copy").innerText = `border-radius: ${pri}px;`

    }
    document.querySelector("div#tudo").style.borderRadius = document.querySelector("div#ex").style.borderRadius
}