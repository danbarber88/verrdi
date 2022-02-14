import fetch from "node-fetch"

exports.handler = async function(event, context) {
    const credentials = Buffer.from(`${process.env.GATSBY_TICKET_TAILOR_API_KEY}:`).toString("base64")

    const response = await fetch(`https://api.tickettailor.com/v1/events`, {
        method: "GET",
        headers: {
            "Authorization": `Basic ${credentials}`,
            "Accept": "application/json",
        },
        redirect: "follow",
    })

    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}