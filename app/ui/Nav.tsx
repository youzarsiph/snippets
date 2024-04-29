import clsx from 'clsx'
import React from 'react'
import hljs from 'highlight.js'
import { Fonts } from '@/app/styles'
import { Constants, Icons } from '@/app/utils'
import {
  Button,
  Combobox,
  Modal,
  Input,
  Logo,
  Select,
  Switch,
  ModeSwitch,
  ColorPicker,
} from '@/app/ui'
import {
  Font,
  Language,
  Padding,
  Size,
  Author,
  CodeSettings,
  ContainerSettings,
  ExportSettings,
} from '@/app/types'

const Nav = (props: {
  author: Author
  code: CodeSettings
  container: ContainerSettings
  export: ExportSettings
  exportCallback: () => void
  onCodeChange: (code: CodeSettings) => void
  onAuthorChange: (author: Author) => void
  onContainerChange: (container: ContainerSettings) => void
  onExportChange: (exportSettings: ExportSettings) => void
}) => {
  const [show, setShow] = React.useState({
    author: false,
    code: false,
    menu: false,
    export: false,
  })

  const getColor = (color: string) =>
    clsx(color, {
      'ring-4 ring-opacity-75 ring-offset-1': color === props.container.color,
      'bg-gradient-to-t':
        props.container.isGradient &&
        props.container.type === 'linear' &&
        props.container.direction === 'top',
      'bg-gradient-to-tr':
        props.container.isGradient &&
        props.container.type === 'linear' &&
        props.container.direction === 'top-right',
      'bg-gradient-to-r':
        props.container.isGradient &&
        props.container.type === 'linear' &&
        props.container.direction === 'right',
      'bg-gradient-to-br':
        props.container.isGradient &&
        props.container.type === 'linear' &&
        props.container.direction === 'bottom-right',
      'bg-gradient-to-b':
        props.container.isGradient &&
        props.container.type === 'linear' &&
        props.container.direction === 'bottom',
      'bg-gradient-to-bl':
        props.container.isGradient &&
        props.container.type === 'linear' &&
        props.container.direction === 'bottom-left',
      'bg-gradient-to-l':
        props.container.isGradient &&
        props.container.type === 'linear' &&
        props.container.direction === 'left',
      'bg-gradient-to-tl':
        props.container.isGradient &&
        props.container.type === 'linear' &&
        props.container.direction === 'top-left',
      'bg-gradient-conic':
        props.container.isGradient && props.container.type === 'conic',
      'bg-gradient-radial':
        props.container.isGradient && props.container.type === 'radial',
    })

  return (
    <nav className="relative z-20 order-last w-full lg:static lg:-order-none lg:h-full lg:w-auto">
      {/* Menu Modal */}
      <Modal
        title="Menu"
        show={show.menu}
        theme={props.container.theme}
        onClose={() => setShow({ ...show, menu: false })}
      >
        <div className="flex items-center justify-between gap-4">
          <p>Theme</p>
          <ModeSwitch
            value={props.container.theme}
            onChange={() =>
              props.onContainerChange({
                ...props.container,
                theme: !props.container.theme,
              })
            }
          />
        </div>

        <Select
          label="Size"
          data={Object.keys(Constants.sizes)}
          value={props.container.size}
          onChange={(value) =>
            props.onContainerChange({
              ...props.container,
              size: value as Size,
            })
          }
        />

        <Select
          label="Padding"
          value={props.container.padding}
          data={Object.keys(Constants.paddings)}
          onChange={(value) =>
            props.onContainerChange({
              ...props.container,
              padding: value as Padding,
            })
          }
        />

        <ColorPicker
          label="Color"
          value={getColor(props.container.color)}
          data={[...Constants.colors.map((color) => getColor(color))]}
          onChange={(color) =>
            props.onContainerChange({
              ...props.container,
              color: color,
            })
          }
        />

        <div className="flex items-center justify-between gap-4">
          <p>Gradient Colors</p>

          <Switch
            value={props.container.isGradient}
            onChange={() =>
              props.onContainerChange({
                ...props.container,
                isGradient: !props.container.isGradient,
              })
            }
          />
        </div>

        <Select
          label="Gradient Direction"
          value={props.container.direction}
          data={Constants.directions}
          onChange={(value) =>
            props.onContainerChange({
              ...props.container,
              direction: value,
            })
          }
        />

        <Select
          label="Gradient Type"
          value={props.container.type}
          data={Constants.types}
          onChange={(value) =>
            props.onContainerChange({
              ...props.container,
              type: value,
            })
          }
        />

        <div className="flex items-center justify-between gap-4">
          <p>Window Style: {props.container.buttons.style ? 'Mac' : 'Win'}</p>
          <Switch
            value={props.container.buttons.style}
            onChange={() =>
              props.onContainerChange({
                ...props.container,
                buttons: {
                  ...props.container.buttons,
                  style: !props.container.buttons.style,
                },
              })
            }
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <p>
            Buttons Position:{' '}
            {props.container.buttons.position ? 'Left' : 'Right'}
          </p>

          <Switch
            value={props.container.buttons.position}
            onChange={() =>
              props.onContainerChange({
                ...props.container,
                buttons: {
                  ...props.container.buttons,
                  position: !props.container.buttons.position,
                },
              })
            }
          />
        </div>
      </Modal>

      {/* Export Modal */}
      <Modal
        title="Export"
        show={show.export}
        theme={props.container.theme}
        onClose={() => setShow({ ...show, export: false })}
      >
        <Select
          label="Format"
          value={props.export.format}
          data={Constants.formats}
          onChange={(value) =>
            props.onExportChange({
              ...props.export,
              format: value,
            })
          }
        />

        <Select
          label="Quality"
          value={props.export.quality.toString()}
          data={Object.keys({ '50%': 0.5, '75%': 0.75, '100%': 1 })}
          onChange={(value) =>
            props.onExportChange({
              ...props.export,
              quality: parseFloat(value),
            })
          }
        />

        <Button onClick={() => props.exportCallback()}>Export</Button>
      </Modal>

      {/* Code Modal */}
      <Modal
        title="Code"
        show={show.code}
        theme={props.container.theme}
        onClose={() => setShow({ ...show, code: false })}
      >
        <Combobox
          label="Highlight Theme"
          value={props.code.highlight}
          data={Constants.highlights}
          onChange={(value) =>
            props.onCodeChange({
              ...props.code,
              highlight: value,
            })
          }
        />

        <Combobox
          label="Language"
          value={props.code.tab.language}
          data={hljs.listLanguages()}
          onChange={(value) =>
            props.onCodeChange({
              ...props.code,
              tab: { ...props.code.tab, language: value as Language },
            })
          }
        />

        <Combobox
          label="Font Family"
          value={props.code.font}
          data={Object.keys(Fonts)}
          onChange={(value) =>
            props.onCodeChange({
              ...props.code,
              font: value as Font,
            })
          }
        />

        <div className="flex items-center justify-between gap-4">
          <p>Line Numbers</p>
          <Switch
            value={props.code.displayLineNumbers}
            onChange={() =>
              props.onCodeChange({
                ...props.code,
                displayLineNumbers: !props.code.displayLineNumbers,
              })
            }
          />
        </div>
      </Modal>

      {/* Author Modal */}
      <Modal
        title="Author"
        show={show.author}
        theme={props.container.theme}
        onClose={() => setShow({ ...show, author: false })}
      >
        <Input
          label="Name"
          value={props.author.name}
          onChange={(event) =>
            props.onAuthorChange({
              ...props.author,
              name: event.target.value,
            })
          }
        />

        <Select
          label="Social website"
          data={Constants.sites}
          value={props.author.website}
          onChange={(val) =>
            props.onAuthorChange({
              ...props.author,
              website: val,
            })
          }
        />

        <Input
          label="Username"
          value={props.author.username}
          onChange={(event) =>
            props.onAuthorChange({
              ...props.author,
              username: event.target.value,
            })
          }
        />

        <div className="flex items-center justify-between gap-4">
          <p>Visibility</p>
          <Switch
            value={props.author.isVisible}
            onChange={() =>
              props.onAuthorChange({
                ...props.author,
                isVisible: !props.author.isVisible,
              })
            }
          />
        </div>
      </Modal>

      <div className="relative flex w-full items-center justify-evenly gap-4 bg-white/80 p-2 backdrop-blur-3xl lg:h-full lg:flex-col lg:justify-between lg:py-8 dark:bg-slate-800/75 dark:text-slate-200">
        <div className="flex w-full items-center justify-evenly gap-4 lg:flex-col lg:justify-start">
          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() =>
                setShow({
                  author: false,
                  code: false,
                  menu: !show.menu,
                  export: false,
                })
              }
            >
              {Icons.menu}
            </Button>
            <p className="text-xs">Menu</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() =>
                setShow({
                  author: false,
                  code: false,
                  menu: false,
                  export: !show.export,
                })
              }
            >
              {Icons.download}
            </Button>
            <p className="text-xs">Export</p>
          </div>

          <div className="flex flex-col items-center gap-1 lg:order-first">
            <Logo />
            <p className="text-xs font-semibold">Snippets</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() =>
                setShow({
                  author: false,
                  code: !show.code,
                  export: false,
                  menu: false,
                })
              }
            >
              {Icons.code}
            </Button>
            <p className="text-xs">Code</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() =>
                setShow({
                  author: !show.author,
                  code: false,
                  export: false,
                  menu: false,
                })
              }
            >
              {Icons.account}
            </Button>
            <p className="text-xs">Author</p>
          </div>
        </div>

        <div className="hidden rotate-90 lg:block">
          <ModeSwitch
            value={props.container.theme}
            onChange={() =>
              props.onContainerChange({
                ...props.container,
                theme: !props.container.theme,
              })
            }
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
