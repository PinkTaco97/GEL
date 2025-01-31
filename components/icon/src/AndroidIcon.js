import React from 'react';
import { propTypes, Icon } from './Icon';

export const AndroidIcon = ({
	assistiveText = 'Android',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="AndroidIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M6,18 C6,18.55 6.45,19 7,19 L8,19 L8,22.5 C8,23.33 8.67,24 9.5,24 C10.33,24 11,23.33 11,22.5 L11,19 L13,19 L13,22.5 C13,23.33 13.67,24 14.5,24 C15.33,24 16,23.33 16,22.5 L16,19 L17,19 C17.55,19 18,18.55 18,18 L18,8 L6,8 L6,18 Z M3.5,8 C2.67,8 2,8.67 2,9.5 L2,16.5 C2,17.33 2.67,18 3.5,18 C4.33,18 5,17.33 5,16.5 L5,9.5 C5,8.67 4.33,8 3.5,8 Z M20.5,8 C19.67,8 19,8.67 19,9.5 L19,16.5 C19,17.33 19.67,18 20.5,18 C21.33,18 22,17.33 22,16.5 L22,9.5 C22,8.67 21.33,8 20.5,8 Z M15.53,2.16 L16.83,0.86 C17.03,0.66 17.03,0.35 16.83,0.15 C16.63,-0.05 16.32,-0.05 16.12,0.15 L14.64,1.63 C13.85,1.23 12.95,1 12,1 C11.04,1 10.14,1.23 9.34,1.63 L7.85,0.15 C7.65,-0.05 7.34,-0.05 7.14,0.15 C6.94,0.35 6.94,0.66 7.14,0.86 L8.45,2.17 C6.97,3.26 6,5.01 6,7 L18,7 C18,5.01 17.03,3.25 15.53,2.16 L15.53,2.16 Z M10,5 L9,5 L9,4 L10,4 L10,5 Z M15,5 L14,5 L14,4 L15,4 L15,5 Z"
		/>
	</Icon>
);

AndroidIcon.propTypes = propTypes;
