
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()

username = 'admin'
email = 'admin@example.com'
password = 'password123'

if User.objects.filter(username=username).exists():
    print(f"User {username} found. Resetting password...")
    u = User.objects.get(username=username)
    u.set_password(password)
    u.save()
    print("Password reset successfully.")
else:
    print(f"User {username} not found. Creating...")
    User.objects.create_superuser(username, email, password)
    print("Superuser created successfully.")
