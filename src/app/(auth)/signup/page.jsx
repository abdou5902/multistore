import { getApi } from "@/_oneEntry"
import SignupFormClient from "@/components/SignUpFormClient"

async function Signup() {

  const api = await getApi()

  const signupForm = await api.Forms.getFormByMarker('signupForm')


  return (
    <SignupFormClient formAtts={ signupForm } />
  )
}

export default Signup