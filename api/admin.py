from django.contrib import admin
from .models import Project, CV, ContactMessage, Profile

admin.site.register(Project)
admin.site.register(CV)
admin.site.register(ContactMessage)
admin.site.register(Profile)
