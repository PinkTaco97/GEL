import React from 'react';
import { propTypes, Icon } from './Icon';

export const ServiceBellIcon = ({
	assistiveText = 'Service Bell',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="ServiceBellIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M1,18 C1,11.9248678 5.92486775,7 12,7 C18.0751322,7 23,11.9248678 23,18 L1,18 Z M9,2 L15,2 L15,4 L9,4 L9,2 Z M0,20 L24,20 L24,22 L0,22 L0,20 Z"
		/>
	</Icon>
);

ServiceBellIcon.propTypes = propTypes;
