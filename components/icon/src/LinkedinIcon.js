import React from 'react';
import { propTypes, Icon } from './Icon';

export const LinkedinIcon = ({
	assistiveText = 'Linkedin',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="LinkedinIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M18.75,12.75 C18.75,10.6785 17.61375,9 15.75,9 C14.25,9 13.5,10.0125 12.75,10.8615 L12.75,9 L9.75,9 L9.75,19.5 L12.75,19.5 L12.75,13.5 C12.75,12.67125 13.42125,12 14.25,12 C15.07875,12 15.75,12.67125 15.75,13.5 L15.75,19.5 L18.75,19.5 L18.75,12.75 Z M8.25,6 C8.25,5.17125 7.57875,4.5 6.75,4.5 C5.92125,4.5 5.25,5.17125 5.25,6 C5.25,6.82875 5.92125,7.5 6.75,7.5 C7.57875,7.5 8.25,6.82875 8.25,6 L8.25,6 Z M5.25,19.5 L8.25,19.5 L8.25,9 L5.25,9 L5.25,19.5 Z M1.5,0 L22.5,0 L22.5,0 C23.3284271,-1.52179594e-16 24,0.671572875 24,1.5 L24,22.5 L24,22.5 C24,23.3284271 23.3284271,24 22.5,24 L1.5,24 L1.5,24 C0.671572875,24 1.01453063e-16,23.3284271 0,22.5 L0,1.5 L0,1.5 C-1.01453063e-16,0.671572875 0.671572875,1.52179594e-16 1.5,0 Z"
		/>
	</Icon>
);

LinkedinIcon.propTypes = propTypes;
