document.addEventListener('DOMContentLoaded', () => {
    const createRow = () => {
        const parent = document.getElementById('parent');
        const row = document.createElement('div');
        row.className = "row";
        parent.appendChild(row);
        return row;
    };

    const createElement = parent => {
        const item = document.createElement('div');
        item.className = "item";
        parent.appendChild(item);
    };

    for (let i = 0; i < 24; i++) {
        const row = createRow();
        for (let k = 0; k < 7; k++) {
            createElement(row);
        }
    }

    const items = document.querySelectorAll('.item');
    items.forEach(links => {
        links.addEventListener('mousedown', e => {
            e.target.classList.toggle('active');
            mouseMove();
        });

        links.addEventListener('mouseup', e => {
            e.target.classList.add('active');
            !mouseMove();
        });
    });

    const mouseMove = () => {
        document.addEventListener('mouseover', e => {
            e.target.classList.toggle('active');
        });
    };
});