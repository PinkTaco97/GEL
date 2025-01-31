import { GEL, jsx, useBrand } from '@westpac/core';
import * as components from '@westpac/symbol';
import { Cell, Grid, Name } from './_utils';

const symbols = Object.keys(components).filter((s) => s.includes('Symbol'));

function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<GEL brand={brand}>
			<Grid>
				{symbols.map((s) => {
					const Symbol = components[s];
					return (
						<Cell key={s}>
							<Symbol />
							<Name>
								<code>{`<${s}\u00A0/>`}</code>
								<div css={{ color: COLORS.muted }}>“{Symbol.defaultProps.assistiveText}”</div>
							</Name>
						</Cell>
					);
				})}
			</Grid>
		</GEL>
	);
}

export default Example;
