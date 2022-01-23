import ReactRouter from '@/pages/ReactRouter';
import Redux from '@/pages/Redux';
import VirtualDom from '@/pages/VirtualDom';
import Debounce from '@/pages/Debounce';

const routes = [
    { path: '/router', component: ReactRouter, name: '路由' },
    { path: '/redux', component: Redux, name: 'redux' },
    { path: '/virtualDom', component: VirtualDom, name: 'VirtualDom' },
    { path: '/debounce', component: Debounce, name: 'Debounce' }
];

export default routes;
