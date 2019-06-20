import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default props => {
	return (
		<Fragment className="data-list">
			{props.users.map(user => {
				return (
					<div key={user.id} className="data-list-item">
						<div className="detail">
							<Link to={`/users/${user.id}`}>{user.name}</Link>
						</div>
						<div className="controls">
							<button onClick={props.deleteUser.bind(null, user.id)} className="delete">
								Delete
							</button>
						</div>
					</div>
				);
			})}
		</Fragment>
	);
};
