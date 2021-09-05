const mockserver = require('mockserver-node');
var mockServerClient = require('mockserver-client').mockServerClient;
require('./utils.js');

const PORT = 3001;

// mockServerClient("localhost", 3001).mockAnyResponse({
//     "httpRequest": {
//         "method": "POST",
//         "path": "/api/articles",
//         "body": {
//             "article_id": "01", 
//             "title": "test", 
//             "subtitle": "subtest", 
//             "markdown": "html markdown", 
//             "description": "description", 
//             "images": "image", 
//             "category": "new"
//         }
//     },
//     "httpResponse": {
//         "statusCode": 302,
//         "headers": {
//             "Location": [
//                 "https://www.mock-server.com"
//             ]
//         }
//     }
// }).then(
//     function () {
//         console.log("expectation created");
//     },
//     function (error) {
//         console.log(error);
//     }
// );

mockserver
    .start_mockserver({serverPort: PORT, verbose: true, trace: true})
    .then(
        function () {
            console.log("started MockServer");
        },
        function (error) {
            console.log(JSON.stringify(error, null, "  "));
        }
    );

    // responseLiteralWithBodyOnly(PORT);
    // responseLiteralWithUTF16BodyResponse(PORT);
    // jsonResponseWithUTF8Body(PORT);
    // responseLiteralWithHeader(PORT);
    // responseLiteralWithCookie(PORT);
    // responseLiteralWithStatusCodeAndReasonPhrase(PORT);
    // responseLiteralWithBinaryPNGBody(PORT);
    // responseLiteralWith10SecondDelay(PORT);
    // respondDifferentlyForSameRequest(PORT);
    // responseLiteralWithConnectionOptionsToSuppressHeaders(PORT);
    // responseLiteralWithConnectionOptionsToOverrideHeaders(PORT);
    // responseLiteralWithConnectionOptionsToCloseSocket(PORT);
    // javascriptTemplatedResponse(PORT);
    // javascriptTemplatedResponseWithDelay(PORT);
    // velocityTemplatedResponse(PORT);
    
    
    
    
// mockserver.stop_mockserver({
//     serverPort: 1080
// });

