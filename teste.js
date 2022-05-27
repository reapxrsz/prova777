function fatorial(numero)
{
    let a = 1;
    for(let i = numero; i > 1 ; i--)
    {
        a *= i
    }
    return a;
}
console.log(fatorial(5));