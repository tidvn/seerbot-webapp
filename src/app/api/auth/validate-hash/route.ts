import { isHashValid } from "@/utils/cn";
import { isNil } from "lodash";

export async function POST(request: Request) {
    const { hash } = await request.json()
    const botToken = process.env.BOT_TOKEN
    if (isNil(hash)) {
        return new Response('Missing required field hash', {
            status: 400,
        })
    }

    if (isNil(botToken)) {
        return new Response('Internal server error', {
            status: 500,
        })
    }

    const data = Object.fromEntries(new URLSearchParams(hash));
    const isValid = await isHashValid(data, botToken);

    if (isValid) {
        return new Response('Valid hash', {
            status: 200,
        })
    }

    return new Response('Invalid hash', {
        status: 403,
    })

}
