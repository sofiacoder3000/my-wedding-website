import type { NextPage } from 'next'

interface Props {
  messagetop: string;
  title: string;
  messagebuttom: string;
}

const CoverPrincipal: NextPage<Props> = (props) => {
  const { messagetop, title, messagebuttom } = props;
  return (
    <div className="w-full rounded-lg px-6 py-4 z-10">
      <div className="flex flex-col items-center pb-2 sm:pb-10">
        <p className="flex text-white mt-4 md:mt-6 font-light pb-10">{messagetop}</p>
        <h1 className="mb-1 font-medium text-yellow-500 dark:text-white italic font-ebgaramond text-3xl sm:text-4xl md:text-5xl p-20">{title}</h1>
        <p className="flex text-white mt-4 md:mt-6 font-light pt-20">{messagebuttom}</p>
      </div>
  </div>
  )
}

export default CoverPrincipal
