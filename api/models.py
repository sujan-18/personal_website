from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.CharField(max_length=500, help_text="Comma-separated technologies")
    link = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)

    def __str__(self):
        return self.title

class CV(models.Model):
    version_name = models.CharField(max_length=100)
    file = models.FileField(upload_to='cv/')
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.is_active:
            # Set all other CVs to inactive
            CV.objects.filter(is_active=True).update(is_active=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.version_name} ({'Active' if self.is_active else 'Inactive'})"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"

class Profile(models.Model):
    name = models.CharField(max_length=100, default="John Developer")
    about_me = models.TextField()
    
    def __str__(self):
        return self.name
