// JavaScript source code
(async function () {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const RUNS = 10;
    const DELAY = 30000;

    for (let i = 1; i <= RUNS; i++) {
        console.log(`🔄 Run ${i} of ${RUNS}...`);

        // Click Select
        const selectBtn = [...document.querySelectorAll('span')]
            .find(el => el.textContent.trim() === 'Select');

        if (!selectBtn) { console.log('%cSelect button not found, stopping.', 'color: orange'); break; }
        selectBtn.click();
        await sleep(600);

        // Check 10 checkboxes
        const checkboxes = [...document.querySelectorAll('[aria-label="Toggle checkbox"]')]
            .filter(el => el.getAttribute('aria-checked') !== 'true')
            .slice(0, 10);

        if (checkboxes.length === 0) { console.log('%cNo more comments found, stopping.', 'color: #3bff8a; font-weight: bold'); break; }

        for (let box of checkboxes) {
            box.click();
            await sleep(200);
        }
        await sleep(600);

        // Click Delete span
        const deleteSpan = [...document.querySelectorAll('span')]
            .find(el => el.textContent.trim() === 'Delete');

        if (!deleteSpan) { console.log('%cDelete span not found, stopping.', 'color: orange'); break; }
        deleteSpan.click();
        await sleep(800);

        // Confirm
        const confirmBtn = [...document.querySelectorAll('button')]
            .find(el => el.textContent.trim() === 'Delete');

        if (!confirmBtn) { console.log('%cConfirm button not found, stopping.', 'color: orange'); break; }
        confirmBtn.click();

        console.log(`%c✅ Run ${i} done — deleted 10 comments. Total: ${i * 10}`, 'color: #3bff8a; font-weight: bold');

        if (i < RUNS) {
            console.log(`⏳ Waiting 30 seconds...`);
            await sleep(DELAY);
        }
    }

    console.log('%c🏁 All 10 runs complete! Deleted up to 100 comments total.', 'color: #3bff8a; font-weight: bold; font-size: 14px;');
})();