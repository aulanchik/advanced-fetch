// Code snippet for uploading files using fetch API
const form = document.getElementById('uploadForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    uploadFile(this);
    
    const uploadFile = async(data) => {
        const formData = new FormData(data);

        const uploadPromise = await fetch(`https://httpbin.org/post`, {
            method: 'POST',
            body: formData
        });

        if (uploadFile.ok) {
            const uploadResponse = await uploadPromise.json();
            console.log(`Response: `, uploadResponse);
        } else {
            console.error(`Error: `, uploadPromise.status);
        }
    }
});