import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const PizzaPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Pizza',
	copyrightYear = '2021',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="PizzaPictogram"
			mode={mode}
			viewBoxWidth={viewBoxWidth}
			viewBoxHeight={viewBoxHeight}
			assistiveText={assistiveText}
			copyrightYear={copyrightYear}
			{...rest}
		>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M35.581 29.212a5.542 5.542 0 1 1-11.085 0 5.542 5.542 0 1 1 11.085 0m-6.175 20.36a5.507 5.507 0 1 1-10.859-1.85 5.507 5.507 0 0 1 10.859 1.85M47.9 40.385a5.507 5.507 0 1 1-9.54 5.507 5.507 5.507 0 0 1 9.54-5.507"
				/>
				<path
					fill={outline}
					d="M63.934 50.143a3.123 3.123 0 0 1-2.084 1.194 3.114 3.114 0 0 1-.578.012c-.058-.004-.113-.012-.17-.019a2.936 2.936 0 0 1-.4-.072c-.056-.013-.112-.026-.165-.043a3.1 3.1 0 0 1-.478-.187 3.147 3.147 0 0 1-1.6-1.854 3.147 3.147 0 0 1-.128-.554 41.522 41.522 0 0 0-.334-2.14 40.347 40.347 0 0 0-4.635-12.84 39.505 39.505 0 0 0-8.74-10.557 38.204 38.204 0 0 0-2.367-1.858 37.71 37.71 0 0 0-1.98-1.335c-.036-.023-.073-.049-.112-.072a37.077 37.077 0 0 0-1.982-1.154l-.208-.11a35.02 35.02 0 0 0-4.034-1.834c-.102-.038-.205-.078-.308-.115a31.854 31.854 0 0 0-1.986-.66c-.073-.023-.148-.04-.221-.063a30.675 30.675 0 0 0-1.848-.468c-.097-.02-.193-.045-.288-.066a29.098 29.098 0 0 0-4.273-.565 3.137 3.137 0 0 1-2.852-2.293 2.694 2.694 0 0 1-.1-.467 2.826 2.826 0 0 1-.027-.538 3.127 3.127 0 0 1 1.032-2.184 3.105 3.105 0 0 1 2.265-.795C46.886 9.6 62.205 29.356 64.565 47.823a3.119 3.119 0 0 1-.631 2.32zM9.928 62.617l13.02-45.796c.6.26 1.25.422 1.94.457 13.318.677 28.54 12.704 30.963 31.657.078.608.263 1.178.517 1.706L9.928 62.617zm38.486-47.78C45.96 12.91 37.09 6.601 25.463 6.01a5.605 5.605 0 0 0-4.07 1.435 5.618 5.618 0 0 0-1.855 3.914 5.617 5.617 0 0 0 1.313 3.896L7.04 63.824c-.095.35-.098.739.268 1.172l3.196 3.598a1.248 1.248 0 0 0 1.246.38l49.358-12.728c.015-.004.025-.016.04-.02.965.771 2.653 1.387 4.209 1.19a5.608 5.608 0 0 0 3.748-2.145 5.606 5.606 0 0 0 1.135-4.167c-1.606-12.564-9.967-27.162-21.827-36.267z"
				/>
			</g>
		</Pictogram>
	);
};

PizzaPictogram.propTypes = Pictogram.propTypes;
