module.exports = {
  title: 'Orange UI',
  description: '一个基于Vue2.0的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/MajorDong/' },
      { text: '欢迎star', link: 'https://github.com/MajorDong/Orange'  },
    ],
    sidebar: [
      { title:'介绍',
        collapsable: false,
        children:[
          '/introduce',
        ],
      },
      {
        title: '入门',
        collapsable: false,
        children: [ 
        '/install/',
        '/get-started/', ]
      },
      {
        title: '组件',
        collapsable: false,
        children: ['./components/button']
      }
    ]
  }
}