const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userDataSignUp : {},
      userDataLogin: {},
      messageFromToken: ''
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
          if (!res.ok){
            throw new Error(data.error || "Registration failed")
          }
          setStore({
            userDataSignUp: data
          })
          return data
        }catch (error){
          throw error
        }
      },
      loginFetch: async (loginData) => {
        try{
          const res = await fetch('https://solid-doodle-5gqjw576g5qxc7vrp-3001.app.github.dev/api/login', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
          })
          const data = await res.json()
          if(!res.ok){
            throw new Error(data.error)
          }
          console.log(data)
          if(data.access_token){
            localStorage.setItem('userDataLogin', JSON.stringify(data))
          }
          setStore({
            userDataLogin: data
          })
          return data
        }catch (error){
          throw new Error(error)
        }
      },
      getMessage: async (token) => {
        try{
            const res = await fetch('https://solid-doodle-5gqjw576g5qxc7vrp-3001.app.github.dev/api/message', {
              method: 'POST',
              headers: {
                'Content-type': "application/json",
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({})
            })
            const data = await res.json()
            if(!res.ok){
              throw new Error(data.error)
            }
            setStore({
              messageFromToken: data.message
            })
        }catch (error){
          throw new Error(error)
        }
      }
		}
	};
};

export default getState;
