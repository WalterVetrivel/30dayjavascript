const API_ENDPOINT = `https://restcountries.eu/rest/v2/name/`;

const countryInput = document.getElementById('country');
const suggestionDiv = document.querySelector('.suggestions');
const searchButton = document.querySelector('.search-button');
const searchResultsDiv = document.querySelector('.search-results');

const getCountries = async name => {
	if (name) {
		const url = API_ENDPOINT + name;
		try {
			const response = await axios.get(url);
			const countryNames = response.data.map(country => {
				return {
					name: country.name,
					capital: country.capital,
					population: country.population
				};
			});
			return countryNames;
		} catch (err) {
			return null;
		}
	} else {
		return null;
	}
};

const getCountrySuggestions = async event => {
	const name = event.target.value;
	const countries = await getCountries(name);
	if (countries) {
		const suggestions = countries.map(country => {
			let displayName = country.name;
			const index = country.name.toLowerCase().indexOf(name.toLowerCase());
			if (index > -1) {
				const part1 = country.name.slice(0, index);
				const highlightPart = country.name.slice(index, index + name.length);
				const part2 = country.name.slice(
					index + name.length,
					country.name.length
				);
				displayName = `${part1}<span class="highlight">${highlightPart}</span>${part2}`;
			}
			return `<p class="suggestion">${displayName}</p>`;
		});
		suggestionDiv.innerHTML = suggestions.join('');
	} else {
		suggestionDiv.innerHTML = null;
	}
};

const setCountryName = event => {
	const name = event.target.innerText;
	countryInput.value = name;
	suggestionDiv.innerHTML = `<p class="suggestion">${name}</p>`;
};

const searchCountries = async event => {
	const name = countryInput.value;
	const countries = await getCountries(name);
	const countryData = countries.map(
		country => `<div class="search-result">
		<p><b>Name: </b>${country.name}</p>
		<p><b>Capital: </b>${country.capital}</p>
		<p><b>Population: </b>${country.population.toLocaleString()}</p>
	</div>`
	);
	searchResultsDiv.innerHTML = countryData.join('');
	suggestionDiv.innerHTML = null;
};

countryInput.addEventListener('keyup', getCountrySuggestions);
suggestionDiv.addEventListener('click', setCountryName);
searchButton.addEventListener('click', searchCountries);
