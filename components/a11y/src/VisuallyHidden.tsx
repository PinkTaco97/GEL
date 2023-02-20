/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultVisuallyHidden } from './overrides/visuallyHidden';
import pkg from '../package.json';
import { ReactNode } from 'react';

// ==============================
// Types
// ==============================

interface VisuallyHiddenProps {
	/**
	 * Component tag
	 */
	tag?: ((props: any) => any) | string;

	/**
	 * Component content
	 */
	children: ReactNode;

	/**
	 * The override API
	 */
	overrides?: {
		VisuallyHidden: {
			styles?: ((props: any) => any) | string,
			component?: string,
			attributes?: ((props: any) => any) | string,
		},
	};
}

// ==============================
// Component
//
// Only display content to screen readers
//
// See: https://a11yproject.com/posts/how-to-hide-content/
// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/
// ==============================

export const VisuallyHidden = ({
	tag = 'span',
	children,
	overrides: componentOverrides,
	...rest
}: VisuallyHiddenProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		VisuallyHidden: defaultVisuallyHidden,
	};

	const state = {
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		VisuallyHidden: {
			component: VisuallyHidden,
			styles: visuallyHiddenStyles,
			attributes: visuallyHiddenAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<VisuallyHidden
			{...rest}
			state={state}
			{...visuallyHiddenAttributes(state)}
			css={visuallyHiddenStyles(state)}
		>
			{children}
		</VisuallyHidden>
	);
};
