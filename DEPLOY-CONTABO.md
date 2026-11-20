# Deploy Digitaura on a Contabo Server

This project is a **Vite + React** static site. On Contabo you build it once, then serve the `dist/` folder with **Nginx**.

## Requirements

- Contabo VPS (Ubuntu 22.04 or 24.04 recommended)
- Domain pointed to your server IP (A record)
- SSH access as `root` or a sudo user
- Node.js **18+** on the server (or build locally and upload `dist/`)

Replace placeholders:

| Placeholder | Example |
|-------------|---------|
| `YOUR_DOMAIN` | `digitaura.com` |
| `YOUR_SERVER_IP` | `185.xxx.xxx.xxx` |
| `YOUR_REPO_URL` | `https://github.com/you/digitaura.git` |

---

## 1. Point your domain

In your DNS panel, create:

```
Type: A
Name: @          (or www)
Value: YOUR_SERVER_IP
TTL: 300 (or default)
```

Optional: add a second A record for `www` → same IP.

Wait until DNS resolves:

```bash
ping YOUR_DOMAIN
```

---

## 2. Connect to the Contabo VPS

```bash
ssh root@YOUR_SERVER_IP
```

Update the system:

```bash
apt update && apt upgrade -y
```

---

## 3. Install Node.js, Nginx, and Git

```bash
# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs git nginx

node -v
npm -v
```

Enable Nginx:

```bash
systemctl enable nginx
systemctl start nginx
```

---

## 4. Open firewall ports

Contabo servers often use `ufw`:

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
ufw status
```

If you use Contabo’s panel firewall instead, allow **22**, **80**, and **443**.

---

## 5. Clone and build the project

```bash
mkdir -p /var/www
cd /var/www
git clone YOUR_REPO_URL digitaura
cd digitaura

npm ci
npm run build
```

The production files are in:

```
/var/www/digitaura/dist
```

Set ownership for Nginx:

```bash
chown -R www-data:www-data /var/www/digitaura/dist
```

---

## 6. Configure Nginx (SPA-friendly)

React Router uses `BrowserRouter`, so every unknown path must fall back to `index.html`.

Create the site config:

```bash
nano /etc/nginx/sites-available/digitaura
```

Paste:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name YOUR_DOMAIN www.YOUR_DOMAIN;

    root /var/www/digitaura/dist;
    index index.html;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1000;

    # Cache hashed assets from Vite
    location /assets/ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable the site and reload Nginx:

```bash
ln -s /etc/nginx/sites-available/digitaura /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

Visit `http://YOUR_DOMAIN` — the site should load.

---

## 7. Add HTTPS (Let’s Encrypt)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN
```

Follow the prompts. Certbot will update the Nginx config and set up auto-renewal.

Test renewal:

```bash
certbot renew --dry-run
```

---

## 8. Redeploy after code changes

On the server:

```bash
cd /var/www/digitaura
git pull
npm ci
npm run build
chown -R www-data:www-data /var/www/digitaura/dist
systemctl reload nginx
```

### Optional: one-command deploy script

```bash
nano /var/www/digitaura/deploy.sh
```

```bash
#!/usr/bin/env bash
set -euo pipefail
cd /var/www/digitaura
git pull
npm ci
npm run build
chown -R www-data:www-data dist
systemctl reload nginx
echo "Deploy complete."
```

```bash
chmod +x /var/www/digitaura/deploy.sh
./deploy.sh
```

---

## Alternative: build locally, upload `dist/`

If you prefer not to install Node on the server:

**On your PC:**

```bash
npm ci
npm run build
```

**Upload** (example with `scp`):

```bash
scp -r dist/* root@YOUR_SERVER_IP:/var/www/digitaura/dist/
```

Then on the server:

```bash
chown -R www-data:www-data /var/www/digitaura/dist
systemctl reload nginx
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 502 / blank page | Check `nginx -t` and `journalctl -u nginx -n 50` |
| Routes 404 on refresh | Ensure `try_files $uri $uri/ /index.html;` is present |
| Permission denied | `chown -R www-data:www-data /var/www/digitaura/dist` |
| SSL fails | Confirm DNS A record points to the Contabo IP first |
| Old assets after deploy | Hard refresh (Ctrl+F5) or clear CDN/browser cache |

Check Nginx error log:

```bash
tail -f /var/log/nginx/error.log
```

---

## Quick checklist

1. [ ] Contabo VPS created, SSH works  
2. [ ] Domain A record → server IP  
3. [ ] Node.js, Git, Nginx installed  
4. [ ] Firewall: 22, 80, 443  
5. [ ] `npm run build` → files in `/var/www/digitaura/dist`  
6. [ ] Nginx SPA config enabled  
7. [ ] Certbot HTTPS active  
8. [ ] Site loads at `https://YOUR_DOMAIN`  

---

## Stack summary

| Layer | Tool |
|-------|------|
| App | Vite + React + TypeScript |
| Build output | `dist/` |
| Web server | Nginx |
| SSL | Let’s Encrypt (Certbot) |
| Host | Contabo VPS |
