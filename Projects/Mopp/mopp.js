async function fetchText() {
    const url = document.getElementById('url').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Loading...';

    try {
        let text = await fetchAndExtractText(url);
        text = filterText(text); // Apply the junk sweeper
        resultDiv.textContent = text;
    } catch (error) {
        resultDiv.textContent = 'Error fetching the text. Please check the URL and try again.';
    }
}

async function fetchAndExtractText(url, visited = new Set()) {
    if (visited.has(url)) {
        return '';
    }
    visited.add(url);

    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        let extractedText = doc.body.innerText;

        // Find all links on the page
        const links = Array.from(doc.querySelectorAll('a[href]'))
            .map(link => link.href)
            .filter(href => href.startsWith('http'));

        // Recursively fetch text from linked pages
        for (const link of links) {
            extractedText += await fetchAndExtractText(link, visited);
        }

        return extractedText;
    } catch (error) {
        console.error('Error fetching URL:', url, error);
        return '';
    }
}

function filterText(text) {
    const unwantedWords = ['junk', 'unwanted', 'spam']; // Add words or phrases to filter out
    let filteredText = text;

    unwantedWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        filteredText = filteredText.replace(regex, '');
    });

    return filteredText;
}