# Выкачиваем из dockerhub образ с python версии 3.9
FROM python:3.12.5-alpine3.20
# Устанавливаем рабочую директорию для проекта в контейнере
WORKDIR /api
# Скачиваем/обновляем необходимые библиотеки для проекта 
COPY requirements.txt /api
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . /api
# CMD ["gunicorn", "app", "--bind", "0.0.0.0:443", "--worker-class=gevent", "--workers=3"]
#CMD ["gunicorn", "loft", "--bind", "0.0.0.0:443"]
CMD ["gunicorn", "api.wsgi:application", "--bind", "0.0.0.0:80"]