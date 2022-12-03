import type { NextPage } from 'next'

interface Props {
  title: string;
  description:string;
  url:string
  textbuttom: string;
}

const CardRegular2: NextPage<Props> = (props) => {
  const { title, description, url, textbuttom } = props;
  return (
    <div className="w-full px-6 py-4">
      <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 font-medium text-gray-900 dark:text-yellow-400 italic font-ebgaramond text-2xl sm:text-3xl md:text-4xl">{title}</h5>
          <p className="flex mt-4 md:mt-6 font-light dark:text-white">{description}</p>
          <div className="flex mt-4 md:mt-6">
              <a href={url} target="_blanck" className="inline-flex items-center px-8 py-4 text-sm font-medium text-center text-gray-900 dark:text-white border-solid border-4 border-yellow-400 transition duration-0 hover:duration-150 hover:bg-yellow-400 hover:text-white rounded-lg tracking-widestx3">{textbuttom}</a>
          </div>
      </div>
  </div>
  )
}

export default CardRegular2
