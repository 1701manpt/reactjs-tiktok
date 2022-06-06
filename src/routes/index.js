import config from '~/config';

import { HeaderOnly } from '~/layouts';

import Home from './../pages/Home';
import Following from '../pages/Following';
import Upload from './../pages/Upload';
import Profile from './../pages/Profile';

const publicRoutes = [
    { path: config.routes.home, component: Home, title: 'Home' },
    { path: config.routes.following, component: Following, title: 'Contact' },
    {
        path: config.routes.following,
        component: Upload,
        title: 'Upload',
        layout: HeaderOnly,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
