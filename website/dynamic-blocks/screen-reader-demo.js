/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react'; // Needed for within Keystone
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { jsx, useBrand } from '@westpac/core';

const openQuote = fill =>
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31 22'%3E%3Cpath fill='" +
	fill +
	"' fill-rule='evenodd' d='M30.52 16.202c0 .688-.134 1.377-.4 2.065-.268.688-.67 1.31-1.203 1.867-.534.556-1.188 1.006-1.962 1.35-.775.344-1.642.516-2.604.516-1.064 0-2.092-.2-3.08-.596-.99-.397-1.83-.966-2.523-1.707-.587-.69-1.04-1.51-1.362-2.462-.32-.953-.48-1.96-.48-3.018 0-2.012.36-3.866 1.08-5.56.722-1.694 1.75-3.203 3.085-4.527.587-.582 1.254-1.125 2.002-1.628.748-.503 1.456-.927 2.124-1.27.667-.345 1.24-.623 1.722-.835.48-.212.774-.344.88-.397L31 4.686c-.587.212-1.242.49-1.963.834-.72.344-1.4.768-2.042 1.27-.64.504-1.175 1.1-1.602 1.788-.427.688-.668 1.482-.72 2.382 1.548 0 2.91.45 4.084 1.35 1.175.9 1.762 2.198 1.762 3.892zm-16.902 0c0 .688-.134 1.377-.4 2.065-.268.688-.668 1.31-1.202 1.867-.535.556-1.19 1.006-1.963 1.35C9.28 21.828 8.41 22 7.45 22c-1.068 0-2.096-.2-3.084-.596-.988-.397-1.83-.966-2.524-1.707-.587-.69-1.04-1.51-1.36-2.462C.16 16.282 0 15.275 0 14.217c0-2.012.36-3.866 1.08-5.56.722-1.694 1.75-3.203 3.085-4.527.588-.582 1.255-1.125 2.003-1.628.748-.503 1.455-.927 2.123-1.27.67-.346 1.245-.624 1.726-.836.48-.212.774-.344.88-.397L14.1 4.683c-.587.212-1.24.49-1.962.834-.72.343-1.402.767-2.043 1.27-.64.503-1.175 1.1-1.602 1.787-.426.688-.667 1.482-.72 2.382 1.55 0 2.91.45 4.085 1.35 1.175.9 1.763 2.197 1.763 3.89z'/%3E%3C/svg%3E";
const closeQuote = fill =>
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31 22'%3E%3Cpath fill='" +
	fill +
	"' fill-rule='evenodd' d='M17.477 5.798c0-.688.133-1.377.398-2.065s.663-1.31 1.193-1.867c.53-.556 1.18-1.006 1.95-1.35C21.785.172 22.648 0 23.6 0c1.06 0 2.082.2 3.063.596.98.397 1.816.966 2.505 1.707.584.69 1.035 1.51 1.353 2.462.32.953.48 1.96.48 3.018 0 2.012-.36 3.866-1.074 5.56-.716 1.694-1.737 3.203-3.062 4.527-.584.582-1.247 1.125-1.99 1.628-.74.503-1.444.927-2.107 1.27-.663.345-1.233.623-1.71.835-.477.212-.77.344-.875.397L17 17.314c.583-.212 1.233-.49 1.95-.834.715-.344 1.39-.768 2.027-1.27.637-.504 1.167-1.1 1.59-1.788.425-.688.664-1.482.717-2.382-1.538 0-2.89-.45-4.057-1.35-1.166-.9-1.75-2.198-1.75-3.892zm-17 0c0-.688.133-1.377.398-2.065s.663-1.31 1.193-1.867c.53-.556 1.18-1.006 1.95-1.35C4.785.172 5.648 0 6.6 0c1.06 0 2.082.2 3.063.596.98.397 1.816.966 2.505 1.707.584.69 1.035 1.51 1.353 2.462.32.953.48 1.96.48 3.018 0 2.012-.36 3.866-1.074 5.56-.716 1.694-1.737 3.203-3.062 4.527-.584.582-1.247 1.125-1.99 1.628-.74.503-1.444.927-2.107 1.27-.663.345-1.233.623-1.71.835-.477.212-.77.344-.875.397L0 17.314c.583-.212 1.233-.49 1.95-.834.715-.344 1.39-.768 2.027-1.27.637-.504 1.167-1.1 1.59-1.788.425-.688.664-1.482.717-2.382-1.538 0-2.89-.45-4.057-1.35C1.06 8.79.477 7.492.477 5.798z'/%3E%3C/svg%3E";

export const ScreenReaderText = {
	editor: ({ value, onChange }) => {
		const [text, setText] = useState(value.text);

		useEffect(() => {
			onChange({
				text,
			});
		}, [text]);

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'a11y-text'} field={{ label: 'Screen reader text', config: {} }} />
					<FieldInput>
						<textarea
							css={inputStyles}
							type="text"
							id="a11y-text"
							value={text}
							onChange={async e => {
								setText(e.target.value);
							}}
						/>
					</FieldInput>
				</FieldContainer>
			</Fragment>
		);
	},
	component: ({ text }) => {
		const { SPACING, COLORS } = useBrand();
		const iconSize = SPACING(5, true);
		return (
			<div
				css={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<p
					css={{
						flexBasis: '50%',
					}}
				>
					How the example is described by assistive technology. As read with macOS High Sierra
					VoiceOver.
				</p>
				<blockquote
					css={{
						flexGrow: 0,
						position: 'relative',
						paddingRight: SPACING(3),
						paddingLeft: SPACING(6, true),
						display: 'inline-block',
						'@media (max-width: 800px)': {
							padding: '0px',
						},
						'&::before': {
							content: "''",
							display: 'block',
							width: `${iconSize}`,
							height: `${iconSize}`,
							position: 'absolute',
							backgroundImage: `url("${openQuote(COLORS.primary.replace('#', '%23'))}")`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'iconSize ${iconSize}',
							top: 0,
							left: 0,
							'@media (max-width: 800px)': {
								left: '-2rem',
							},
						},
						'&::after': {
							content: "''",
							display: 'block',
							width: `${iconSize}`,
							height: `${iconSize}`,
							position: 'absolute',
							backgroundImage: `url("${closeQuote(COLORS.primary.replace('#', '%23'))}")`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: `${iconSize} ${iconSize}`,
							top: '90%',
							left: '100%',
							'@media (max-width: 800px)': {
								top: '95%',
							},
						},
					}}
				>
					{text.split('\n').map(p => (
						<p>{p}</p>
					))}
				</blockquote>
			</div>
		);
	},
};
