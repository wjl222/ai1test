'use client'

import { useEditor, EditorContent, ChainedCommands } from '@tiptap/react'
import { CustomParagraph } from "./extensions/customExtensions";


import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit.configure({
      paragraph: false
    }), CustomParagraph],
    content: '<p>Hello World! 🌎️</p>',
    editorProps: {
      attributes: {
        class: 'prose  max-w-none dark:prose-invert  mx-auto focus:outline-none min-h-80',
      },
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  const handleDianji = () => {
    editor?.chain().focus().setParagraphColor('red').run()
  }

//   useEffect(() =>{
//     const storage = editor?.storage as unknown as {
//   CustomHeading: {
//     awesomeness: number
//   }
// }
// const value = storage?.CustomHeading.awesomeness
//   }, [editor])

  return (
    <>
      <div>
        <button onClick={handleDianji}>dianji</button>
      </div>
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap