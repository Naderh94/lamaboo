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
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: '20px', backgroundColor: '#F2921D', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label style={{ color: '#2E3840', paddingRight: '2.5vw', display: 'block', fontSize: '1.8vh', fontWeight: "bold", fontFamily: 'Roboto Slab' }}>
            Please enter the password to view this site:
            <input type="text" value={password} onChange={handlePasswordChange} style={{ padding: '5px', width: '14vw', height: '2.5vh', borderRadius: '8px', marginLeft: '2vw', fontWeight: 'initial', fontFamily: 'monospace', textAlign: 'center' }} />
          </label>
          <button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline submitbutton">Yes Daddy</button>
        </form>
      </div>
    </div>
  )
}

