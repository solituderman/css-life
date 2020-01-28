import Layout from '../pages/layout'
import LayoutList from '../pages/layout/demo/list'
import Layout001 from '../pages/layout/demo/layout-001'

const router = [
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    redirect: '/layout',
    children: [
      { path: '/', component: LayoutList },
      { path: 'layout-001', name: 'layout-001', component: Layout001 },
    ],
  },
]

export default router
