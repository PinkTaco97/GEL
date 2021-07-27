/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Pictogram = ({
	pictogram: Pictogram,
	state: { pictogramWidth, pictogramHeight },
	...rest
}) => {
	const defaultWidth = 24;

	return (
		<Pictogram
			width={pictogramWidth || (!pictogramHeight ? defaultWidth : null)}
			height={pictogramHeight}
			assistiveText={null}
			{...rest}
		/>
	);
};

const BlenderPictogram = (props) => (
	<Pictogram
		overrides={{
			Pictogram: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const pictogramStyles = () => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option-pictogram'),
		marginRight: SPACING(4),
		flex: 'none',
	})[0];
};

// ==============================
// Attributes
// ==============================

const pictogramAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultPictogram = {
	component: Pictogram,
	styles: pictogramStyles,
	attributes: pictogramAttributes,
};

export const blenderPictogram = {
	component: BlenderPictogram,
	styles: pictogramStyles,
	attributes: pictogramAttributes,
};
