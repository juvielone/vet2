const nodeMailer = require("nodemailer");

async function sendEmail(updatedApm) {
  const givenDate = new Date(updatedApm.date)
    .toUTCString()
    .split(" ")
    .slice(0, 4)
    .join(" ");

  const html = `
<h1> Hello World </h1>
<p> Welocme to Pet Town!</p>
`;

  const newUserEmail = `
<h1> Welcome to Pet Town! </h1>
<p>Welcome to our Pet Town! We are thrilled to have you on board and look forward to getting to know you better.
Your appointment is pending, please wait for further notice. Thank you.
</p>
<img src="cid:unique@nodemailer.com"/>`;

  const approveEmail = `
<h1> Appointment Approved! </h1>
<p> I am pleased to inform you that your appointment has been approved. 
We look forward to meeting with you on ${givenDate} at Pet Town.</p>
<img src="cid:unique@nodemailer.com"/>`;

  const rejectEmail = `
<h1> Appointment Cancelled </h1>
<p> I regret to inform you that we have had to cancel your appointment that was scheduled for ${givenDate} at Pet Town.</p>
<p> We apologize for any inconvenience this may have caused and would like to reschedule your appointment at the earliest convenience.
 Please contact us at your earliest convenience to reschedule your appointment</p>
 <img src="cid:unique@nodemailer.com"/>`;

  var defaultEmailMsg = html;
  if (updatedApm.apmStatus == "Pending") {
    defaultEmailMsg = newUserEmail;
  } else if (updatedApm.apmStatus == "Approved") {
    defaultEmailMsg = approveEmail;
  } else {
    defaultEmailMsg = rejectEmail;
  }
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "pettown.clinic@gmail.com",
      // pass: "pettown_clinic22",
      pass: "gyoxlubcgspyxgeu",
    },
  });

  const info = await transporter.sendMail({
    from: "Pet Town Clinic <pettown.clinic@gmail.com>",
    to: updatedApm.email,
    subject: "Pet Town Notification",
    html: defaultEmailMsg,
    attachments: [
      {
        filename: "shopname.png",
        path: __dirname + "/shopname.png",
        cid: "unique@nodemailer.com", //same cid value as in the html img src
      },
    ],
  });

  console.log("Message sent: " + info.messageId);
}

// main().catch((e) => console.log(e));

module.exports = sendEmail;
