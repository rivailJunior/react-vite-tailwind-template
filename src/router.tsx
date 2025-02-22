import { createBrowserRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import HomePage from './pages/home'

export const routerObjects: RouteObject[] = [
  {
    path: '/',
    Component: HomePage,
  },
]

export function createRouter(): ReturnType<typeof createBrowserRouter> {
  const routeWrappers = routerObjects.map((router) => {
    // @ts-ignore
    const getLayout = router.Component?.getLayout || getDefaultLayout
    const Component = router.Component!
    const page = getLayout(<Component />)

    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createBrowserRouter(routeWrappers)
}
