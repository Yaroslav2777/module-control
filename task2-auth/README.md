# Завдання 2 — Автентифікація та авторизація

Реалізовано JWT-аутентифікацію та RBAC для Node.js/Express.

## Файли
- `app.js` — сервер із кінцевими точками і middleware
- `package.json` — залежності

## Ендпоінти
- `POST /login` — отримати JWT за `email` і `password`
- `GET /admin` — захищений маршрут доступний лише для `admin`

## Запуск
1. `npm install`
2. `npm start`
