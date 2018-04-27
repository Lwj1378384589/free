import main from '@/components/main.vue';
import mainSecond from '@/components/mainSecond.vue'
import backIndex from '@/views/backPage/backIndex.vue';
import frontPageMain from '@/components/frontPageMain.vue'
import frontIndex from '@/views/www/frontIndex.vue'
import frontPageSecond from '@/components/frontPageSecond.vue'
import testPage from '@/views/www/testPage.vue'
import { routes } from '@/utils/menus';
import { frontRoutes } from '@/utils/frontMenus'
import { disRoutes } from '@/utils/disMenus'
import distRegist from '@/views/www/distRegist.vue'

const _routes=[
    {
        path:'/backpage',
        component:main,
        children:[
            {
                path:'/backpage/',
                component:mainSecond,
                name:'mainSecond',
                children:[
                    {
                        path:"/backpage/",
                        component:backIndex,
                    },
                    ...routes,
                    
                ],
            },

        ]

    },
    {
        path:'/',
        component:frontPageMain,
        children:[
            {
                path:'',
                component:frontIndex,
                name:'frontIndex'
            },
            {
                path:'/www/',
                component:frontPageSecond,
                name:'frontPageSecond',
                children:[
                    ...frontRoutes,
                    
                ],
            },
           ...disRoutes,
            

        ]

    }
]

export default _routes;