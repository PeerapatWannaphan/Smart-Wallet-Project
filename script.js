// คำสั่งในการอัปเดตเปอร์เซ็นต์เมื่อมีการปรับระดับเสียง
const volumeSlider = document.getElementById('volume');
const volumePercent = document.getElementById('volume-percent');

// ฟังก์ชันที่ใช้ในการอัปเดตเปอร์เซ็นต์
volumeSlider.addEventListener('input', function() {
    const volumeValue = volumeSlider.value;
    volumePercent.textContent = `${volumeValue}%`;
});
