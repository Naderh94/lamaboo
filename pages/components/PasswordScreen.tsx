import { useState } from 'react'

type Props = {
  onPasswordEntered: (password: string) => void
}

const PasswordScreen = ({ onPasswordEntered }: Props) => {
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password === 'lamaishot') {
      onPasswordEntered(password)
    }
  }

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label className='Password'>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit" className='Password'>Submit</button>
      </form>
    </div>
  )
}

export default PasswordScreen