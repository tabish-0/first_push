# Projects related to DOM

## project link

# Solution code

## project 1

```javascript
console.log("Tabish")

const buttons = document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach( (button) => {
    console.log(button)
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id
        }
    })
})

```

## project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener( 'submit', function(e) {
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height ==' '|| height<0 || isNaN(height)){
        results.innerHTML=`please give a valid height ${height}`
    }
    else if(weight ==' '|| weight<0 || isNaN(weight)){
        results.innerHTML=`please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        //show the result
        // results.innerHTML=`<span>${bmi}</span>`

        if(bmi<18.6){
            results.innerHTML=`<span>${bmi} :-  you are UnderWeight</span>`
        }
        else if(bmi>18.6 && bmi<24.9){
            results.innerHTML=`<span>${bmi} :- you are Normal</span>`
        }
        else if(bmi>24.9){
            results.innerHTML=`<span>${bmi} :-  you are OverWeight</span>`
        }
    }
})

```

## project 3 solution

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval( function(){
    let date=new Date()

    // console.log(date.toLocaleTimeString())

    clock.innerHTML=date.toLocaleTimeString()
}, 1000)


```
 
## project 4 solution

```javascript
let randomNumber=parseInt(Math.random() * 100 + 1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
    submit.addEventListener( 'click',function(e) {
        e.preventDefault()
        const guess=parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number greater than 1')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOOO high`)
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start new Game</h2>'
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('click' , (e)=> {
        randomNumber=parseInt(Math.random() * 100 + 1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}

```


## project 5 solution

```javaScript
const insert = document.getElementById('insert')

window.addEventListener( 'keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
        <th>key</th>
        <th>keyCode</th>
        <th>key</th>
    </tr>
    <tr>
        <td>${e.key === " " ? "space" : e.key}</td>
        <td>M${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>  
    `
})

```

## project 6 solution
```javaScript
// generate a random color

const randomColor = function () {
    let hex="0123456789ABCDEF"
    let color = "#"

    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;

const startChangingColor = function() {
    if(!intervalId){
        intervalId=setInterval(changeBgColor,1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }
}

const stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=null
}

document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)

```
