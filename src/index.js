module.exports = function check(str, bracketsConfig) {
  str = str.split('')
  let left = 0;
  let right = 0;
  let arr = [];
  bracketsConfig.forEach(el =>{
    if(el[0] === el[1]){
      for(let i = 0; i< str.length; i++){
          if (el[0] === str[i]){
            arr.push(i);
            if (arr.length === 2){
              if (((arr[1]-arr[0]) & 1)){
                str.splice(arr[1],1);
                str.splice(arr[0],1);
                i = -1;
                arr = [];
              } else {
                return false
              }
            }
          }
        
      }
    }else {
      for(let i = 0; i< str.length; i++){
        switch(str[i]){
          case el[0]:
            left = i;
          break;
          case el[1]:
            right = i;
            if (((right-left) & 1) && ((right-left) > 0) ){
              str.splice(left,1);
              str.splice(right-1,1);
              i = 0;
              left = 0;
              right = 0;
            } else {
              return false
            }
          break;
        }
      } 
    }
  })

  if (str.length === 0){
    return true;
  } else {
    return false;
  }
}