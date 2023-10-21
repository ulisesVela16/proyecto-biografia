const fileInput = document.getElementById("file-input");
        const profileImage = document.getElementById("profile-image");
        
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const objectURL = URL.createObjectURL(file);
                profileImage.src = objectURL;
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            const descargarBtn = document.getElementById("descargarBtn");
    
            descargarBtn.addEventListener("click", function (e) {
                const confirmacion = confirm("¿Estás seguro de que deseas descargar tu currículum?");
                if (!confirmacion) {
                    e.preventDefault(); // Evita que el enlace se abra si el usuario no confirma
                }
            });
        });