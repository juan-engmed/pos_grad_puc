const fs = require("fs");

fs.mkdir("./teste", function(){
    console.log("Diretório criado");
});

fs.writeFile("./teste/abcd.txt", "Hello World!", function(){
    console.log("Criado um novo arquivo no diretório teste com o nome abcd.txt")
})

fs.readFile("./teste/abcd.txt", function(err, data){
    console.log("Arquivo possui os dados: ", data.toString());
})