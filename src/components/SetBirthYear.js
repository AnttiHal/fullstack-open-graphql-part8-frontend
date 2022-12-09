import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { SET_BIRTH_YEAR } from '../queries'
import Select from 'react-select';


const SetBirthYear = (props) => {
  const [name, setName] = useState(null)
  const [born, setBorn] = useState('')
  

  const [ setBornYear ] = useMutation(SET_BIRTH_YEAR)

  

  if (!props.show) {
    return null
  }

  const submit = async (event) => {
    event.preventDefault()

    setBornYear({variables: {name, born}})
    setBorn('')
    setName('')
  }

  const options = props.authors.map((author) => ({
    'value': author.name,
    'label': author.name
  }))

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <Select
          defaultValue={name}
          onChange={(p) => setName(p.value)}
          options={options}   
        />
        </div>
        <div>
          bornyear
          <input 
            type="number"
            value={born}
            onChange={({target}) => setBorn(Number(target.value))}
          />
        </div>
        <button type='submit'>Set year</button>
      </form>
      
    </div>
  )


}

export default SetBirthYear