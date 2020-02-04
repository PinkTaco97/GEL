/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';

import { Grid, Cell } from '@westpac/grid';
import { Panel, Header, Body } from '@westpac/panel';

export const YesNo = ({ yes, no }) => {
	const yesList = yes.nodes.map((item, index) => (
		<YesNoItem type="do" key={index} text={item.nodes[0].text} />
	));
	const noList = no.nodes.map((item, index) => (
		<YesNoItem type="avoid" key={index} text={item.nodes[0].text} />
	));

	return (
		<Grid>
			<Cell width={10} left={2}>
				<Grid columns={2}>
					<ContentBlock type="do" content={yesList} />
					<ContentBlock type="avoid" content={noList} />
				</Grid>
			</Cell>
		</Grid>
	);
};

const ContentBlock = ({ type, content }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<Cell css={{ margin: `${SPACING(4)} 0` }}>
			<Panel
				overrides={{
					Panel: {
						styles: styles => ({
							...styles,
							border: 'none',
						}),
					},
					Header: {
						styles: styles => ({
							...styles,
							background: type === 'do' ? COLORS.success : COLORS.warning,
							border: 'none',
							color: COLORS.light,
						}),
					},
				}}
			>
				<Header css={{ textTransform: 'capitalize' }}>{type}</Header>
				<Body>
					<p
						css={{
							color: COLORS.muted,
							textTransform: 'uppercase',
							fontSize: 12,
							fontWeight: 500,
							lineHeight: 1.5,
							letterSpacing: 1,
						}}
					>
						An example of what you should {type}..
					</p>
				</Body>
			</Panel>
			{content}
		</Cell>
	);
};

const YesNoItem = ({ text, type }) => {
	const { COLORS } = useBrand();
	const typeMap = {
		do: {
			color: COLORS.success,
			word: 'Do',
		},
		avoid: {
			color: COLORS.warning,
			word: 'Avoid',
		},
	};
	const variant = typeMap[type];

	return (
		<li>
			<span css={{ fontWeight: 700, color: variant.color }}>{variant.word}</span> - {text}
		</li>
	);
};
