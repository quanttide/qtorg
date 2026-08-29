# qtorg 基础设施（Terraform）

管理量潮组织中心（qtorg）的云上基础设施，对齐 qtcrowd / qtclass 已跑通的部署模式
（OSS 静态网站 + CDN + Terraform）：

- **site**（React+Vite 官网，`org.quanttide.com`）：OSS 静态网站桶 `qtorg-site` + CDN + DNS

## site（React+Vite 官网）

- **site OSS 桶** `qtorg-site`：静态网站托管（`index.html` 根默认页），CDN 回源
- **CDN 域名** `org.quanttide.com`：web 加速，私有回源鉴权 + SPA 回退 + 强制 HTTPS
- **DNS**：CNAME 接入（云解析，`org.quanttide.com` → CDN）

## 远程状态（OSS backend）

本配置使用 OSS 远程 state（`providers.tf` 的 `backend "oss"`），本机与 CI 共用。

| state key | 管理资源 | 触发 |
|-----------|---------|------|
| `qtorg/site.tfstate` | site 桶 / CDN / DNS（`cdn.tf`、`site-bucket.tf`） | `deploy-site.yml`（site/* tag） |

### 本机操作

```bash
cd manifests/terraform
export ALICLOUD_ACCESS_KEY_ID=xxx
export ALICLOUD_ACCESS_KEY_SECRET=xxx

terraform init \
  -backend-config="bucket=quanttide-terraform-state" \
  -backend-config="key=qtorg/site.tfstate" \
  -backend-config="region=cn-hangzhou"
terraform plan -target=alicloud_oss_bucket.site -target=alicloud_cdn_domain_new.site
terraform apply
```

## 发布

### site

`site/*` tag 推送触发 `.github/workflows/deploy-site.yml`：应用基础设施（`qtorg/site.tfstate`）+
构建 `src/site` → 上传 `oss://qtorg-site/` → 刷新 CDN（`org.quanttide.com`）。

## 前置条件（公共）

| 项 | 说明 |
|----|------|
| 桶 | `qtorg-site`（site 桶，terraform 建） |
| DNS | `org.quanttide.com` 需 CNAME 到 CDN 分配的地址（terraform 建） |
| ICP 备案 | 大陆 CDN 节点要求备案（org.quanttide.com 需完成备案，参照 crowd.quanttide.com） |
| Secrets | GitHub Actions 部署需要仓库配置 `ALIYUN_ACCESS_KEY_ID` / `ALIYUN_ACCESS_KEY_SECRET`（org 级已有） |
