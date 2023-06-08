function Csuszka(){
    szam1 = document.getElementById("csuszka1").value;
    document.getElementById("lbl1").innerHTML = szam1;

    szam2 = document.getElementById("csuszka2").value;
    document.getElementById("lbl2").innerHTML = szam2;
}


function Loop(){
    if(document.getElementById(btnSazmozott).checked){
        ujol = document.createElement("ol");
    
        szamlalo = 0;
        while(szamlalo != 5){
            document.appendChild("li").value = szam1;
            szamlalo++;
            szam1++;
        }
    }

    else{
        ujul = document.createElement("ul");
    
        szamlalo = 0;
        while(szamlalo != 5){
            document.appendChild("li").szam2;
            szamlalo++;
            szam2++;
        }
    }
}


