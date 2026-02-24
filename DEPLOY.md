# 🚀 Juan Gervasoni Portfolio — Deployment Guide

## What's inside

- React + Vite portfolio site
- **Decap CMS** at `/admin` — edit your content visually, no code needed
- Content lives in `public/content.json` — editable via the CMS
- Netlify-ready config included

---

## Step 1 — Push to GitHub (one time only)

1. Go to [github.com](https://github.com) → sign up / log in (free)
2. Click **New Repository** → name it `portfolio` → click **Create**
3. On your computer, extract this zip
4. Open a terminal in that folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

## Step 2 — Deploy to Netlify (one time only)

1. Go to [netlify.com](https://netlify.com) → sign up with GitHub (free)
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** → select your `portfolio` repo
4. Build settings will auto-detect from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site** — your site will be live in ~2 minutes!

---

## Step 3 — Enable the CMS (one time only)

1. In Netlify dashboard → **Site configuration → Identity** → click **Enable Identity**
2. Under **Registration** → set to **Invite only** (so only you can log in)
3. Under **Services → Git Gateway** → click **Enable Git Gateway**
4. Go to **Identity → Invite users** → enter your email → send invite
5. Check your email, accept the invite, set a password

---

## Step 4 — Using the CMS to update content

1. Go to `https://yoursite.netlify.app/admin`
2. Log in with your email/password
3. Click **Site Settings**:
   - **About Me** — edit your bio, headline, photo URL, years of experience
   - **Portfolio Projects** — add/edit/remove projects, paste YouTube or Vimeo links
4. Click **Save** → Netlify automatically rebuilds your site in ~1 minute ✅

---

## Adding a new portfolio project (day-to-day workflow)

1. Upload your video to **YouTube** or **Vimeo** (or it's already there)
2. Copy the video URL
3. Go to `yoursite.netlify.app/admin`
4. Open **Site Settings → Portfolio Projects**
5. Click **Add item** at the bottom
6. Fill in: Title, Category, Thumbnail URL, Video URL, Description, Tags
7. Click **Save** — done! Live in ~60 seconds.

---

## Tips

- **Thumbnail images**: Use a direct image URL. You can upload to [imgbb.com](https://imgbb.com) for free and paste the URL.
- **YouTube**: paste the full URL like `https://www.youtube.com/watch?v=abc123`
- **Vimeo**: paste the full URL like `https://vimeo.com/123456789`
- Both will embed directly in the portfolio card.
