const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// search states.json and filter it

const searchStates = async searchText => {
    const res = await fetch('../data/states.json');
    const states = await res.json();

    // get matches to current text input
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);

    });

    if(searchText.length === 0) {
        matches = [];
        matchList.innerHTML = ''; //this clears the list results when the input field is empty
    }

   outputHtml(matches);

};

// Show results in HTML
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
        <div class="fade-in card card-body mb-1">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
        <small>lat: ${match.lat} / Long: ${match.long}</small>
        </div> 
        `).join('');
        matchList.innerHTML =html;
        //console.log(html);
    }
}

search.addEventListener('input', () => searchStates(search.value));