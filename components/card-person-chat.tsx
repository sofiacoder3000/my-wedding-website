import type { NextPage } from 'next'

interface Props {
  fullname: string;
  subtitle: string;
  url: string;
  picture: string;
}

const CardPersonChat: NextPage<Props> = (props) => {
  const {fullname, subtitle, url, picture} = props;
  return (
    <div className="w-full rounded-lg space-x-3 pt-4">
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={picture} alt="Carlitos Kevin Montes Herrera"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900">{fullname}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</span>
        <p className="flex mt-4 space-x-3 md:mt-6 font-light">Mandar un mensaje</p>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a 
            href={url}
            target="_blanck"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border-solid border-2 border-emerald-300 hover:bg-emerald-300 hover:text-white rounded-lg tracking-wider"
          >WhatsApp</a>
        </div>
      </div>
    </div>
  )
}

export default CardPersonChat
