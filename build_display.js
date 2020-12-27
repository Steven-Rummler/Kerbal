function build_display() {
    let recommend_box = document.createElement("div");
    recommend_box.className = "col d-flex justify-content-center";
    recommend_box.id = "recommend_box";
    let recommender = document.createElement("div");
    recommender.className = "title";
    recommender.id = "recommender";
    recommend_box.appendChild(recommender);
    document.querySelector("#recommend_list").appendChild(recommend_box);

    let top_row = document.getElementById("top-charts");

    let exp_box = document.createElement("div");
    let exp_frame = document.createElement("div");
    let exp_title = document.createElement("div");
    let exp_chart = document.createElement("div");
    exp_box.className = "col d-flex justify-content-center top-chart";
    exp_title.className = "title";
    exp_title.innerText = "Science Progress by Experiment";
    exp_chart.className = "chart";
    exp_chart.id = "experiments_chart";
    exp_frame.appendChild(exp_title);
    exp_frame.appendChild(exp_chart);
    exp_box.appendChild(exp_frame);
    top_row.appendChild(exp_box);

    let cel_box = document.createElement("div");
    let cel_frame = document.createElement("div");
    let cel_title = document.createElement("div");
    let cel_chart = document.createElement("div");
    cel_box.className = "col d-flex justify-content-center top-chart";
    cel_title.className = "title";
    cel_title.innerText = "Science Progress by Celestial Body";
    cel_chart.className = "chart";
    cel_chart.id = "celestials_chart";
    cel_frame.appendChild(cel_title);
    cel_frame.appendChild(cel_chart);
    cel_box.appendChild(cel_frame);
    top_row.appendChild(cel_box);

    let biome_row = document.getElementById("biome-charts");
    for (let c = 0; c < celestials.length; c++) {
        let col = document.createElement("div");
        let frame = document.createElement("div");
        let title = document.createElement("div");
        let chart = document.createElement("div");
        col.className = "col d-flex justify-content-center"
        title.className = "title"
        title.innerText = celestials[c];
        chart.id = "biomes_chart_" + c;
        chart.className = "chart";
        frame.appendChild(title);
        frame.appendChild(chart);
        col.appendChild(frame);
        biome_row.appendChild(col);
    }
}