// src/types/css.d.ts （路径可自定义，只要 TS 能识别到）
// 声明所有 .css 文件的模块类型
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// 如果项目中还有 SCSS/SASS 文件，补充以下声明
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}