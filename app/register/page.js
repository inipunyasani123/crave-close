import AkunForm from '@/components/AkunForm'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Daftar',
  description:
    'Buat akun Positive Crave — undang pasangan untuk berbagi satu daftar keinginan, atau lewati saja.',
  path: '/register',
  index: false,
})

export default function Page() {
  return <AkunForm mode="daftar" />
}
