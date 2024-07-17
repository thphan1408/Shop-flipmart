import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getAllProduct } from '../../apis/productServices'
import { Cart } from '../../components'
import { PATHS } from '../../utils/paths'
import { images } from '../../utils/images'

export default function Home() {
  const [dataParam, setDataParam] = useState({
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

  console.log('prductData', prductData)
  return (
    <>
      {/* // <Button
    //   label="Click me"
    //   onClick={() => {
    //     alert('xin chào')
    //   }}
    //   className="bg-primary text-white border-[#357ebd] border-none text-[13px] leading-[22px] px-[14px] rounded-[2px] transition-all duration-200 ease-linear hover:bg-[#0f6cb2]"
    // /> */}
      <div className="w-[270px]">
        <Cart
          name="Product 1"
          path={PATHS.ABOUT}
          image={images.product1}
          tag="hot"
          price={100}
        />
      </div>
    </>
  )
}
