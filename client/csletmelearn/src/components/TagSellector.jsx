import React, { useEffect, useState } from 'react';
import { Listbox , Transition } from '@headlessui/react';
import { Fragment } from 'react';

const TagSellector = ({setSelected , selected}) => {

    const styles = [
        "American Traditional",
        "Realism",
        "Blackwork",
        "Neo-traditional",
        "Tribal",
    ]


    return (
        <div className='text-black'>
        <Listbox defaultValue='None' onChange={setSelected}>
            <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {styles.map((person, personIdx) => (
                    <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                        `relative cursor-default select-none py-1.5 pl-10 pr-4 ${
                        active ? 'bg-green-400 text-white' : 'text-gray-900'
                        }`
                    }
                    value={person}
                    >
                    {({ selected }) => (
                        <>
                        <span
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                            {person}
                        </span>
                        {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <svg width="12" height="10" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 0.5L3.5045 6.24511C3.50215 6.24781 3.49798 6.24787 3.49556 6.24525L0.499939 3.00002" stroke="#111827" stroke-linecap="round"/>
                            </svg>
                            </span>
                        ) : null}
                        </>
                    )}
                    </Listbox.Option>
                ))}
                </Listbox.Options>
            </Transition>
            </div>
        </Listbox>
        </div>
    );
};

export default TagSellector;