import { Layout, Menu } from 'antd'
import React from 'react'
import Menus from './menus'
import './layout.less'
import { Outlet, useNavigate} from "react-router-dom"
const { Header, Content, Footer } = Layout

const App: React.FC = () => {
  const navigate = useNavigate()
  const changeRouter = (menuInfo: any) => {
    const path = menuInfo.key as string
    navigate(path)
  }
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={Menus.map(m => {
            const key = m.path;
            return {
              key,
              label: `${m.name}`,
            };
          })}
          onSelect={changeRouter}
        />
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default App
