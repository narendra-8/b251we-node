const fs = require("fs");

fs.readFile("./msg.txt" , "utf-8", (err, data ) => {
    console.log(data);

});

const quote = "Hello World";

for(let i = 1; i < 10; i++) {
    fs.writeFile('./backups/test-${i}.html', quote, (err) => {
        console.log("completed writing");
    });
}

