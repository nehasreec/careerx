const container = document.querySelector('.container');

const qDisplay = document.querySelector('.q-display');

const eDisplay = document.querySelector('.e-display');

const startBtn = document.getElementById('start');

const lKeyBtn = document.querySelector('.l-key');

const rKeyBtn = document.querySelector('.r-key');

const score = document.querySelector('#score');


const fruits =[
    {name:"apple", img: '/image/apple-slice-03.png'},
    {name:"mango", img: '/image/mango-slice-05.png'},
    {name:"banana", img: '/image/banana-01.png'},
    {name:"grapes", img: '/image/green-grapes-04.png'},
    {name:"guava", img: '/image/guava-slice-03.png'},
    {name:"pineapple", img: '/image/half-pineapple-04(1).png'},
    {name:"kiwi", img: '/image/hardy-kiwi-05.png'},
    {name:"orange", img: '/image/orange-slice-02.png'},
    {name:"strawberry", img: '/image/strawberry-03.png'},
    {name:"watermelon", img: '/image/watermelon-slice-05.png'}
];

const vegetables = [
    {name: "potato",img: '/image/potato-05.png'},
    { name: "tomato", img: '/image/tomatoes-02.png' },
    { name: "onion", img: '/image/onion-03.png' },
    { name: "cucumber", img: '/image/cucumbers-03.png' },
    { name: "carrot", img: '/image/carrots-03.png' },
    { name: "beetroot", img: '/image/beetroot-02.png' },
    { name: "capsicum", img: '/image/capsicum-02.png' },
    { name: "broccoli", img: '/image/broccoli-01.png' },
    { name: "cauliflower", img: '/image/cauliflower-03.png' },
    { name: "spinach", img: '/image/spinach-03.png' }
];

const allItems = [...fruits, ...vegetables]

function createImgCard(){
    const randItem = Math.floor(Math.random() * allItems.length)
    const getItemName = allItems[randItem].name
    const getItemImg = allItems[randItem].img
    const imgCard = document.createElement('div');
    imgCard.className = "img-card";
    imgCard.innerHTML = `<img src = "${getItemImg}" alt="${getItemName}" class = "i-card" /><center><h3>${getItemName}</h3></center>`
    qDisplay.appendChild(imgCard);
}

startBtn.onclick = () =>{
    qDisplay.children[0].remove()
    createImgCard();
    startGame();
}
document.addEventListener('keydown', (e) =>{
    if(e.keyCode === 32){
            qDisplay.children[0].remove()
            createImgCard();
            startGame();
    }
})

function startGame(){
    document.addEventListener('keydown', (e) =>{
        if(e.key === "ArrowLeft"){
            for( const veg of vegetables){
                if(veg.name === qDisplay.children[0].children[1].children[0].innerText){
                    correctVegAnswer();
                    setTimeout(createImgCard,500);
                    startGame();
                    setTimeout(resetAgain, 1000);
                } else{
                    lKeyBtn.style.backgroundColor = "red";
                    setTimeout(resetAgain, 1000)
                }
            }
        }else if(e.key === "ArrowRight"){
            for(const frt of fruits){
                if(frt.name === qDisplay.children[0].children[1].children[0].innerText){
                    correctFruitAnswer();
                    setTimeout(createImgCard,500);
                    startGame()
                    setTimeout(resetAgain, 1000);
                } else {
                    rKeyBtn.style.backgroundColor = "red";
                    setTimeout(resetAgain, 1000)
                }
            }
        } else{
            lKeyBtn.style.backgroundColor = "red";
            rKeyBtn.style.backgroundColor = "red";
            setTimeout(resetAgain, 2000)
        }
    });

}


function correctVegAnswer(){
    lKeyBtn.style.backgroundColor = "green";
    score.innerText = parseInt(score.innerText) +1;
    qDisplay.children[0].remove();
}

function correctFruitAnswer(){
    rKeyBtn.style.backgroundColor = "green";
    score.innerText = parseInt(score.innerText) +1;
    qDisplay.children[0].remove();
}

function resetAgain(){
    lKeyBtn.style.backgroundColor = "rgba(149, 149, 149, 0.313)";
    rKeyBtn.style.backgroundColor = "rgba(149, 149, 149, 0.313)";
}

// function gameOver(){
//     if(parseInt(score.innerHTML) === 10){
//         const heading = document.createElement('h2');
//         heading.innerHTML = "Congratulations!!, You Have Won";
//         qDisplay.appendChild(heading);
//         document.querySelector('.img-card').remove();
//         return
//     } else{
//         return
//     }
// }