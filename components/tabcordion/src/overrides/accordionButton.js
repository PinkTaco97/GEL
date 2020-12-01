/** @jsx jsx */

import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';

import { defaultProps } from '../blender/Tabcordion';

// ==============================
// Component
// ==============================

const AccordionButton = ({ state: _, ...rest }) => <button type="button" {...rest} />;

const BlenderAccordionButton = ({ className, ...rest }) => (
	<AccordionButton className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const accordionButtonStyles = (_, { look, hidden, first, last }) => {
	const { COLORS } = useBrand();
	const styleMap = {
		soft: {
			...(first && {
				borderTopLeftRadius: '0.1875rem',
				borderTopRightRadius: '0.1875rem',
			}),
			...(last
				? {
						borderBottomLeftRadius: hidden ? '0.1875rem' : 0,
						borderBottomRightRadius: hidden ? '0.1875rem' : 0,
				  }
				: {}),
		},
		lego: {
			borderLeftWidth: '0.375rem',

			// Closed indicator
			'::before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				top: '-1px',
				left: '-0.375rem',
				bottom: 0,
				borderLeft: hidden && `0.375rem solid ${COLORS.hero}`,
			},
		},
	};

	return {
		label: getLabel('tabcordion-accordion-btn'),
		display: 'flex',
		position: 'relative',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: COLORS.background,
		padding: '0.75rem 1.125rem',
		border: `1px solid ${COLORS.border}`,
		borderBottomWidth: !last && hidden && 0, //reset
		fontSize: '1rem',
		textAlign: 'left',
		cursor: 'pointer',
		...styleMap[look],
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { hidden }) => {
	const props = { hidden };
	const baseStyles = accordionButtonStyles(_, { ...defaultProps, hidden: true });

	let modifiers = getModifier({ ...defaultProps, hidden: true }, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = accordionButtonStyles(_, { ...props, look: 'soft' });
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'hidden':
			if (!hidden) label = `${label}-open`;
			Object.assign(reconciledStyles, {
				['.__convert__tabcordion-accordion-btn-icon']: { transform: 'rotate(180deg)' },
			});
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

export const accordionBtnLegoStyles = (_) => {
	const baseStyles = accordionButtonStyles(_, defaultProps);
	const legoStyles = accordionButtonStyles(_, { look: 'lego', hidden: true });
	const openLegoStyles = accordionButtonStyles(_, { look: 'lego', hidden: false });
	const reconLegoStyles = styleReconciler(baseStyles, legoStyles);
	const reconOpenLegoStyles = styleReconciler(baseStyles, openLegoStyles);
	const finalOpenLegoStyles = styleReconciler(reconLegoStyles, reconOpenLegoStyles);

	return {
		[`.__convert__${baseStyles.label}`]: {
			...reconLegoStyles,
			':last-of-type': {
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
			},
		},
		[`.__convert__${baseStyles.label}-open`]: finalOpenLegoStyles,
	};
};
// ==============================
// Attributes
// ==============================

const accordionButtonAttributes = (_, { tabId, panelId, hidden }) => ({
	id: tabId,
	'aria-controls': panelId,
	'aria-expanded': !hidden,
});

const blenderAttributes = (_, { panelId, hidden }) => ({
	'aria-controls': panelId,
	'aria-expanded': !hidden,
	'data-js': 'tabcordion-accordion-btn__version__',
	className: classNames({ [`__convert__tabcordion-accordion-btn-open`]: !hidden }),
});

// ==============================
// Exports
// ==============================

export const defaultAccordionButton = {
	component: AccordionButton,
	styles: accordionButtonStyles,
	attributes: accordionButtonAttributes,
};

export const blenderAccordionButton = {
	component: BlenderAccordionButton,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
