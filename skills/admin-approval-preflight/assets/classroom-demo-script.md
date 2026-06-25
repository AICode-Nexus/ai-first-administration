# Classroom Demo Script

## Demo Goal

Show how a local AI skill turns a messy administrative request into a reusable preflight workflow without building a system or connecting to OA/SAP.

## 5-Minute Flow

1. Show the raw request in `sample-computer-buyback-request.md`.
2. Ask learners what they would manually check first.
3. Run this prompt:

```text
Use $admin-approval-preflight to review this administrative request.

请输出：
1. 申请摘要
2. 材料完整性检查
3. 风险点
4. 需补充事项
5. 审批意见草稿
6. 给申请人的回复话术
7. 必须人工复核的点

[粘贴 sample-computer-buyback-request.md 内容]
```

4. Compare the result with `sample-computer-buyback-output.md`.
5. Ask learners to modify one variable, such as missing asset number, urgent deadline, or unclear current user, and rerun the preflight.

## Teaching Point

The value is not that AI "writes an approval opinion." The value is that AI helps administrative staff standardize the pre-review process: what to extract, what to check, what not to decide, and how to communicate next steps.
