

const auth = (state , {type , payload}) => {


    switch (type) {
        case "LOGIN":
            return {};
            break;
    
        default:
            return state;
    }

};

export default auth;