document.getElementById('calculo').onclick = converter;
var valor, valorC, valorF, valorK, valorR, opcao
function converter(){
    valor = document.getElementById('valor').value;
    opcao = document.getElementById('opções').value;
    if(opcao=='celsius'){
        valorF = (parseFloat(valor)*1.8)+32;
        valorK = (parseFloat(valor)+273.15)
        valorR = (parseFloat(valor)+273.15)*1.8;
        document.getElementById('cels').style.display = "none";
        document.getElementById('kelv').style.display = "block";
        document.getElementById('fahr').style.display = "block";
        document.getElementById('rank').style.display = "block";
    } else if(opcao=='fahrenheit'){
        valorC = (parseFloat(valor)-32)/1.8;
        valorK = parseFloat(valor-32)*(5/9) +273;
        valorR = (parseFloat(valor)+459.67);
        document.getElementById('cels').style.display = "block";
        document.getElementById('fahr').style.display = "none";
        document.getElementById('kelv').style.display = "block";
        document.getElementById('rank').style.display = "block";
    }else if(opcao=='kelvin'){
        valorC = (parseFloat(valor)-273);
        valorF = ((parseFloat(valor)-273)*1.8)+32;
        valorR = (parseFloat(valor)*1.8)
        document.getElementById('cels').style.display = "block";
        document.getElementById('fahr').style.display = "block";
        document.getElementById('kelv').style.display = "none";
        document.getElementById('rank').style.display = "block";
    }else if(opcao=='rankine'){
        valorC = (parseFloat(valor)/8)-273.15;
        valorF = (parseFloat(valor)-459.67);
        valorK = (parseFloat(valor)/1.8);
        document.getElementById('cels').style.display = "block";
        document.getElementById('fahr').style.display = "block";
        document.getElementById('kelv').style.display = "block";
        document.getElementById('rank').style.display = "none";
    }   
    document.getElementById("fahr").innerHTML = parseFloat(valorF).toFixed(2) +" °F";
    document.getElementById("cels").innerHTML = parseFloat(valorC).toFixed(2) +" °C";
    document.getElementById("kelv").innerHTML = parseFloat(valorK).toFixed(2)+" K";
    document.getElementById("rank").innerHTML = parseFloat(valorR).toFixed(2)+" °R";
}