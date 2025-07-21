const express = require("express");
const dotenv = require("dotenv");
const router = require("../routers/user");
const signupRouter = require("../routers/signupUser");
const nodemailer = require('nodemailer');

const todoRouter = require("../routers/todoRoute");
const cors = require("cors");

dotenv.config({ path: ".env" }); // adjust if config in root
let cron = require("node-cron")

const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
  console.error("Unhandled server error:", err);
  res.status(500).json({ error: err.message });
});



app.use(cors({
  origin: ["http://localhost:5173", "https://testing-git-main-singh-4as-projects.vercel.app"],
}));




// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: true, // true for 465, false for other ports
  auth: {
    user:process.env.ADMIN_EMAIL,
    pass:process.env.PASS,
  },
});

// Schedule: every Monday at 9 AM
// cron.schedule('* * * * *', sendEmail);

// Wrap in an async IIFE so we can use await.
async function sendEmail(email, name) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;margin:20px;border-radius:8px;overflow:hidden;">
              <tr style="background:#4CAF50;">
                <td style="padding:20px;text-align:center;color:#ffffff;font-size:24px;">
                  Welcome to  ${name}! 🎉
                </td>
              </tr>
              <tr>
                <td style="padding:20px;color:#333333;font-size:16px;line-height:1.5;">
                  <p>Hi ${name},</p>
                  <p>We’re thrilled to have you on board! Your account has been successfully created.</p>
                  <p>Here’s how to get started:</p>
                  <ul style="padding-left:20px;">
                    <li>✅ Explore your personalized dashboard</li>
                    <li>📚 Check out our Quick Start Guide</li>
                    <li>🎯 Dive into tools tailored just for you</li>
                  </ul>
                  <p style="text-align:center;margin:30px 0;">
                    <a href="https://yourapp.com/dashboard" style="background:#4CAF50;color:#ffffff;padding:12px 24px;text-decoration:none;border-radius:4px;font-weight:bold;">
                      Go to Dashboard
                    </a>
                  </p>
                  <p>Need help? Just reply to this email—we're here for you.</p>
                  <p>Cheers,<br>The Team</p>
                </td>
              </tr>
              <tr style="background:#f0f0f0;">
                <td style="padding:15px;text-align:center;font-size:12px;color:#777777;">
                  Inc. | <a href="https://yourapp.com/support" style="color:#777777;text-decoration:none;">Support</a> | <a href="https://yourapp.com/unsubscribe" style="color:#777777;text-decoration:none;">Unsubscribe</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const info = await transporter.sendMail({
    from: '"Singh" <singh1code@gmail.com>',
    to: email,
    subject: `Welcome to  ${name}!`,
    text: `Hi ${name}, welcome to  Your account is set up—log in to start exploring.`,
    html,
  });

  console.log("Email sent:", info.messageId);
}


// Schedule: every Monday at 9 AM
// cron.schedule('* * * * *', sendEmail);


app.use(express.json());
app.use("/api/v1/user", router);
app.use("/api/v1/auth", signupRouter);
app.use("/api/v1/todo", todoRouter);
app.get("/", (req, res) => res.send("Welcome my Api"));
app.use(cors());

// Export the app for Vercel to handle
module.exports = { app, sendEmail }


