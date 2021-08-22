const express = require('express')
const mockserver = require('mockserver-node');
var mockServerClient = require('mockserver-client').mockServerClient;

const app = express();
const PORT = 3000;

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
    .start_mockserver({serverPort: 3001, verbose: true})
    .then(
        function () {
            console.log("started MockServer");
        },
        function (error) {
            console.log(JSON.stringify(error, null, "  "));
        }
    );

// mockserver.start_mockserver({
//     serverPort: 1080,
//     trace: true
// });

// mockserver.stop_mockserver({
//     serverPort: 1080
// });

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
});