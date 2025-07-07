const cron = async () => {
    await fetch(process.env.URL, {
        method: 'POST',
        headers: {
            'x-internal-secret': process.env.SECRET,
        },
    });
};

cron();

