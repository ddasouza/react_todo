import React, {memo} from 'react';
import {Button} from './styles';

function BaseButton(props) {
	return (
		<Button {...props}>
			{props.children}
		</Button>
	);
}

export default memo(BaseButton);
