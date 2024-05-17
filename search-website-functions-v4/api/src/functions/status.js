<<<<<<< HEAD
const { app } = require('@azure/functions');
const { CONFIG } = require("../lib/config");

app.http('status', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Status processed request for url "${request.url}"`);
        return { jsonBody: { results: CONFIG } };
    }
});
=======
const { app } = require('@azure/functions');
const { CONFIG } = require("../lib/config");

app.http('status', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Status processed request for url "${request.url}"`);
        return { jsonBody: { results: CONFIG } };
    }
});
>>>>>>> 5814cc0ecd37bef1db2f64b540f78dd76ef50d42
