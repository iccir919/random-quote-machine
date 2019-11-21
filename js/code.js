$(document).ready(function() {
    let num = Math.floor((Math.random() * data.length));
    let quote = data[num];
    $("#text").text(quote.quote);
    $("footer").text(`${quote.character}, played by ${quote.actor}, in the film ${quote.film}`);
});