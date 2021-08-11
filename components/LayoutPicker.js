import { RadioGroup } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LayoutPicker = ({ selected, setSelected, layouts }) => {
  return (
    <div className="mb-6">
      <h4 className="block mb-2 text-sm font-medium text-violet-900">Layout</h4>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Layout</RadioGroup.Label>
        <div className="-space-y-px bg-white rounded-md">
          {layouts.map((layout, layoutIdx) => {
            return (
              <RadioGroup.Option
                key={layout.name}
                value={layout}
                checked={selected === layout}
                className={({ checked }) =>
                  classNames(
                    layoutIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                    layoutIdx === layouts.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                    checked ? 'bg-violet-50 border-violet-200 z-10' : 'border-gray-200',
                    'relative border p-3 flex cursor-pointer focus:outline-none'
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <span
                      className={classNames(
                        checked ? 'bg-violet-600 border-transparent' : 'bg-white border-gray-300',
                        active ? 'ring-2 ring-offset-2 ring-violet-500' : '',
                        'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                      )}
                      aria-hidden="true"
                    >
                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                    </span>
                    <div className="flex flex-row gap-3 ml-3">
                      <RadioGroup.Label
                        as="span"
                        className={classNames(
                          checked ? 'text-violet-900' : 'text-gray-900',
                          'block text-sm font-medium'
                        )}
                      >
                        {layout.name}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className={classNames(
                          checked ? 'text-violet-700' : 'text-gray-500',
                          'block text-sm'
                        )}
                      >
                        {layout.description}
                      </RadioGroup.Description>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            )
          })}
        </div>
      </RadioGroup>
    </div>
  )
}

export default LayoutPicker
