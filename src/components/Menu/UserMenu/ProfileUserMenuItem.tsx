import { UserMenuItem } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { useRouter } from 'next/router'

interface ProfileUserMenuItemProps {
  isLoading: boolean
  hasProfile: boolean
  disabled: boolean
}

const ProfileUserMenuItem: React.FC<ProfileUserMenuItemProps> = ({ disabled }) => {
  const { account } = useWeb3React()
  const router = useRouter()
  const { t } = useTranslation()

  const handleClick = () => {
    router.push(`${nftsBaseUrl}/profile/${account.toLowerCase()}/achievements`)
  }

  return (
    <UserMenuItem as="button" disabled={disabled} onClick={handleClick}>
      {t('Your Profile')}
    </UserMenuItem>
  )
}

export default ProfileUserMenuItem
