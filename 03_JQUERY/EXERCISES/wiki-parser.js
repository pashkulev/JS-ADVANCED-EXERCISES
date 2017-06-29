function wikiParser(selector) {
    let p = $(selector);
    let text = p.text();

    processSingleQuotes();
    processHeadings();
    processHyperlinks();

    p.html(text);

    function processSingleQuotes() {
        let singleQuotesRegex = /'+([^'=\[\]]+)'+/g;
        let match;

        while (match = singleQuotesRegex.exec(text)) {
            let fullMatch = match[0];
            let textInsideQuotes = match[1];
            let quotesCount = getSignCount(fullMatch, "'");

            if (quotesCount === 2) {
                processItalicText(fullMatch, textInsideQuotes);
            } else if (quotesCount === 3) {
                processBoldText(fullMatch, textInsideQuotes);
            }
        }
    }

    function processItalicText(fullMatch, italicText) {
        let italic = $("<i>").text(italicText);
        let replacementHTML = italic.get()[0].outerHTML;
        text = text.replace(fullMatch, replacementHTML);
    }

    function processBoldText(fullMatch, boldText) {
        let bold = $("<b>").text(boldText);
        let replacementHTML = bold.get()[0].outerHTML;
        text = text.replace(fullMatch, replacementHTML);
    }

    function processHeadings() {
        let headingsRegex = /=+([^='\[\]]+)=+/g;
        let match;

        while (match = headingsRegex.exec(text)) {
            let fullMatch = match[0];
            let headingText = match[1];
            let headingValue = getSignCount(fullMatch, '=');
            let heading = $(`<h${headingValue}>`).text(headingText);
            let replacementHTML = heading.get()[0].outerHTML;
            text = text.replace(fullMatch, replacementHTML);
        }
    }

    function getSignCount(match, sign) {
        let signsCount = 0;
        for (let i = 0; i < 3; i++) {
            if (match.charAt(i) === sign) {
                signsCount++;
            } else {
                break;
            }
        }

        return signsCount;
    }

    function processHyperlinks() {
        let hyperlinksRegex = /\[\[([^\[\]=']+)]]/g;
        let match;

        while (match = hyperlinksRegex.exec(text)) {
            let fullMatch = match[0];
            let linkMatch = match[1];
            let matchTokens = linkMatch.split('|');
            let a;

            if (matchTokens.length === 2) {
                let [link, text] = matchTokens;
                a = $(`<a href="/wiki/${link}">`).text(text);

            } else {
                let link = matchTokens[0];
                a = $(`<a href="/wiki/${link}">`).text(link);
            }

            let replacementHTML = a.get()[0].outerHTML;
            text = text.replace(fullMatch, replacementHTML);
        }
    }
}