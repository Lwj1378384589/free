import main from '@/components/main.vue';
import mainSecond from '@/components/mainSecond.vue'
import backIndex from '@/views/backPage/backIndex.vue';
import frontPageMain from '@/components/frontPageMain2.vue'
import frontIndex from '@/views/www/campusRecruitmentPage.vue'
import frontPageSecond from '@/components/frontPageSecond2.vue'
import testPage from '@/views/www/testPage.vue'
import { routes } from '@/utils/menus';
import { frontRoutes } from '@/utils/frontMenus'
import { disRoutes } from '@/utils/disMenus'
import distRegist from '@/views/www/distRegist.vue'

const _routes=[
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