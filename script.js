document.getElementById('convertBtn').addEventListener('click', () => {
    const blobUrl = document.getElementById('blobUrl').value.trim();
    if(!blobUrl) return alert('الرجاء وضع رابط blob');

    // تحقق من الرابط الأساسي
    if(!blobUrl.includes('github.com') || !blobUrl.includes('/blob/')) {
        return alert('الرابط غير صحيح، يجب أن يكون من GitHub ويحتوي /blob/');
    }

    const rawUrl = blobUrl
        .replace('https://github.com/', 'https://raw.githubusercontent.com/')
        .replace('/blob/', '/');

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<a href="${rawUrl}" target="_blank">${rawUrl}</a>`;

    copyBtn.addEventListener('click', () => {
    const rawLink = resultDiv.querySelector('a').href;
    navigator.clipboard.writeText(rawLink)
        .then(() => alert('تم نسخ الرابط!'))
        .catch(err => alert('فشل النسخ: ' + err));
});
