const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zroger@gmail.com',  
        pass: 'minecraf103'    
    }
});

app.post('/submit-message', (req, res) => {
    const { name, email, message } = req.body;

   
    const mailOptions = {
        from: email,  
        to: 'zroger093@gmail.com',    
        subject: `New message from ${name}`,  
        text: `You have received a new message from ${name} (${email}):\n\n${message}`  
    };

 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.json({ success: false, message: 'Failed to send message' });
        }
        console.log('Email sent:', info.response);
        res.json({ success: true, message: 'Message sent successfully' });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
