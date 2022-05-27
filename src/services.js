export function semaforo (cor) {
    let msg = " ";
    if( cor == "verde" ){
        msg = "Pode atravessar";
    }
    else if( cor == "vermelho"){
        msg = "Não atravesse";
    }
    else{
        msg = "inválido";
    }
    return msg;
}

export function diaSemana(dia) {
    let msg = "";

    if(dia > 6){
        msg = "dia invalido";
    }

    if(dia == 0 ){
        msg = "Domingo";
    }

    else if(dia == 1){
        msg = "Segunda";
    }
    else if(dia == 2){
        msg = "Terça"; 
    }
    else if(dia == 3){
        msg = "Quarta";
    }
    else if(dia == 4){
        msg = "Quinta";
    }
    else if(dia == 5){
        msg = "Sexta";
    }
    else if(dia == 6){
        msg = "Sabado";
    }
    return msg;
}

export function fatorial(numero)
{
    let a = 1;
    for(let i = numero; cont >= 1 ; cont--)
    {
        a *= numero
    }
    return a;
}

export function sequencia (limite){
    let array = [];
    let num = 0;
    for(let i = 0; i <limite; i++){
        array[i] = num *2;
        num++;
            console.log(i);
        }
    

    return array;

}