const apiKey = "eb1fcd935ede98a7c4bcc9f082499981";

document.getElementById("weatherForm").addEventListener("submit", function(e){
    e.preventDefault(); // Adicionei os parênteses para invocar o método preventDefault()

    const city = document.getElementById('cityInput').value.trim(); // Removi um espaço em branco desnecessário

    if(city === ''){ // Usei '===' para verificar igualdade estrita
        alert('Por favor, digite o nome da cidade');
        return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => {
        if(!response.ok){ // Corrigi a condição negando a resposta
            throw new Error('Cidade não encontrada');
        }
        return response.json();
    })

    .then(data => {
        const location = data.name + ', ' + data.sys.country;
        const temperature = data.main.temp + '°C';
        const condition = data.weather[0].description;

        const weatherCard = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${location}</h5>
                    <p class="card-text">${temperature}</p>
                    <p class="card-text">${condition}</p>
                    <p class="card-text">Umidade: ${data.main.humidity}%</p> <!-- Corrigi a propriedade humidity -->
                </div>
            </div>
        </div>
        `;
        document.getElementById('weatherCards').innerHTML = weatherCard;
    })
    .catch(error => {
        alert(error.message);
        console.error('Erro ao buscar dados:', error); // Corrigi o método para exibir o erro no console
    });
});
