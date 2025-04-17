const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", document.documentElement.scrollTop > 0);
});
const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

if (searchButton && searchBar) {
    searchButton.addEventListener('click', () => {
        if (!searchBar.classList.contains('visible')) {
            searchBar.classList.add('visible');
            searchBar.classList.remove('hidden');
            searchBar.focus();
        } else {
            const query = searchBar.value.trim();
            if (query) {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}