# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

---

## logger

---
Winston Logger, it can be used throughout the API, creates a .log of each instance of logger created, 7 levels of log, error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6

eg:
``` bash
const datesLog = require("../utils/logger")
.....
.....
    datesLog.info(`"message" : ${JSON.stringify(foo)}`);
    datesLog.info(`${JSON.stringify(foo)}`);
    datesLog.info(`"message"`);
    ............
    ............
    datesLog.warn(`"message" : ${JSON.stringify(foo)}`);
    datesLog.debug(`${JSON.stringify(foo)}`);
    datesLog.error(`"message"`);
```

---

# http-status-codes
(Documentation extracted from: https://github.com/prettymuchbryce/http-status-codes/blob/master/README.md?plain=1)

---

## Installation

```console
npm install http-status-codes --save
```

## Usage (express 4.x)

```typescript
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';

eg 1: 

response
	.status(StatusCodes.OK)
	.send(ReasonPhrases.OK);

eg 2:
response
	.status(StatusCodes.INTERNAL_SERVER_ERROR)
	.send({
		error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
	});

eg 3:
response
	.status(getStatusCode('Internal Server Error'))
	.send({
		error: 'Internal Server Error'
	});
```

## Codes

| Code | Constant                        | Reason Phrase                   |
| ---- | ------------------------------- | ------------------------------- |
| 100  | CONTINUE                        | Continue                        |
| 101  | SWITCHING_PROTOCOLS             | Switching Protocols             |
| 102  | PROCESSING                      | Processing                      |
| 200  | OK                              | OK                              |
| 201  | CREATED                         | Created                         |
| 202  | ACCEPTED                        | Accepted                        |
| 203  | NON_AUTHORITATIVE_INFORMATION   | Non Authoritative Information   |
| 204  | NO_CONTENT                      | No Content                      |
| 205  | RESET_CONTENT                   | Reset Content                   |
| 206  | PARTIAL_CONTENT                 | Partial Content                 |
| 207  | MULTI_STATUS                    | Multi-Status                    |
| 300  | MULTIPLE_CHOICES                | Multiple Choices                |
| 301  | MOVED_PERMANENTLY               | Moved Permanently               |
| 302  | MOVED_TEMPORARILY               | Moved Temporarily               |
| 303  | SEE_OTHER                       | See Other                       |
| 304  | NOT_MODIFIED                    | Not Modified                    |
| 305  | USE_PROXY                       | Use Proxy                       |
| 307  | TEMPORARY_REDIRECT              | Temporary Redirect              |
| 308  | PERMANENT_REDIRECT              | Permanent Redirect              |
| 400  | BAD_REQUEST                     | Bad Request                     |
| 401  | UNAUTHORIZED                    | Unauthorized                    |
| 402  | PAYMENT_REQUIRED                | Payment Required                |
| 403  | FORBIDDEN                       | Forbidden                       |
| 404  | NOT_FOUND                       | Not Found                       |
| 405  | METHOD_NOT_ALLOWED              | Method Not Allowed              |
| 406  | NOT_ACCEPTABLE                  | Not Acceptable                  |
| 407  | PROXY_AUTHENTICATION_REQUIRED   | Proxy Authentication Required   |
| 408  | REQUEST_TIMEOUT                 | Request Timeout                 |
| 409  | CONFLICT                        | Conflict                        |
| 410  | GONE                            | Gone                            |
| 411  | LENGTH_REQUIRED                 | Length Required                 |
| 412  | PRECONDITION_FAILED             | Precondition Failed             |
| 413  | REQUEST_TOO_LONG                | Request Entity Too Large        |
| 414  | REQUEST_URI_TOO_LONG            | Request-URI Too Long            |
| 415  | UNSUPPORTED_MEDIA_TYPE          | Unsupported Media Type          |
| 416  | REQUESTED_RANGE_NOT_SATISFIABLE | Requested Range Not Satisfiable |
| 417  | EXPECTATION_FAILED              | Expectation Failed              |
| 418  | IM_A_TEAPOT                     | I'm a teapot                    |
| 419  | INSUFFICIENT_SPACE_ON_RESOURCE  | Insufficient Space on Resource  |
| 420  | METHOD_FAILURE                  | Method Failure                  |
| 421  | MISDIRECTED_REQUEST             | Misdirected Request             |
| 422  | UNPROCESSABLE_ENTITY            | Unprocessable Entity            |
| 423  | LOCKED                          | Locked                          |
| 424  | FAILED_DEPENDENCY               | Failed Dependency               |
| 428  | PRECONDITION_REQUIRED           | Precondition Required           |
| 429  | TOO_MANY_REQUESTS               | Too Many Requests               |
| 431  | REQUEST_HEADER_FIELDS_TOO_LARGE | Request Header Fields Too Large |
| 451  | UNAVAILABLE_FOR_LEGAL_REASONS   | Unavailable For Legal Reasons   |
| 500  | INTERNAL_SERVER_ERROR           | Internal Server Error           |
| 501  | NOT_IMPLEMENTED                 | Not Implemented                 |
| 502  | BAD_GATEWAY                     | Bad Gateway                     |
| 503  | SERVICE_UNAVAILABLE             | Service Unavailable             |
| 504  | GATEWAY_TIMEOUT                 | Gateway Timeout                 |
| 505  | HTTP_VERSION_NOT_SUPPORTED      | HTTP Version Not Supported      |
| 507  | INSUFFICIENT_STORAGE            | Insufficient Storage            |
| 511  | NETWORK_AUTHENTICATION_REQUIRED | Network Authentication Required |



---

## Error Handler

---

```bash

try {
    ... code succes
    
  } catch (err) {
    next(err) ------> ( 'simple error handling returns error code and error stack ')
  }
```
---

## Seeder Users

---
``` bash
{  
      firstName: 'TestUserAdmin1',  
      lastName: 'Demo',  
      email: 'testUserAdmin1@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserAdmin2',  
      lastName: 'Demo',  
      email: 'testUserAdmin2@test.com',    
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserAdmin3',  
      lastName: 'Demo',  
      email: 'testUserAdmin3@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserAdmin4',  
      lastName: 'Demo',  
      email: 'testUserAdmin4@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserAdmin5',  
      lastName: 'Demo',  
      email: 'testUserAdmin5@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserAdmin6',  
      lastName: 'Demo',  
      email: 'testUserAdmin6@test.com',   
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserAdmin7',  
      lastName: 'Demo',  
      email: 'testUserAdmin7@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserAdmin8',  
      lastName: 'Demo',  
      email: 'testUserAdmin8@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },
    {
      firstName: 'TestUserAdmin9',  
      lastName: 'Demo',  
      email: 'testUserAdmin9@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },
    {
      firstName: 'TestUserAdmin10',  
      lastName: 'Demo',  
      email: 'testUserAdmin10@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 1,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard1',  
      lastName: 'Demo',  
      email: 'testUserStandard1@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard2',  
      lastName: 'Demo',  
      email: 'testUserStandard2@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard3',  
      lastName: 'Demo',  
      email: 'testUserStandard3@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard4',  
      lastName: 'Demo',  
      email: 'testUserStandard4@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard5',  
      lastName: 'Demo',  
      email: 'testUserStandard5@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard6',  
      lastName: 'Demo',  
      email: 'testUserStandard6@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard7',  
      lastName: 'Demo',  
      email: 'testUserStandard7@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard8',  
      lastName: 'Demo',  
      email: 'testUserStandard8@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard9',  
      lastName: 'Demo',  
      email: 'testUserStandard9@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    },  
    {  
      firstName: 'TestUserStandard10',  
      lastName: 'Demo',  
      email: 'testUserStandard10@test.com',  
      password: 'bugHunteRsNodeGroup81Alkemy123',  
      roleId: 2,  
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',  
      createdAt: new Date,  
      updatedAt: new Date  
    }  
```


