for (let index = 0, partialResult=0; index < 1000;  index=index+=1, partialResult= partialResult + index){
    
    if (partialResult<=400){
            console.log(partialResult);   
    } else {
        break;
    }
}