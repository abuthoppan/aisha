# AISHA

**AI for Software Heuristics and Automation**

> Think Leaner. Build Smarter. Ship Faster.

AISHA is an open-source blog and resource hub for solution architects, startup builders, and tech leads who want practical frameworks, lean documentation patterns, and AI integration guides — without the enterprise bloat.

🌐 **Live site:** [abuthoppan.github.io/aisha](https://abuthoppan.github.io/aisha)

---

## What's inside

| Section | Description |
|---|---|
| 📐 [The LSF Framework](/framework/) | A five-phase lean framework for planning, building, and operating products |
| 📝 [Tutorials](/blog/) | Practical architecture guides written in plain language |
| 🤖 AI Integration | Patterns for embedding AI into real products and workflows |
| ⚡ Lean Process | Just-enough documentation and governance for fast teams |

---

## Built with

- **Jekyll** — static site generator, runs natively on GitHub Pages
- **GitHub Pages** — free hosting, automatic builds on every push
- **Mailchimp** — newsletter subscribe (via JSONP, no backend needed)
- **Vanilla JS** — no frameworks, fast and dependency-free

---

## Getting started locally

### Prerequisites
- Ruby 3.0+
- Bundler (`gem install bundler`)

### Run locally

```bash
git clone https://github.com/yourusername/aisha.git
cd aisha
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000)

---

## Configuration

Edit `_config.yml` to set your details:

```yaml
title: AISHA
url: "https://yourusername.github.io"
baseurl: "/aisha"

author:
  name: "Your Name"
  email: "you@example.com"

mailchimp:
  action_url: ""  # Paste your Mailchimp form action URL here
```

---

## Writing posts

Create a new Markdown file in `_posts/` following this naming convention:

```
_posts/YYYY-MM-DD-your-post-title.md
```

With this front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-03-01
categories: [Architecture]       # Architecture, Framework, AI, Design, Automation
tags: [lean, startup, heuristics]
read_time: 8                      # estimated minutes
excerpt: "One sentence summary shown in post cards."
---

Your post content in Markdown here...
```

Push to `main` — GitHub Pages builds and deploys automatically within ~60 seconds.

---

## Deploying to GitHub Pages

1. Create a new GitHub repository named `aisha` (or your preferred name)
2. Update `_config.yml` — set `url` and `baseurl` to match your repo
3. Push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/aisha.git
   git push -u origin main
   ```
4. Go to **Settings → Pages → Source** → set to `Deploy from branch: main`
5. Your site will be live at `https://yourusername.github.io/aisha`

### Custom domain (optional)

1. Add a `CNAME` file to the root with your domain: `aisha.blog`
2. Set `url` in `_config.yml` to `https://aisha.blog` and `baseurl` to `""`
3. Configure your DNS with your domain registrar

---

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Ways to contribute:
- 📝 Write a tutorial post
- 🐛 Fix a bug or typo
- 🎨 Improve the design
- 📐 Extend the LSF framework

---

## Licence

- **Code & Theme** — [GPL v2](LICENSE)
- **Content & Framework** — [CC BY 4.0](LICENSE-CONTENT)

---

*AISHA — AI for Software Heuristics and Automation*
