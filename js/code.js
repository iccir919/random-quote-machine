function getRandomQuote() {
    return quotesData[Math.floor(Math.random() * quotesData.length)];
}
let currentQuote = '', currentCitation = '';

function getQuote() {
    let randomQuote = getRandomQuote();

    currentQuote = randomQuote.quote;
    currentCitation = `${randomQuote.character} played by ${randomQuote.actor} in the film ${randomQuote.film}`;


    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent( currentQuote + ' ' + currentCitation));

    $(".quote-text").animate(
        { opacity: 0 },
        500,
        function() {
          $(this).animate({ opacity: 1}, 500);
          $('#text').text(currentQuote);
        }
    );

    $(".quote-author").animate(
        { opacity: 0 },
        500,
        function() {
          $(this).animate({ opacity: 1}, 500);
          $('#author').html(currentCitation);
        }
    );
}

$(document).ready(function() {
    console.log("Test")
    getQuote();
})

$('#new-quote').on('click', getQuote);

