# Generated by Django 5.0.7 on 2024-07-21 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Обращения', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='message',
            field=models.CharField(blank=True, max_length=1000000, verbose_name='Сообщение'),
        ),
        migrations.AlterField(
            model_name='application',
            name='name',
            field=models.CharField(max_length=50, verbose_name='Имя пользователя'),
        ),
    ]
