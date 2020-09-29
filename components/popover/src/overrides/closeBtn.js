/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const CloseBtn = ({ state: _, ...rest }) => (
	<Button iconAfter={CloseIcon} look="link" size="medium" assistiveText="Close popover" {...rest} />
);

const BlenderCloseBtn = (props) => (
	<CloseBtn
		overrides={{
			Button: {
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

const closeBtnStyles = () => {
	const { COLORS, SPACING } = useBrand();
	return {
		label: getLabel('popover-closebtn'),
		position: 'absolute',
		zIndex: 1,
		top: 0,
		right: SPACING(1),
		color: COLORS.text,

		':hover': {
			opacity: 0.8,
		},
	};
};

// ==============================
// Attributes
// ==============================

const closeBtnAttributes = () => null;

const blenderAttributes = () => ({
	'data-js': 'popover-closeBtn__version__',
});

// ==============================
// Exports
// ==============================

export const defaultCloseBtn = {
	component: CloseBtn,
	styles: closeBtnStyles,
	attributes: closeBtnAttributes,
};

export const blenderCloseBtn = {
	component: BlenderCloseBtn,
	styles: closeBtnStyles,
	attributes: blenderAttributes,
};
