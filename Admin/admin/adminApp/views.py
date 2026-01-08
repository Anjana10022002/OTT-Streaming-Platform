from django.shortcuts import render

def login_page(request):
    return render(request, './login.html')
def home_page(request):
    return render(request, './home.html')
def movielist_page(request):
    return render(request, './movielist.html')
def userlist_page(request):
    return render(request, './userlist.html')
def report_page(request):
    return render(request, './report.html')
def movieview_page(request):
    return render(request, './movieview.html')
def change_password(request):
    return render(request, './changepassword.html')