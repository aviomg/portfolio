from django.db import models

# Create your models here.
class Posts(models.Model):
    title = models.CharField(max_length=400)
    date = models.DateField(blank=True)
    images = models.JSONField()
    caption = models.TextField()

    def __str__(self):
        return self.title
