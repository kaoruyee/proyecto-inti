from django.db import models

class Ficha(models.Model):
    nombre = models.CharField(max_length=100)
    rut = models.CharField(max_length=12)
    fecha_nacimiento = models.DateField()
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=15)
    apoderado = models.CharField(max_length=100)
    telefono_apoderado = models.CharField(max_length=15)
    talla_polera = models.CharField(max_length=10)
    talla_pantalon = models.CharField(max_length=10)
    talla_zapato = models.CharField(max_length=10)

class Noticia(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    imagen = models.ImageField(upload_to='noticias/', null=True, blank=True)
    fecha = models.DateTimeField(auto_now_add=True)