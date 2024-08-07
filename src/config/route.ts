import ReactRouter from '@/pages/ReactRouter';
import Redux from '@/pages/Redux';
import VirtualDom from '@/pages/VirtualDom';
import Debounce from '@/pages/Debounce';
import ForwardRef from '@/pages/ForwardRef';
import HooksTest from '@/pages/Hooks';
import StateTest from '@/pages/stateTest';
import DOMDiff from '@/pages/DOMDiff';
import CatchError from '@/pages/Error/CatchError';
import Radash  from '@/pages/Radash/index';

const routes = [
    // { path: '/router', component: ReactRouter, name: '路由' },
    // { path: '/redux', component: Redux, name: 'redux' },
    // { path: '/virtualDom', component: VirtualDom, name: 'VirtualDom' },
    // { path: '/debounce', component: Debounce, name: 'Debounce' },
    // { path: '/forwardRef', component: ForwardRef, name: 'ForwardRef' },
    // { path: '/HooksTest', component: HooksTest, name: 'HooksTest' },
    // { path: '/StateTest', component: StateTest, name: 'StateTest' },
    // { path: '/domDiff', component: DOMDiff, name: 'DOMDiff' }
    // { path: '/CatchError', component: CatchError, name: 'CatchError' }
    { path: '/Radash', component: Radash, name: 'Radash' }

];

export default routes;
