from rest_framework import viewsets, views, status, permissions
from rest_framework.response import Response
from .models import Project, CV, ContactMessage, Profile
from .serializers import ProjectSerializer, CVSerializer, ContactMessageSerializer
import random

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class CVViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CV.objects.filter(is_active=True)
    serializer_class = CVSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

class ChatbotView(views.APIView):
    def post(self, request):
        user_message = request.data.get('message', '').lower()
        
        # 1. Check strict context
        # If message doesn't contain relevant keywords, refuse to answer
        # But we must be careful not to be too strict. 
        # For now, let's try to match against project names or general profile keywords.
        
        projects = Project.objects.all()
        project_names = [p.title.lower() for p in projects]
        profile = Profile.objects.first()
        
        relevant_keywords = ['project', 'work', 'skill', 'contact', 'email', 'about', 'who', 'hi', 'hello', 'hey', 'malla']
        relevant_keywords += project_names
        
        is_relevant = any(keyword in user_message for keyword in relevant_keywords)
        
        if not is_relevant:
            return Response({
                "response": "I have no idea about that. Please ask me about my projects, skills, or professional background."
            })
            
        # 2. Logic for generating response
        response_text = ""
        
        if 'hello' in user_message or 'hi' in user_message or 'hey' in user_message:
             response_text = "Hi there! I'm Malla, Sujan's personal assistant. Ask me anything about Sujan's projects or skills."
             
        elif 'project' in user_message or 'work' in user_message:
            if projects.exists():
                proj_list = ", ".join([p.title for p in projects])
                response_text = f"I have worked on several exciting projects including: {proj_list}. Which one would you like to know more about?"
            else:
                response_text = "I haven't uploaded any projects yet, but I'm working on some cool stuff!"
                
        elif any(name in user_message for name in project_names):
            # Find specific project
            for p in projects:
                if p.title.lower() in user_message:
                    response_text = f"{p.title} is {p.description}. It uses {p.tech_stack}."
                    break
                    
        elif 'contact' in user_message or 'email' in user_message:
            response_text = "You can get in touch via the form below, or email directly at hello@portfolio.com."
            
        elif 'about' in user_message or 'who' in user_message:
            if profile:
                response_text = profile.about_me
            else:
                response_text = "I am a Full Stack Developer passionate about building great software."
                
        else:
             response_text = "I can tell you about my projects and skills. What would you like to know?"

        return Response({"response": response_text})
