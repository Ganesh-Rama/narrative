d3.csv("data\auto-mpg.csv").then(data => {
    data.forEach(d => {
        d.mpg = +d.mpg;
        d.horsepower = +d.horsepower;
        d.weight = +d.weight;
        d.year = +d['model year'];
    });
    createVisualization(data);
});

function createScene1(data) {
    // Overview: mpg across car types (Bar/Scatter Chart)
}

function createScene2(data) {
    // Horsepower vs. MPG (Interactive Scatter plot)
}

function createScene3(data) {
    // MPG over Years (Animated Line Chart)
}
d3.select("#visualization").html("");
const annotations = [{
    note: { label: "Note text here", title: "Important insight"},
    x: 150, y: 200, dy: -30, dx: 50,
}];

const makeAnnotations = d3.annotation().annotations(annotations);
d3.select("#visualization").append("g").call(makeAnnotations);
let currentScene = 1;
let selectedManufacturer = "all";
d3.select("#sceneButton").on("click", function() {
    currentScene++;
    if(currentScene > 3) currentScene = 1;
    updateScene(currentScene);
});
