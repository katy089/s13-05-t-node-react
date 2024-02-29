const scoring = (userPreferences, profiles) => { 
    const maxScore = 100;
    let ignoreElements = ['_id', 'nombre', 'correo', 'fotos', 'activo', 'google'];
    Object.keys(userPreferences).forEach(e => { 
        if(ignoreElements.includes(e)) return;

        if ((Array.isArray(userPreferences[e]) && userPreferences[e].length < 1) 
                || (typeof userPreferences[e] === "object" && ("lat" in userPreferences[e] && userPreferences[e].lat == null) && ("lon" in userPreferences[e] && userPreferences[e].lon == null))) {
            ignoreElements.push(e);
        } 
    });

    const itemQty = Object.keys(userPreferences).filter(e => !ignoreElements.includes(e)).length;
    let scoreProfile = {};

    for (const [item, value] of Object.entries(userPreferences)) {
        if (!ignoreElements.includes(item)) {
            scoreProfile[item] = {
                scorePerItem: Array.isArray(value) ? (maxScore / itemQty) / value.length : (maxScore / itemQty)
            };
        }
    }

    profiles.forEach((profile) => {
        let profileScore = 0;
        for (const [item, value] of Object.entries(profile._doc)) {
            if (!ignoreElements.includes(item)) { 
                switch (item) {
                    case "generos":
                    case "bandas":
                        profileScore += value.filter(el => userPreferences[item].some(obj => obj._id.toString() === el.toString())).length * scoreProfile[item].scorePerItem;
                        break;
                    case "ultimaPosicion": 
                        const { lat: lat1, lon: lon1 } = userPreferences[item];
                        const { lat: lat2, lon: lon2 } = value;
                        
                        if(lat2 != null && lon2 != null){
                            const distance = calculateEuclideanDistance(lat1, lon1, lat2, lon2);
                            const distance_score = scoreProfile[item].scorePerItem - (distance / 180) * 100;
                            profileScore += distance_score > 0 ? distance_score : 0;
                        }
                        break;
                    default:
                }
            }
        }

        profile._doc.score = Math.round(profileScore);
    });

    return profiles.sort((a, b) => b.score - a.score);
}

const calculateEuclideanDistance = (lat1, lon1, lat2, lon2) => {
    return Math.sqrt(Math.pow((lat1 - lat2), 2) + Math.pow((lon1 - lon2), 2))
}

module.exports = scoring