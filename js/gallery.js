// Add gallery lightbox effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; display: flex; align-items: center; justify-content: center; cursor: pointer;" onclick="this.remove()">
                <img src="${img.src}" style="max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 15px; box-shadow: 0 25px 80px rgba(0,0,0,0.5);">
                <div style="position: absolute; top: 20px; right: 30px; color: white; font-size: 30px; cursor: pointer;">&times;</div>
            </div>
        `;
        document.body.appendChild(lightbox);
    });
});
