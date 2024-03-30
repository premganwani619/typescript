//We will get compile time error in Transpiling ts
//So we will know that code can break at runtime during the execution of js file(Can give runtime error)
for(let i = 0;i<5;i++){
    console.log(i);
    i = 'a';

}
//Don't read comments from js file