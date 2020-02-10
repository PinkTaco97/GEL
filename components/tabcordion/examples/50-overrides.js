/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/tabcordion'] = {
		TabItem: {
			styles: (styles, { selected }) => ({
				...styles,
				border: `1px solid black`,
				backgroundColor: selected ? 'black' : 'white',
				color: selected ? 'white' : 'black',
			}),
		},
		AccordionLabel: {
			styles: (styles, { last, selected }) => ({
				...styles,
				backgroundColor: 'white',
				borderTop: `1px solid black`,
				borderLeft: `1px solid black`,
				borderRight: `1px solid black`,
				...(last &&
					!selected && {
						borderBottom: `1px solid black`,
					}),
			}),
		},
		Panel: {
			styles: styles => ({
				...styles,
				backgroundColor: 'black',
				color: 'white',
				borderColor: 'black',
			}),
		},
	};

	return (
		<Playground brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<h3>Always accordion</h3>
			<Tabcordion mode="accordion" instanceIdPrefix="always-accordion">
				<Tab text="Rabbit hole">
					‘It was much pleasanter at home,’ thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought! And when I grow up, I’ll write one.
				</Tab>
				<Tab text="Flamingo">
					The chief difficulty Alice found at first was in managing her flamingo: she succeeded in
					getting its body tucked away, comfortably enough, under her arm, with its legs hanging
					down, but generally, just as she had got its neck nicely straightened out, and was going
					to give the hedgehog a blow with its head, it would twist itself round and look up in her
					face, with such a puzzled expression that she could not help bursting out laughing: and
					when she had got its head down, and was going to begin again, it was very provoking to
					find that the hedgehog had unrolled itself, and was in the act of crawling away: besides
					all this, there was generally a ridge or furrow in the way wherever she wanted to send the
					hedgehog to, and, as the doubled-up soldiers were always getting up and walking off to
					other parts of the ground, Alice soon came to the conclusion that it was a very difficult
					game indeed.
				</Tab>
				<Tab text="Caterpillar">
					The Caterpillar and Alice looked at each other for some time in silence: at last the
					Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy
					voice.
					<br />
					‘Who are you?’ said the Caterpillar.
					<br />
					This was not an encouraging opening for a conversation. Alice replied, rather shyly, ‘I —
					I hardly know, sir, just at present — at least I know who I was when I got up this
					morning, but I think I must have been changed several times since then.’
					<br />
					‘What do you mean by that?’ said the Caterpillar sternly. ‘Explain yourself!’
					<br />
					‘I can’t explain myself, I’m afraid, sir’ said Alice, ’because I’m not myself, you see.’
					<br />
					‘I don’t see,’ said the Caterpillar.
					<br />
					‘I’m afraid I can’t put it more clearly,’ Alice replied very politely, ‘for I can’t
					understand it myself to begin with; and being so many different sizes in a day is very
					confusing.’
				</Tab>
			</Tabcordion>

			<h3>Always tabs</h3>
			<Tabcordion mode="tabs" instanceIdPrefix="always-tabs">
				<Tab text="Rabbit hole">
					‘It was much pleasanter at home,’ thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought! And when I grow up, I’ll write one.
				</Tab>
				<Tab text="Flamingo">
					The chief difficulty Alice found at first was in managing her flamingo: she succeeded in
					getting its body tucked away, comfortably enough, under her arm, with its legs hanging
					down, but generally, just as she had got its neck nicely straightened out, and was going
					to give the hedgehog a blow with its head, it would twist itself round and look up in her
					face, with such a puzzled expression that she could not help bursting out laughing: and
					when she had got its head down, and was going to begin again, it was very provoking to
					find that the hedgehog had unrolled itself, and was in the act of crawling away: besides
					all this, there was generally a ridge or furrow in the way wherever she wanted to send the
					hedgehog to, and, as the doubled-up soldiers were always getting up and walking off to
					other parts of the ground, Alice soon came to the conclusion that it was a very difficult
					game indeed.
				</Tab>
				<Tab text="Caterpillar">
					The Caterpillar and Alice looked at each other for some time in silence: at last the
					Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy
					voice.
					<br />
					‘Who are you?’ said the Caterpillar.
					<br />
					This was not an encouraging opening for a conversation. Alice replied, rather shyly, ‘I —
					I hardly know, sir, just at present — at least I know who I was when I got up this
					morning, but I think I must have been changed several times since then.’
					<br />
					‘What do you mean by that?’ said the Caterpillar sternly. ‘Explain yourself!’
					<br />
					‘I can’t explain myself, I’m afraid, sir’ said Alice, ’because I’m not myself, you see.’
					<br />
					‘I don’t see,’ said the Caterpillar.
					<br />
					‘I’m afraid I can’t put it more clearly,’ Alice replied very politely, ‘for I can’t
					understand it myself to begin with; and being so many different sizes in a day is very
					confusing.’
				</Tab>
			</Tabcordion>

			<h2>With overrides and component overrides</h2>
			<h3>Always accordion</h3>
			<Tabcordion mode="accordion" instanceIdPrefix="always-accordion">
				<Tab
					text="Rabbit hole"
					overrides={{
						AccordionLabel: {
							styles: (styles, { last, selected }) => ({
								...styles,
								backgroundColor: 'white',
								borderTop: `1px solid mediumblue`,
								borderLeft: `1px solid mediumblue`,
								borderRight: `1px solid mediumblue`,
								color: 'mediumblue',
								...(last &&
									!selected && {
										borderBottom: `1px solid mediumblue`,
									}),
							}),
						},
						Panel: {
							styles: styles => ({
								...styles,
								backgroundColor: 'mediumblue',
								color: 'white',
								borderColor: 'mediumblue',
							}),
						},
					}}
				>
					‘It was much pleasanter at home,’ thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought! And when I grow up, I’ll write one.
				</Tab>
				<Tab
					text="Flamingo"
					overrides={{
						AccordionLabel: {
							styles: (styles, { last, selected }) => ({
								...styles,
								backgroundColor: 'white',
								borderTop: `1px solid mediumblue`,
								borderLeft: `1px solid mediumblue`,
								borderRight: `1px solid mediumblue`,
								color: 'mediumblue',
								...(last &&
									!selected && {
										borderBottom: `1px solid mediumblue`,
									}),
							}),
						},
						Panel: {
							styles: styles => ({
								...styles,
								backgroundColor: 'mediumblue',
								color: 'white',
								borderColor: 'mediumblue',
							}),
						},
					}}
				>
					The chief difficulty Alice found at first was in managing her flamingo: she succeeded in
					getting its body tucked away, comfortably enough, under her arm, with its legs hanging
					down, but generally, just as she had got its neck nicely straightened out, and was going
					to give the hedgehog a blow with its head, it would twist itself round and look up in her
					face, with such a puzzled expression that she could not help bursting out laughing: and
					when she had got its head down, and was going to begin again, it was very provoking to
					find that the hedgehog had unrolled itself, and was in the act of crawling away: besides
					all this, there was generally a ridge or furrow in the way wherever she wanted to send the
					hedgehog to, and, as the doubled-up soldiers were always getting up and walking off to
					other parts of the ground, Alice soon came to the conclusion that it was a very difficult
					game indeed.
				</Tab>
				<Tab
					text="Caterpillar"
					overrides={{
						AccordionLabel: {
							styles: (styles, { last, selected }) => ({
								...styles,
								backgroundColor: 'white',
								borderTop: `1px solid mediumblue`,
								borderLeft: `1px solid mediumblue`,
								borderRight: `1px solid mediumblue`,
								color: 'mediumblue',
								...(last &&
									!selected && {
										borderBottom: `1px solid mediumblue`,
									}),
							}),
						},
						Panel: {
							styles: styles => ({
								...styles,
								backgroundColor: 'mediumblue',
								color: 'white',
								borderColor: 'mediumblue',
							}),
						},
					}}
				>
					The Caterpillar and Alice looked at each other for some time in silence: at last the
					Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy
					voice.
					<br />
					‘Who are you?’ said the Caterpillar.
					<br />
					This was not an encouraging opening for a conversation. Alice replied, rather shyly, ‘I —
					I hardly know, sir, just at present — at least I know who I was when I got up this
					morning, but I think I must have been changed several times since then.’
					<br />
					‘What do you mean by that?’ said the Caterpillar sternly. ‘Explain yourself!’
					<br />
					‘I can’t explain myself, I’m afraid, sir’ said Alice, ’because I’m not myself, you see.’
					<br />
					‘I don’t see,’ said the Caterpillar.
					<br />
					‘I’m afraid I can’t put it more clearly,’ Alice replied very politely, ‘for I can’t
					understand it myself to begin with; and being so many different sizes in a day is very
					confusing.’
				</Tab>
			</Tabcordion>

			<h3>Always tabs</h3>
			<Tabcordion
				mode="tabs"
				instanceIdPrefix="always-tabs"
				overrides={{
					TabItem: {
						styles: (styles, { selected }) => ({
							...styles,
							border: `1px solid darkred`,
							backgroundColor: selected ? 'darkred' : 'white',
							color: selected ? 'white' : 'darkred',
						}),
					},
				}}
			>
				<Tab
					text="Rabbit hole"
					overrides={{
						Panel: {
							styles: styles => ({
								...styles,
								backgroundColor: 'darkred',
								color: 'white',
								borderColor: 'darkred',
							}),
						},
					}}
				>
					‘It was much pleasanter at home,’ thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought! And when I grow up, I’ll write one.
				</Tab>
				<Tab
					text="Flamingo"
					overrides={{
						Panel: {
							styles: styles => ({
								...styles,
								backgroundColor: 'darkred',
								color: 'white',
								borderColor: 'darkred',
							}),
						},
					}}
				>
					The chief difficulty Alice found at first was in managing her flamingo: she succeeded in
					getting its body tucked away, comfortably enough, under her arm, with its legs hanging
					down, but generally, just as she had got its neck nicely straightened out, and was going
					to give the hedgehog a blow with its head, it would twist itself round and look up in her
					face, with such a puzzled expression that she could not help bursting out laughing: and
					when she had got its head down, and was going to begin again, it was very provoking to
					find that the hedgehog had unrolled itself, and was in the act of crawling away: besides
					all this, there was generally a ridge or furrow in the way wherever she wanted to send the
					hedgehog to, and, as the doubled-up soldiers were always getting up and walking off to
					other parts of the ground, Alice soon came to the conclusion that it was a very difficult
					game indeed.
				</Tab>
				<Tab
					text="Caterpillar"
					overrides={{
						Panel: {
							styles: styles => ({
								...styles,
								backgroundColor: 'darkred',
								color: 'white',
								borderColor: 'darkred',
							}),
						},
					}}
				>
					The Caterpillar and Alice looked at each other for some time in silence: at last the
					Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy
					voice.
					<br />
					‘Who are you?’ said the Caterpillar.
					<br />
					This was not an encouraging opening for a conversation. Alice replied, rather shyly, ‘I —
					I hardly know, sir, just at present — at least I know who I was when I got up this
					morning, but I think I must have been changed several times since then.’
					<br />
					‘What do you mean by that?’ said the Caterpillar sternly. ‘Explain yourself!’
					<br />
					‘I can’t explain myself, I’m afraid, sir’ said Alice, ’because I’m not myself, you see.’
					<br />
					‘I don’t see,’ said the Caterpillar.
					<br />
					‘I’m afraid I can’t put it more clearly,’ Alice replied very politely, ‘for I can’t
					understand it myself to begin with; and being so many different sizes in a day is very
					confusing.’
				</Tab>
			</Tabcordion>
		</Playground>
	);
}

export default Example;
