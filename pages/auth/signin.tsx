import { getProviders, signIn as signIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

const signIn = ({ providers }:any) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-sceen -mt-5 py-2 px-14 text-center">
          <img
            className="w-80"
            src="https://links.papareact.com/ocw"
            alt="logo"
          />
          <p className="font-xs italic">Not a real app</p>
        <div className="mt-40">
          {Object.values(providers).map((provider:any) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIntoProvider(provider.id, {callbackUrl:"/"})}
              >
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
