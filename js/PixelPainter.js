const pixelPainter = (function () {
    //VARIABLES
    let mainBody = document.getElementById('pixelPainter');
    let aColor; // active color choice
    let pixels = document.getElementsByClassName('pixel'); //selects the whole canvas
    let arr = [];
    //CHECKS/CONFIRMS MOUSE ACTIVITY
    let mouseDown = false;


    //GRID GENERATOR
    getGrid = (height, width, label) => {
        const grid = document.createElement('div');
        grid.id = 'grid';
        for (let i = 0; i < height; i++) {
            let row = document.createElement('div');
            row.className = "row";
            grid.appendChild(row);
            for (let j = 0; j < width; j++) {
                let pixel = document.createElement('div');
                pixel.className = label;
                row.appendChild(pixel);
            }
        }
        return grid;
    }
    //CONTAINER FOR SWATCHES + TOOLS
    let toolBox = document.createElement('div');
    toolBox.id = 'toolbox';
    mainBody.appendChild(toolBox);

    mainBody.appendChild(getGrid(24, 26, 'pixel')); //MAIN CANVAS

    //COLOR PALETTE
    let swatchTitle = document.createElement('h2');
    swatchTitle.innerHTML = 'swatches!';
    toolBox.appendChild(swatchTitle);
    toolBox.appendChild(getGrid(4, 5, 'palette'));
    const color = [
        '#f4858e',
        '#bf32ca',
        '#a6daef',
        '#d0e2ec',
        '#fed88f',
        '#e75555',
        '#a9e185',
        '#3B3B58',
        '#f4df62',
        '#f47cbf',
        '#960200',
        '#CF9893',
        '#80FFE8',
        '#3E4E50',
        '#7A5980',
        '#FFD046',
        '#F4EBBE',
        '#63C7B2',
        '#F4743B',
        '#EA1744'
    ];
    // Assigns swatches based on 'color' array
    let paletteSwatch = document.getElementsByClassName('palette');
    for (let i = 0; i < paletteSwatch.length; i++) {
        paletteSwatch[i].style.backgroundColor = color[i];
        paletteSwatch[i].id = color[i];
        paletteSwatch[i].addEventListener('click', (x) => {
            aColor = x.target.id;
            console.log(aColor + ' is currently selected!');
        })
    }

    //TOOLS
    let tools = document.createElement('div');
    let toolTitle = document.createElement('h3');
    toolTitle.innerHTML = 'tools!';
    toolBox.appendChild(toolTitle);
    tools.className = 'tools';
    toolBox.appendChild(tools);

    // CREATES BUTTONS + CLICK EVENTS
    document.body.onmousedown = (e) => {
        buttonClick(e.target);
    }

    buttonClick = (b) => {
        switch (b.id) {
            case 'save':
                savePixels();
                break;
            case 'load':
                loadPixels();
                break;
            case 'clear':
                clear();
                break;
            case 'erase':
                erase();
                break;
        }
    }

    toolButtons = (name) => {
        let b = document.createElement('div');
        b.className = 'button';
        b.id = name;
        b.innerHTML = name;
        let button = document.getElementsByClassName('button');
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', buttonClick);
        }
        tools.appendChild(b);
    }
    toolButtons('save');
    toolButtons('load');
    toolButtons('clear');
    toolButtons('erase');

    //PAINTING
    document.onmousedown = (e) => {
        mouseDown = true;
        colorPaint(e.target);
    }
    colorPaint = (e) => {
        if (e.className === 'pixel') {
            e.style.backgroundColor = aColor;
        }
    }
    document.onmouseup = (e) => unClick(e.target);
    unClick = (e) => mouseDown = false;

    document.onmousemove = (e) => dragColor(e.target);
    dragColor = (e) => {
        if (mouseDown && e.className === 'pixel') {
            e.style.backgroundColor = aColor;
        }
    }

    //BUTTON FUNCTIONS
    erase = () => aColor = '#ffffff';
    clear = () => {
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = 'white';
        }
    }
    savePixels = () => {
        arr = [];
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor;
            arr.push(pixels[i].style.backgroundColor);
        }
    }
    loadPixels = () => {
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = arr[i];
        }
    }


})()