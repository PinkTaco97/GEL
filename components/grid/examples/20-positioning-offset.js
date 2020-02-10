/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';
import { Box } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground brand={brand}>
			<Intopia />

			<Grid columns={3}>
				<Cell>
					<Box>Top Left</Box>
				</Cell>
				<Cell left={3}>
					<Box>Top Right</Box>
				</Cell>
				<Cell left={2} top={2}>
					<Box>Middle</Box>
				</Cell>
				<Cell top={3}>
					<Box>Bottom Left</Box>
				</Cell>
				<Cell top={3} left={3}>
					<Box>Bottom Right</Box>
				</Cell>
			</Grid>
		</Playground>
	);
}

export default Example;
