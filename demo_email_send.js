var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    //service: 'gmail',
    auth: {
        user: 'panta.swagat@gmail.com',
        pass: 'hyybgewdhxgcarsf'
    }
});

var mailOptions = {
    from: 'panta.swagat@gmail.com',
    to: 'er.swagat7@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was straight forward!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});









