import { useState } from 'react'

interface Props {
  onPasswordEntered: (password: string) => void
}

export default function PasswordScreen({ onPasswordEntered }: Props) {
  const [password, setPassword] = useState('')

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onPasswordEntered(password)
  }

  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
        <form onSubmit={handleFormSubmit}>
          <label>
            Please enter the password to view this site:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}