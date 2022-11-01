import React from 'react'

export const TodoHeader = ({ children, loading }) => {
	return (
		<header>
			{
				React.Children.toArray(children)
					.map(element => React.cloneElement(element, { loading }))
			}
		</header>
	)
}
