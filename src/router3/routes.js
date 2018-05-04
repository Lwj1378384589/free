import main from '@/components/mainjobfair.vue';
// import mainSecond from '@/components/mainjobfair2.vue'
import mainSecond from '@/components/frontFrame/head.vue'
import backIndex from '@/views/www/recruitment.vue'
import frontPageMain from '@/components/frontPageMain.vue'
import frontIndex from '@/views/www/frontIndex.vue'
import frontPageSecond from '@/components/frontFrame/header.vue'
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
            // {
            //     path:'',
            //     component:mainSecond,
            //     name:'mainSecond',
            //     children:[
                    {
                        path:"",
                        component:backIndex,
                    },
                    ...routes,
                    
            //     ],
            // },

        ]

    },
    {
        path:'/',
        component:main,
        children:[
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