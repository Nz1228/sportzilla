export const DISQUALIFY_CHAMPIONS = 'DISQUALIFY_CHAMPIONS';

export const disqualify = (id) => {
    return {
        type: 'DISQUALIFY_CHAMPIONS',
        payload: id
    }
};