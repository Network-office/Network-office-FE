describe("모임 생성 페이지", () => {
  beforeEach(() => {
    cy.viewport("iphone-6")
    cy.visit("/meeting")
  })

  it("모임 생성 전체 흐름 테스트", () => {
    // 모임 생성 버튼 클릭
    cy.get('a[aria-label="createMeeting"]').click()
    cy.url().should("include", "/meeting/create")

    // 제목 입력
    //// 6글자 미만으로 작성했을 때 막히는지.
    cy.get('input[name="title"]').type("1")
    cy.contains("다음").click()
    cy.contains("다음").click()
    cy.wait(500)
    cy.get('[role="statusToast"]')
      .should("be.visible")
      .and("contain", "제목을 다시 작성해주세요.")
    cy.wait(500)

    //// 21글자 이상으로 작성했을 때 막히는지.
    cy.get('input[name="title"]').type("12345678901234567890123456")
    cy.contains("다음").click()
    cy.contains("다음").click()
    cy.wait(500)
    cy.get('[role="statusToast"]')
      .should("be.visible")
      .and("contain", "제목을 다시 작성해주세요.")

    cy.wait(500)
    //// 제목 정상 작동 확인
    cy.get('input[name="title"]').clear()
    cy.get('input[name="title"]').type("테스트 모임")
    cy.contains("다음").click()

    // 카테고리 선택
    cy.contains("스포츠").click()
    cy.contains("맛집").click()
    cy.wait(500)
    cy.contains("다음").click()

    // 장소 입력
    cy.get('input[name="place"]').type("서울시 강남구")
    cy.contains("서울특별시 강남구").click()

    // 날짜 선택
    cy.get('input[type="date"]').type("2053-12-31")
    cy.contains("다음").click()

    // 시간 입력
    //// 종료 시간을 이르게했을때 오류가 뜨는지
    cy.get('input[name="startTime"]').type("17:00")
    cy.get('input[name="endTime"]').type("16:00")
    cy.contains("다음").click()
    cy.get('[role="statusToast"]')
      .should("be.visible")
      .and(
        "contain",
        "종료 시간은 시작 시간보다 늦어야 합니다. 다시 설정해주세요."
      )
    cy.wait(500)

    //// 시간 정상 작동 확인
    cy.get('input[name="startTime"]').clear()
    cy.get('input[name="endTime"]').clear()

    cy.get('input[name="startTime"]').type("14:00")
    cy.get('input[name="endTime"]').type("16:00")
    cy.contains("다음").click()

    // 인원 입력
    cy.get('input[name="peopleNumber"]').type("5")
    cy.contains("다음").click()

    // 상세 정보 입력
    //// 10글자 미만으로 작성했을 때 막히는지.
    cy.contains("다음으로").click()
    cy.wait(500)
    cy.get('[role="statusToast"]')
      .should("be.visible")
      .and("contain", "최소 10글자 이상 작성해주세요!")
    cy.wait(500)

    //// 상세 정보 정상 작동 확인
    cy.get('textarea[name="description"]').clear()
    cy.get('textarea[name="description"]').type("상세 정보 정상 작동 확인 ")
    cy.contains("다음으로").click()

    // 성공 페이지 확인
    cy.contains("모임 생성 완료").should("be.visible")
  })
})
