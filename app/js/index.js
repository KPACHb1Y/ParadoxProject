// document.addEventListener('DOMContentLoaded', () => {
//     const createRow = () => {
//         const parent = document.getElementById('parent');
//         const row = document.createElement('div');
//         const p = document.createElement('p');
//         const dayArray = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
//         for (let i = 0; i < day) {
//
//         }
//         dayArray.map((item, i) => {
//             console.log(i);
//             p.innerHTML = item;
//         });
//         row.className = "row";
//         parent.appendChild(row);
//         row.appendChild(p);
//         return row;
//     };
//
//     const createElement = parent => {
//         const item = document.createElement('div');
//         item.className = "item";
//         parent.appendChild(item);
//     };
//
//     for (let i = 0; i < 7; i++) {
//         const row = createRow();
//         for (let k = 0; k < 16; k++) {
//             createElement(row);
//         }
//     }
//
//
//
// });

const items = document.querySelectorAll('.item');
items.forEach(links => {
    links.addEventListener('click', e => {
        if (!e.ctrlKey) {
            (!e.target.classList.contains('active'))
                ? e.target.classList.add('active')
                : e.target.classList.remove('active');
        }
    });
});