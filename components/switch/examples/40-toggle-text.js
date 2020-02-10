/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground brand={brand}>
			<Intopia />

			<Switch
				name="example-toggletext"
				label="This example uses custom Yes/No toggle text"
				toggleText={['Yes', 'No']}
			/>
			<Switch name="no-toggletext" label="Pass an empty array for no toggle text" toggleText={[]} />
		</Playground>
	);
}

export default Example;
