import { TheHeader } from './components/TheHeader'

interface Props {
  children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => (
  <>
    <div className="h-screen w-full">
      <TheHeader />

      <main>{children}</main>
    </div>
  </>
)
