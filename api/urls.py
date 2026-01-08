from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, CVViewSet, ContactMessageViewSet, ChatbotView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'cv', CVViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('chat/', ChatbotView.as_view(), name='chat'),
]
