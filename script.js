fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        let videoContainer = document.getElementById("videoContainer");
        if (data.videoID) {
            videoContainer.innerHTML = `
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/${data.videoID}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>`;
        } else {
            console.error("ID del video no encontrado en data.json");
        }
    })
    .catch(error => console.error("Error cargando el video:", error));
