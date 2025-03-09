// 添加 xcsoft 计时器实现
const xcsoft = {
    countup: function(selector, callback) {
        let startTime = new Date().getTime();
        
        function updateTimer() {
            const currentTime = new Date().getTime();
            const diff = Math.floor((currentTime - startTime) / 1000);
            
            const days = Math.floor(diff / (24 * 60 * 60));
            const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((diff % (60 * 60)) / 60);
            const seconds = diff % 60;
            
            callback({
                day: days,
                hourZero: String(hours).padStart(2, '0'),
                minuteZero: String(minutes).padStart(2, '0'),
                secondZero: String(seconds).padStart(2, '0')
            });
        }
        
        // 每秒更新一次
        updateTimer();
        return setInterval(updateTimer, 1000);
    }
};

// 添加时间格式化函数
function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${year}年${month}月${day}日 ${hour}:${minute}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", function() {
    initializeTimers();
    initializeDataFetch();
    
    // 初始化时间显示
    const timeElements = document.querySelectorAll('.shijian');
    if (timeElements.length > 0) {
        // 立即显示一次时间
        timeElements.forEach(el => el.innerHTML = getTime());
        
        // 每秒更新时间
        setInterval(() => {
            timeElements.forEach(el => el.innerHTML = getTime());
        }, 1000);
    }
});

// 初始化计时器
function initializeTimers() {
    xcsoft.countup('', updateTimerDisplay);
}

// 更新计时器显示
function updateTimerDisplay(time) {
    const elements = {
        'd1': time.day + "天",
        'h1': time.hourZero + "时",
        'i1': time.minuteZero + "分",
        's1': time.secondZero + "秒"
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function initializeDataFetch() {
    fetchAndDisplayData();
    // 每30秒更新一次数据
    setInterval(fetchAndDisplayData, 30000);
}

// 添加加载状态管理
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading-indicator';
    loadingDiv.className = 'loading-indicator';
    loadingDiv.innerHTML = '<span>加载中...</span>';
    document.body.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingDiv = document.getElementById('loading-indicator');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

async function fetchAndDisplayData() {
    showLoading();
    try {
        const response = await fetch('/data');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        updatePageContent(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        showErrorMessage();
    } finally {
        hideLoading();
    }
}

function updatePageContent(data) {
    const elements = {
        'ip': data.ip,
        'UserName': data.UserName,
        'id': data.id,
        'time': data.time,
        'address': data.address,
        'Expiration_time': data.Expiration_time,
        'port_name': data.port_name,
        'Perform': data.Hours_difference
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            // 对于特殊字段进行处理
            if (id === 'time' || id === 'Expiration_time') {
                element.textContent = value || '未知';
            } else {
                element.textContent = value || 'N/A';
            }
        }
    });
}

function showErrorMessage() {
    // 添加错误提示UI
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = '数据加载失败，请刷新页面重试';
    document.body.appendChild(errorDiv);
    
    setTimeout(() => errorDiv.remove(), 3000);
}
