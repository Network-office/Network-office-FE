describe("모임 상세 페이지", () => {
  beforeEach(() => {
    cy.viewport("iphone-6")
    cy.visit("/meeting/1")
  })

  it("모임 상세 정보가 잘 표시되는지 확인", () => {
    cy.get("table").within(() => {
      cy.contains("소장").next().should("not.be.empty")
      cy.contains("카테고리").next().should("not.be.empty")
      cy.contains("날짜").next().should("not.be.empty")
      cy.contains("활동 시간").next().should("not.be.empty")
      cy.contains("모집 인원").next().should("not.be.empty")
      cy.contains("현재 인원").next().should("not.be.empty")
      cy.contains("참가비").next().should("not.be.empty")
    })

    cy.get("div").contains(/.*/).should("exist")
  })

  it("참가 신청 완료되는지 확인", () => {
    cy.contains("참가신청").click()
    cy.get(".ParticipateModal").should("exist")
    cy.get("textarea").type(
      "안녕하세요. 저는 이 모임에 참가하고 싶습니다. 잘 부탁드립니다."
    )
    cy.get('[aria-label="meetingParticipateSubmit"]').click()

    cy.get('[role="statusToast"]')
      .should("be.visible")
      .and("contain", "모임 참가 신청이 완료됐습니다!")
      .and("contain", "모임 주최자에게 신청 메시지를 보냈습니다.")

    cy.get(".ParticipateModal").should("not.exist")
  })

  it("참가 신청 로직", () => {
    cy.contains("참가신청").click()
    cy.get(".ParticipateModal").should("exist")
    cy.get('[aria-label="meetingParticipateSubmit"]').click()

    cy.get('[role="statusToast"]')
      .should("be.visible")
      .and("contain", "메시지는 10글자 이상 작성해야 합니다.")
    cy.get(".ParticipateModal").should("exist")
  })

  it("뒤로 가기 버튼이 작동합니다", () => {
    cy.get("svg.lucide-arrow-left").click()
    cy.url().should("not.include", "/meeting/1")
  })
})
