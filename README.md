# Quote of the Day Application

This application sends a quote to the registered user each day.

# Backend

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HUMBLEF0OL/quote-of-the-day.git
   ```

2. Install dependencies:

   ```bash
   cd quote-of-the-day
   cd backend
   npm install
   ```

3. Database connection:

   Make sure to create a database in mongodb

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open a web browser and visit `http://localhost:5000` to view the application.

## Configuration

Create .env file

   ```
   QUOTABLE_END_POINT = 'https://api.quotable.io/quotes'
   PORT=5000
   DB_URL=your_database_url
   EMAIL_ID=authenticator email id(make sure to update the host in nodemailer according to mail service provider)
   KEY=application specific key(needs to be created for gmail account)
   # ACCOUNT_SID=secret_id for twillio account (*in case you want to use it)
   AUTH_TOKEN=token for twillio account
```

# Frontend

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HUMBLEF0OL/quote-of-the-day.git
   ```

2. Install dependencies:

   ```bash
   cd quote-of-the-day
   cd frontend
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm run dev
   ```

2. Open a web browser and visit `http://localhost:3000` to view the application.

3. Register a user:

   Use the application's interface to register a user.

4. Daily quote:

   The application will automatically send a quote to the registered user each day.

## Configuration

Create .env file

   ```
   BROWSER=none
   NEXT_PUBLIC_API_URL=http://localhost:5000
```



## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.
