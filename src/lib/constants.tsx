import {
  Briefcase01Icon,
  HelpCircleIcon,
  Home02Icon,
  StarIcon,
  Tag02Icon,
  UserGroupIcon,
  UserIcon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'

type NavItem = {
  label: string
  icon: IconSvgElement
  href: string
}

export const navbarLinks: NavItem[] = [
  {
    label: 'Home',
    icon: Home02Icon,
    href: '/',
  },
  {
    label: 'Community',
    icon: UserGroupIcon,
    href: '/community',
  },
  {
    label: 'Collections',
    icon: StarIcon,
    href: '/collections',
  },
  {
    label: 'Find jobs',
    icon: Briefcase01Icon,
    href: '/jobs',
  },
  {
    label: 'Tags',
    icon: Tag02Icon,
    href: '/tags',
  },
  {
    label: 'Profile',
    icon: UserIcon,
    href: '/profile',
  },
  {
    label: 'Ask a question',
    icon: HelpCircleIcon,
    href: '/ask-question',
  },
]

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  ASK_QUESTION: '/ask-question',
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/questions/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
}
