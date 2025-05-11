import { Tabs } from 'antd-mobile'

import './style.css'
import { useTabs } from './useTabs.ts'
import HomeList from './HomeList/index.tsx'

const Home = () => {
  const { channels } = useTabs()

  return (
    <>
      <div className='tobContainer'>
        <Tabs>
          {channels.map((item) => {
            return (
              <Tabs.Tab title={item.name} key={item.id}>
                <HomeList channelId={'' + item.id}></HomeList>
              </Tabs.Tab>
            )
          })}
        </Tabs>
      </div>
    </>
  )
}
export default Home
