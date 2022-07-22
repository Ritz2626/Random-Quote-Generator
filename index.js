const quoteTag=document.getElementById('quote-tags');
const quoteAuthor=document.getElementById('quote-author');
const quoteText=document.getElementById("quote-text");
const generate=document.getElementById("generate");
function randomQuote()
{
    fetch('https://api.quotable.io/random')
    .then(response=>response.json())
    .then(data=>{
        quoteText.textContent=data.content;
        quoteTag.textContent=data.tags;
        quoteAuthor.textContent=`--${data.author}`;
    });
}
randomQuote();
generate.addEventListener('click',()=>{randomQuote()});
