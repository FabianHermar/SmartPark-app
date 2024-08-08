import { Icons } from '@/constants'

interface Setting {
	title: string
	icon: string
}

const settings: Setting[] = [
	{
		title: 'Account and Profile',
		icon: Icons.Profile
	},
	{
		title: 'Application preferences',
		icon: Icons.Settings
	},
	{
		title: 'Security and Privacy',
		icon: Icons.Padlock
	},
	{
		title: 'Accessibility',
		icon: Icons.Accessible
	},
	{
		title: 'Help and Support',
		icon: Icons.LifeBuoy
	},
	{
		title: 'Legal information',
		icon: Icons.Info
	}
]

export default settings
