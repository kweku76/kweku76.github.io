const quotes = [{
    name: 'Dr. Seuss',
    quote: 'Don’t cry because it’s over, smile because it happened.'
  },
  {
    name: 'Marilyn Monroe',
    quote: 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.'
  },
  {
    name: 'Bernard M. Baruch',
    quote: 'Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind.'
  },
  {
    name: 'Oscar Wilde',
    quote: 'Be yourself; everyone else is already taken.'
  },
  {
    name: 'Dr. Seuss',
    quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.'
  },
  {
    name: 'George Bernard Shaw',
    quote: 'Imagination is the beginning of creation. You imagine what you desire; you will what you imagine; and at last you create what you will.'
  },
  {
    name: 'Maya Angelou',
    quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
  },
  {
    name: 'Aristotle',
    quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.'
  }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor ');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;

  quote.animate([{ //this will fade in any div element 
    opacity: '0'
  }, {
    opacity: '1.0'
  }], {
    duration: 1000,
    fill: 'forwards'
  });
}