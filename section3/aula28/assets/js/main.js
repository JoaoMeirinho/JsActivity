// const title = document.querySelector("#title");
// const data = new Date();
// let dayWeek = data.getDay();
// let month = data.getMonth();
// let year = data.getFullYear();
// let hour = data.getHours();
// let min = data.getMinutes();

// const Format = {
//     formatFullDate : (dayWeek, month, year, hour, min) =>{
//         return `${dayWeek}, ${month} de ${year} às ${hour}:${min}`;
//     },
//     formatDayWeek : (dayWeek) =>{
//         switch (dayWeek){
//             case 0:
//             dayWeek = 'Domingo';
//             break;
//         case 1:
//             dayWeek = 'Segunda';
//             break;
//         case 2:
//             dayWeek = 'Terça';
//             break;
//         case 3:
//             dayWeek = 'Quarta';
//             break;
//         case 4:
//             dayWeek = 'Quinta';
//             break;
//         case 5:
//             dayWeek = 'Sexta';
//             break;
//         case 6:
//             dayWeek = 'Sábado';
//             break;
//         default:
//             dayWeek = ' - ';
//         }
//         return dayWeek;
//     },
//     formatMonth : (month) =>{
//         switch (month){
//             case 0:
//             month = 'Janeiro';
//             break;
//         case 1:
//             month = 'Fevereiro';
//             break;
//         case 2:
//             month = 'Março';
//             break;
//         case 3:
//             month = 'Abril';
//             break;
//         case 4:
//             month = 'Maio';
//             break;
//         case 5:
//             month = 'Junho';
//             break;
//         case 6:
//             month = 'Julho';
//             break;
//         case 7:
//             month = 'Agosto';
//             break;
//         case 8:
//             month = 'Setembro';
//             break;
//         case 9:
//             month = 'Outubro';
//             break;
//         case 10:
//             month = 'Novembro';
//             break;
//         case 11:
//             month = 'Dezembro';
//             break;
//         default:
//             month = ' - ';
//         }
//         return month
//     }
// }
// const dayWeekFormated = Format.formatDayWeek(dayWeek);
// const monthFormated = Format.formatMonth(month);
// const fullDate = Format.formatFullDate(dayWeekFormated,monthFormated,year,hour,min)
// title.innerHTML = fullDate;


const title = document.querySelector("#title");
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeName: 'short'
};

title.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

