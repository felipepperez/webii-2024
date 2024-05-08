const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.imitate.email",
    port: "587",
    auth: {
        user: '8f1e87f6-050d-42fd-b3bf-018e34f40a57',
        pass: 'ae2217e7-a259-40da-a0fb-ca579014cafb'
    },
    secureConnection: false,
    tls: {
        ciphers:'SSLv3'
    }
});

const email = {
    from: "felipe.perez@unigran.br",
    to: "felipe.perez@unigran.br",
    subject: "Teste de Email",
    text: "Teste de email utilizando nodemailer e imitate email"
};

transporter.sendMail(email, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
})