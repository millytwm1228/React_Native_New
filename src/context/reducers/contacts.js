

const contacts = (state , {type , payload}) => {


    switch (type) {
        case "GET_CONTACTS":
            return {};
            break;
    
        default:
            return state;
    }

};

export default contacts;