function makeLine(size) {
    let line = "";

    for (i = 0; i < size; i++){
        line += "#";
    }
    return line;
}

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLine(size);
        if (i < size - 1) {
            square += '\n';
        }
    }
    return square;
}

function makeRectangle(width,hieght) {
    let rectangle = '';
    for (let i = 0; i < hieght; i++) {
        rectangle += makeLine(width);
    if  (i < hieght - 1) {
            rectangle += '\n';  
        }
    }
    return rectangle;
}

function makeDownwardStairs(height){
    let downStair = "";
    for (i = 0; i < height + 1; i++){
        downStair += makeLine(i);
    if (i < height){
        downStair += "\n";
    }
    }
    return downStair;
}

function makeSpaceLine(numSpaces,numChars){
    let spaceLine = "";

    for (let i = 0; i < numSpaces; i++){
        spaceLine += " ";
    }

    for (let i = 0; i < numChars; i++){
        spaceLine += "#";
    }

    for (let i = 0; i < numSpaces; i++){
        spaceLine += " ";
    }

        return spaceLine;
    }
  
function makeIsoscelesTriangle(height){
    let isoscelesTriangle = ""
    for (let i = 0; i < height; i++){
        isoscelesTriangle += makeSpaceLine(height - i - 1, i*2 + 1)
        if (i < height){
            isoscelesTriangle += "\n";
        } 
    }
    return isoscelesTriangle;
}

console.log(makeIsoscelesTriangle());