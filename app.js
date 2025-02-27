const btn = document.querySelector('.btn')
const quoteID = document.querySelector('.quoteID')
const quoteText = document.querySelector('.quote-text')




function fetchQuote() {
    fetch(`https://api.adviceslip.com/advice?`, { cache: 'no-cache' }) 
      .then(response => response.json())
      .then(data => {
          console.log(data)
          quoteID.textContent = `#${data.slip.id}`
        quoteText.textContent = `"${data.slip.advice}"`
      })
      .catch(error => console.error('Error:', error));
  }
  

  btn.addEventListener('click', fetchQuote);

  // Optionally, fetch a quote on page load:
  fetchQuote();