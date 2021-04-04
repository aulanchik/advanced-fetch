const form = document.getElementById('uploadForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    uploadFiles(this);

    const uploadFiles = (data) => {
        const formData = new FormData();
        const files = data.querySelector('input[type="file"]').files;

        for(let i = 0; i < files.length; i++) {
            formData.append(`fileInput_${i}`, files[i]);
        }
        
        // files.forEach(file => {
        //     formData.append(file);
        // });


        const uploadPromise = await fetch(`https://httpbin.org/post`, {
            method: 'POST',
            body: formData
        })

        if(uploadPromise.ok) {
            const uploadResponse = await uploadPromise.json();
            console.log(`Response: `, uploadResponse);
        } else {
            console.log(`Status: `, uploadPromise.status);
        }
    }
})