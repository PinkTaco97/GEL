/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormSection, ChitChat } from '@westpac/form';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground brand={brand}>
			<Intopia ignore />

			<Form>
				<FormSection>
					<ChitChat>
						Hello, I’m the friendly conversational text component. I live at the top of the form pod
						if required.
					</ChitChat>
				</FormSection>
			</Form>
		</Playground>
	);
}

export default Example;
