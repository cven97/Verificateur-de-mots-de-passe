from urllib import request

from django.shortcuts import render
from .main import verifPasswd, niveauRobustess


def home(request):
    resultat = ''   
    password = ''
    bgColor = 'bg-white'
    txtColor = "text-black"
    color_niveau_password = "text-danger"
    if request.method == "POST":
        password = request.POST.get("passwd") 
        niveau = verifPasswd(password)
        txtColor = "text-white"
        if( niveau <= 1):
            resultat = "Faible"
            bgColor = 'bg-danger'
        else :
            if( niveau == 2):
                resultat = "Moyen"
                color_niveau_password = "text-warning"
                bgColor = 'bg-warning'
            else:
                if( niveau == 3):
                    resultat = "Fort"
                    color_niveau_password = "text-success"
                    bgColor = 'bg-success'
                else :
                    resultat = "Très fort"
                    color_niveau_password = "text-success"
                    bgColor = 'bg-success'


    return render(request,"home.html",context={"Value":resultat, "color2":bgColor, "color3":txtColor, "value2":password, "color":color_niveau_password})
