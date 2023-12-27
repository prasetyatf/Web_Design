const button = document.querySelector("button.next");
const adviceTemplate = document.querySelector("p");
const adviceNumber = document.querySelector("span.number");

function numberGenerator(){
  let numGen = Math.floor(Math.random() * 10) + 1;
  console.log(`number generator: ${numGen}`);
 return (numGen);
}

async function showAdvice() {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${numberGenerator()}`);
    // ambil body sbg file json
    const responseJson = await response.json();
    // akses file json
    const adviceResponse = await responseJson.slip.advice;
    const idResponse = await responseJson.slip.id;

    console.log(`id: ${idResponse}`);
    console.log(`advice: ${adviceResponse}`);

    return [
      adviceNumber.innerHTML = idResponse,
      adviceTemplate.innerHTML = adviceResponse
      
    ];
  } catch (error) {
    console.log(error.message);
  }
}

button.addEventListener("click", showAdvice);
