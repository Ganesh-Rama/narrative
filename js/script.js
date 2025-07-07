let parameters = { scene: 0 };

d3.csv('data/auto-mpg.csv').then(data => {
    parameters.data = data;
    drawScene(parameters.scene);
});

function drawScene(scene) {
    d3.select("#viz").html("");

    if(scene == 0) drawIntroScene();
    if(scene == 1) drawYearTrendScene();
    if(scene == 2) drawHorsepowerScene();
}

const annotations = [
    {
        note: { label: "MPG generally improves with lower weight." },
        x: 250,
        y: 150,
        dy: -30,
        dx: 40
    }
];

const makeAnnotations = d3.annotation().annotations(annotations);
d3.select("#viz svg").append("g").call(makeAnnotations);

function changeScene(sceneIndex) {
    parameters.scene = sceneIndex;
    drawScene(sceneIndex);
}
