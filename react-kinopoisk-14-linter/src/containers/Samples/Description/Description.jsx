import { useEffect, useState, useContext } from 'react'
import styles from './styles.module.css'

import image from './img/city.png'

const fruits = [
  { key: 1, name: 'Яблоко', emoji: '🍎' },
  { key: 2, name: 'Банан', emoji: '🍌' },
  { key: 3, name: 'Апельсин', emoji: '🍊' },
  { key: 4, name: 'Виноград', emoji: '🍇' },
  { key: 5, name: 'Клубника', emoji: '🍓' },
  { key: 6, name: 'Арбуз', emoji: '🍉' },
  { key: 7, name: 'Лимон', emoji: '🍋' },
  { key: 8, name: 'Персик', emoji: '🍑' },
  { key: 9, name: 'Груша', emoji: '🍐' },
  {
    key: 10,
    name: 'Вишня',
    emoji: '🍒',
  },
]

const Description = (props) => {
  useEffect(() => {
    return () => {
      console.log('Размонтирование')
    }
  }, [])

  const [isEmojiVisible, setEmojiVisible] = useState(true)

  const hideEmoji = () => {
    setEmojiVisible(false)
  }

  return (
    <>
      <ul>
        {fruits.map((item, index) => (
          <li key={item.key}>
            {isEmojiVisible ? item.emoji : null}
            {item.name}
          </li>
        ))}
      </ul>

      <div className={styles.picture}></div>

      <img src={image} alt="" />

      <button onClick={hideEmoji}>Скрыть эмодзи</button>
    </>
  )
}

export default Description
