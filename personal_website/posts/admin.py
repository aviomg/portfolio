from django.contrib import admin
from .models import Posts

class PostAdmin(admin.ModelAdmin):
    fields = ('title', 'date', 'images', 'captions')

# Register your models here.
admin.site.register(Posts,PostAdmin)

