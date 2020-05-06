export const availableLanguages = [
    { shortCode: "EN", label: "English" },
    { shortCode: "FR", label: "Français" },
];

export const initialState = {
    selectedLanguage: "FR",
};

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "LANGUAGE_UPDATE": {
            return { ...state, selectedLanguage: payload };
        }
        default:
            return state;
    }
}

export default reducer;