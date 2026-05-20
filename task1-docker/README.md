# Завдання 1 — Docker та контейнеризація

Простий Express-застосунок, який слухає порт `3000`.

## Файли
- `app.js` — основний Express-сервер
- `package.json` — залежності
- `Dockerfile` — multi-stage образ
- `docker-compose.yml` — сервіс додатку і PostgreSQL
- `.dockerignore` — ігноровані файли при збірці Docker

## Запуск
1. `docker compose build`
2. `docker compose up`

Сервер буде доступний на `http://localhost:3000`.
