const ReducerListener = (gender) => {
    return {
        type: "GENDER_SELECTED",
        payload: gender
    }
};

export default ReducerListener;
