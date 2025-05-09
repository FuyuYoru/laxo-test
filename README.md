# Vue 3 + TypeScript + Vite + Pinia + TailwindCSS

## Установка и запуск

1. Для установки зависимостей выполните команду:
    ```bash
    npm install
    ```

2. Для запуска проекта используйте команду:
    ```bash
    npm run dev
    ```

> **Примечание**: В проекте не используются `env` переменные.

## Комментарии к коду

1. В проекте используется структура FSD (Feature-Sliced Design).

2. `sid` сохраняется в `localStorage`. Это решение было принято для упрощения процесса тестирования, чтобы не авторизовываться каждый раз. Для продакшн-версии я бы разумеется хранил `sid` на сервере.

3. В документации не было найдено ендпоинта получения данных о текущем пользователе через `sid`, поэтому реализация компонента "Профиль пользователя" отсутствует. В текущей реализации доступны только токен.

4. Почти все типы в интерфейсах указаны как `string`, поскольку сервер возвращает данные в этом формате. Если пытаться указать типы исходя из логики (например, для поля `id` использовать тип `number`), Vue начинает генерировать ошибки.

