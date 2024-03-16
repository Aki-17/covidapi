document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://data.covid19india.org/v4/min/timeseries.min.json';

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    };

    const displayData = (data) => {
        document.getElementById('total-cases').textContent = data.Global.TotalConfirmed;
        document.getElementById('total-deaths').textContent = data.Global.TotalDeaths;
        document.getElementById('total-recovered').textContent = data.Global.TotalRecovered;
    };

    fetchData()
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
});