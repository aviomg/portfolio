from django.shortcuts import render
from .models import Posts
# Create your views here.

def crochet_page(request):
    posts = Posts.objects.all()
    return render(request, "crochet.html",{'posts':posts})
