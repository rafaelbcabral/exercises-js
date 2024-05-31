/* const data = new Date();
console.log(data.toString()); */

/* const data = new Date(2019,3, 5, 7, 8, 4); // a, m, d, h, M, s ms
or const data = new Date('2019-04-20 20:20:59'); */

/* console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1); // month in Js starts from 0 (January) to 11 (December) -- with +1, starts normal
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Sunday to 6 - Saturday */

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() +1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);




