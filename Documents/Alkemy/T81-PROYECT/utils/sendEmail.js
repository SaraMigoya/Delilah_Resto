const sgMail = require("@sendgrid/mail");
const config = require(__dirname + "/../config/config").development;

const logger = require("../utils/logger");

const { Organization } = require("../models/index");
const publicFields = ["id", "name", "image", "phone", "address"];

const sendEmail = async(email) => {
  sgMail.setApiKey(config.sendgridKey);

  const organization = await Organization.getOrganizationPublic(publicFields);

  const msg = {
    to: email,
    from: config.sendgridEmail,
    templateId: config.sendgridTemplateId,
    dynamic_template_data: {
    subject: "Confirmation of your registration in ONG",
    title: "Welcome to Ong-Alkemy",
    textEmail:
      "We inform you that your registration in our ONG has been successful, we invite you to click on the following link to confirm your email",
    ong: organization.name,
    phone: organization.phone,
    address: organization.address,
  }};

  sgMail
    .send(msg)
    .then((res) => console.log("Email sent..."))
    .catch((err) => console.log(err.message));
};

module.exports = sendEmail;
