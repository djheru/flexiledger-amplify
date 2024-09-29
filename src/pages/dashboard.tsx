import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid';
import {
  ChartPieIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';
import { Heading } from '../components/catalyst/heading';
import { Select } from '../components/catalyst/select';
import { Stat } from '../components/shared/stat';
import { classNames } from '../utils';

const statuses: Record<string, string> = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
};
const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: {
      date: 'December 13, 2022',
      dateTime: '2022-12-13',
      amount: '$2,000.00',
      status: 'Overdue',
    },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: {
      date: 'January 22, 2023',
      dateTime: '2023-01-22',
      amount: '$14,000.00',
      status: 'Paid',
    },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: {
      date: 'January 23, 2023',
      dateTime: '2023-01-23',
      amount: '$7,600.00',
      status: 'Paid',
    },
  },
];

export async function dashboardAction() {
  console.log('dashboardAction');
  return null;
}

export async function dashboardLoader() {
  console.log('dashboardLoader');
  return null;
}

export function DashboardPage() {
  return (
    <>
      <div className="mt-0 flex items-end justify-between">
        <Heading>Good afternoon, Philip</Heading>
        <div>
          <Select name="period">
            <option value="last_week">Last week</option>
            <option value="last_two">Last two weeks</option>
            <option value="last_month">Last month</option>
            <option value="last_quarter">Last quarter</option>
          </Select>
        </div>
      </div>
      <div className="my-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
        <Stat
          title="Amount Unpaid"
          value="$1245"
          change="+4.5%"
          icon={<InformationCircleIcon className="size-8 text-yellow-500" />}
        />
        <Stat
          title="Amount Paid"
          value="$2345"
          change="-0.5%"
          icon={<CheckCircleIcon className="size-8 text-green-500" />}
        />
        <Stat
          title="Past Due"
          value="$245"
          change="+4.5%"
          icon={<ExclamationCircleIcon className="size-8 text-red-500" />}
        />
        <Stat
          title="Period Total"
          value="$3245"
          change="+21.2%"
          icon={<ChartPieIcon className="size-8 text-blue-500" />}
        />
      </div>
      <div className="mx-auto mt-10 max-w-none lg:mx-0">
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8"
        >
          {clients.map((client) => (
            <li
              key={client.id}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              <div className="flex items-center gap-x-4 border-b border-gray-900/5 p-6">
                <div className="text-lg font-semibold leading-6">
                  {client.name}
                </div>
                <Menu as="div" className="relative ml-auto">
                  <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Open options</span>
                    <EllipsisHorizontalIcon
                      aria-hidden="true"
                      className="size-5"
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                      >
                        View<span className="sr-only">, {client.name}</span>
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                      >
                        Edit<span className="sr-only">, {client.name}</span>
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Last invoice</dt>
                  <dd className="text-gray-700">
                    <time dateTime={client.lastInvoice.dateTime}>
                      {client.lastInvoice.date}
                    </time>
                  </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Amount</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="font-medium text-gray-900">
                      {client.lastInvoice.amount}
                    </div>
                    <div
                      className={classNames(
                        statuses[client.lastInvoice.status],
                        'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                      )}
                    >
                      {client.lastInvoice.status}
                    </div>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
