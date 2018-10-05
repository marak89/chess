console.log('Welcome to Chess!');

var chessboard = '';

for(var h=1;h<=8;h++){
    for(var v=1;v<=8;v++){
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