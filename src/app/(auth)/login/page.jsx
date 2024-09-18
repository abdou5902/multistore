import { getApi } from "@/_oneEntry"
import SignInFormClient from "@/components/SignInFormClient";

async function Login() {
  const api = await getApi()

  const signinForm = await api.Forms.getFormByMarker('signinForm')

  return (
    <SignInFormClient formAtts={ signinForm } />
  )
}

export default Login