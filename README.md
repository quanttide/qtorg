# 量潮组织中心 (`qtorg`)

量潮组织管理产品平台：组织管理档案的公开展示与查询。

## 仓库目录

```
qtorg/
├── .github/workflows/ # CI/CD：deploy-site.yml（site/* tag → 构建 + Terraform + 上传 OSS + 刷新 CDN）
├── docs/ # 所有非代码文档
│   ├── brd/ # 业务需求文档：业务场景和痛点
│   ├── prd/ # 产品需求文档：功能规格、用户故事、验收标准
│   ├── ixd/ # 交互设计文档：原型、流程、组件交互规则
│   ├── qa/ # 质量保障文档：测试用例、验收 checklist、合规验证
│   ├── add/ # 架构设计文档：技术方案和实现细节
│   ├── dev/ # 开发者文档：API 参考、集成指南、本地开发说明
│   └── user/ # 用户文档：操作手册与配置指南
├── manifests/terraform/ # IaC：OSS 桶 + CDN + DNS（org.quanttide.com）
└── src/ # 源代码
    └── site/ # 公网展示站（量潮组织中心官网）
```

## 线上站点

<https://org.quanttide.com>

## 关联

- 领域第二大脑：`quanttide-org`（组织管理）
- 云平台：`qtcloud-org`（QtCloud 组织管理应用）
