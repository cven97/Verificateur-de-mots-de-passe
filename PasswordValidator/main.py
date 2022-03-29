from calendar import leapdays


def verifPasswd(passwd:str):
    if 8 <= len(passwd) and len(passwd) <= 15 :
        specialLetter = False
        upperLetter = False
        digitLetter = False
        lowerLetter = False
        n = 0

        for letter in passwd :
            if(letter.isdigit() and digitLetter == False):
                digitLetter = True
                n += 1
                # print("numeric")
            else:
                if(letter.isupper() and upperLetter == False):
                    upperLetter = True
                    n += 1
                    # print("upper")
                
                if(letter.islower() and lowerLetter == False):
                    lowerLetter = True
                    n += 1
                    # print("lower")

                caractereSpecial = {"@","\"","#"}

                if(letter in caractereSpecial and specialLetter == False):
                    specialLetter = True
                    n += 1
                    # print("special "+letter)
            if(n == 4):
                break
        return(n)
    else:
        return 0

def niveauRobustess(val):
    if( val <= 1):
        print("Faible")
    else :
        if( val == 2):
            print("moyen")
        else:
            if( val == 3):
                print("fort")
            else :
                print("très fort")
    

print(niveauRobustess(verifPasswd("""loppAp11""")))