import { MenuItemsType, MoreIcon } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Farm'),
    href: '/farms',
  },
  {
    label: t('Stake'),
    href: '/pools',
  },
  {
    label: t('Swap'),
    href: '/swap',
  },
  {
    label: t('DAO'),
    href: '/',
  },
  {
    label: '',
    href: '#',
    icon: MoreIcon,
    items: [
      {
        label: t('About'),
        href: 'https://bmcc.finance',
      },
      {
        label: t('Docs'),
        href: 'https://docs.bmcc.finance/',
      },
    ],
  },
]

export default config
