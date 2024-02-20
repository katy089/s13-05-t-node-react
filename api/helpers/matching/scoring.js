const preferencias = {
    genero: 'Femenino',
    music_genre: 'rock',
    bandas: ['AC/DC', 'CDC']
}

const perfiles = [
    {
        genero: 'Masculino',
        music_genre: 'rock',
        bandas: ['CDC']
    },
    {
        genero: 'Femenino',
        music_genre: 'reggaeton',
        bandas: ['bad bunny']
    }
]

// scoring
const items = Object.keys(preferencias);
let score = {};
score.max_score = 100;
score_per_item = score.max_score / items.length;
score.hasSubItem = (item) => {
    if(typeof score[item] == 'undefined') return false;
    return score[item].item_amount > 1;
}
score.profileScoring = (profiles) => {
    profiles.forEach((profile) => {
        let profile_score = 0;

        Object.keys(profile).forEach((item) => {
            if(!score.hasSubItem(item)){
                if(!Array.isArray(profile[item])){
                    if(preferencias[item].toLowerCase() == profile[item].toLowerCase()){
                        profile_score += score[item].score_per_item;
                    } 
                } else {
                    profile[item].forEach((item_val) => {
                        if(preferencias[item].toLowerCase() == item_val.toLowerCase()){
                            profile_score += score[item].score_per_item;
                            return;
                        } 
                    });
                }
                 
            } else {
                Object.values(preferencias[item]).forEach((val) => {
                    if(!Array.isArray(profile[item])){
                        if(val.toLowerCase() == profile[item].toLowerCase()){
                            profile_score += score[item].score_per_subitem;
                            return;
                        }
                    } else {
                        profile[item].forEach((item_val) => {
                            if(val.toLowerCase() == item_val.toLowerCase()){
                                profile_score += score[item].score_per_subitem;
                                return;
                            }
                        });
                    }
                });
            }
        });
        profile.score = Math.round(profile_score);
    });
    return profiles.sort((a, b) => (a.score < b.score) ? 1 : (a.score > b.score) ? -1 : 0);
}

items.forEach((item) => {
    score[item] = {};
    if(!Array.isArray(preferencias[item])){
        score[item].item_amount = 1;
        score[item].score_per_item = score[item].max_score = score_per_item;
    } else {
        score[item].item_amount = preferencias[item].length;
        score[item].max_score = score_per_item;
        score[item].score_per_subitem = score_per_item / score[item].item_amount;
    }
});