from rest_framework import viewsets
from .models import Ficha, Noticia
from .serializers import FichaSerializer, NoticiaSerializer

class FichaViewSet(viewsets.ModelViewSet):
    queryset = Ficha.objects.all()
    serializer_class = FichaSerializer

class NoticiaViewSet(viewsets.ModelViewSet):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer