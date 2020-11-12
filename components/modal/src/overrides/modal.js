/** @jsx jsx */

import {
	jsx,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
	Global,
} from '@westpac/core';
import { forwardRef, Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

import { defaultProps } from '../Modal';
import { nestedStyles } from './modalDialog';

// ==============================
// Component
// ==============================

const Modal = forwardRef(({ state: { open }, ...rest }, ref) => {
	const fade = useSpring({
		config: { duration: 150 },
		from: { position: 'relative', zIndex: 1002, opacity: 0 },
		_dspl: open ? 1 : 0,
		opacity: open ? 1 : 0,
	});

	return (
		<animated.div
			style={{
				...fade,
				display: fade._dspl.interpolate((d) => (d === 0 ? 'none' : 'block')),
			}}
		>
			<div ref={ref} {...rest} />
		</animated.div>
	);
});

const BlenderModal = forwardRef(({ state, className, ...rest }, ref) => (
	<Fragment>
		<Global
			styles={{
				'body.isModalOpen': { overflow: 'hidden' },
			}}
		/>
		<div ref={ref} className={formatClassName(className)} {...rest} />
	</Fragment>
));

// ==============================
// Styles
// ==============================

const modalStyles = (_, { open }) => ({
	label: getLabel('modal'),
	position: 'fixed',
	zIndex: 1002,
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	overflow: 'hidden',

	...(open && {
		overflowX: 'hidden',
		overflowY: 'auto',
	}),
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { open, size }) => {
	const props = { open, size };
	const baseStyles = modalStyles(_, defaultProps);

	Object.assign(baseStyles, {
		display: 'none',
	});

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = modalStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'size':
			label = `${label}-${size}`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles, ...nestedStyles(props) };
};

// ==============================
// Attributes
// ==============================

const modalAttributes = (_, { open }) => ({
	role: 'dialog',
	'aria-modal': 'true',
	'aria-hidden': !open,
});

const blenderAttributes = (_, { open, size }) => ({
	...modalAttributes(_, { open }),
	'data-js': 'modal__version__',
	className: classNames({ [`__convert__modal-${size}`]: size !== defaultProps.size }),
});

// ==============================
// Exports
// ==============================

export const defaultModal = {
	component: Modal,
	styles: modalStyles,
	attributes: modalAttributes,
};

export const blenderModal = {
	component: BlenderModal,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
