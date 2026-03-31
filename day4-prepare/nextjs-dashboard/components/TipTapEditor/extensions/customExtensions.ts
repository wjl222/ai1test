import Heading from '@tiptap/extension-heading'
export const CustomHeading = Heading.extend({
     name: 'CustomHeading', 
   addOptions() {
    return {
        ...this.parent?.(),
      levels: [1, 2, 3],
       HTMLAttributes: {
        class: 'my-heading', // 你可以加自定义类
      },
    }
  },
  addStorage() {
    return {
      awesomeness: 100,
    }
  },
  onUpdate() {
    this.storage.awesomeness += 1
  },
  addAttributes() {
    return {
        href: {
            default: 'jjjjjjjjj'
        }
    }
  }
})

