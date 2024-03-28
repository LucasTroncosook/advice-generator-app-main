const url = 'https://api.adviceslip.com/advice';
const idAdvice = document.getElementById('advice-id');
const paragraphId = document.getElementById('paragraph-id');

const random = document.getElementById('random');
const randomFrase = async ()=>{
    const response = await fetch(url);
    const data  = await response.json();
    console.log(data.slip)
    idAdvice.textContent = `#${data.slip.id}`
    paragraphId.textContent = `"${data.slip.advice}"`
}

random.addEventListener('click',randomFrase);
