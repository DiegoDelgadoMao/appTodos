import React from 'react'
import { useStorageListener } from './useStorageListener'

export const ChangeAlert = ({ sincronize }) => {
	const { show, toggleShow } = useStorageListener(sincronize);
	if (show) {
		return (
			<div>
				<p>Hubo cambios</p>
				<button onClick={() => toggleShow(false)}>
					refrescar la pagina
				</button>
			</div>
		)
	} else {
		return null
	}

}
