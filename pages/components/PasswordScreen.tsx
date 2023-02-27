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
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#eedac9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: '1.5rem', backgroundColor: '#db5353', borderRadius: '0.3rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: '100%' }}>
          <label style={{ color: 'black', display: 'block', fontSize: '1.3rem', fontWeight: "bold", fontFamily: 'Roboto Slab', paddingRight: '1.3rem' }}>
            Please enter the password to view my favorite thing in life:
            <input type="text" value={password} onChange={handlePasswordChange} style={{ padding: '0.01rem', borderRadius: '0.9rem', marginLeft: '1.3rem', fontFamily: 'Roboto Slab', textAlign: 'center', fontWeight: 'lighter' }} />
          </label>
          <div style={{ fontSize: '1.5rem' }}>
            <button type="submit" className="submitbutton bg-gray-800 hover:bg-gray-900 font-bold rounded focus:outline-none focus:shadow-outline">Yes Daddy</button>
          </div>
        </form>
      </div>
    </div>
  )
}

