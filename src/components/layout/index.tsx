import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from 'react-router-dom';
import * as S from './index.styles'


function Layout() {
  return (
    <S.LayoutContainer className="layout">
      <Header/>
      <Outlet/>
      <Footer/>
    </S.LayoutContainer>
  )
}
export default Layout
