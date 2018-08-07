exports.handler = function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: event.headers['x-forwarded-for']
  });
}

