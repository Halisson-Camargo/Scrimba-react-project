const charpt = [
    {
        id : 1,
        img : 'img/fighter.png',
        força : 28,
        inteligência : 6,
        talento : 21,
        agilidade : 17,
        vitalidade : 27,
    },
    {
        id : 2,
        img : 'img/archer.jpeg',
        força : 17,
        inteligência : 11,
        talento : 21,
        agilidade : 27,
        vitalidade : 23,
    },
    {
        id : 3,
        img : 'img/pike.jpeg',
        força : 26,
        inteligência : 9,
        talento : 20,
        agilidade : 19,
        vitalidade : 25,
    },
    {
        id : 4,
        img : 'img/knight.jpeg',
        força : 26,
        inteligência : 13,
        talento : 17,
        agilidade : 19,
        vitalidade : 24,
    }
]



const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');
const heroImagem = document.querySelector('.heroImagem')

const str = document.querySelector('#forca')
const int = document.querySelector('#inteligência');
const tal = document.querySelector('#talento')
const agi = document.querySelector('#agilidade')
const vit = document.querySelector('#vitalidade')
const pontos = document.querySelector('#pontos')

const forcaBtn = document.querySelector('.forcaBtn')
const inteligênciaBtn = document.querySelector('.inteligênciaBtn')
const agilidadeBtn = document.querySelector('.agilidadeBtn')
const talentoBtn = document.querySelector('.talentoBtn')
const vitalidadeBtn = document.querySelector('.vitalidadeBtn')
const statusBtn = document.querySelector('.statusBtn')




// Carrega o primeiro item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(charpt)
})

// Define item inicial
let currentItem = 0;

// Mostra o char baseado na posição
function showPerson(person){
    let item = person[currentItem];
    heroImagem.src = item.img;
    str.textContent = item.força;
    int.textContent = item.inteligência;
    tal.textContent = item.talento;
    agi.textContent = item.agilidade;
    vit.textContent = item.vitalidade; 
}
// Próximo char 
next.addEventListener('click', function(){
    currentItem++;
    if(currentItem > charpt.length - 1) {
        currentItem = 0;
    }
    showPerson(charpt)
})

// Char anterior
prev.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = charpt.length -1;
    }
    showPerson(charpt)
})
// Adiciona pontos de status
function addAtributo(status) {
    if(pointValue > 0) {
        status.textContent++;
        pontos.textContent--;
        pointValue--;
    }
}
// Guarda o valor inicial do pontos
let pointValue = pontos.textContent;

// Modifica o valor do status
forcaBtn.addEventListener('click', function(){ 
        addAtributo(str);
})


inteligênciaBtn.addEventListener('click', function(){
    addAtributo(int);
})

talentoBtn.addEventListener('click', function(){
    addAtributo(tal);
})

agilidadeBtn.addEventListener('click', function(){
    addAtributo(agi);
})
vitalidadeBtn.addEventListener('click', function(){
    addAtributo(vit);
})
