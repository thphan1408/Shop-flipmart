import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getAllProduct } from '../../apis/productServices'
import { Cart, SideMenu } from '../../components'
import SideBar from '../../components/SideBar/SideBar'

export default function Home() {
  const [dataParam, setDataParam] = useState<any>({
    skip: 0,
    limit: 20,
    search: '',
  })

  const { data: prductData, isLoading } = useQuery({
    queryKey: [
      'item_product',
      dataParam?.limit,
      dataParam?.skip,
      dataParam?.search,
    ],
    queryFn: async () => {
      const res = await getAllProduct(dataParam)
      return res?.data?.products
    },
  })

  if (isLoading) return <>!Loading....</>

  return (
    <>
      <div className="body-content outer-top-xs" id="top-banner-and-menu">
        <div className="Container">
          <div className="row">
            {/* ============================================== SIDEBAR ============================================== */}
            <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
              <SideBar />
            </div>
            {/* /.sidemenu-holder */}
            {/* ============================================== SIDEBAR : END ============================================== */}
          </div>
        </div>
      </div>
    </>
  )
}
