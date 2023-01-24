const nodemailer = require("nodemailer");
const emailTemplate = require("email-templates");
const path = require("node:path");

const { ServerError } = require("../errors/ApiError");
const { NO_REPLY_EMAIL, NO_REPLY_PASS, FRONTEND_URL } = process.env;
const templatesInfo = require("../emailTemplates");

const sendMail = async (receiverEmail, emailType, locals = {}) => {
  const templateParser = new emailTemplate({
    views: {
      root: path.join(global.rootPath, "emailTemplates"),
    },
  });

  const templateConfigue = templatesInfo[emailType];

  if (!templateConfigue) {
    throw new ServerError("Wrong template name");
  }

  Object.assign(locals || {}, { frontendURL: FRONTEND_URL });

  const html = await templateParser.render(
    templateConfigue.templateName,
    locals
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NO_REPLY_EMAIL,
      pass: NO_REPLY_PASS,
    },
  });

  return transporter.sendMail({
    from: "No reply Rocket2",
    to: receiverEmail,
    subject: templateConfigue.subject,
    html,
  });
};

module.exports = sendMail;
