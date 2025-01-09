function performSearch() {
    const query = document.getElementById('search-box').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const sampleData = [
        { title: "GitHub Pages Guide", url: "https://pages.github.com" },
        { title: "HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
        { title: "CSS Styling", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS" }
    ];

    const filteredResults = sampleData.filter(item =>
        item.title.toLowerCase().includes(query)
    );

    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        filteredResults.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result';
            resultElement.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
            resultsContainer.appendChild(resultElement);
        });
    }
}