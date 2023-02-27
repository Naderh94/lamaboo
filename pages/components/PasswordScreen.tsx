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
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eedac9',
        padding: '2rem'
      }}
    >
      <div
        style={{
          backgroundColor: '#fc3a4e',
          borderRadius: '0.5rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          maxWidth: '90vw'
        }}
      >
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label
            style={{
              color: 'black',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              fontFamily: 'Roboto Slab',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}
          >
            Please enter the password to view my favorite thing in life:
            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                fontFamily: 'Roboto Slab',
                textAlign: 'center',
                fontWeight: 'lighter',
                border: 'none',
                borderBottom: '0.15rem solid #000000',
                outline: 'none',
                backgroundColor: 'transparent',
                color: '#000000',
                width: '100%',
                marginTop: '0.5rem'
              }}
            />
          </label>
          <button
            type="submit"
            className="submitbutton"
            style={{
              backgroundColor: '#000000',
              color: '#ff1919',
              borderRadius: '0.5rem',
              padding: '0.5rem 1rem',
              fontFamily: 'Roboto Slab',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Yes Daddy
          </button>
        </form>
      </div>
    </div>
  )
}

