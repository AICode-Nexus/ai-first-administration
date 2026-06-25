# Imagegen Prompts

These assets were generated for the AI First administration course and copied into `demo/public/lesson-assets/`.

If regenerating with the local skill CLI:

```bash
export IMAGE_GEN="$HOME/.codex/skills/imagegen/scripts/image_gen.py"
python "$IMAGE_GEN" generate --size 1536x1024 --quality high --prompt "[prompt]"
```

Live CLI generation requires `OPENAI_API_KEY`. The current committed PNGs were generated with the imagegen workflow and do not require regeneration for normal builds.

## ai-first-admin-hero.png

```text
Use case: infographic-diagram
Asset type: course hero image for an AI First administration training website
Primary request: a polished editorial-style illustration showing an administrative operations desk transformed into a structured AI workflow
Scene/background: modern office operations desk with documents, spreadsheet, approval checklist, laptop dashboard, and subtle AI routing lines connecting the artifacts
Subject: administrative work moving from scattered requests into a clear preflight review flow
Style/medium: premium semi-realistic digital illustration, clean and restrained, not cartoonish
Composition/framing: wide 16:9 composition, calm negative space on the left for website text, main workflow objects on the right
Lighting/mood: soft daylight, focused and professional
Color palette: white, slate, deep blue, muted teal, small amber highlights
Constraints: no readable text, no logos, no trademarks, no watermark, no futuristic neon, no cheesy robot
```

## ai-first-workflow-shift.png

```text
Use case: infographic-diagram
Asset type: section illustration for an AI First administration course
Primary request: visual comparison between scattered manual administrative handling and a structured AI First workflow
Scene/background: left side shows scattered paper requests, chat bubbles, spreadsheet fragments; right side shows the same items organized into a clean sequence of intake, precheck, risk flag, draft reply, human review
Subject: transformation from manual task execution to workflow design
Style/medium: premium editorial digital illustration with vector-like clarity, no readable labels
Composition/framing: wide 16:9, balanced split composition, subtle arrow motion from left to right
Lighting/mood: calm professional daylight
Color palette: slate, white, deep blue, muted teal, small amber warning accents
Constraints: no readable text, no logos, no trademarks, no watermark, no robot character, no neon
```

## admin-skill-workshop.png

```text
Use case: photorealistic-natural
Asset type: course section image for a hands-on AI Skill classroom exercise
Primary request: a small administrative training group running an AI preflight review exercise together
Scene/background: modern training room, laptop on desk, projected screen showing abstract checklist blocks and risk markers with no readable text
Subject: three to five office administrators discussing a structured approval precheck result, one facilitator pointing at the screen
Style/medium: realistic editorial workplace photography, professional and natural
Composition/framing: wide 16:9, participants in lower third, projected workflow screen as visual anchor, no close-up faces
Lighting/mood: soft indoor daylight, focused workshop atmosphere
Color palette: neutral office colors, deep blue, muted teal, subtle amber risk accents
Constraints: no readable text, no logos, no trademarks, no watermark, no staged stock-photo smiles, no futuristic robot
```

## human-ai-boundary.png

```text
Use case: infographic-diagram
Asset type: course section image about human-AI responsibility boundaries in administrative approvals
Primary request: a visual boundary map where AI preflight work is separated from human approval decisions
Scene/background: clean administrative review desk with a transparent divider: one side has structured document extraction, checklist completion, risk flags; the other side has a human reviewer, policy binder, approval stamp, and system verification screen
Subject: AI assists with precheck and drafting while humans keep policy, system verification, final approval, and accountability
Style/medium: premium semi-realistic editorial illustration, restrained corporate training style
Composition/framing: wide 16:9, clear left-right responsibility boundary, strong central divider line, no readable labels
Lighting/mood: calm, trustworthy, compliance-focused
Color palette: white, slate, deep blue, muted teal, careful amber warning accents
Constraints: no readable text, no logos, no trademarks, no watermark, no robot face, no hand making final approval on AI side
```
