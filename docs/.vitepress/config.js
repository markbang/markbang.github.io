// import { defineConfig } from 'vite';
import { set_sidebar } from "./sidebar"
import getDirectoryContents from "./code_rule"
export default{
    title: '🤡😡', //站点标题
    description: '一个小白友好的教程网站',//mate标签description，多用于搜索引擎抓取摘要
    lang: 'zh-cn', //语言
    ignoreDeadLinks: true, //忽略死链接
    vite:{
      plugins:[],
    },
    markdown: {
      lineNumbers: true,
      image: {
        lazyLoading: true,
      }
    },
    head:[
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['script', {}, `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`],
      ['script', { defer:'', src: '/_vercel/insights/script.js' }]
    ],
    lastUpdated: true,
    themeConfig: {
        siteTItle: '🤡😡',
        logo: '/site.png',
        footer: {
          copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan you</a>'
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        returnToTopLabel: '返回顶部',
        outlineTitle: '导航栏',
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '归档',
        search:{
          provider: 'algolia',
          options: {
            appId: 'WH5FTZW478',
            apiKey: 'f23e8f639ebafa819a2da1f62572453e',
            indexName: 'bangwu',
            insights: true,
            placeholder: "请输入关键词",
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: '搜索',
                },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        },
        lastUpdatedText: '上次更新于',
        editLink: {
          pattern: 'https://github.com/markbang/markbang.github.io/edit/main/docs/:path',
          text: '给出修改建议'
        },
        nav: [
            { text: "首页", link: "index" },
            { text: "⚒️软件", link: "/software/" },
            { text: "🌍环境", link: "/environment/" },
            { text: "🧑‍💻编程手册",
            items: [
              
              {
                items:[{ text: '前端', link: '/code/前端/' },
              { text: '后端', link: '/code/后端/' },
              { text: '算法', link: '/code/算法/' }]
              },
              {
                items: [{text: '其他', link: '/code/'}]
              }
            ]},
            { text: "📑一人之下", link: "/yrzx/"},
            { text: "关于",
            items: [
                {
                    items: [
                        {text: '关于本站', link: "/about/site"}
                    ],
                },
                {
                    items: [
                        {text: '关于作者', link: "/about/author"}
                    ]
                }
            ]
            }
          ], 
        socialLinks: [
            { icon: "github", link: "https://github.com/markbang" },
            { icon: {
                svg: '<svg t="1695392630717" class="icon" viewBox="0 0 1242 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5198" width="200" height="200"><path d="M623.55768887-34.13333333c-301.68533333 0-546.13333333 244.448-546.13333333 546.13333333s244.448 546.13333333 546.13333333 546.13333333 546.13333333-244.448 546.13333334-546.13333333-244.44693333-546.13333333-546.13333334-546.13333333zM472.38542221 689.42933334h249.94026666c43.50613333 0 78.88213333-35.26506667 78.88213334-78.88106667v-13.07413335c0-14.50239999-11.75466668-26.368-26.368-26.368H590.70968887a26.30400001 26.30400001 0 0 1-26.368-26.36693332v-65.69813333a26.30400001 26.30400001 0 0 1 26.368-26.368h302.45546667c14.50239999 0 26.368 11.75573333 26.368 26.368v151.17226666c0 98.1088-79.54133333 177.54026666-177.54133333 177.54026667H353.95235554c-14.50239999 0-26.368-11.75466668-26.368-26.368V413.344c0-108.87573333 88.33066667-197.2064 197.20533333-197.2064h368.37333334a26.30400001 26.30400001 0 0 1 26.368 26.368l-0.10986667 65.69813333a26.30400001 26.30400001 0 0 1-26.368 26.368H524.90168887c-43.50613333 0-78.88213333 35.26506667-78.88213333 78.88106666v249.8304c0 14.39253333 11.75466668 26.14826667 26.36693333 26.14826668z" p-id="5199"></path></svg>'
            }, link: "https://gitee.com/bang-wu" },
            { icon: {
                svg: '<svg t="1695391570251" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4216" data-spm-anchor-id="a313x.search_index.0.i3.36cd3a81cjRuXJ" width="200" height="200"><path d="M851.40363594 172.59636406c-187.46181844-187.46181844-491.34545437-187.46181844-678.80727188 0-187.46181844 187.46181844-187.46181844 491.34545437 0 678.80727188 187.46181844 187.46181844 491.34545437 187.46181844 678.80727188 0 187.46181844-187.46181844 187.46181844-491.34545437 0-678.80727188zM387.33090875 728.08727281a47.08363594 47.08363594 0 1 1-66.63272719-66.50181843 47.08363594 47.08363594 0 0 1 66.63272719 66.50181843z m205.52727281 1.39636313a38.74909125 38.74909125 0 0 1-76.62545437-11.52h-0.04363594a6.54545437 6.54545437 0 0 0-0.04363688 0.30545531v-0.34909125c0.30545438-2.61818156 2.05090875-20.72727281-2.96727281-44.98909125a174.24 174.24 0 0 0-48.56727281-89.28 172.10181844 172.10181844 0 0 0-88.8-48.30545438 156.69818156 156.69818156 0 0 0-42.45818156-2.92363593 38.66181844 38.66181844 0 0 1-35.38909125-65.32363688 38.61818156 38.61818156 0 0 1 21.12-10.8218175v-0.2181825c4.45090875-0.74181844 111.14181844-16.45090875 200.33454562 72.74181844 89.01818156 89.01818156 74.18181844 196.14545438 73.44 200.72727281z m175.2 7.59272812a38.74909125 38.74909125 0 0 1-65.67272719 21.3818175 39.49090875 39.49090875 0 0 1-11.65090875-33.73090875c0.08727281-0.34909125 5.10545437-37.48363594-5.06181843-88.97454562-13.30909125-67.37454562-45.29454563-126.89454563-94.95272719-176.90181844-50.00727281-49.70181844-109.52727281-81.64363594-176.94545438-94.95272719-51.49090875-10.16727281-88.58181844-5.19272719-89.01818156-5.14909031h0.21818156-0.04363687a39.92727281 39.92727281 0 0 1-44.68363594-32.90181844 38.83636406 38.83636406 0 0 1 32.20363594-44.37818156c1.92-0.30545438 47.86909125-7.33090875 111.27272719 4.36363594a411.75272719 411.75272719 0 0 1 106.25454562 34.95272718 425.76 425.76 0 0 1 114.63272719 82.25454563l0.91636406 0.96 0.96 0.87272719a425.89090875 425.89090875 0 0 1 82.25454563 114.72c16.40727281 33.6 28.14545437 69.29454562 34.99636312 106.21090875 11.65090875 63.40363594 4.66909125 109.35272719 4.32 111.27272812z" fill="#515151" p-id="4217" data-spm-anchor-id="a313x.search_index.0.i1.36cd3a81cjRuXJ"></path></svg>'
            }, link: "https://www.cnblogs.com/bangwu/" },],
        sidebar: {
          '/software/': set_sidebar('docs/software'),
          '/environment/': set_sidebar('docs/environment'),
          '/yrzx/': set_sidebar('docs/yrzx'),
          '/code/': getDirectoryContents('docs/code'),
          '/code/前端/': getDirectoryContents('docs/code/前端'),
          '/code/后端/': getDirectoryContents('docs/code/后端'),
          '/code/算法/': getDirectoryContents('docs/code/算法'),
          '/code/前端/小程序开发/': set_sidebar('docs/code/前端/小程序开发'),
          '/code/前端/Vue/': set_sidebar('docs/code/前端/Vue'),
          '/code/前端/TailwindCSS/': set_sidebar('docs/code/前端/TailwindCSS'),
          '/code/后端/数据库/': set_sidebar('docs/code/后端/数据库'),
          '/code/后端/Python/': getDirectoryContents('docs/code/后端/Python'),
          '/code/后端/Python/爬虫/': set_sidebar('docs/code/后端/Python/爬虫'),
          '/code/后端/Python/FastAPI/': set_sidebar('docs/code/后端/Python/FastAPI'),
          '/code/后端/Python/Python常用库/': set_sidebar('docs/code/后端/Python/Python常用库'),
          '/code/后端/Python/Python所实现的一些奇怪算法/': set_sidebar('docs/code/后端/Python/Python所实现的一些奇怪算法'),
          '/code/后端/Go/': set_sidebar('docs/code/后端/Go'),
    }
  }
}