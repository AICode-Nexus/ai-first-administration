---
name: admin-approval-preflight
description: Review administrative approval request materials before formal submission or approval. Use when the user asks to precheck, review, audit, standardize, or draft responses for admin requests such as asset transfer, computer application, device retirement/buyback, cost center update, office supplies, reception, canteen/meal settlement, or other internal administrative approval materials.
---

# Admin Approval Preflight

## Purpose

Turn messy administrative request materials into a structured preflight result. Do not make the final approval decision. Help the human reviewer identify missing information, risks, required follow-up, and reusable response drafts.

## Inputs

Accept pasted text, form fields, email drafts, meeting notes, tables, or files. If the request type is unclear, infer it and label the confidence. If critical data is missing, still produce a preflight result and mark the gaps.

For classroom demos, use `assets/sample-computer-buyback-request.md`.

## Workflow

1. Identify the request type and intended business outcome.
2. Extract key facts into a compact summary.
3. Select the closest checklist from `references/admin-request-checklists.md`.
4. Check completeness, consistency, timing, ownership, and approval boundaries.
5. Separate facts from assumptions. Never invent policy values, prices, asset status, employee data, or system records.
6. Produce a structured result using `references/output-template.md`.
7. Draft applicant-facing language that is polite, specific, and action-oriented.
8. Mark human-only decisions clearly.

## Review Principles

- Treat AI as a preflight assistant, not an approver.
- Flag missing evidence instead of filling it in.
- Prefer "needs confirmation in OA/SAP/asset system" over guessing.
- Protect privacy: do not expose personal data beyond what the user provided.
- For system-dependent items, state the lookup needed rather than claiming completion.
- For policy-dependent items, cite the provided rule text. If no rule is provided, say "policy basis not provided".

## Output Requirements

Always include these sections:

1. `申请摘要`
2. `材料完整性检查`
3. `一致性与风险点`
4. `需补充/确认事项`
5. `审批意见草稿`
6. `申请人沟通话术`
7. `人工复核点`
8. `下一步建议`

Keep the result concise enough for an administrative reviewer to use immediately. Use tables where they reduce ambiguity.

## Classroom Mode

When the user asks for a training, workshop, demo, or classroom exercise:

1. Use the sample request unless the user provides another case.
2. Show the skill flow as "输入材料 -> AI 预审 -> 人工判断 -> 标准输出".
3. Emphasize before/after comparison: unstructured request vs. structured preflight result.
4. End with a reusable prompt that learners can adapt.

## Reusable Prompt

```text
请使用 $admin-approval-preflight 对下面的行政申请材料做预审。

要求：
1. 不替代审批人做最终决定；
2. 不编造制度、价格、资产状态或系统查询结果；
3. 明确区分“已提供信息”“缺失信息”“需要人工确认的信息”；
4. 输出申请摘要、完整性检查、风险点、补充材料清单、审批意见草稿、申请人沟通话术、人工复核点和下一步建议。

申请材料：
[粘贴申请材料]
```
