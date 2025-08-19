# assignment-contentllc

## Информация о проекте

- **React**
- **TypeScript**
- **Redux Toolkit**
- **SASS (Scss)**
- **Webpack**
- **ESLint**

## Настройка проекта

```bash
npm ci
```

## Режим разработки

```bash
npm run dev
```

## Сборка проекта

```bash
npm run build
```

## Линтинг

```bash
npm run lint
```

## Структура проекта
```
.
|-- public/                 # Публичные ассеты
|-- src/
|   |-- api/                # API запросы
|   |-- components/         # Компоненты
|   |   |-- layout/         # Каркасные элементы
|   |   `-- ui/             # UI элементы
|   |-- hooks/              # Кастомные хуки
|   |-- pages/              # Страницы
|   |-- providers/          # Провайдеры
|   |-- store/              # Redux хранилище
|   |-- styles/             # SCSS-переменные и глобальные стили
|   |-- types/              # Общие TypeScript типы
|   `-- main.tsx            # Точка входа
|
|-- index.html              # HTML-шаблон
|-- package.json            # Зависимости и скрипты
|-- eslint.config.js        # ESLint конфигурация
|-- tsconfig.json           # TypeScript конфигурация
`-- webpack.config.cjs      # Webpack конфигурация
```
