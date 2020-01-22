document.addEventListener('DOMContentLoaded', () => {
    for (var i = 0; i < 24; i++) {
        var row = createRow();
        for (var k = 0; k < 7; k++) {
            createElement(row);
        };
    };

    function createRow() {
        var parent = document.getElementById('parent');
        var row = document.createElement('div');
        row.className = "row";
        parent.appendChild(row);
        return row;
    }

    function createElement(parent) {
        var item = document.createElement('div');
        item.className = "item";
        parent.appendChild(item);
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