import Paragraph from '@tiptap/extension-paragraph'

export const CustomParagraph = Paragraph.extend({
  name: 'paragraph',

  // 1. 自定义属性 color
  addAttributes() {
    return {
      color: {
        default: null,
        renderHTML: (attributes) => {
          console.log('jjjjj', )
          if (!attributes.color) return {}
          return {
            style: `color: ${attributes.color}`,
          }
        },
      },
    }
  },

  // 2. 正确的命令：设置颜色
  addCommands() {
    return {
      // 给当前段落设置颜色
      setParagraphColor: (color) => ({ chain }) => {
        return chain().updateAttributes('paragraph', { color })
      },

      // 清除颜色
      unsetParagraphColor: () => ({ chain }) => {
        return chain().updateAttributes('paragraph', { color: null })
      },
    }
  },
})