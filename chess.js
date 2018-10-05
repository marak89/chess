console.log('Welcome to Chess!');

var chessboard = '';
var size = 8;
for(var h=1;h<=size;h++){
    for(var v=1;v<=size;v++){
        if(h%2===0){
            if(v%2===0){
                chessboard += '#';
            } else {
                chessboard += ' ';
            }
        } else{
            if(v%2===0){
                chessboard += ' ';
            } else {
                chessboard += '#';
            }
        }
    }
    chessboard += '\n';
}

console.log(chessboard);