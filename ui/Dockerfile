FROM node:22-alpine3.20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем необходимые инструменты для сборки
RUN apk add --no-cache \
    autoconf \
    automake \
    build-base \
    libtool \
    nasm \
    pkgconfig \
    zlib-dev


# Устанавливаем зависимости
RUN npm install --omit=dev

# Копируем остальные файлы проекта
COPY . /app

# Устанавливаем команду запуска
CMD ["npm", "run", "ssr:start"]