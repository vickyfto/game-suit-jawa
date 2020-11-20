"use strict"

function getPilihanComputer () {
    const comp = Math.random();
        if ( comp < 0.34) return 'gajah';
        if (comp >= 0.34 && comp <= 0.68) return 'orang';
        else return 'semut';
}

function getHasil(user, comp) {
    if(user == comp) return 'SERI';
    if(user == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if(user == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
    if(user == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
}

function putar() {
    const imgComputer = document.querySelector('.img-comp');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        } 
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length) i = 0;
    }, 100)
}

const getPilihan = document.querySelectorAll('li img');
    getPilihan.forEach( function(pil) {
        pil.addEventListener('click', function() {
            const pilihanComp = getPilihanComputer();
            const pilihanUser = pil.className;
            const hasil = getHasil(pilihanUser, pilihanComp);
            putar();
            // console.log(putar);

            setTimeout(function() {
                const imgComp = document.querySelector('.img-comp');
                imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');
                
                const info = document.querySelector('.info');
                info.innerHTML = hasil
            },1000)
        })
    })
        // console.log(getPilihan);

// const pGajah = document.querySelector('.gajah')
//     pGajah.addEventListener('click', function() {
//     const pilihanComp = getPilihanComputer();
//     const pilihanUser = pGajah.className;
//     const hasil = getHasil(pilihanUser, pilihanComp);

//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info'); 
//         info.innerHTML = hasil;
//     // console.log(pilihanUser)
// })
//     // console.log(pilihanComp)

// const pOrang = document.querySelector('.orang')
//     pOrang.addEventListener('click', function() {
//     const pilihanComp = getPilihanComputer();
//     const pilihanUser = pOrang.className;
//     const hasil = getHasil(pilihanUser, pilihanComp);

//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info'); 
//         info.innerHTML = hasil;
//     // console.log(pilihanUser)
//     // console.log(pilihanComp)
// })

// const pSemut = document.querySelector('.semut')
//     pSemut.addEventListener('click', function() {
//     const pilihanComp = getPilihanComputer();
//     const pilihanUser = pSemut.className;
//     const hasil = getHasil(pilihanUser, pilihanComp);

//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info'); 
//         info.innerHTML = hasil;
//     // console.log(pilihanUser)
//     // console.log(pilihanComp)
// })



// batas -------------------------------------------------------------------

// let tanya = true
// while(tanya) {

//     const user = prompt('masukan pilihan');
//     let comp = Math.round(Math.random() * 8);
    
//     if ( comp < 2) {
//         comp = 'gajah';
//     }
//     else if(comp >= 2 && comp <= 5) {
//         comp = 'orang';
//     }
//     else {
//         comp = 'semut'
//     }
    
//     let hasil = '';
//     if (user == comp) {
//         hasil = 'seri';
//     }
//     else if(user == 'semut') {
//         hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
//     }
//     else if(user == 'gajah') {
//         hasil = (comp == 'semut') ? 'KALAH' : 'MENANG';
//     }
//     else if(user == 'orang') {
//         hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
//     }
//     else {
//         hasil = 'salah memasukan gacoan'
//     }
    
//     hasil = alert(`user memilih ${user} komputer memilih ${comp} hasilnya ${hasil}`)
//     // console.log(false || true) false even one of em false
//     // console.log(true && false); true even one of em fa
//     tanya = prompt('mau main lagi?')
// }

// alert('terimakasih telah bermain')