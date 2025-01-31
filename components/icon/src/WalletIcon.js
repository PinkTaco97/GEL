import React from 'react';
import { propTypes, Icon } from './Icon';

export const WalletIcon = ({
	assistiveText = 'Wallet',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="WalletIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M21.4142136,2.58578644 C21.7761424,2.94771525 22,3.44771525 22,4 L22,6 L14,6 C12.8954305,6 12,6.8954305 12,8 L12,16 C12,17.1045695 12.8954305,18 14,18 L22,18 L22,20 C22,21.1045695 21.1045695,22 20,22 L2,22 C0.8954305,22 1.52655666e-16,21.1045695 0,20 L0,4 C-3.05311332e-16,2.8954305 0.8954305,2 2,2 L20,2 C20.5522847,2 21.0522847,2.22385763 21.4142136,2.58578644 Z M14,8 L23,8 C23.5522847,8 24,8.44771525 24,9 L24,15 C24,15.5522847 23.5522847,16 23,16 L14,16 L14,8 Z M18.5,13.5 C19.3284271,13.5 20,12.8284271 20,12 C20,11.1715729 19.3284271,10.5 18.5,10.5 C17.6715729,10.5 17,11.1715729 17,12 C17,12.8284271 17.6715729,13.5 18.5,13.5 Z"
		/>
	</Icon>
);

WalletIcon.propTypes = propTypes;
