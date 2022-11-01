const sign_in_function = async(fname,lname,password,email)=>{
    let __api__ = await fetch(`http://localhost:8000/verify_sign_in_information/${email}`)
    __api__ = await __api__.json()
    let user_type = ''
    let disected_address = email.split('@')[1]
    if(__api__['data'] == 'good to go!'){
      if(disected_address == 'k12.prosper-isd.net'){
        user_type = 'student'
      }
      if(disected_address == 'prosper-isd.net'){
        user_type = 'teacher'
      }
      else{
        alert('Use PISD account to sign in')
      }
      if(user_type == 'teacher' || user_type == 'student'){
    let api = await fetch(`http://localhost:8000/sign_in/${fname}/${lname}/${password}/${email}/${user_type}`)
    let api_json = await api.json()
    //props.navigation.navigate('Login')
    return api_json
    }
    else{alert('Use PISD email to sign in')}
     
  
    }     else{  
         alert(__api__['data'])
  }
    }
    export default sign_in_function