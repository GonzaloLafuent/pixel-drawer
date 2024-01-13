const grid = document.querySelector(".grid");
const grid_width = 600;
const grid_height = 600;

let click = 0;
let color = "";

const range_input = document.querySelector(".range-selector");
const range_value = document.querySelector(".range");

const color_selector = document.querySelector(".color-selector");

const btn_pintar_fondo = document.querySelector(".boton-pintar-fondo");
const btn_borrar_todo = document.querySelector(".boton-borrar-todo");
const btn_borrar = document.querySelector(".boton-borrar");

function calcSquareSize(total_squares){
    let square_area = (grid_width * grid_height)/Math.pow(total_squares,2)
    return Math.sqrt(square_area);
}

function createGrid(total_squares){
    let square_size = calcSquareSize(total_squares)-2.01;
    console.log(square_size);
    for (let index = 0; index<total_squares*total_squares; index++) {
        let sketch_square = document.createElement("div");
        sketch_square.setAttribute("class","square");
        sketch_square.setAttribute("style","width: "+square_size+"px;height: "+square_size+"px; background-color:white ;border: 0.1px solid grey; flex-shrink:4; margin:0");

        sketch_square.addEventListener("click",()=>{
            if(click==0)
                sketch_square.style.backgroundColor = color;
            click = click==0? 1:0;
            console.log(click);
        })

        sketch_square.addEventListener("mouseover",()=>{
            if(click==1)
                sketch_square.style.backgroundColor = color;
        });
    

        grid.append(sketch_square);
    }
}


function deleteGrid(){
    const squares_grid = document.querySelectorAll(".square");
    squares_grid.forEach(square=> {
        grid.removeChild(square);
    });
}

function addDragMotion(){
    range_value.textContent = range_input.value;
    range_input.addEventListener("input",(e)=>{
        range_value.textContent = e.target.value;
        deleteGrid();
        createGrid(e.target.value);
    });
}

function addColorSelectorInput(){
    color_selector.addEventListener("input",(e)=>{
        color = e.target.value;
    });
}

function addBotonPintarFondo(){
    btn_pintar_fondo.addEventListener("click",()=>{
        const squares_grid = document.querySelectorAll(".square");
        squares_grid.forEach(square => {
            square.style.backgroundColor = color;
        });
    });
}

function addBotonBorrarTodo(){
    btn_borrar_todo.addEventListener("click",()=>{
        const squares_grid = document.querySelectorAll(".square");
        squares_grid.forEach(square => {
            square.style.backgroundColor = "white"; 
        });
    });
}

function addBotonBorrar(){
    btn_borrar.addEventListener("click",()=>{
        color = "white";
        click--;
    });
}

function init(){
    color = color_selector.value;
    click = 0;

    color_selector.value = "red";
    range_input.value = 16;

    createGrid(16); 
    addDragMotion();
    addColorSelectorInput();
    addBotonPintarFondo();
    addBotonBorrarTodo();
    addBotonBorrar();
}

init();



