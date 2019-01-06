// VARIABLES
const container = document.getElementById('pixelPainter');

const canvas = (height, width) => {
    let grid = document.createElement('div');
    grid.className = "grid";
    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.className = "row";
        row.id = box;
        for (let x = 0; x < width; x++) {
            let col = document.createElement('div');
            col.className = 'col';
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
    return grid;
};

container.appendChild(canvas);