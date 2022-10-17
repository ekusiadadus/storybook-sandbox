import { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type SiginInParams = {
  username: string
  password: string
}

const signin = async (
  context: ApiContext,
  params: SignInParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
