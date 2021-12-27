const sgMail = require("@sendgrid/mail");
const emailFrom = process.env.SENDGRID_EMAIL_CONTACT
sgMail.setApiKey(process.env.SENDGRID_API_KEY_CONTACT);

const sendEmailContact = async(email, name) => {

    const msg = {
        to: email,
        from: emailFrom,
        //templateId: config.sendgridTemplateId,
        subject: "Thank you for completing the form!",
        text:`Hello ${name}, thank you for completing the form! We are very happy that you are part of ONG-Somos más`
    }
    sgMail
        .send(msg)
        .then(() => console.log("Email sent..."))
        .catch((err) => console.log(err.message));
};

module.exports = { sendEmailContact };
