$(document).ready(function() {
    let num = undefined;
    let quote = undefined;

    function newQuote() {
        num = Math.floor((Math.random() * data.length));
        quote = data[num];
        $("#text").text(quote.quote);
        $("#author").text(createCitation())
    }
    newQuote();

    function createCitation() {
        return `${quote.character}, played by ${quote.actor}, in the film ${quote.film}`;
    }

    $("#new-quote").click(function(){
        newQuote();     
    })

    $("#tweet-quote").click(function(){
        let text = quote.quote;
        text += " -" + createCitation();
        text = encodeURI(text);

        let url = $("tweet-quote").attr(href);
        url += text;
        $("tweet-quote").attr(href, url)
    })
});