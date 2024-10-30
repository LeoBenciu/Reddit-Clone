import React from 'react'
import styles from './InputLog.module.css'

const InputLog = ({type, placeholder, value, onChange}) => {
  return <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange} required></input>
}

export default InputLog;
