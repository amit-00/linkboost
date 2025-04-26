---
title: Linkboost
nav_order: 1
---

# LinkBoost

A smart, lightweight link-in-bio tool tailored for niche creators (e.g., book reviewers, tech gadget reviewers, indie musicians). LinkBoost integrates affiliate links, dynamic content embeds, conversion tracking, and AI-powered optimization suggestions to help creators maximize revenue and engagement.

---

## Features

- **Custom Link Pages**: Build a personalized landing page of links with template choices.
- **Affiliate Integration**: Automatically track affiliate revenue via UTM parameters or redirect links.
- **Dynamic Embeds**: Showcase live content—latest tweets, YouTube videos, Spotify embeds, and more.
- **Conversion Tracking**: Monitor clicks and conversion events for each link.
- **AI Optimization Tips**: Receive actionable suggestions (e.g., swap underperforming links, reorder for CTR) to boost performance.
- **Analytics Dashboard**: View click metrics, traffic sources, and conversion rates in one place.

---

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/linkboost.git
   cd linkboost
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   - Copy `.env.example` to `.env`
   - Set your database URL, auth keys, and analytics keys in `.env`

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build && npm start
   ```

---

## Usage

1. Sign up or log in via email or social OAuth.
2. Create a new page and add your links.
3. Connect affiliate accounts or UTM configurations.
4. Customize your page layout and embed blocks.
5. Share your `/linkboost/{username}` URL and monitor performance.

---

## Contributing

Contributions are welcome! Please open issues or pull requests for feature requests, bug fixes, or improvements.

---

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
