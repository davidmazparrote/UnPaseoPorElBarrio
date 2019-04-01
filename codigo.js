function mostrarInfo(planeta){
    switch(planeta){


        case 'Sol':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/sol.jpg")');
            break;

            case 'Mercurio':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Mercurio.jpg")');
            
            break;

            case 'Venus':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Venus.png")');
            break;
            case 'Tierra':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Tierra.jpg")');
            break;
            case 'Marte':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Marte.jpg")');
            break;
            case 'Jupiter':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Jupiter.jpg")');
            break;
            case 'Saturno':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Saturno.jpg")');
            break;
            case 'Urano':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Urano.jpg")');
            break;
            case 'Neptuno':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Neptuno.jpg")');
            break;
            case 'Pluton':
            $('#info').css('display','inline-block');
            $('#info').css('background-image','url("PlanetasInfo/Pluton.jpg")');
            break;
            
    }
  
    
}
function ocultarInfo(){
    $('#info').css('display','none');
}