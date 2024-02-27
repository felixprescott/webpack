import {useState} from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import samplePng from '@/assets/sample.png';
import SampleSVG from '@/assets/sample.svg';

export const App = () => {
    const [counter, setCounter] = useState(0);

    const TODO = () => {
      console.log('TODO 1');
      TODO2();
    }

    const TODO2 = () => {
      console.log('TODO 2');
      throw new Error('oops');
    }
    return (
      <div data-testid={'App.TestId-1'} >
        <div>PLATFORM: {__PLATFORM__}</div>
        <div>{__PLATFORM__ === 'desktop' && (
          '123213123'
        )}</div>
        <div>{__PLATFORM__ === 'mobile' && (
          'ISMOBILEPLATFORM321'
        )}</div>
        <div>
          <img src={samplePng} alt="" height={'100px'}/>
        </div>
        <div>
          <SampleSVG width={100} height={100}/>
        </div>
        <Link to={'/'}>index</Link>
        <br/>
        <Link to={'/about'}>about</Link>
        <br/>
        <Link to={'/shop'}>shop</Link>
        <h1>{counter}</h1>
        <button className={classes.button} onClick={() => {setCounter((prev) => prev + 1); TODO();}}><h1>+1</h1></button>
        <Outlet/>
      </div>
    );
};
