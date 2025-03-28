document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // 在实际项目中，这里应该是AJAX请求或跳转到搜索结果页
            alert(`搜索: ${query}`);
            // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    }
});