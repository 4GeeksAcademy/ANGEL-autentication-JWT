const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userData : {},
		},
		actions: {
      registerFetch: async (registerData) =>{
        try{
          const res = await fetch('https://solid-doodle-5gqjw576g5qxc7vrp-3001.app.github.dev/api/signup', {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(registerData)
          })
          const data = await res.json()
          setStore({
            userData: data
          })
        }catch (error){
          console.log("Error in user register", error)
        }
      }
		}
	};
};

export default getState;
