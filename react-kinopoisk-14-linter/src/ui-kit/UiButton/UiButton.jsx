import styles from './styles.module.css'

const UiButton = (props) => {
  const { text, onClick, disabled, active } = props
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={active ? styles.active : styles.basic}
    >
      {text}
    </button>
  )
}

export default UiButton
