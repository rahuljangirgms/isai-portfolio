// app/api/wakatime/route.ts

import { NextResponse } from 'next/server';
import wretch from 'wretch';

export async function GET() {
    const apiKey = process.env.WAKATIME_API_KEY; // Ensure this is available in your .env file

    if (!apiKey) {
        return NextResponse.json({ error: 'API key is missing' }, { status: 400 });
    }

    try {
        const response = await wretch("https://wakatime.com/api/v1/users/current/stats")
            .headers({
                Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
            })
            .get();

        const data = await response.json();
        return NextResponse.json(data); // Return the data to the client
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to fetch coding stats' }, { status: 500 });
    }
}
