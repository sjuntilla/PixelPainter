const pixelPainter = (function () {
    //VARIABLES
    let mainBody = document.getElementById('pixelPainter');
    let aColor; // active color choice

    //CHECKS/CONFIRMS MOUSE ACTIVITY
    let mouseDown = false;
    document.onmousedown = () => mouseDown = true;
    document.onmouseup = () => mouseDown = false;


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
    // Assigns swatches based on 'color' array.
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
    document.onmousedown = (e) => colorPaint(e.target);
    colorPaint = (e) => {
        if (e.className === 'pixel') {
            e.style.backgroundColor = aColor;
        }
    }
    document.onmouseover = (e) => dragColor(e.target);
    dragColor = (e) => {
        if (mouseDown && e.className === 'pixel') {
            e.style.backgroundColor = aColor;
        }
    }

    // // VARIABLES
    // let aColor;
    // let paintArr = [];
    // const container = document.getElementById('pixelPainter');

    // let pixels = document.getElementsByClassName('pixel');

    // //MOUSE EVENTS
    // let mouseDown = false;
    // document.body.onmouseup = () => mouseDown = false;
    // document.body.onmousedown = () => mouseDown = true;

    // // GENERATES A CANVAS
    // const canvas = (height, width) => {
    //     const grid = document.createElement('div');
    //     grid.className = 'grid';
    //     grid.id = 'grid';
    //     for (let i = 0; i < height; i++) {
    //         let row = document.createElement('div');
    //         row.className = "row";
    //         grid.appendChild(row);
    //         for (let j = 0; j < width; j++) {
    //             let pixel = document.createElement('div');
    //             pixel.className = "pixel";
    //             row.appendChild(pixel);
    //         }
    //     }
    //     return grid;
    // };

    // container.appendChild(canvas(24, 25)); // determines height + width of canvas


    // //TOOLS CONTAINER
    // const tools = document.createElement('div');
    // tools.className = 'tools';
    // grid.appendChild(tools);

    // //TOOL BUTTONS
    // buttonClick = (b) => {
    //     switch (b.id) {
    //         case 'save':
    //             savePixels();
    //             break;
    //         case 'load':
    //             loadPixels();
    //             break;
    //         case 'clear':
    //             clear();
    //             break;
    //         case 'erase':
    //             erase();
    //             break;
    //     }
    // }

    // toolButtons = (name) => {
    //     let b = document.createElement('div');
    //     b.className = 'button';
    //     b.id = name;
    //     b.innerHTML = name;
    //     tools.appendChild(b);
    // }

    // toolButtons('save');
    // toolButtons('load');
    // toolButtons('clear');
    // toolButtons('erase');


    // // COLOR PALETTE
    // const colors = [
    //     '#f4858e',
    //     '#bf32ca',
    //     '#a6daef',
    //     '#d0e2ec',
    //     '#fed88f',
    //     '#ffffff'
    // ];
    // let palette = document.createElement('div');
    // palette.className = 'palette';
    // const swatches = canvas(4, 2);
    // swatches.id = 'swatches';
    // container.appendChild(palette);
    // palette.appendChild(swatches);

    // // PAINTING FUNCTIONS
    // chooseColor = () => aColor = this.style.backgroundColor;
    // paintPic = () => this.className === 'pixel' ? this.style.backgroundColor = aColor : this.style.backgroundColor;
    // paintDrag = () => mouseDown && this.className === 'pixel' ? this.style.backgroundColor = aColor : this.style.backgroundColor;


    // // EVENT LISTENERS
    // for (let i = 0; i < pixels.length; i++) {
    //     pixels[i].addEventListener('click', paintPic);
    //     pixels[i].addEventListener('mouseover', paintDrag);
    // }
    // //LOAD
    // loadPixels = () => {
    //     let loaded = document.getElementsByClassName('pixel');
    //     console.log('HELLO?');
    // }
    // //SAVE
    // savePixels = () => {
    //     let saved = document.getElementsByClassName('pixel');
    //     paintArr.length = 0;
    //     saved.forEach(i => paintArr.push(i));
    //     // console.log(paintArr[0])
    //     console.log('HELLO????');
    // }

    // //CLEAR
    // clear = () => {
    //     let entireGrid = document.getElementsByClassName('pixels');
    //     for (let i = 0; i < entireGrid.length; i++) {
    //         entireGrid[i].style.backgroundColor = '#ffffff';
    //     }
    // }
    // // ERASER TOOL
    // erase = () => {
    //     aColor = '#ffffff';
    // }
})()