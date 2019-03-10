var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "z.devtest.costa@gmail.com",
		pass: "Z.Dev_Test.Costa98"
	}
});

// For multiple receivers, separate them by a comma (,) in the `to` property
// To send HTML instead of plain text, use the `html` property instead of `text`
var mailOptions = {
	from: "z.devtest.costa@gmail.com",
	to: "jose.fernando.costa.1998@gmail.com",
	subject: "Test Node.JS Email",
	text: "Email sent using Node.JS and the Nodemailer module"
};

transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	}
	else {
		console.log("Email sent to", info.envelope["to"]);
	}
})

// `info` object example
/*
{ accepted: [ 'jose.fernando.costa.1998@gmail.com' ],
  rejected: [],
  envelopeTime: 276,
  messageTime: 520,
  messageSize: 338,
  response: '250 2.0.0 OK 1548261417 a132sm67996740wmh.5 - gsmtp',
  envelope:
   { from: 'z.devtest.costa@gmail.com',
     to: [ 'jose.fernando.costa.1998@gmail.com' ] },
  messageId: '<614f13ca-4786-b8fd-d7b3-a68eb66c9cf7@gmail.com>' }
*/