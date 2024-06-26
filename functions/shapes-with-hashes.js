//Make a line of length (size)
function makeLine(size) {
    let line = "";

    for (i = 0; i < size; i++){
        line += "#";
    }
    return line;
}

//Make a square of size (size)
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

//Make a rectangle of size (width,hieght) 
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

//Make downstairs of size (size)
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

//Make space+char+space of size (numSpaces,numChars)
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
  
//Make isosceles triangle of size (height)
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

//Make the bottom of a diamond fo size (height)
function makeBottomOfDiamond(height){
    let diamondBottom = ""
    for (let i = 0; i < height; i++){
        diamondBottom += makeSpaceLine(i + 1, height*2 - (2 * i) - 3) 
        if (i < height - 1){
            diamondBottom += "\n";
    }
}
return diamondBottom;

}

//Make the full diamond of size (height)
function makeDiamond(height){
    let Diamond = ""
    Diamond += makeIsoscelesTriangle(height);
    Diamond += makeBottomOfDiamond(height);
    return Diamond;
}

console.log(makeDiamond(10));