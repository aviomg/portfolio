"""
URL configuration for personal_website project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import static
from posts.views import crochet_page
from django.views.generic import TemplateView

#urlpatterns = [
 #   path('admin/', admin.site.urls),
#]
#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#urlpatterns = [
 #   path('index/pages/crochet/', crochet_page, name='crochet'),
#]


urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html"), name='home'),
    path('blog/', TemplateView.as_view(template_name="pages/blog.html"), name='blog'),
    path('crochet/', TemplateView.as_view(template_name="pages/crochet.html"), name='crochet'),
    path('notes/', TemplateView.as_view(template_name="pages/notes.html"), name='notes'),
    path('writing/', TemplateView.as_view(template_name="pages/entries.html"), name='entries'),
]