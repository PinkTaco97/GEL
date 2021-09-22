/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';
import { Grid, Cell } from '@westpac/grid';
import { Field } from '@westpac/form';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	const [dateFrom, setDateFrom] = useState(null);
	const [dateTo, setDateTo] = useState(null);

	const handleChangeFrom = (e) => {
		setDateFrom(e.detail.value);
	};
	const handleChangeTo = (e) => {
		setDateTo(e.detail.value);
	};

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Selecting a date range</Title>

			<Grid>
				<Cell width={[12, null, 3]}>
					<Field label="Select from">
						<DatePicker
							id="example-from"
							name="example-from"
							max={dateTo}
							onChange={(e) => handleChangeFrom(e)}
						/>
					</Field>
				</Cell>

				<Cell width={[12, null, 3]}>
					<Field label="Select to">
						<DatePicker
							id="example-to"
							name="example-to"
							min={dateFrom}
							onChange={(e) => handleChangeTo(e)}
						/>
					</Field>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
