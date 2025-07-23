const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/form', (req, res) => {
    res.json({
        name: 'Contact Form',
        description: 'A simple contact form.',
        fields: [
            { label: 'Name', type: 'text' },
            { label: 'Email', type: 'email' },
            { label: 'Message', type: 'textarea' }
        ]
    });
});

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));