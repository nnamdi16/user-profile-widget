import React, { Fragment } from 'react';
import { Link } from 'react-router';
export default props => {
	return (
		<Fragment className="data-list">
			{props.widget.map(widget => {
				return (
					<div key={widget.id} className="data-list-item">
						<div className="details">{widget.name}</div>
						<div className="controls">
							<button onClick={props.deleteWidget.bind(null, widget.id)} className="delete">
								Delete
							</button>
						</div>
					</div>
				);
			})}
		</Fragment>
	);
};
