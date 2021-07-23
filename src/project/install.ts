export default async function index(app) {
  const tools = require['context'](
    // 其组件目录的相对路径
    "./",
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /\index.(ts)$/
  );
  const toolsPaths = tools.keys();
  toolsPaths.forEach(async (_) => {
    let path = _;
    path = path.substring(0, path.length - 3)
    const toolModule = await import(`${path}`)
    for (const key in toolModule.default) {
      app.config.globalProperties[`$${key}`] = toolModule.default[key]
    }
  });
}