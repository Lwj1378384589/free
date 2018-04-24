

const pages = {
    backPage:{
        backIndex:()=>import('@/views/backPage/backIndex.vue'),
        updatePassword:()=>import('@/views/backPage/updatePassword.vue'),
    },
    careertalk:{
        careertalkAdd:()=>import('@/views/careertalk/careertalkAdd.vue'),
        careertalkList:()=>import('@/views/careertalk/careertalkList.vue'),
        careertalkUpdate:()=>import('@/views/careertalk/careertalkUpdate.vue'),
    },
    jobfair:{
        jobfairAdd:()=>import('@/views/jobfair/jobfairAdd.vue'),
        jobfairList:()=>import('@/views/jobfair/jobfairList.vue'),
        jobfairUpdate:()=>import('@/views/jobfair/jobfairUpdate.vue'),
    },
    jobs:{
        jobsAdd:()=>import('@/views/jobs/jobsAdd.vue'),
        jobsList:()=>import('@/views/jobs/jobsList.vue'),
        jobsUpdate:()=>import('@/views/jobs/jobsUpdate.vue'),
    },
    frontPage:{
        frontIndex:()=>import('@/views/frontPage/frontIndex.vue'),
        testPage:()=>import('@/views/frontPage/testPage.vue'),
        recruitment:()=>import('@/views/frontPage/recruitment.vue'),
        campusTalkPage:()=>import('@/views/frontPage/campusTalkPage.vue'),
        campusRecruitmentPage:()=>import('@/views/frontPage/campusRecruitmentPage.vue'),
        companyDetailPage:()=>import('@/views/frontPage/companyDetailPage.vue'),
        companyPage:()=>import('@/views/frontPage/companyPage.vue'),
        recruitmentDetailPage:()=>import('@/views/frontPage/recruitmentDetailPage.vue'),
        help:()=>import('@/views/frontPage/help.vue'),
        guidanceVocationalPage:()=>import('@/views/frontPage/guidanceVocationalPage.vue'),
        guidancePolicyDetailPage:()=>import('@/views/frontPage/guidancePolicyDetailPage.vue'),
        guidanceExperiencePage:()=>import('@/views/frontPage/guidanceExperiencePage.vue'),
        guidanceCoachPage:()=>import('@/views/frontPage/guidanceCoachPage.vue'),
        guidance:()=>import('@/views/frontPage/guidance.vue'),
        notice:()=>import('@/views/frontPage/notice.vue'),
        disLogin:()=>import('@/views/frontPage/disLogin.vue'),
        distRegist:()=>import('@/views/frontPage/distRegist.vue'),
        unitLogin:()=>import('@/views/frontPage/unitLogin.vue'),
        UnitReg:()=>import('@/views/frontPage/UnitReg.vue'),
        UnitReg2:()=>import('@/views/frontPage/UnitReg2.vue'),
        StuReg:()=>import('@/views/frontPage/StuReg.vue'),
        StudentLogin:()=>import('@/views/frontPage/StudentLogin.vue'),
    },
}
export default pages;