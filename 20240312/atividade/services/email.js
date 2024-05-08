const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.imitate.email",
    port: "587",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL
    },
    secureConnection: false,
    tls: {
        ciphers: 'SSLv3'
    }
});

const sendEmail = ({ to, subject, text }) => {
    const email = {
        from: "felipe.perez@unigran.br",
        to,
        subject,
        text
    };
    //console.log(email);
    transporter.sendMail(email, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    })
}

module.exports = { sendEmail }