describe("피드 페이지", () => {
  beforeEach(() => {
    cy.viewport("iphone-6")
    cy.visit("/feed")
  })

  it("피드 목록 확인", () => {
    cy.get("ul").should("exist")
    cy.get("li").should("have.length.greaterThan", 0)
  })

  it("피드 상세 정보 확인 및 댓글 달기", () => {
    cy.get("li").first().click()
    cy.url().should("match", /\/feed\/\d+/)

    cy.get("table").within(() => {
      cy.contains("카테고리").next().should("not.be.empty")
      cy.contains("작성자").next().should("not.be.empty")
      cy.contains("작성시간").next().should("not.be.empty")
      cy.contains("동네").next().should("not.be.empty")
    })

    // 댓글 작성
    cy.get('[aria-label="commentInput"]').type("댓글 테스트")
    cy.get('[aria-label="commentSubmitButton"]').click()

    cy.contains("댓글 테스트").should("exist")
  })

  it("피드 무한 스크롤 확인", () => {
    cy.get("li").then(($initialItems) => {
      const initialItemCount = $initialItems.length
      cy.get('button[aria-label="regionButton"]').click()

      cy.contains("서울").click()
      cy.scrollTo("bottom")

      cy.get("li").should("have.length.greaterThan", initialItemCount)
    })
  })
  /* 임시 주석
  it("지역 선택 필터 적용 테스트", () => {
    cy.get("li").then(($initialItems) => {
      const initialItemCount = $initialItems.length
      cy.get('button[aria-label="regionButton"]').click()

      cy.contains("서울").click()
      cy.contains("서울시의 인기글을 모두 모았어요!").should("exist")
      cy.get("li").should("have.length.greaterThan", initialItemCount)
    })
  })
    */
})
