(function () {
  initActive()
  bindEvenInit()
  var mycard = document.getElementById('mycard')
  
  let mycardTop = mycard ? mycard.offsetTop : 0;
  // let height=$('.header').height()
  // console.log(mycardTop,height)
  window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > mycardTop) {
      mycard && mycard.classList.add('scroll')
    } else {
      mycard && mycard.classList.remove('scroll')
    }
  }

  // 绑定事件初始化
  function bindEvenInit() {
    // 绑定点击事件
    document.querySelectorAll('.card-item').forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });

    // 绑定滚动事件
    window.addEventListener('scroll', function() {
      // 已经在外部window.onscroll中处理了
    });

    // 绑定窗口大小改变事件
    window.addEventListener('resize', function() {
      if(mycard) {
        mycardTop = mycard.offsetTop;
      }
    });
  }

  function initActive() {
    // 移除旧的主题初始化逻辑
    initTheme();
  }

  // 移除旧的jQuery主题切换代码
  // ... existing code ...

  // 主题切换功能
  function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // 检查本地存储中的主题设置
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // 切换主题
    if(themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        // 添加过渡动画类
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
      });
    }
  }

  // 更新主题图标
  function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if(themeIcon) {
      if (theme === 'dark') {
        themeIcon.classList.remove('ri-sun-line');
        themeIcon.classList.add('ri-moon-line');
      } else {
        themeIcon.classList.remove('ri-moon-line');
        themeIcon.classList.add('ri-sun-line');
      }
    }
  }

  // 检查系统主题偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  prefersDark.addEventListener('change', (e) => {
    const theme = e.matches ? 'dark' : 'light';
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', theme);
      updateThemeIcon(theme);
    }
  });

  // 添加平滑过渡效果的CSS
  const style = document.createElement('style');
  style.textContent = `
    .theme-transition * {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
    }
  `;
  document.head.appendChild(style);
})()
