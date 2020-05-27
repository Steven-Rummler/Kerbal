function local_science() {
    locals = ["KSC", "Administration", "AstronautComplex", "Crawlerway", "FlagPole", "LaunchPad", "MissionControl", "R&D", "Runway", "SPH", "TrackingStation", "VAB"];
    local_data = dataset.filter(d => d.celestial == "Kerbin" && locals.contains(d.biome) && d.sci == 0);
    console.log(locals);
}