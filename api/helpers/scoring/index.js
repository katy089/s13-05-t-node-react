const scoring = (userPreferences, profiles) => {
	const ignore_elements = ['_id', 'nombre', 'correo', 'fotos', 'activo', 'google'];
    const max_score = 100;
    const itemQty = Object.keys(userPreferences).filter(e => !ignore_elements.includes(e) && (Array.isArray(userPreferences[e]) && userPreferences[e].length > 0)).length;
    let score_profile = {};

    for (const [item, value] of Object.entries(userPreferences)) {
    	if(!ignore_elements.includes(item)){ 
    		score_profile[item] = {
            	score_per_item: Array.isArray(value) ? (max_score / itemQty) / value.length : (max_score / itemQty)
        	};
    	}
    }

    profiles.forEach((profile) => {
        let profile_score = 0;
        for (const [item, value] of Object.entries(profile._doc)){
        	if(!ignore_elements.includes(item)){
        		switch(item){
        			case "generos":
        			case "bandas":
        				value.forEach((el) => {
        					userPreferences[item].filter(obj => {
        						if(obj._id.toString() == el.toString()){
	        						profile_score += score_profile[item].score_per_item;
        						}
        						
        					})
	                	});
	                	break;
	                default: 
        		}
        	}
        }
        
        profile._doc.score = Math.round(profile_score);
    });
    return profiles.sort((a, b) => (a.score < b.score) ? 1 : (a.score > b.score) ? -1 : 0);
}

module.exports = scoring