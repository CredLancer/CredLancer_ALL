import * as React from "react";
import "./markdown.css"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// @ts-ignore
import {coldarkCold, coyWithoutShadows, darcula, vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

type tProps = {
  textContent: string
  darkMode?: boolean
}

const theme = {
  dark: vscDarkPlus,
  light: coyWithoutShadows,
}

const ViewMarkDown = (props: tProps) => {
  const {textContent, darkMode} = props
  if (typeof darkMode === 'undefined') {
    theme.light = darcula
  }
  if (typeof darkMode === 'boolean') {
    theme.light = coldarkCold
  }


  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <div style={{position: 'relative',}}>
              {/*<Copy/>*/}
              <SyntaxHighlighter
                showLineNumbers={false}
                style={darkMode ? theme.dark : theme.light}
                language={match[1]}
                wrapLongLines={true}
                {...props}
              >
                {String(children).replace(/\n/, '')}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    >
      {textContent}
    </ReactMarkdown>
  )
}

export default ViewMarkDown