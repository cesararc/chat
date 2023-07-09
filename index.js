document.getElementById("myForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Evita el comportamiento predeterminado del formulario
	
	var name = document.getElementById("nameInput").value;
	var gender = document.getElementById("genderInput").value;
	var location = document.getElementById("locationInput").value;
	var audience = document.getElementById("audienceInput").value;
	var niche = document.getElementById("nicheInput").value;
  
	var text = `¡Por supuesto! Aquí tienes una versión actualizada del párrafo de texto donde se combina el objetivo de ganar seguidores y tener más actividad en una sola variable:\n\n"¡Hola! Soy ${name}, un ${gender} influencer especializado/a en ${niche}. Actualmente, me encuentro en ${location}. Estoy buscando una solución personalizada en el ámbito del marketing digital para potenciar mi presencia en línea y lograr mi objetivo de aumentar la visibilidad y la interacción en mis plataformas. Mi meta es conectar con ${audience} en ${location} y generar un impacto significativo en su vida. Necesito una estrategia de marketing digital que se adapte culturalmente a mi público objetivo, aprovechando tácticas y canales adecuados para lograr resultados tangibles en mi región. ¿Podrías ayudarme a desarrollar un plan de marketing digital efectivo que tome en cuenta mi ${niche}, y esté en sintonía con las preferencias y la cultura de mi audiencia local en ${location}, para así aumentar mi comunidad y la actividad en mis redes sociales? ¡Estoy emocionado/a de colaborar contigo y llevar mi influencia al siguiente nivel en el mundo digital!"`;
  
	document.write(text);
  
	const apiKey = "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";
	const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";
  
	const requestOptions = {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${apiKey}`
	  },
	  body: JSON.stringify({
		prompt: text,
		max_tokens: 2048,
		temperature: 1,
	  })
	};
  
	fetch(apiUrl, requestOptions)
	  .then(response => response.json())
	  .then(data => {
		var responseText = "La respuesta es: " + data.choices[0].text.toUpperCase();
		document.getElementById("response").textContent = responseText;
	  })
	  .catch(error => {
		console.error("Error:", error);
	  });
  });
  