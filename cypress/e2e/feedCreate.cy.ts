describe("피드 생성 페이지", () => {
  beforeEach(() => {
    cy.viewport("iphone-6")
    cy.visit("/feed/create")
  })

  it("피드 생성 전체 흐름 테스트", () => {
    // 제목 입력
    //// 6글자 미만으로 작성했을 때 막히는지 확인
    cy.get('input[name="title"]').type("1")
    cy.contains("다음으로").click()
    cy.contains("다음으로").click()
    cy.wait(500)
    cy.contains("제목은 최소 6자 이상이어야 합니다.").should("be.visible")
    cy.wait(500)

    //// 21글자 이상으로 작성했을 때 막히는지 확인
    cy.get('input[name="title"]').clear()
    cy.wait(500)
    cy.get('input[name="title"]').type("12345678901234567890123456")
    cy.contains("다음으로").click()
    cy.contains("다음으로").click()
    cy.wait(500)
    cy.contains("제목은 최대 20자 이하여야 합니다.").should("be.visible")

    //// 제목 정상 작동 확인
    cy.get('input[name="title"]').clear().type("테스트 피드")
    cy.contains("다음으로").click()

    // 카테고리 입력
    cy.get('input[name="category"]').type("스포츠")
    cy.contains("다음으로").click()

    // 내용 입력
    // 10글자 미만으로 작성했을 때 막히는지 확인
    cy.get('textarea[name="description"]').type("1")
    cy.contains("작성 완료").click()
    cy.wait(500)
    cy.get('[role="statusToast"]')
      .should("be.visible")
      .and("contain", "내용은 최소 10자 이상이어야 합니다.")
    cy.wait(500)

    // 내용 정상 작동 확인
    cy.get('textarea[name="description"]').clear()
    cy.wait(500)
    cy.get('textarea[name="description"]').type("피드 내용 정상 작동 확인")
    cy.contains("작성 완료").click()

    // 성공 페이지 확인
    cy.contains("피드 생성 성공").should("be.visible")

    cy.wait(1500)
    cy.contains("테스트 피드").should("be.visible")
  })
})
