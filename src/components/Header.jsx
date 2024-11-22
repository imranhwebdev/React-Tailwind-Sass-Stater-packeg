import { Container } from './Grid'

export default function Header() {
  return (
    <>
      <header className='heading'>
        <Container>
          <div className='heading-wrap flex items-center justify-between'>
            <div className="heading-actions flex items-center flex-wrap">
              <button className="heading-toggler">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.08984 6H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.08984 12H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.08984 18H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
