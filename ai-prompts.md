# AI-промпти та коментарі

## Використаний prompt для AI

Прохання згенерувати код для Node.js Express-застосунку та Docker-інфраструктури, що відповідає таким завданням:

1) Створити multi-stage Dockerfile, який встановлює залежності та будує додаток у різних етапах, містить лише production-залежності та запускається не від root-користувача.
2) Створити `docker-compose.yml` для додатку та PostgreSQL зі змінними середовища та томом для даних.
3) Створити `.dockerignore`.
4) Створити Express-сервіс автентифікації з `POST /login`, що повертає JWT access-токен, middleware `authenticate` для перевірки Bearer-токена, middleware `authorize(role)` для RBAC, та `GET /admin`, доступний лише для `admin`.
5) Написати Jest-тести для `calculateDiscount`, які покривають vip, regular, невідомий тип, `price === 0` та відʼємну ціну.
6) Переглянути та відрефакторити legacy-функцію JavaScript, визначити code smells.

## Коментарі до внесених змін

- Додано явні файли `package.json` та прості реалізації Express-застосунків у каталозі `task1-docker`.
- Зроблено `Dockerfile`, який використовує non-root `appuser` та залишає у фінальному образі лише production-залежності.
- Додано `docker-compose.yml` з PostgreSQL-сервісом, змінними середовища та persistent volume.
- Реалізовано JWT-автентифікацію з хешуванням паролів через `bcrypt` в `task2-auth`.
- Написано Jest-тести в `task3-tests` та перевірено, що вони проходять.
- Додано структурований prompt у `task4-refactor/prompt.txt`, задокументовано code smells та відрефакторовано код у `task4-refactor/refactor.js`.
