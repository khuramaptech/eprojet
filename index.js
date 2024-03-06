function createRightAngleTriangle(height) {

    for (let i = 0; i < height; i++) {
        let triangleRow = '';

        for (let j = 0; j < height - i- 1; j++){
            triangleRow += ' ';
        }
        document.write("<br>");

        for(let k = 0; k < 2 * i + 1 ; k++){
            triangleRow = '*';
        } 
        document.write("<br>");
        document.write(triangleRow);     
    } 
}
const triangleHeight = prompt("Enter a number");
createRightAngleTriangle(triangleHeight);

