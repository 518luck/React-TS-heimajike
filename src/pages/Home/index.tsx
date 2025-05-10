import { Tabs } from 'antd-mobile'
import { useEffect, useState } from 'react'

import './style.css'
import type { ChannelItem } from '@/apis/list'
import { fetchChannelAPI } from '@/apis/list'

const Home = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([])

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI()
        setChannels(res.data.data.channels)
      } catch (error) {
        console.log(error)
        throw new Error('获取频道列表失败')
      }
    }
    getChannels()
  }, [])
  return (
    <>
      <div className='tobContainer'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits'>
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title='动物' key='animals'>
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </div>
    </>
  )
}
export default Home
