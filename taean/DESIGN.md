# DESIGN.md — 태안 녹용 디자인 시스템

> **프로젝트**: 태안 녹용 상세페이지
> **디자인 스타일**: Nature Distilled — 따뜻하고 자연스러운 유기적 디자인
> **목적**: 상세페이지 일관성 유지를 위한 시각적 가이드라인

---

## 컬러 팔레트

| 역할         | 이름        | Hex       | 용도                      |
| ---------- | --------- | --------- | ----------------------- |
| Primary    | Bark      | `#3C2415` | 제목, 본문 텍스트, 강조 테두리      |
| Accent     | Maple     | `#C17C45` | CTA 버튼, 등급 뱃지, 핵심 수치 강조 |
| Muted      | Harvest   | `#BAB58D` | 보조 텍스트, 구분선, 아이콘        |
| Secondary  | Sky       | `#CAD3D0` | 배경 강조 블록, 표 헤더, 태그      |
| Background | Parchment | `#FAF1E0` | 페이지 전체 배경               |
| Surface    | White     | `#FFFFFF` | 카드, 표 배경, 콘텐츠 영역        |

---

## 타이포그래피

| 역할 | 폰트 | 굵기 | 크기 |
|------|------|------|------|
| 섹션 대제목 | Noto Sans KR | 700 (Bold) | 28–32px |
| 섹션 소제목 | Noto Sans KR | 700 | 20–24px |
| 본문 | Noto Sans KR | 400 (Regular) | 15–16px |
| 캡션/보조 | Noto Sans KR | 400 | 13–14px |
| 수치/데이터 | Noto Sans KR | 600 (SemiBold) | 16–20px |
| 법적 고지 | Noto Sans KR | 400 | 12–13px |

---

## 공통 스타일

| 요소 | 값 |
|------|-----|
| 콘텐츠 최대폭 | 720px (모바일 100%) |
| 섹션 간 여백 | 48px padding |
| 요소 간 간격 (Large) | 32px |
| 요소 간 간격 (Medium) | 24px |
| 요소 간 간격 (Small) | 12~16px |
| 카드 내부 패딩 | 24px |
| 카드 모서리 | border-radius: 12px |
| 카드 그림자 | 0 4px 20px rgba(60,36,21,0.06) |
| 구분선 | 1px solid #BAB58D (40% opacity) |
| 이미지 모서리 | border-radius: 8px |

---

## 시각적 요소 가이드

- **아이콘**: 44~48px 원형 배경(`Parchment` 또는 `White`) 위에 `Maple` 또는 `Harvest` 컬러 스트로크 아이콘 사용.
- **뱃지**: 둥근 모서리(Pill shape), `Maple` 또는 `Sky` 배경에 대비되는 텍스트 컬러 사용.
- **차트**: 수평 바 형태, 현재 부위는 `Maple`, 다른 부위는 `Harvest`/`Sky`로 구분.
- **타임라인**: 수직선 연결 방식, `Maple` 컬러의 원형 번호 인덱스 사용.
- **이미지 처리**: 원산지 안내 섹션은 Full-bleed 또는 고정 비율(16:9, 16:10) 적용. 파트너 이미지는 중앙 정렬된 수직 스택으로 구성.
