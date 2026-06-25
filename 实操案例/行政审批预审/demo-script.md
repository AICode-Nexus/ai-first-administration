# Classroom Demo Script

## Demo Goal

Show how a local AI skill turns a messy administrative request into a reusable preflight workflow without building a system or connecting to OA/SAP.

## 5-Minute Flow

1. Show the raw request in `sample-request.md`.
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

[粘贴 sample-request.md 内容]
```

4. Compare the result with `sample-output.md`.
5. Ask learners to modify one variable, such as missing asset number, urgent deadline, or unclear current user, and rerun the preflight.

## Optional Record & Replay Extension

Use Codex Record & Replay when the class wants to turn the live demo into reusable workflow evidence.

1. Before recording, explain that the demo only uses simulated local files and does not open real OA/SAP/asset/finance/HR systems.
2. Record the instructor opening the sample request, running the preflight prompt, comparing the output, and changing one variable.
3. Stop recording before any sensitive login, real employee data, asset record, password, OTP, API key, or internal policy text appears.
4. Review the captured workflow as a class:
   - Which steps were repeated?
   - Which judgment points should become Skill rules?
   - Which checks must remain human confirmation?
   - Which parts can become onboarding material for new administrative staff?
5. Use the replay notes to improve the Skill checklist, prompt boundaries, or demo script.

## Teaching Point

The value is not that AI "writes an approval opinion." The value is that AI helps administrative staff standardize the pre-review process: what to extract, what to check, what not to decide, and how to communicate next steps.

Record & Replay adds one more layer: it captures how a capable operator actually moves through the task, so the team can convert tacit know-how into a replayable and improvable workflow.
