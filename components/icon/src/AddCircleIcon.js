import React from 'react';
import { propTypes, Icon } from './Icon';

export const AddCircleIcon = ({
	assistiveText = 'Add',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="AddCircleIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M24,12 C24,18.627 18.62775,24 12,24 C5.37225,24 0,18.627 0,12 C0,5.373 5.37225,0 12,0 C18.62775,0 24,5.373 24,12 Z M12,2 C6.47714286,2 2,6.47714286 2,12 C2,17.5228571 6.47714286,22 12,22 C17.5228571,22 22,17.5228571 22,12 C22,6.47714286 17.5228571,2 12,2 Z M11,11 L11,6 L13,6 L13,11 L18,11 L18,13 L13,13 L13,18 L11,18 L11,13 L6,13 L6,11 L11,11 Z"
		/>
	</Icon>
);

AddCircleIcon.propTypes = propTypes;
