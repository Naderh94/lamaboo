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
        backgroundColor: '#F1D1D1',
        padding: '2rem',
        letterSpacing: '0.04rem'
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
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
              color: '#FFF8E1',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              fontFamily: 'Roboto Slab',
              marginBottom: '1.5rem',
              textAlign: 'center',
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
                borderBottom: '0.19rem solid #FFF8E1',
                outline: 'none',
                backgroundColor: 'transparent',
                color: '#967BB6',
                width: '100%',
                marginTop: '0.5rem',
                letterSpacing: '0.08rem'
              }}
            />
          </label>
          <button
            type="submit"
            className="submitbutton"
            style={{
              borderRadius: '0.5rem',
              padding: '0.5rem 1rem',
              fontFamily: 'Roboto Slab',
              fontWeight: 'bold',
              fontSize: '1.7rem',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
              marginTop: '0.3rem',
              letterSpacing: '0.03rem'
            }}
          >
            YAASS DADDY
          </button>
        </form>
      </div>
    </div>
  )
}

