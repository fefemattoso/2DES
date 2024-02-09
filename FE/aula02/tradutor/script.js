function translate() {
    const sourceText = document.getElementById('sourceText').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    const apiKey = 'AIzaSyDYAKx1swww4Fv2UCd0QWmLlXeV-jWZZcg'; // Substitua com sua chave de API do Google Cloud
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${AIzaSyDYAKx1swww4Fv2UCd0QWmLlXeV-jWZZcg}`;

    const data = {
        q: sourceText,
        target: targetLanguage,
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        const translatedText = result.data.translations[0].translatedText;
        document.getElementById('translatedText').innerText = translatedText;
    })
    .catch(error => console.error('Erro na tradução:', error));
}
