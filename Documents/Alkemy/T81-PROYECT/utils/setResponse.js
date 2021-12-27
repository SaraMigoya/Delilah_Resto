const { StatusCodes } = require('http-status-codes')


const setResponseWithError = ( res, statusCode = 500, msg = "",...ok ) => {
   
    if(ok){
      ok={ok:false}
    }

    let statusText;
    switch (statusCode) {
        case 400:
          statusText = 'Bad Request';
          break;
        case 401:
          statusText = 'Unauthorized';
          break;
        case 403:
          statusText = 'Forbidden';
          break;
        case 500:
          statusText = 'Internal Server Error';
          break;
        }

    return res.status(statusCode).json({ status:statusText, msg, ...ok  });
    
}

module.exports = { setResponseWithError }
