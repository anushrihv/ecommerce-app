/**
 * Returns a response to indicate that the lambda got executed.
 * @param event
 * @returns {{body: string, statusCode: number}}
 */
function getHelloResponse(event) {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Your lambda executed successfully!',
            },
            null,
            2
        ),
    };
}

module.exports = {getHelloResponse};