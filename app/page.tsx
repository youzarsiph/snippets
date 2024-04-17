'use client'

import clsx from 'clsx'
import React from 'react'
import hljs from 'highlight.js'
import { Fonts } from '@/app/styles'
import { Account, Background, Nav, Snippet } from '@/app/ui'
import { Constants, exportImage } from '@/app/utils'
import { CodeSettings, ContainerSettings, ExportSettings } from '@/app/types'

const Home = () => {
  // Target element
  const target = React.useRef(null)

  // Container Settings
  const [container, setContainer] = React.useState<ContainerSettings>({
    theme: true,
    size: 'auto',
    type: 'linear',
    padding: '64px',
    isGradient: true,
    direction: 'top-right',
    color: Constants.colors[0],
    buttons: { style: true, position: true },
  })

  // Export settings
  const [exportSettings, setExport] = React.useState<ExportSettings>({
    quality: 1,
    format: 'png',
  })

  // Code Settings
  const [code, setCode] = React.useState<CodeSettings>({
    font: 'JetBrains Mono',
    highlight: 'github-dark',
    displayLineNumbers: true,
    tab: {
      name: 'Untitled',
      content: 'Type your code here.',
      language: 'plaintext',
    },
  })

  // Author
  const [author, setAuthor] = React.useState({
    isVisible: false,
    name: 'Your Name',
    username: 'github.com/username',
  })

  React.useEffect(
    () =>
      setCode({
        ...code,
        tab: Constants.samples[
          parseInt(`${Math.random() * 100}`) % Constants.samples.length
        ],
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(() => {
    // Remove attribute to re-highlight code
    document.getElementById('code')?.removeAttribute('data-highlighted')

    // Highlight code
    hljs.highlightAll()
  }, [code])

  return (
    <div className={clsx({ dark: container.theme }, 'block h-screen w-screen')}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.min.css"
      />
      <link
        rel="stylesheet"
        href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${code.highlight}.css`}
      />

      <Background />

      <div className="flex h-full w-full overflow-hidden">
        <main className="relative flex h-full w-full flex-col items-center lg:flex-row">
          <Nav
            code={code}
            author={author}
            container={container}
            export={exportSettings}
            onCodeChange={(c) => setCode(c)}
            onAuthorChange={(a) => setAuthor(a)}
            onContainerChange={(c) => setContainer(c)}
            onExportChange={(e) => setExport(e)}
            exportCallback={() =>
              exportImage(
                target,
                exportSettings.format,
                code.tab.name,
                exportSettings.quality,
              )
            }
          />

          <div className="flex h-full w-full items-center justify-center overflow-auto">
            <div className={`relative h-fit w-fit`}>
              <div
                ref={target}
                className={clsx('p-1', Fonts[code.font].className)}
              >
                <section
                  style={Constants.sizes[container.size]}
                  className={clsx(
                    'relative flex h-full w-full flex-col items-center justify-center overflow-auto rounded-lg shadow-xl',
                    container.color,
                    {
                      'p-4': container.padding === '16px',
                      'p-8': container.padding === '32px',
                      'p-16': container.padding === '64px',
                      'p-32': container.padding === '128px',
                    },
                    {
                      'bg-gradient-to-t':
                        container.isGradient &&
                        container.type === 'linear' &&
                        container.direction === 'top',
                      'bg-gradient-to-tr':
                        container.isGradient &&
                        container.type === 'linear' &&
                        container.direction === 'top-right',
                      'bg-gradient-to-r':
                        container.isGradient &&
                        container.type === 'linear' &&
                        container.direction === 'right',
                      'bg-gradient-to-br':
                        container.isGradient &&
                        container.type === 'linear' &&
                        container.direction === 'bottom-right',
                      'bg-gradient-to-b':
                        container.isGradient &&
                        container.type === 'linear' &&
                        container.direction === 'bottom',
                      'bg-gradient-to-bl':
                        container.isGradient &&
                        container.type === 'linear' &&
                        container.direction === 'bottom-left',
                      'bg-gradient-to-l':
                        container.isGradient &&
                        container.type === 'linear' &&
                        container.direction === 'left',
                      'bg-gradient-to-tl':
                        container.isGradient &&
                        container.type === 'linear' &&
                        container.direction === 'top-left',
                      'bg-gradient-conic':
                        container.isGradient && container.type === 'conic',
                      'bg-gradient-radial':
                        container.isGradient && container.type === 'radial',
                    },
                  )}
                >
                  <Snippet
                    code={code}
                    buttons={container.buttons}
                    editTab={(n) =>
                      setCode({ ...code, tab: { ...code.tab, name: n } })
                    }
                    onContentChange={(c) =>
                      setCode({
                        ...code,
                        tab: { ...code.tab, content: c },
                      })
                    }
                  />

                  {author.isVisible ? (
                    <Account name={author.name} username={author.username} />
                  ) : undefined}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
