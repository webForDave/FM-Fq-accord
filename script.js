let fqContiainer1 = document.getElementById('fq-container-1');
let fqContiainer2 = document.getElementById('fq-container-2');
let fqContiainer3 = document.getElementById('fq-container-3');
let fqContiainer4 = document.getElementById('fq-container-4');

let fq1 = document.getElementById('fq-1');
let fq2 = document.getElementById('fq-2');
let fq3 = document.getElementById('fq-3');
let fq4 = document.getElementById('fq-4')



fqContiainer1.addEventListener('click', () => {
    fq1.style.display = 'block';
    fqContiainer1.style.display = 'none';
});

fq1.addEventListener('click', () => {
    fq1.style.display = 'none';
    fqContiainer1.style.display = 'flex';
});



fqContiainer2.addEventListener('click', () => {
    fq2.style.display = 'block';
    fqContiainer2.style.display = 'none';
});

fq2.addEventListener('click', () => {
    fq2.style.display = 'none';
    fqContiainer2.style.display = 'flex';
})



fqContiainer3.addEventListener('click', () =>{
    fq3.style.display = 'block';
    fqContiainer3.style.display = 'none';
})

fq3.addEventListener('click', () => {
    fq3.style.display = 'none';
    fqContiainer3.style.display = 'flex';
} )





fqContiainer4.addEventListener('click', () => {
    fq4.style.display = 'block';
    fqContiainer4.style.display = 'none';
});

fq4.addEventListener('click', () => {
    fq4.style.display = 'none';
    fqContiainer4.style.display = 'flex';
})