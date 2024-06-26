let isDone = false;

function test() {
}

function loop() {
    for (var i = 0; i < 10; i++) {
        console.log("Hello World");
    }
}

let object = null;

function testObject() {
    let name = object.name;
}

testObject();
loop();