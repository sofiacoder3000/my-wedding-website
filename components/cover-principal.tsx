import type { NextPage } from 'next'

interface Props {
  messagetop: string;
  title: string;
  messagebuttom: string;
}

const CoverPrincipal: NextPage<Props> = (props) => {
  const { messagetop, title, messagebuttom } = props;
  return (
    <div className="w-full rounded-lg dark:bg-gray-800 dark:border-gray-700 px-6 py-4 z-10">
      <div className="flex flex-col items-center pb-10">
        <p className="flex text-white mt-4 md:mt-6 font-light pb-10">{messagetop}</p>
        <h1 className="mb-1 text-xl font-medium text-yellow-500 dark:text-white italic font-ebgaramond text-l sm:text-2xl md:text-3xl p-20">{title}</h1>
        <p className="flex text-white mt-4 md:mt-6 font-light pt-20">{messagebuttom}</p>
      </div>
  </div>
  )
}

export default CoverPrincipal