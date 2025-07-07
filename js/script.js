let parameters = { scene: 0, data: null };

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

function changeScene(sceneIndex) {
    parameters.scene = sceneIndex;
    drawScene(sceneIndex);
}

// Example implementation for intro scene
function drawIntroScene() {
    const svg = d3.select("#viz")
                  .append("svg")
                  .attr("width", 800)
                  .attr("height", 500);

    svg.selectAll("circle")
        .data(parameters.data)
        .enter()
        .append("circle")
        .attr("cx", d => +d.Weight / 10)
        .attr("cy", d => 500 - (+d.MPG * 10))
        .attr("r", 5)
        .attr("fill", "#4CAF50")
        .attr("opacity", 0)
        .transition()
        .duration(800)
        .attr("opacity", 1);
}

// Similarly, implement your other scenes clearly
function drawYearTrendScene() {
    // implement similar logic with your desired animations
}

function drawHorsepowerScene() {
    // implement similar logic with your desired animations
}

svg.selectAll("circle")
    .data(parameters.data)
    .enter()
    .append("circle")
    .attr("cx", d => +d.Weight / 10)
    .attr("cy", 500)
    .attr("r", 0)
    .attr("fill", "#2196F3")
    .attr("opacity", 0.8)
    .transition()
    .duration(1200)
    .attr("cy", d => 500 - (+d.MPG * 10))
    .attr("r", 6)
    .ease(d3.easeBounce);

const tooltip = d3.select("#tooltip");

svg.selectAll("circle")
    .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(`MPG: ${d.MPG}<br>Weight: ${d.Weight}`)
               .style("left", (event.pageX + 10) + "px")
               .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
    });

