const http = require('axios');
const config = require('../helpers/config');

const API_PETSTORE = {
    createUser: function (exerciseDataPayload) {
       responseRequest =  http.post(`${config.baseUrl}/user`, exerciseDataPayload,{
           headers: {
               'Content-Type': 'application/json'
           }
       })
       return responseRequest
   },
   getUser: function (user) {
       responseRequest =  http.get(`${config.baseUrl}/user/${user}`,{},{
        headers: {
            'Content-Type': 'application/json'
        }
    })
       return responseRequest
   },
   getFindByStatus: function () {
    responseRequest =  http.get(`${config.baseUrl}/pet/findByStatus`,{
        params:{
             status:"sold"
        }
    })
    return responseRequest
}
}

module.exports=API_PETSTORE