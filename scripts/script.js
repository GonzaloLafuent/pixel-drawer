const grid = document.querySelector(".grid");
const grid_width = 600;
const grid_height = 600;

const range_input = document.querySelector(".range-selector");
const range_value = document.querySelector(".range");

function calcSquareSize(total_squares){
    let square_area = (grid_width * grid_height)/Math.pow(total_squares,2)
    return Math.sqrt(square_area);
}

function createGrid(total_squares){
    let square_size = calcSquareSize(total_squares);
    console.log(square_size);
    for (let index = 0; index<total_squares*total_squares; index++) {
        let sketch_square = document.createElement("div");
        sketch_square.setAttribute("class","square");
        sketch_square.setAttribute("style","width: "+square_size+"px;height: "+square_size+"px; background-color:black ;flex-shrink: 4; color: white;")
        sketch_square.textContent = "10";
        grid.append(sketch_square);
    }
}

function deleteGrid(){
    for (let index = 0; index<total_squares*total_squares; index++) {
        let sketch_square = document.createElement("div");
        sketch_square.setAttribute("class","square");
        sketch_square.setAttribute("style","width: "+square_size+"px;height: "+square_size+"px; background-color:black ;flex-shrink: 4; color: white;")
        sketch_square.textContent = "10";
        grid.append(sketch_square);
    }
}

function addDragMotion(){
    range_value.textContent = range_input.value;
    range_input.addEventListener("input",(e)=>{
        range_value.textContent = e.target.value;
    });
}

createGrid(16);
addDragMotion();


