function cekUmur(e) {
    let nama = document.getElementById('nama').value;
    let umur = document.getElementById('umur').value;
    let hasilPengecekan = document.getElementById('hasilPengecekan');
    
    if (umur >= 17) {
        hasilPengecekan = nama + ' telah cukup umur.';
        //hasilPengecekan.style.color = 'green';
    } else {
        hasilPengecekan = nama + ' belum cukup umur.';
        //hasilPengecekan.style.color = 'red';
    }
    alert(hasilPengecekan)
}

let button = document.querySelector("button")
button.addEventListener("click",cekUmur())
