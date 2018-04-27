import pages from '@/views';
const datas=[
{
    title:'前台页面',
    children:[
        {
          title:'岗位信息',
          path:'/www/recruitment',
          page:'www.recruitment',

        },
        {
          title:'校园宣讲会',
          path:'/www/campusTalkPage',
          page:'www.campusTalkPage',

        },
        {
          title:'校园招聘公告',
          path:'/www/campusRecruitmentPage',
          page:'www.campusRecruitmentPage',

        },
        {
          title:'宣讲会详情',
          path:'/www/companyDetailPage',
          page:'www.companyDetailPage',

        } ,
        {
          title:'校园招聘详情',
          path:'/www/companyPage',
          page:'www.companyPage',
        },
        {
          title:'招聘信息详情',
          path:'/www/recruitmentDetailPage',
          page:'www.recruitmentDetailPage',
        },
        {
          title:'help',
          path:'/www/help',
          page:'www.help',
        } ,,
        {
          title:'guidanceVocationalPage',
          path:'/www/guidanceVocationalPage',
          page:'www.guidanceVocationalPage',
        } ,
        {
          title:'guidancePolicyDetailPage',
          path:'/www/guidancePolicyDetailPage',
          page:'www.guidancePolicyDetailPage',
        },
        {
          title:'guidanceExperiencePage',
          path:'/www/guidanceExperiencePage',
          page:'www.guidanceExperiencePage',
        },
        {
          title:'guidanceCoachPage',
          path:'/www/guidanceCoachPage',
          page:'www.guidanceCoachPage',
        } ,
        {
          title:'guidance',
          path:'/www/guidance',
          page:'www.guidance',
        },
        {
          title:'notice',
          path:'/www/notice',
          page:'www.notice',
        },
        {
          title:'recruitmentBrochureDetailPage',
          path:'/www/recruitmentBrochureDetailPage',
          page:'www.recruitmentBrochureDetailPage',
        },
        {
          title:'recruitmentBrochurePage',
          path:'/www/recruitmentBrochurePage',
          page:'www.recruitmentBrochurePage',
        }
        

    ] 

}

];



const MapMenu = item => ({
    title: item.title,
    options: { icon: item.icon,
      path: item.path,
      url: item.url,
      target: item.target,
      tooltip: item.tooltip },
    children: (item.children || []).map(MapMenu),
  });
  
  
  function DeepGetPropertyValue(obj, name) {
    if (!obj) {
      return undefined;
    }
    const names = name.split('.', 2);
    if (names.length === 1) {
      return obj[name];
    }
    return DeepGetPropertyValue(obj[names[0]], names[1]);
  }
  
  /**
   *
   * @param {*} catalog 父节点的路径信息
   * 菜单定义
   *  title 菜单标题
   *  tooltip 提示信息
   *  icon 菜单图标,如果使用element-ui的图标，直接用图标全名，如：el-icon-menu;如果使用naf图标，只写图标名字，如：user，实际上使用图标naf-icon-user
   *  children 子菜单项
   *  url 外链地址
   *  target 打开方式：_self、_blank
   *  path 路由路径
   *  page 页面，可以是两种形式：1.页面名（从pages中获取）2.页面对象（直接加载显示）。url和page不能同时出现
   */
  const MapRoute = (catalog = []) => item => [{
    path: item.path,
    component: typeof (item.page) === 'string' ? DeepGetPropertyValue(pages, item.page) : item.page || pages.Error404,
    meta: { catalog: catalog.concat(item.title) },
  },
  ].concat(
        (item.children || []).map(MapRoute(catalog.concat(item.title)))
                          .reduce((p, c) => p.concat(c), [])
                          .filter(p => p.path),
    );
  
  
  export const frontMenus = datas.map(MapMenu);
  export const frontRoutes = datas.map(MapRoute())
                            .reduce((p, c) => p.concat(c), [])
                            .filter(p => p.path);