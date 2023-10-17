const fileInput = document.getElementById("file-input");
        const profileImage = document.getElementById("profile-image");
        
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const objectURL = URL.createObjectURL(file);
                profileImage.src = objectURL;
            }
        });