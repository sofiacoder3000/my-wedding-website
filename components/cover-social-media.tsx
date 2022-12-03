import type { NextPage } from 'next'

interface CoverSocialMediaProps {
  icon: string;
  urlSocialMedia: string;
  title: string;
  description: string;
  textbuttom: string;
}

const CoverSocialMedia: NextPage<CoverSocialMediaProps> = (props) => {
  const { icon, urlSocialMedia, title, description, textbuttom } = props;
  return (
    <div className="w-full rounded-lg px-6 py-4 z-10">
      <div className="flex flex-col items-center pb-2 sm:pb-4">
        {/* <img className="w-24 h-24 mb-3" src={icon} alt=""/> */}
        <h2 className="mb-1 font-medium text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl md:text-8xl py-10 sm:py-16">{title}</h2>
        <p className="flex mt-4 md:mt-6 font-light xs:font-medium text-sm xs:text-base sm:text-lg pb-6 sm:pb-12">{description}</p>
        <div className="flex mt-4 md:mt-6">
          <a 
            href={urlSocialMedia} 
            target="_blanck" 
            className="inline-flex items-center px-8 py-4 uppercase text-sm font-medium text-center border-solid border-4 bg-yellow-400 border-yellow-400 transition duration-0 hover:duration-150 hover:bg-transparent dark:hover:text-white rounded-lg tracking-widestx3">{textbuttom}</a>
        </div>
      </div>
  </div>
  )
}

export default CoverSocialMedia
