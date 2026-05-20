
## Структура проекту

- `task1-docker/`
  - `app.js`  простий Express-сервер
  - `package.json`  залежності проекту
  - `Dockerfile`  multi-stage Docker образ
  - `docker-compose.yml`  сервіс додатку + PostgreSQL
  - `.dockerignore`  ігноровані файли для Docker
  - `README.md`  опис завдання
  - `.gitignore`  ігноровані локальні файли

- `task2-auth/`
  - `app.js`  сервер з JWT і middleware
  - `package.json`  залежності проекту
  - `README.md`  опис завдання
  - `.gitignore`  ігноровані локальні файли

- `task3-tests/`
  - `discount.js`  реалізація функції знижки
  - `discount.test.js`  Jest-тести
  - `package.json`  залежності для Jest
  - `README.md`  опис завдання
  - `.gitignore`  ігноровані локальні файли

- `task4-refactor/`
  - `prompt.md`  структурований промпт для AI-рецензії коду
  - `refactor.js`  відрефакторована функція
  - `code-smells.md`  список знайдених проблем
  - `README.md`  опис завдання
  - `.gitignore`  ігноровані локальні файли

- `ai-prompts.md`  повний опис використаних AI-промптів українською
- `ai-prompt-log.txt`  лог промптів та коментарів

## Що було зроблено

### Завдання 1 — Docker та контейнеризація
- Створено Express-застосунок, що слухає порт `3000`.
- Написано multi-stage `Dockerfile`.
- Забезпечено, щоб у фінальному образі були тільки production-залежності.
- Налаштовано запуск із не-root користувачем.
- Додано `docker-compose.yml` для запуску додатку разом із PostgreSQL.
- Додано `.dockerignore`.

### Завдання 2 — Автентифікація та авторизація
- Реалізовано `POST /login`, що повертає JWT з полями `userId` і `role`.
- Реалізовано middleware `authenticate` для перевірки `Authorization: Bearer <token>`.
- Реалізовано middleware `authorize(role)` для ролей (RBAC).
- Створено захищений ендпоінт `GET /admin`, доступний лише для `admin`.
- Паролі збережено в хешованому вигляді з `bcrypt`.

### Завдання 3 — Тестування (Jest)
- Написано функцію `calculateDiscount`.
- Створено Jest-тести для випадків:
  - `vip` знижка;
  - `regular` знижка;
  - невідомий тип клієнта;
  - граничний випадок `price === 0`;
  - помилка для негативної ціни.
- Тести пройшли успішно.

### Завдання 4  AI code review та рефакторинг
- Підготовлено структурований промпт для AI-рецензії коду.
- Виявлено code smells та описано їх у `code-smells.md`.
- Виконано рефакторинг функції з використанням сучасного JavaScript (`const`/`let`, `filter`, `map`, строгі порівняння).
- Документовано AI-промпти українською в `ai-prompts.md`.
