const cron = async () => {
    try {
        console.log(`Sending POST request to: ${process.env.URL}`);
        const start = Date.now();
        const response = await fetch(process.env.URL, {
            method: 'POST',
            headers: {
                'x-internal-secret': process.env.SECRET,
            },
        });
        const elapsed = Date.now() - start;
        const body = await response.text();
        console.log(`Response received: status=${response.status} statusText=${response.statusText} ok=${response.ok} elapsed=${elapsed}ms`);
        if (body) {
            const preview = body.length > 1000 ? `${body.slice(0, 1000)}… (truncated)` : body;
            console.log(`Response body: ${preview}`);
        }
    } catch (error) {
        console.error(`Request failed: ${error?.stack ?? error}`);
        throw error;
    }
};

cron();

