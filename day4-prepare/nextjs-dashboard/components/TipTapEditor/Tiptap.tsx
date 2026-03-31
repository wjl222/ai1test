'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import { CustomHeading } from "./extensions/customExtensions";


import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit.configure({
      heading: false
    }), CustomHeading],
    content: '<p>Hello World! 🌎️</p>',
    editorProps: {
      attributes: {
        class: 'prose  max-w-none dark:prose-invert  mx-auto focus:outline-none min-h-80',
      },
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

//   useEffect(() =>{
//     const storage = editor?.storage as unknown as {
//   CustomHeading: {
//     awesomeness: number
//   }
// }
// const value = storage?.CustomHeading.awesomeness
//   }, [editor])

  return <EditorContent editor={editor} />
}

export default Tiptap