const readFile = require('./boat-ramps-reader');

const boat_ramps = async () => {
    let boat_ramps = [];
    const data = await readFile()
        for(let i=0; i<data["features"].length; i++){
            let boat_ramp = []
            const type = data["features"][i]['properties']['type'];            
            if(type === "Boat Ramp"){
                const coordinates = data["features"][i]['geometry']['coordinates'];
                const id = data["features"][i]["id"].toString()
                boat_ramp.push({
                    id, 
                    coordinates : coordinates[0][0]
                })
                boat_ramps.push(boat_ramp)
            }
        }
        
    return boat_ramps
}

const ramps_per_construction = async () => {
    let ramps_per_construction = {}
    const data = await readFile()
        for(let i=0; i<data["features"].length; i++){
            const material = data["features"][i]['properties']['material'];
            if(ramps_per_construction[material]){
                ramps_per_construction[material] = ramps_per_construction[material]+1;
            }else{
                ramps_per_construction[material] = 1
            }
        }
    return ramps_per_construction
}

const ramps_per_size_category = async () => {
    let sm_ramp_count=0, md_ramp_count=0, lg_ramp_count = 0; 
    const data = await readFile()
        for(let i=0; i<data["features"].length; i++){
            const area = data["features"][i]['properties']['area_'];
            if(area>=0 && area<50){
                sm_ramp_count++;
            }else if(area>=50 && area<200){
                md_ramp_count++;
            }else if(area>=200 && area<526){
                lg_ramp_count++;
            }
        }
        let ramps_per_size_category = {
            "small_size": sm_ramp_count,
            "medium_size": md_ramp_count,
            "large_size": lg_ramp_count
        }
    return ramps_per_size_category
}

module.exports = { ramps_per_construction, ramps_per_size_category, boat_ramps};

