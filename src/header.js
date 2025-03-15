import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from './assets/logo-app.svg';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Articles', href: 'articles', current: false },
  { name: 'Contact', href: 'contact', current: false },
  { name: 'About', href: 'about', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const navigate = useNavigate();

  return (
    <Disclosure as="nav" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      index === selectedMenu ? 'text-sky-500' : 'text-black hover:text-sky-500',
                      'rounded-md px-3 py-2 text-sm font-medium no-underline cursor-pointer',
                    )}
                    onClick={() => {
                      setSelectedMenu(index);
                      navigate(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item, index) => (
            <DisclosureButton
              key={item.name}
              as="a"
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                index === selectedMenu ? 'bg-sky-600 text-white' : 'text-black hover:bg-sky-500 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
              onClick={() => {
                setSelectedMenu(index);
                navigate(item.href);
              }}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}