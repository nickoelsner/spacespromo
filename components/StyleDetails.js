import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function StyleDetails({ children }) {
  return (
    <div className="w-full">
      <div className="w-full max-w-md rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-start py-2 text-sm font-medium text-left rounded-lg text-violet-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-900 focus-visible:ring-opacity-75">
                <span>Additional Styles</span>
                <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 ml-2`} />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
