const quotes = [
    { 
        author: 'Lao Tzu', 
        quote: '"The journey of a thousand miles begins with one step."'
    },
    { 
        author: 'Friedrich Nietzsche', 
        quote: '"That which does not kill us makes us stronger."'
    },
    { 
        author: 'John Lennon', 
        quote: '"Life is what happens when you are busy making other plans."'
    },
    { 
        author: 'Joe Kennedy', 
        quote: '"When the going gets tough, the tough get going."'
    },
    { 
        author: 'Mahatma Gandhi', 
        quote: '"You must be the change you wish to see in the world."'
    },
    { 
        author: 'Mae West', 
        quote: '"You only live once, but if you do it right, once is enough."'
    },
    { 
        author: 'Stephen King', 
        quote: '"Get busy living or get busy dying."'
    }
]

let btn = document.getElementById('btn')
let quote = document.getElementById('quote')
let author = document.getElementById('author')

btn.addEventListener('click', display)

function display() {
    const random = quotes[Math.floor(Math.random() * quotes.length)]
    author.innerHTML = random.author
    quote.innerHTML = random.quote
}