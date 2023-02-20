import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultSkipLink } from './overrides/skipLink';
import pkg from '../package.json';
import { ReactNode } from 'react';

// ==============================
// Types
// ==============================

interface SkipLinkProps {
	/**
	 * href attribute
	 */
	href: string;

	/**
	 * Children attributes
	 */
	children: ReactNode;

	/**
	 * The override API
	 */
	overrides: {
		SkipLink: {
			styles: any,
			component: string,
			attributes: any,
		},
	};
}

// ==============================
// Component
// ==============================

export const SkipLink = ({
	href,
	children,
	overrides: componentOverrides,
	...rest
}: SkipLinkProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		SkipLink: defaultSkipLink,
	};

	const state = {
		href,
		overrides: componentOverrides,
		...rest,
	};

	const {
		SkipLink: {
			component: OverrideSkipLink,
			styles: skipLinkStyles,
			attributes: skipLinkAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<OverrideSkipLink
			{...rest}
			state={state}
			{...skipLinkAttributes(state)}
			css={skipLinkStyles(state)}
		>
			{children}
		</OverrideSkipLink>
	);
};

SkipLink.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children attributes
	 */
	children: PropTypes.node,
	/**
	 * href attribute
	 */
	href: PropTypes.string.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		SkipLink: PropTypes.shape({
			attributes: PropTypes.any.isRequired,
			component: PropTypes.string.isRequired,
			styles: PropTypes.any.isRequired,
		}).isRequired,
	}).isRequired,
};
