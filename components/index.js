import { useRouter } from 'next/router'
import Base from './BaseLayout'

const excludeRoutes = ['/', '/login', '/register']

export default function BaseLayout({ children }) {
  const router = useRouter();
  const isExclude = excludeRoutes.includes(router.route);

  return (
    <>
      {
        isExclude ? children : (<Base>{children}</Base>)
      }
    </>
  );
}
