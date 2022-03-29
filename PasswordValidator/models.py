from django.db import models

class password(models.Model):
    contenu = models.CharField(max_length=25)
    date = models.DateField()
    description = models.CharField(max_length=100)
    stattut = models.CharField(max_length=20)

    