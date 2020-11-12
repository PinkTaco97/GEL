import { GEL } from '@westpac/core';
import React from 'react';

import { Tab, Tabcordion } from '../src/blender';

import { blenderTabcordion } from '../src/overrides/tabcordion';
import { blenderTabRow } from '../src/overrides/tabRow';
import { blenderTabButton } from '../src/overrides/tabButton';
import { blenderAccordionButton } from '../src/overrides/accordionButton';
import { blenderAccordionButtonIcon } from '../src/overrides/accordionButtonIcon';
import { blenderPanel } from '../src/overrides/panel';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/tabcordion'] = {
		Tabcordion: {
			component: blenderTabcordion.component,
			styles: blenderTabcordion.styles,
		},
		TabRow: {
			component: blenderTabRow.component,
			styles: blenderTabRow.styles,
		},
		TabButton: {
			component: blenderTabButton.component,
			styles: blenderTabButton.styles,
		},
		Panel: {
			component: blenderPanel.component,
			styles: blenderPanel.styles,
		},
		AccordionButton: {
			component: blenderAccordionButton.component,
			styles: blenderAccordionButton.styles,
		},
		AccordionButtonIcon: {
			component: blenderAccordionButtonIcon.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noScope>
			<Tabcordion openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
			<Tabcordion mode="tabs" openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
			<Tabcordion mode="accordion" openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
			<Tabcordion mode="tabs" justify openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
			<Tabcordion look="lego" openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/tabcordion'] = {
		Tabcordion: {
			component: blenderTabcordion.component,
			attributes: blenderTabcordion.attributes,
		},
		TabRow: {
			component: blenderTabRow.component,
			attributes: blenderTabRow.attributes,
		},
		TabButton: {
			component: blenderTabButton.component,
			attributes: blenderTabButton.attributes,
		},
		Panel: {
			component: blenderPanel.component,
			attributes: blenderPanel.attributes,
		},
		AccordionButton: {
			component: blenderAccordionButton.component,
			attributes: blenderAccordionButton.attributes,
		},
		AccordionButtonIcon: {
			component: blenderAccordionButtonIcon.component,
		},
	};

	return [
		// Tabcordion
		{
			heading: 'Tabcordion (responsive)',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion instanceIdPrefix="example-tabcordion">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Justified',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion justify instanceIdPrefix="example-tabcordion-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" instanceIdPrefix="example-tabcordion-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego justified',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" justify instanceIdPrefix="example-tabcordion-lego-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},

		// Tabs
		{
			heading: 'Tabs',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion mode="tabs" instanceIdPrefix="example-tabs">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Justified',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion mode="tabs" justify instanceIdPrefix="example-tabs-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" mode="tabs" instanceIdPrefix="example-tabs-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego justified',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" mode="tabs" justify instanceIdPrefix="example-tabs-lego-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},

		// Accordion
		{
			heading: 'Accordion',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion mode="accordion" instanceIdPrefix="example-accordion">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" mode="accordion" instanceIdPrefix="example-accordion-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
	];
}
