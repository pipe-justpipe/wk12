// const quoteResult = document.getElementById('result');
 
// async function getRandomQuote() {
//     try {
//         const response = await fetch('https://api.quotable.io/random');
 
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.status}`);
//         }
 
//         const data = await response.json();
//         const quote = data.content;
 
//         quoteResult.innerHTML = <p>${quote}</p>;
//     } catch (error) {
//         console.error(error);
//     }
// }
 
// const generatorButton = document.getElementById('generate-button');
// generatorButton.addEventListener('click', getRandomQuote);

async function fetchRandomQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

      if (response.ok) {
        const quoteTextElement = document.getElementById('quote-text');
        quoteTextElement.textContent = `"${data.content}" - ${data.author}`;
      } else {
        console.error('Error fetching quote:', data);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }

  // Fetch a random quote when the page loads
  document.addEventListener('DOMContentLoaded', fetchRandomQuote);