export interface OrgTitle {
  title: string
  /** 职责描述（仅当档案文档中有依据时填写） */
  desc?: string
}

export interface Person {
  /** 手拍拼音 slug，如 zhangguo */
  id: string
  name: string
  /** 一句话主身份 */
  primary: string
  /** 各组织职务 */
  titles: (OrgTitle & { org: OrgId })[]
  /** 排序权重：越小越靠前（创始人 → 合伙人 → 治理职务 → 顾问） */
  order: number
  /** 学术履历（可选：职位、研究领域、成果） */
  academic?: {
    position: string
    fields: string[]
    achievements: string[]
  }
}

export type OrgId = 'qtalliance' | 'qttech' | 'qtacademy'

export interface Org {
  id: OrgId
  name: string
  short: string
  tagline: string
  icon: string
  path: string
}

export const orgs: Org[] = [
  { id: 'qtalliance', name: '量潮创新联盟', short: '联盟', tagline: '盟友生态的组织载体', icon: '🤝', path: '/orgs/qtalliance' },
  { id: 'qttech', name: '量潮科技', short: '公司', tagline: '现行经营主体', icon: '🏢', path: '/orgs/qttech' },
  { id: 'qtacademy', name: '量潮实训基地', short: '实训基地', tagline: '人才培养枢纽', icon: '🎓', path: '/orgs/qtacademy' },
]

export const orgMap: Record<OrgId, Org> = Object.fromEntries(orgs.map(o => [o.id, o])) as Record<OrgId, Org>

export const people: Person[] = [
  {
    id: 'zhangguo',
    name: '张果',
    primary: '量潮科技创始人、董事长、CEO',
    order: 1,
    titles: [
      { org: 'qtalliance', title: '联盟创始人、联盟理事长' },
      { org: 'qttech', title: '创始人、董事长、CEO' },
    ],
  },
  {
    id: 'xizhexu',
    name: '奚哲勖',
    primary: '量潮科技首席创始顾问',
    order: 2,
    titles: [
      { org: 'qtalliance', title: '联盟副理事长' },
      { org: 'qttech', title: '首席创始顾问' },
    ],
  },
  {
    id: 'fanzhongchen',
    name: '樊仲琛',
    primary: '量潮科技首席战略顾问',
    order: 3,
    titles: [
      { org: 'qtalliance', title: '联盟副理事长' },
      { org: 'qttech', title: '首席战略顾问' },
    ],
    academic: {
      position: '西安交通大学经济与金融学院副教授',
      fields: ['产业升级', '创新增长'],
      achievements: [
        '主持国家社会科学基金青年项目 1 项',
        '参与国家社科基金重点项目、国家自然科学基金面上项目等',
        '在《中国工业经济》《经济学季刊》发表论文多篇',
      ],
    },
  },
  {
    id: 'huangzishan',
    name: '黄梓姗',
    primary: '量潮科技合伙人、COO',
    order: 4,
    titles: [
      { org: 'qtalliance', title: '联盟理事、理事会秘书' },
      { org: 'qttech', title: '合伙人、COO' },
    ],
  },
  {
    id: 'liangjiawei',
    name: '梁嘉伟',
    primary: '量潮科技合伙人、CTO',
    order: 5,
    titles: [
      { org: 'qtalliance', title: '联盟理事、理事会秘书' },
      { org: 'qttech', title: '合伙人、CTO' },
    ],
  },
  {
    id: 'tuyafang',
    name: '涂雅芳',
    primary: '量潮科技股东代表、执行副总裁',
    order: 6,
    titles: [
      { org: 'qtalliance', title: '联盟代表、联盟秘书长', desc: '日常运营协调与信息流转' },
      { org: 'qttech', title: '股东代表、执行副总裁' },
    ],
  },
  {
    id: 'liujingyi',
    name: '刘婧怡',
    primary: '量潮科技股东代表、秘书长',
    order: 7,
    titles: [
      { org: 'qtalliance', title: '联盟代表、联盟副秘书长' },
      { org: 'qttech', title: '股东代表、秘书长' },
    ],
  },
  {
    id: 'xiezipeng',
    name: '谢梓鹏',
    primary: '量潮科技资深技术顾问',
    order: 8,
    titles: [
      { org: 'qttech', title: '资深技术顾问' },
    ],
  },
  {
    id: 'douye',
    name: '窦烨',
    primary: '量潮科技高级技术顾问',
    order: 9,
    titles: [
      { org: 'qttech', title: '高级技术顾问' },
    ],
  },
]

export const peopleSorted = [...people].sort((a, b) => a.order - b.order)

export function getPerson(id: string): Person | undefined {
  return people.find(p => p.id === id)
}
