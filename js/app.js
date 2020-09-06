let Customer = class {
    constructor(img, name, text){
    this.img = img,
    this.name = name,
    this.text = text
    }
}

let c1 = new Customer(0, 'Peter', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae')
let c2 = new Customer(1, 'John', 'Lorem ipsum dolor sit amet, ne everti meliore prodesset vel, labore epicurei in est. At duo forensibus consetetur philosophia, tollit omnesque posidonium vim no, vel affert oratio cu.')
let c3 = new Customer(2, 'Joe', 'Eam probo omittantur cu. Ei vis tollit facete, ad audiam suavitate per. Pri quem commodo praesent an, ne graece possit eos. Option impedit molestie eu vel, at quidam oporteat nam.')
let c4 = new Customer(3, 'Lucy', 'No eos detracto expetenda sententiae, causae assentior vel ea, eu eirmod tincidunt eum. Odio clita ut per. Mollis volutpat ne usu.')
let c5 = new Customer(4, 'Jenny', 'Duo ocurreret intellegebat ad, alterum ullamcorper an sit. Ad ius blandit nominati, no lorem utinam efficiendi usu. Debet noluisse mei in, per illud percipitur ei.')

const profilePic = document.querySelector('.customer-card');
const profileName = document.querySelector('.name');
const text = document.querySelector('.text');
const buttons = document.querySelectorAll('button');
const fade = document.querySelectorAll('.fade');

let myArr = [];
myArr.push(c1, c2, c3, c4, c5);

var c = 0;

function preCust() {
    
        if( c < 0) {
            c = 4
        }
        for (let i = 0; i < fade.length;i++)
            fade[i].classList.add('hide');
        setTimeout(() => {
            profilePic.setAttribute('src', `img/customer-${c}.jpg`);
            profileName.textContent = myArr[c].name;
            text.textContent = myArr[c].text;
            c--;  
        }, 500);
        setTimeout(() => {
            for (let i = 0; i < fade.length;i++)
            fade[i].classList.remove('hide');
        },500);
        
}

function nxtCust() {
    
    if( c < 4) {
        c++;    
    }
    else {
        c = 0;
    }
    for (let i = 0; i < fade.length; i++)
        fade[i].classList.add('hide');
    setTimeout(() => {
        profilePic.setAttribute('src', `img/customer-${c}.jpg`);
        profileName.textContent = myArr[c].name;
        text.textContent = myArr[c].text;  
    }, 500);
    setTimeout(() => {
        for (let i = 0; i < fade.length;i++)
        fade[i].classList.remove('hide');
    },500);
    
}

buttons.forEach(btn => {
    
    btn.addEventListener('click', () => {
        btn.classList.contains('prev-btn') ? preCust()
         : nxtCust();
        }
    )
})

