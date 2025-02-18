# Next.js Discord Webhook Integration

This project demonstrates how to integrate Discord webhooks with a Next.js 15 application to send user-submitted data directly to a Discord text channel.

## Features
- User-friendly form for submitting messages
- Integration with Discord webhooks to send data
- Real-time feedback using React 19's `useActionState` hook
- Toast notifications for success/error messages
- Built with Next.js 15, Tailwind CSS, and Turbopack

## Prerequisites
- Node.js installed
- Discord account with admin access to a server

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/next-js-discord.git
cd next-js-discord
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Configure Discord Webhook
- Go to your Discord server settings.
- Select a text channel and navigate to **Integrations > Webhooks**.
- Create a new webhook and copy the webhook URL.

### 4. Add Environment Variables
- Create a `.env` file in the project root.
```plaintext
DISCORD_WEBHOOK_URL=<YOUR_DISCORD_WEBHOOK_URL>
```
- Add `.env` to your `.gitignore` to prevent it from being committed.

### 5. Run the Project
```bash
yarn dev
```
- Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
app/
  |_ _components/
  |    |_ message-form.jsx
  |_ actions/
  |    |_ index.js
  |_ layout.js
  |_ page.js
.env
.gitignore
```

## Usage
- Fill out the form with your details and message.
- Submit the form to send the message to the configured Discord channel.
- Receive instant feedback via toast notifications.

## Dependencies
- Next.js 15
- React 19
- Tailwind CSS
- sonner (for toast notifications)

## Contributing
- Fork the repository.
- Create a new branch.
- Commit your changes.
- Open a pull request.

## License
This project is licensed under the MIT License.

## Author
[Tapas Adhikary](https://github.com/tapasadhikary)  
Demand-Stack Developer, Open Source Enthusiast, Writer.

---

> Inspired by the [freeCodeCamp](https://www.freecodecamp.org) tutorial on integrating Discord webhooks