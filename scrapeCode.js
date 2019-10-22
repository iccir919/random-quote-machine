var rows = document.querySelectorAll(".wikitable tr");

var result = {
  quotes: []
};

for (let i = 1; i < rows.length; i++) {
  result.quotes.push({
    quote: rows[i].children[1].innerText
  });
}

result.quotes = result.quotes.map(
  el => (el.quote = el.quote.replace(/[^a-zA-Z {}]+(?![^{]*})/g, ""))
);

var otherResult = {
  quotes: []
};

for (let i = 1; i < rows.length; i++) {
  otherResult.quotes.push({
    character: rows[i].children[2].innerText
  });
}

for (let i = 1; i < rows.length; i++) {
  if (rows[i].children[2].children[0]) {
    otherResult.quotes[i - 1].characterLink =
      rows[i].children[2].children[0].href;
  }
}

for (let i = 1; i < rows.length; i++) {
  otherResult.quotes[i - 1].actor = rows[i].children[3].innerText;
  otherResult.quotes[i - 1].actorLink = rows[i].children[3].children[0].href;
}

for (let i = 1; i < rows.length; i++) {
  otherResult.quotes[i - 1].film = rows[i].children[4].innerText;
  otherResult.quotes[i - 1].filmLink = rows[i].children[4].children[0].href;
}

for (let i = 1; i < rows.length; i++) {
  if (otherResult.quotes[i - 1].filmLink === undefined) {
    otherResult.quotes[i - 1].filmLink =
      rows[
        i
      ].children[4].children[0].children[0].children[0].children[0].children[0].href;
  }
}

for (let i = 1; i < rows.length; i++) {
  otherResult.quotes[i - 1].year = rows[i].children[5].innerText;
}
