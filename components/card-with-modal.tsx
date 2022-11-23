import type { NextPage } from 'next';
import React, { ReactNode, useState } from "react";

interface ItemProps {
    id:number;
    title: string,
    lines: string[],
    image: string
}

interface Props {
  title: string;
  titleModal: string;
  description: string;
  textbuttom: string;
  items: ItemProps[];
}

const CardItem: NextPage<ItemProps> = (props) => {
    const { id, title, lines, image } = props;
    return (
        <div className="w-full px-6 py-4" key={id}>
            <div className="flex flex-col items-center pb-2 sm:pb-4">
                <h5 className="mb-1 font-medium text-lg sm:text-1xl md:text-2xl">{title}</h5>
                <div className="h-20 py-2">
                    <ul>
                        {
                            lines && lines.map((line) => (<li key={id}><p className="flex font-light">{line}</p></li>))
                        }
                    </ul>                    
                </div>
                <img
                    src={image}
                    alt={`${title} ${lines}`}
                    width="80"
                />
            </div>
        </div>
    );
}

const CardWithModal: NextPage<Props> = (props) => {
  const { title, titleModal, description, textbuttom, items } = props;
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="w-full px-6 py-4">
      <h5 className="mb-1 font-medium italic font-ebgaramond text-2xl sm:text-3xl md:text-4xl">{title}</h5>
      <p className="mt-4 md:mt-6 font-light">{description}</p>
      <button 
        className="mt-4 md:mt-6 inline-flex items-center px-8 py-4 text-sm font-medium text-center border-solid border-4 border-yellow-500 rounded-lg tracking-widestx3" 
        type="button" 
        onClick={() => setShowModal(true)}
      >
        {textbuttom}
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-full relative my-6 mx-auto max-w-3xl">
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-900 dark:border-gray-800 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-lg sm:text-1xl md:text-2xl font=semibold">{titleModal}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                    title="Bye bye"
                >
                      <span className="text-2xl leading-7 select-none">&times;</span>
                    {/* <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">x </span> */}
                  </button>
                </div>
                <div className="relative px-6 pt-4 pb-2 flex-auto">
                    <ul className="flex flex-col inline-flex items-center w-full mt-4 md:mt-6 font-light">
                        <li key="1" className="w-full text-center pt-2"><span><strong>Interbank:</strong> 8213234752838</span></li>
                        <li key="2" className="w-full text-center pt-2"><span><strong>BBVA:</strong> 0011-0827-0200096254</span></li>
                        <li key="3" className="w-full text-center pt-2"><span><strong>BCP:</strong> 19196797949003</span></li>
                    </ul> 
                    <div className="flex mt-4 md:mt-6">
                        {   items && items.map((item:ItemProps) => {
                                const {id, title, lines, image} = item;
                                return (<CardItem title={title} lines={lines} image={image} id={id} />)
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center justify-end px-6 pb-4 rounded-b">
                  <button
                    className="uppercase underline-offset-4 px-8 py-4 border-solid border-4 border-yellow-500 text-sm font-medium text-center hover:bg-yellow-500 hover:text-white rounded-lg tracking-widestx3"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
  </div>
  )
}

export default CardWithModal
