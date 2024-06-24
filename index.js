let isDone = false;

function loop() {
    isDone = !isDone;
    for (var i = 0; i < 10; i++) {
        console.log("Hello World");
    }
}

loop();