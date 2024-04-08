

const generateEmailContent = (quote, author) => {
    const emailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Your Email Title</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #1f1f1f;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #222222;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
          color: #f1c40f;
          font-size: 28px;
          margin-bottom: 20px;
          text-align: center;
        }
        p {
          color: #ffffff;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 10px;
        }
        .quote {
          font-style: italic;
          color: #f1c40f;
        }
        .author {
          color: #f1c40f;
          text-align: right;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #f1c40f;
          color: #222222;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Your Daily Quote</h1>
        <p class="quote">"${quote}"</p>
        <p class="author">- ${author}</p>
        <p>Hello, this is your daily quote. Enjoy!</p>
        <a href="#" class="button">Visit Our Website</a>
      </div>
      <div class="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </body>
    </html>
    `;

    return emailTemplate;
}

module.exports = generateEmailContent