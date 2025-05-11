import { useEffect, useState } from 'react'

import type { DetailDataType } from '@/apis/detail'
import { fetchDetaiApi } from '@/apis/detail'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'

const Detail = () => {
  const [detail, setDetail] = useState<DetailDataType | null>(null)

  //获取路由参数
  const [params] = useSearchParams()
  const id = params.get('id')

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetchDetaiApi(id!)
        setDetail(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDetail()
  }, [id])

  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }

  if (!detail) {
    return <div>loading...</div>
  }

  return (
    <>
      <NavBar onBack={back}>{detail?.title}</NavBar>
      <div
        dangerouslySetInnerHTML={{
          __html: detail?.content,
        }}></div>
    </>
  )
}
export default Detail
