module.exports = {
	// 配置网站的标题和描述，方便 SEO
  title: 'cyn的个人网站',
  description: 'java开发知识及相关问题记录',
  //上面导航栏
  themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '了解更多', 
                items: [
                    { text: 'Github', link: 'https://github.com/cyn6' },
                    { text: '语雀', link: 'https://www.yuque.com/ynch' }
                ]
            },
            {
                iconClass: 'icon-youjian',
                title: '发邮件',
                link: 'mailto:cyn0922@qq.com',
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "开发问题记录",
              path: '/problems/t0',
              collapsable: false, // 不折叠
              children: [
                { title: "IDEA不能下载源码", path: "/problems/t0" },
                { title: "关闭端口号占用的进程", path: "/problems/t1" },
                { title: "前后端跨域问题", path: "/problems/t2" },
                { title: "java调用外部程序", path: "/problems/t3" },
                { title: "静态资源映射，访问/上传到服务器本地", path: "/problems/t4" },
                { title: "session和token有什么区别？", path: "/problems/t5" },
                { title: "URI>URL", path: "/problems/t6" }
              ],
            }
         ]
    }
}
