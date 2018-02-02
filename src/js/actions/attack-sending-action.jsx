const ReducerListener = (attack) => {
    return {
        type: "ATTACK_SELECTED",
        payload: attack
    }
};

export default ReducerListener;