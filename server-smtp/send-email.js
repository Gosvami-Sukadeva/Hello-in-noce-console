const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 4321,
});
transporter.sendMail(
  {
    from:"bhakta666@gmail.com",
    to:"adusia.judyta@gmail.com",
    subject: "Hello",
    text: "Hello World!",
  },
  (err,info) => {
    if(err){
      console.log(err);
    }
    console.log("Message Sent:", info);
  }
);
