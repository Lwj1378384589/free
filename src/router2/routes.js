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
        path:'/',
        component:main,
        children:[
            {
                path:'/',
                component:mainSecond,
                name:'mainSecond',
                children:[
                    {
                        path:"/",
                        component:backIndex,
                    },
                    ...routes,
                    
                ],
            },

        ]

    }
]

export default _routes;