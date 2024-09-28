#FROM nginx:latest
# Используем официальный образ Node.js в качестве базового
FROM node:22-alpine3.20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY dist/server .

# Устанавливаем команду запуска
CMD ["npm", "run", "serve:ssr"]