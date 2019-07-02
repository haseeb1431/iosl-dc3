
const getUserObj = () => {
    var user = {};
    //check the logged in user and render the menu accordingly
    var userObj = JSON.parse(sessionStorage.getItem('userAuth'));
    if (userObj && userObj.PersonType) {
        user = userObj;
    }


    //check the logged in user and render the menu accordingly
    var userToken = JSON.parse(sessionStorage.getItem('userAuthToken'));
    if (userToken) {
        user.accessToken = userToken;
    }

    return user;
}

const getFetchOptions = (requesttype) => {
    
    if(!requesttype) requesttype='GET'; //default is GET

    var user = getUserObj();
    const options = {
        method: requesttype,
        headers:{
            'x-access-token':user.accessToken
        }
    };

    return options;
}


module.exports = { getUserObj, getFetchOptions }