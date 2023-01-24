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
        img : 'img/archer.png',
        força : 17,
        inteligência : 11,
        talento : 21,
        agilidade : 27,
        vitalidade : 23,
    },
    {
        id : 3,
        img : 'img/pike.png',
        força : 26,
        inteligência : 9,
        talento : 20,
        agilidade : 19,
        vitalidade : 25,
    },
    {
        id : 4,
        img : 'img/knigh.png',
        força : 26,
        inteligência : 13,
        talento : 17,
        agilidade : 19,
        vitalidade : 24,
    },
    {
        id : 5,
        img : 'img/assassin.png',
        força : 26,
        inteligência : 13,
        talento : 17,
        agilidade : 19,
        vitalidade : 24,
    }
];

const items = [
    {
        nomes : 'Machado de Pedra',
        pAtk : '(1 ~ 2) - (3 ~ 4)',
        velArma : 6,
        critico : '3%',
        img : 'img/mpedra.png'
    }
]
// const arrayTeste = [1,2, 3, 4, 5,6]

// const allItens = document.querySelector('.all-itens');
// window.addEventListener('DOMContentLoaded', function(){

//     let displayItens = items.map(function(item){
//         return `<div class="all-itens">
//         <p class="m-nome">${item.nomes}</p>
//         <p class="m-power"></p>
//         <p class="m-vel"></p>
//         <p class="m-crt"></p>
//         <img src="" alt="" class="m-img">
//     </div>

// `
//     })
    
//     displayItens = displayItens.join('');
//     allItens.innerHTML = displayItens;
// console.log(displayItens)   
// })

    // const prev = document.querySelector('.prevBtn');
    // const next = document.querySelector('.nextBtn');
    // const heroImagem = document.querySelector('.heroImagem')

    // const str = document.querySelector('#forca')
    // const int = document.querySelector('#inteligência');
    // const tal = document.querySelector('#talento')
    // const agi = document.querySelector('#agilidade')
    // const vit = document.querySelector('#vitalidade')
    // const pontos = document.querySelector('#pontos')

    // const forcaBtn = document.querySelector('.forcaBtn')
    // const inteligênciaBtn = document.querySelector('.inteligênciaBtn')
    // const agilidadeBtn = document.querySelector('.agilidadeBtn')
    // const talentoBtn = document.querySelector('.talentoBtn')
    // const vitalidadeBtn = document.querySelector('.vitalidadeBtn')
    // const statusBtn = document.querySelector('.statusBtn')




// Carrega o primeiro item
// window.addEventListener('DOMContentLoaded', function(){
//     showPerson(charpt)
// })

// Define item inicial
// let currentItem = 0;

// Mostra o char baseado na posição
// function showPerson(person){
//     let item = person[currentItem];
//     heroImagem.src = item.img;
//     str.textContent = item.força;
//     int.textContent = item.inteligência;
//     tal.textContent = item.talento;
//     agi.textContent = item.agilidade;
//     vit.textContent = item.vitalidade; 
// }
// Próximo char 
// next.addEventListener('click', function(){
//     currentItem++;
//     if(currentItem > charpt.length - 1) {
//         currentItem = 0;
//     }
//     showPerson(charpt)
// })

// Char anterior
// prev.addEventListener('click', function(){
//     currentItem--;
//     if(currentItem < 0) {
//         currentItem = charpt.length -1;
//     }
//     showPerson(charpt)
// })
// Adiciona pontos de status
// function addAtributo(status) {
//     if(pointValue > 0) {
//         status.textContent++;
//         pontos.textContent--;
//         pointValue--;
//     }
// }
// // Guarda o valor inicial do pontos
// let pointValue = pontos.textContent;

// Modifica o valor do status
// forcaBtn.addEventListener('click', function(){ 
//         addAtributo(str);
// })


// inteligênciaBtn.addEventListener('click', function(){
//     addAtributo(int);
// })

// talentoBtn.addEventListener('click', function(){
//     addAtributo(tal);
// })

// agilidadeBtn.addEventListener('click', function(){
//     addAtributo(agi);
// })
// vitalidadeBtn.addEventListener('click', function(){
//     addAtributo(vit);
// })
// const navToggle = document.querySelector('.nav-toggle');
// const link = document.querySelector('.links');

// navToggle.addEventListener('click', function(){
//    if(link.classList.contains('show-links')){
//     link.classList.remove('show-links');
//    } else {
//     link.classList.add('show-links')
//    }
    // link.classList.toggle('show-links')
// })

const prevBtn= document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const charImg = document.querySelector('.char-img');

const str = document.querySelector('.str');
const int = document.querySelector('.int');
const tal = document.querySelector('.tal');
const agi = document.querySelector('.agi');
const vit =document.querySelector('.vit')
const stat = document.querySelector('.stat');

const forcaBtn = document.querySelector('.forcaBtn')
const inteligênciaBtn = document.querySelector('.inteligênciaBtn')
const agilidadeBtn = document.querySelector('.agilidadeBtn')
const talentoBtn = document.querySelector('.talentoBtn')
const vitalidadeBtn = document.querySelector('.vitalidadeBtn')


const levelup = document.querySelector('#imput-up');

//Carrenga o primeiro personagem
window.addEventListener('DOMContentLoaded', function(){
    showPerson(charpt);
    stat.value = 0;
    stat.textContent = stat.value
    levelup.value = 0;

})

stat.addEventListener('input', function(){

})

// Mostra o personagem baseado na posição
function showPerson(personagem) {
    charImg.src = personagem[initialPosition].img;
    str.textContent = personagem[initialPosition].força;
    int.textContent = personagem[initialPosition].inteligência;
    tal.textContent = personagem[initialPosition].talento;
    agi.textContent = personagem[initialPosition].agilidade;
    vit.textContent = personagem[initialPosition].vitalidade;
}
//Valor inicial da posição
let initialPosition = 0;

prevBtn.addEventListener('click', function(){
    initialPosition--;
    if(initialPosition < 0) {
        initialPosition = charpt.length - 1;
    }
    showPerson(charpt)
})
nextBtn.addEventListener('click', function(){
    initialPosition++;
    if(initialPosition > charpt.length) {
        initialPosition = 0;
    }
    showPerson(charpt)
})
stat.value = stat.textContent;
let pointStat = stat.value;

function addAtributo(status){
    if(stat.textContent > 0 ){
        status.textContent++;
        stat.textContent--;
        stat.value = stat.textContent       
    }

}

function calcPoint(valor){   
      return  valor * 5;
    }

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


levelup.addEventListener('input', function(){
           let levelValue = this.value;
            stat.textContent = levelValue * 5;
            let valorTeste = stat.textContent
//         if(stat.value < stat.textContent) {
//             alert('top')
//         }
//         stat.textContent = levelValue * 5
//         stat.value = stat.textContent;
        
    // if(stat.value < levelValue * 5) {
    //     stat.value = stat.textContent + 5;
    // }  else {
    //    stat.textContent =  levelValue * 5;
    // } 
    //  calcPoint(levelValue)
    // stat.textContent = valorF
    
 })
 console.log(valorTeste)