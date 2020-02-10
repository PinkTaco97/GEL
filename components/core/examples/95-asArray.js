/** @jsx jsx */

import { jsx, asArray } from '@westpac/core';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	console.log(asArray([1, 2, 3]));
	return (
		<Playground brand={brand}>
			<Intopia ignore />
			<Code>{`asArray([ 1, 2, 3])`}</Code>
			=>
			<Code>{JSON.stringify(asArray([1, 2, 3]))}</Code>
			<hr />
			<Code>{`asArray(1)`}</Code>
			=>
			<Code>{JSON.stringify(asArray(1))}</Code>
		</Playground>
	);
}

export default Example;
