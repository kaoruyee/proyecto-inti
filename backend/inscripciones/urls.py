from rest_framework.routers import DefaultRouter
from .views import FichaViewSet, NoticiaViewSet

router = DefaultRouter()
router.register(r'fichas', FichaViewSet)
router.register(r'noticias', NoticiaViewSet)


urlpatterns = router.urls