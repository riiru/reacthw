import { useState, useEffect } from 'react'
import { getList as getListJsonplaceholder } from '../../api/actions/jsonplaceholder'

const ApiComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await getListJsonplaceholder()
      setData(response)
    })()
  }, [])

  return (
    <div>
      <h1>ApiComponent</h1>
      <ul>
        {data.length !== 0 &&
          data.map((item) => (
            <li key={item.id}>
              {item.name} {item.website}
              <a href={item.website}>{item.website}</a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ApiComponent
