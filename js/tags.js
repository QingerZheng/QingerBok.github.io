document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');
    
    if (tags.length > 0) {
        // 为每个标签随机生成大小和颜色
        tags.forEach(tag => {
            // 随机字体大小 (0.8rem - 1.4rem)
            const size = 0.8 + Math.random() * 0.6;
            tag.style.fontSize = `${size}rem`;
            
            // 随机颜色 (蓝色系)
            const hue = 200 + Math.random() * 40; // 200-240
            const saturation = 70 + Math.random() * 20; // 70-90
            const lightness = 60 + Math.random() * 20; // 60-80
            tag.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        });
    }
});