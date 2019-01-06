const pixelPainter = (function () {
    // VARIABLES
    const container = document.getElementById('pixelPainter');
    const grid = document.createElement('div');
    grid.className = 'grid';

    const palette = document.createElement('div');
    palette.className = 'palette';
    container.appendChild(palette);



    // COLOR PALETTE
    const colors = [
        '#f4858e',
        '#bf32ca',
        '#a6daef',
        '#d0e2ec',
        '#fed88f',
        '#ffffff'
    ];

    // GENERATES A CANVAS
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
        return grid;
    };

    container.appendChild(canvas(24, 25));

    //TOOLS CONTAINER
    const tools = document.createElement('div');
    tools.className = 'tools';
    grid.appendChild(tools);

    //TOOL BUTTONS
    function toolButtons(name) {
        let b = document.createElement('div');
        b.className = 'name';
        b.id = 'button';
        b.innerHTML = name;
        tools.appendChild(b);
    }

    toolButtons('save');
    toolButtons('load');
    toolButtons('clear');
    toolButtons('erase');


    // FUNCTIONS

    // Paints pixels one-by-one
    const paintPixels = () => {
        this.style.backgroundColor = mainColor;

    }
})()