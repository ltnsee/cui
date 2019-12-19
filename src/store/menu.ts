import { IMenu } from './interface';
import { roleHelper } from '@/utils/role.helper';

const menu: IMenu[] = [
  {
    link: '/home',
    name: '首页',
    icon: 'mdi-gauge'
  },
  {
    link: '/my/calendars',
    name: '资讯',
    icon: 'mdi-calendar-multiple-check'
  },
  {
    link: '/approval/standard',
    name: '论坛',
    icon: 'mdi-pencil-box-outline',
    roles: [roleHelper.roles.ADMIN],
    subMenus: [
      {
        link: '/approval/standard',
        name: 'approval.standard'
      },
      {
        link: '/approval/customer',
        name: 'approval.customer',
        roles: [roleHelper.roles.SUPER_ADMIN]
      }
    ]
  },
  {
    link: '/approval/standard',
    name: '视频',
    icon: 'mdi-pencil-box-outline',
    roles: [roleHelper.roles.ADMIN],
    subMenus: [
      {
        link: '/approval/standard',
        name: 'approval.standard'
      },
      {
        link: '/approval/customer',
        name: 'approval.customer',
        roles: [roleHelper.roles.SUPER_ADMIN]
      }
    ]
  },
  {
    link: '/approval/standard',
    name: '壁纸',
    icon: 'mdi-pencil-box-outline',
    roles: [roleHelper.roles.ADMIN],
    subMenus: [
      {
        link: '/approval/standard',
        name: 'approval.standard'
      },
      {
        link: '/approval/customer',
        name: 'approval.customer',
        roles: [roleHelper.roles.SUPER_ADMIN]
      }
    ]
  },
  {
    link: '/approval/standard',
    name: '角色',
    icon: 'mdi-pencil-box-outline',
    roles: [roleHelper.roles.ADMIN],
    subMenus: [
      {
        link: '/approval/standard',
        name: 'approval.standard'
      },
      {
        link: '/approval/customer',
        name: 'approval.customer',
        roles: [roleHelper.roles.SUPER_ADMIN]
      }
    ]
  }
];

export default menu;
