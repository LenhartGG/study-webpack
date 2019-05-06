// entry: { // pagesDir是前面准备好的入口文件集合目录的路径
//     'alert/index': path.resolve(pagesDir, `./alert/index/page`), 
//     'index/login': path.resolve(pagesDir, `./index/login/page`), 
//     'index/index': path.resolve(pagesDir, `./index/index/page`),
//   },

// ├─src # 当前项目的源码
//     ├─pages # 各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
//     │  ├─alert # 业务模块
//     │  │  └─index # 具体页面
//     │  ├─index # 业务模块
//     │  │  ├─index # 具体页面
//     │  │  └─login # 具体页面
//     │  │      └─templates # 如果一个页面的HTML比较复杂，可以分成多块再拼在一起
//     │  └─user # 业务模块
//     │      ├─edit-password # 具体页面
//     │      └─modify-info # 具体页面
//     └─public-resource # 各个页面使用到的公共资源
//         ├─components # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
//         │  ├─footer # 页尾
//         │  ├─header # 页头
//         │  ├─side-menu # 侧边栏
//         │  └─top-nav # 顶部菜单
//         ├─config # 各种配置文件
//         ├─iconfont # iconfont的字体文件
//         ├─imgs # 公用的图片资源
//         ├─layout # UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路
//         │  ├─layout # 具体的布局套路
//         │  └─layout-without-nav # 具体的布局套路
//         ├─less # less文件，用sass的也可以，又或者是纯css
//         │  ├─base-dir
//         │  ├─components-dir # 如果组件本身不需要js的，那么要加载组件的css比较困难，我建议可以直接用less来加载
//         │  └─base.less # 组织所有的less文件
//         ├─libs # 与业务逻辑无关的库都可以放到这里
//         └─logic # 业务逻辑


var pagesDir = 'src'; // pagesDir是前面准备好的入口文件集合目录的路径
var pageArr = [
    'index/login',
    'index/index',
    'alert/index',
];

var configEntry = {};

pageArr.forEach((page) => {
    configEntry[page] = path.resolve(pagesDir, page + '/page');
});

module.exports = {
    configEntry: configEntry
}