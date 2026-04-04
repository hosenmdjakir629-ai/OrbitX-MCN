import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/send-confirmation", async (req, res) => {
    const { email, name, method, transactionId, amount } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Lazy initialization of transporter
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn("SMTP configuration is missing. Email will not be sent.");
      return res.status(500).json({ error: "Email service not configured. Please check environment variables." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"OrbitX MCN Billing" <${smtpUser}>`,
        to: email,
        subject: `Payment Receipt - ${transactionId}`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; color: #333; line-height: 1.6; border: 1px solid #f0f0f0; border-radius: 16px; background-color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #7c3aed; margin: 0; font-size: 28px; letter-spacing: -0.5px;">OrbitX MCN</h1>
              <p style="color: #9ca3af; font-size: 14px; margin-top: 5px;">Official Payment Receipt</p>
            </div>
            
            <div style="border-bottom: 2px solid #f4f4f5; padding-bottom: 20px; margin-bottom: 30px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="flex: 1;">
                  <p style="margin: 0; font-size: 12px; color: #71717a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Receipt For</p>
                  <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: 600; color: #18181b;">${name}</p>
                  <p style="margin: 2px 0 0 0; font-size: 14px; color: #71717a;">${email}</p>
                </div>
                <div style="flex: 1; text-align: right;">
                  <p style="margin: 0; font-size: 12px; color: #71717a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Date Paid</p>
                  <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: 600; color: #18181b;">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <thead>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <th style="text-align: left; padding: 12px 0; font-size: 12px; color: #71717a; text-transform: uppercase; font-weight: bold;">Description</th>
                  <th style="text-align: right; padding: 12px 0; font-size: 12px; color: #71717a; text-transform: uppercase; font-weight: bold;">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 20px 0; vertical-align: top;">
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #18181b;">OrbitX MCN Joining Fee</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #71717a;">One-time channel integration and growth support fee.</p>
                  </td>
                  <td style="padding: 20px 0; text-align: right; vertical-align: top; font-size: 15px; font-weight: 600; color: #18181b;">
                    ${amount}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr style="border-top: 2px solid #f4f4f5;">
                  <td style="padding: 20px 0; font-size: 16px; font-weight: bold; color: #18181b;">Total Paid</td>
                  <td style="padding: 20px 0; text-align: right; font-size: 20px; font-weight: bold; color: #7c3aed;">${amount}</td>
                </tr>
              </tfoot>
            </table>

            <div style="background-color: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 30px;">
              <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: bold; color: #18181b; text-transform: uppercase; letter-spacing: 0.5px;">Transaction Details</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                  <p style="margin: 0; font-size: 11px; color: #71717a; text-transform: uppercase; font-weight: bold;">Payment Method</p>
                  <p style="margin: 4px 0 0 0; font-size: 14px; font-weight: 600; color: #18181b;">${method.toUpperCase()}</p>
                </div>
                <div>
                  <p style="margin: 0; font-size: 11px; color: #71717a; text-transform: uppercase; font-weight: bold;">Transaction ID</p>
                  <p style="margin: 4px 0 0 0; font-size: 14px; font-weight: 600; color: #18181b;">${transactionId}</p>
                </div>
              </div>
            </div>

            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #f4f4f5;">
              <p style="margin: 0; font-size: 14px; color: #71717a;">Our team is currently verifying your transaction. You will receive an activation email within 1-2 hours.</p>
              <div style="margin-top: 25px;">
                <a href="https://wa.me/8801927694437" style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 14px;">Chat with Support on WhatsApp</a>
              </div>
            </div>

            <div style="text-align: center; margin-top: 40px;">
              <p style="margin: 0; font-size: 12px; color: #a1a1aa;">&copy; 2026 OrbitX MCN. All rights reserved.</p>
              <p style="margin: 5px 0 0 0; font-size: 11px; color: #d4d4d8;">This is an automated receipt. No signature required.</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
