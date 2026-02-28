document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Mock Data and Simulation
    const coins = {
        btc: { price: 64120.45, change: 2.4 },
        eth: { price: 3450.12, change: 1.8 },
        sol: { price: 145.67, change: -0.5 }
    };

    const updateUI = () => {
        // Random price fluctuation
        for (let coin in coins) {
            const movement = (Math.random() - 0.5) * 50;
            coins[coin].price += movement;
            const element = document.getElementById(`${coin}-price`);
            if (element) {
                element.textContent = `$${coins[coin].price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            }
        }
        addLog();
    };

    const logs = [
        "Large whale move detected in BTC ecosystem",
        "Ethereum gas prices dropping to 15-day lows",
        "Solana network processing 2.5k TPS consistently",
        "New institutional interest reported in digital assets",
        "DeFi volume up 12% in the last 24 hours"
    ];

    const logContainer = document.getElementById('activity-log');
    const addLog = () => {
        if (Math.random() > 0.7) {
            const logText = logs[Math.floor(Math.random() * logs.length)];
            const p = document.createElement('p');
            p.textContent = `[${new Date().toLocaleTimeString()}] ${logText}`;
            p.style.opacity = '0';
            p.style.transition = 'opacity 0.5s';
            logContainer.prepend(p);
            setTimeout(() => p.style.opacity = '1', 50);

            if (logContainer.children.length > 5) {
                logContainer.removeChild(logContainer.lastChild);
            }
        }
    };

    setInterval(updateUI, 2000);
});
