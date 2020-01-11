/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Title = ({ heading, open, onClose, size, dismissible, overrides, ...rest }) => (
	<span {...rest} />
);

export const titleStyles = (_, {}) => {
	const { COLORS } = useBrand();

	return {
		fontSize: '1.125rem',
		fontWeight: 700,
		color: COLORS.text,
	};
};
