import React from 'react'
import styles from './LogingPopup.module.css'
import { faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { closePopup } from '../../redux/slices/UiSlice'
import { useDispatch, useSelector } from 'react-redux'
import ButtonLog from '../../components/ButtonLog/ButtonLog'
import InputLog from '../../components/InputLog/InputLog'
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { clearInputFields, registerUser, updatePassword, updateUserOrEmail } from '../../redux/slices/UsersSlice'


const LoginPopup = ({isUserLoggedIn}) => {

    const dispatch = useDispatch();

    const emailOrUsername = useSelector((state)=>state.user.emailOrUsername);
    const password = useSelector((state)=> state.user.password);

    const isFormFilled = emailOrUsername.trim() !== '' && password.trim() !== '';

    const handleLoginPopupClose = ()=>{
        dispatch(clearInputFields());
        dispatch(closePopup('loginPopup'))
    }

    const handleSubmitForm = (e)=>{
        if(isFormFilled){
            dispatch(registerUser({emailOrUsername, password}))};
            dispatch(clearInputFields());
            dispatch(closePopup('loginPopup'));
    }



  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>

        <div className={styles.popupHeader}>

            <button onClick={handleLoginPopupClose} className={styles.buttonX} style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                border: 'none',
                backgroundColor: '#2B3236',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}><FontAwesomeIcon icon={faXmark} className={styles.iconX} style={{
                width: '50%',
                height: '50%',
                color: 'white',

            }}/></button>
        </div>

        <form className={styles.content} onSubmit={handleSubmitForm}>
            <h2 style={{color: 'white', fontSize: '23px', margin: '0'}}>Log In</h2>
            <p style={{color: 'white', fontSize: '14px'}}>By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.</p>
            <ButtonLog icon={faPhone} text="Continue With Phone Number"></ButtonLog>
            <ButtonLog icon={faGoogle} text="Continue With Google"></ButtonLog>
            <ButtonLog icon={faApple} text="Continue With Apple"></ButtonLog>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', marginTop: '5px'}}>
                <div style={{width: '200px', height: '1px', backgroundColor: '#2B3236'}}></div>
                <p style={{margin: '0 20px', fontSize:'13px', fontWeight: '550',color: '#979EA1'}}>OR</p>
                <div style={{width: '200px', height: '1px', backgroundColor: '#2B3236'}}></div>
            </div>

            <InputLog value={emailOrUsername} placeholder='Email or username' onChange={(e)=>dispatch(updateUserOrEmail(e.target.value))}></InputLog>
            <InputLog value={password} placeholder='Password' type='password' onChange={(e)=>dispatch(updatePassword(e.target.value))}></InputLog>

            <a style={{color: '#149EF5', background: 'transparent', border: 'none', fontSize: '13.5px', marginBottom: '10px', textAlign: 'left', paddingLeft: '0', paddingTop: '10px'}}>Forgot Password?</a>

            <p style={{fontSize: '14.5px', marginTop: '0', marginBottom: '40px', color: 'white'}}>New to Reddit? <a style={{color: '#149EF5'}}>Sign Up</a></p>

            <button type='submit' style={{height: '55px', borderRadius: '30px', fontWeight: '600', backgroundColor: isFormFilled ? '#149EF5' :'#2B3236',cursor: isFormFilled? 'pointer' : 'not-allowed', border: 'none', color: isFormFilled? 'white': '#5E6263'}}>Log in</button>
        </form>

      </div>
    </div>
  )
}

export default LoginPopup;
