import type { NextPage } from 'next'
import Countdown, { zeroPad, CountdownRendererFn } from 'react-countdown';

interface CountdownItemProps {
  value: number;
  description: string;
}

const CountdownItem: NextPage<CountdownItemProps> = (props) => {
  const {value, description} = props;
  return (
    <span className="flex w-1/2 xxs:w-full items-center flex-col p-2 font-light text-yellow-500">
      <span className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl py-2">{zeroPad(value)}</span>
      <span className="text-xs xxs:text-base sm:text-xl">{description}</span>
    </span>
  )
}

const Completionist = () => <span>Hora de ir!</span>;

const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="flex flex-wrap xxs:flex-nowrap w-full justify-around pt-6 pb-6 flex-row dark:bg-gray-900 dark:border-gray-800 max-w-5xl">
        <CountdownItem value={days} description="Días"/>
        <CountdownItem value={hours} description="Horas"/>
        <CountdownItem value={minutes} description="Minutos"/>
        <CountdownItem value={seconds} description="Segundos"/>
      </div>
    );
  }
};

const TimerCountDown: NextPage = () => {

  return (
    <Countdown
      date='2022-12-03T11:00:00'
      renderer={renderer}
     >
      <Completionist/>
    </Countdown>
  )
}

export default TimerCountDown
