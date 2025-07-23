document.getElementById('fetchForm').addEventListener('submit','click', async () => {
    e.preventdefault();
    const form =e.target;
    const formData ={
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };
    const display = document.getElementById('formDisplay');
    display.textContent = 'Loading...';
    try {
        const response = await fetch('http://localhost:3000/api/form',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        alert('Form submitted succesfully!');
        form.reset();
        display.textContent = 'Form submitted';
        const data = await response.json();
        display.innerHTML = `
            <strong>Form Name:</strong> ${data.name}<br>
            <strong>Description:</strong> ${data.description}<br>
            <strong>Fields:</strong>
            <ul>
                ${data.fields.map(field => `<li>${field.label} (${field.type})</li>`).join('')}
            </ul>
        `;
    } catch (err) {
        display.textContent = 'Error fetching form data.';
    }
});