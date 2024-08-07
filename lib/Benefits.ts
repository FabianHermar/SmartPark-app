import { BlueIcons } from '@/constants';

interface Benefit {
	title: string;
	icon: string;
	benefits: string[];
}

const benefits: Benefit[] = [
	{
		title: 'Unlimited Parking',
		icon: BlueIcons.Parking,
		benefits: []
	},
	{
		title: 'Reserved Spaces',
		icon: BlueIcons.Verified,
		benefits: []
	},
	{
		title: 'Priority Access',
		icon: BlueIcons.Crown,
		benefits: []
	},
	{
		title: 'Valet Service',
		icon: BlueIcons.Valet,
		benefits: []
	},
	{
		title: 'Enhanced Security and Surveillance',
		icon: BlueIcons.Security,
		benefits: []
	},
	{
		title: 'Discounts and Promotions',
		icon: BlueIcons.Discount,
		benefits: []
	},
	{
		title: 'Access to Special Areas',
		icon: BlueIcons.Stars,
		benefits: []
	},
	{
		title: 'Dedicated Customer Support',
		icon: BlueIcons.Customers,
		benefits: []
	}
];

export default benefits;
