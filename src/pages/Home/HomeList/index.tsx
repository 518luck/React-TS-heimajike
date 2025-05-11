import { Image, List, InfiniteScroll } from 'antd-mobile'
import { useEffect, useState } from 'react'
// mock数据
import { fetchArticlesAPI } from '@/apis/list'
import type { ListRes } from '@/apis/list'

type Props = {
  channelId: string
}

const HomeList = (props: Props) => {
  const { channelId } = props
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: '' + new Date().getTime(),
  })

  useEffect(() => {
    // 调用接口
    const getList = async () => {
      try {
        const res = await fetchArticlesAPI({
          channel_id: channelId,
          timestamp: '' + new Date().getTime(),
        })
        setListRes({
          results: res.data.data.results,
          pre_timestamp: res.data.data.pre_timestamp,
        })
      } catch (error) {
        console.log(error)
      }
    }
    getList()
  }, [channelId])
  const [hasMore, setHasMore] = useState(true)
  const loadMore = async () => {
    console.log('上拉加载触发')
  }
  return (
    <>
      <List>
        {listRes.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              item?.cover?.images && item.cover.images.length > 0 ? (
                <Image
                  src={item.cover.images[0]}
                  style={{ borderRadius: 20 }}
                  fit='cover'
                  width={40}
                  height={40}
                />
              ) : null
            }
            description={item.pubdate}>
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={hasMore}
        threshold={10}></InfiniteScroll>
    </>
  )
}

export default HomeList
