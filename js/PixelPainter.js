// // VARIABLES
// const container = document.getElementById('pixelPainter');

// // generates a canvas 
// const canvas = (height, width) => {
//     for (let i = 0; i < height; i++) {
//         let row = document.createElement('div');
//         row.className = "row";
//         container.appendChild(row);
//         for (let j = 0; j < width; j++) {
//             let pixel = document.createElement('div');
//             pixel.className = "pixel";
//             row.appendChild(pixel);
//         }
//     }
//     return container;
// };

// container.appendChild(canvas(20, 20));

// VARIABLES
const container = document.getElementById('pixelPainter');

const grid = document.createElement('div');
grid.className = 'grid';
container.appendChild(grid);

// generates a canvas 
const canvas = (height, width) => {
    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.className = "row";
        grid.appendChild(row);
        for (let j = 0; j < width; j++) {
            let pixel = document.createElement('div');
            pixel.className = "pixel";
            row.appendChild(pixel);
        }
    }
    return container;
};

container.appendChild(canvas(27, 27));