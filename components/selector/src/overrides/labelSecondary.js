/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const LabelSecondary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const labelSecondaryStyles = () => {
	const { SPACING } = useBrand();

	return {
		label: getLabel('selector-option-label-secondary'),
		width: '40%',
		textAlign: 'right',
		paddingLeft: SPACING(2),
		marginLeft: 'auto', //right align
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	};
};

// ==============================
// Attributes
// ==============================

const labelSecondaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLabelSecondary = {
	component: LabelSecondary,
	styles: labelSecondaryStyles,
	attributes: labelSecondaryAttributes,
};
