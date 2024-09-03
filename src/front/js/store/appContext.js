import React, { useState } from "react";
import getState from "./flux.js";


export const Context = React.createContext(null);


const Provider = ({children}) => {
	const [state, setState] = useState(
		getState({
			getStore: () => state.store,
			getActions: () => state.actions,
			setStore: updateStore => 
				setState({
					store: Object.assign(state.store, updateStore),
					actions: {...state.actions}
				})
		})
	)
	return(
		<Context.Provider value={state}>
			{children}
		</Context.Provider>
	)
}

export default Provider