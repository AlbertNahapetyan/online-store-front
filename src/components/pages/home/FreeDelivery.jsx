import BlockLink from '@/components/shared/BlockLink'

const FreeDelivery = () => {
  return (
    <div
      className="w-full h-56 rounded-2xl flex flex-col p-8
          text-white bg-orange-arrows bg-no-repeat bg-cover bg-right"
    >
      <h2 className="font-bold text-5xl mb-4">Free Delivery!</h2>
      <p className="mb-4 font-normal">
        Don&apos;t miss it out! Only today, get free Next Day <br />
        delivery on all of your orders
      </p>
      <BlockLink href="/products">
        <button className="w-48 p-2 rounded-3xl bg-white text-orange-350">
          Browse products
        </button>
      </BlockLink>
    </div>
  )
}

export default FreeDelivery
