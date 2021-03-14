module.exports = function check(str, bracketsConfig) {
  let string = str.split('');
      if (string.length % 2 !== 0){
          return false;
      }
    let lengthString = string.length;
    for (let i = 0;i <= lengthString; i++ ){
          for (let z = 0; z <= bracketsConfig.length-1 ;z++){
              if (string[i] === bracketsConfig[z][0] && string[i+1] === bracketsConfig[z][1] ){
                  string.splice(i+1,1);
                  string.splice(i,1);
                  i= i - 2;
              }
          }
      }
      if(string.length == 0){
    return true;
    }
      else {return false;}
}
