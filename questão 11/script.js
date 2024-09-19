/*function converterParaSegundos(nHoras) {
    return nHoras * 3600; // 1 hora = 3600 segundos!!!!
}
*/
let horas = (prompt("Digite a quantidade de horas:"));


const converterParaSegundos = (nHoras) => nHoras * 3600;
console.log(converterParaSegundos(horas) + " segundos.");