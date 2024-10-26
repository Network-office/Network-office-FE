describe("모임 관리 페이지", () => {
  beforeEach(() => {
    cy.viewport("iphone-6")
    cy.visit("/manage")
  })

  it("내가 생성한 모임 폐쇠하기", () => {
    cy.contains("내가 참여 중인 모임").click()
    cy.contains("내가 생성한 모임").click()
    cy.get(".createdMeetingItem")
      .first()
      .within(() => {
        cy.get('[aria-label="myCreatedMeetingSettingButton"]').click()
      })

    cy.contains("모임 파토하기").click()
    cy.contains("개인사정으로 인한 파토").click()
    cy.contains("모임이 해체되었습니다").should("be.visible")
  })

  it("내가 생성한 모임 모집 마감하기", () => {
    cy.contains("내가 참여 중인 모임").click()
    cy.contains("내가 생성한 모임").click()
    cy.get(".createdMeetingItem")
      .first()
      .within(() => {
        cy.get('[aria-label="myCreatedMeetingSettingButton"]').click()
      })

    cy.contains("모집 마감하기").click()
    cy.contains("모집 마감되었습니다.").should("be.visible")
  })
  it("내가 생성한 모임에서 신규 모임 참가 신청 거절 & 수락하기", () => {
    cy.contains("내가 참여 중인 모임").click()
    cy.contains("내가 생성한 모임").click()
    cy.get(".createdMeetingItem")
      .first()
      .within(() => {
        cy.contains("신규 참가 관리").click()
      })

    cy.contains("거절").click()
    cy.get('textarea[aria-label="refuseMessageTextarea"]').type("거절합니다.")
    cy.contains("전송").click()
    cy.contains("수락").click()
  })

  it("참여 중인 모임 상세 정보, 생성한 모임 상세 정보가 잘 뜨는지 확인", () => {
    // 참여주인 모임 상세 정보 잘뜨는지 확인
    cy.get(".participatingMeetingItem")
      .first()
      .within(() => {
        cy.get("h2").should("exist").and("not.be.empty")
        cy.get(`[data-testId="meetingDate"]`).should("exist")
        cy.get(`[data-testId="meetingParticipatingPeople"]`).should("exist")
      })
    cy.contains("내가 참여 중인 모임").click()

    // 내가 생성한 모임 상세 정보 잘뜨는지 확인

    cy.contains("내가 생성한 모임").click()
    cy.get(".createdMeetingItem")
      .first()
      .within(() => {
        cy.get("h2").should("exist").and("not.be.empty")
        cy.get(`[data-testId="meetingDate"]`).should("exist")
        cy.get(`[data-testId="meetingParticipatingPeople"]`).should("exist")
      })
  })

  it("사용자 추방 기능 테스트", () => {
    cy.contains("내가 참여 중인 모임").click()
    cy.contains("내가 생성한 모임").click()
    cy.get(".createdMeetingItem", { timeout: 10000 }).should("be.visible")

    // 첫 번째 모임의 첫 번째 참가자의 드롭박스를 클릭하고 추방하기 버튼 클릭
    cy.get(".createdMeetingItem")
      .first()
      .find("[aria-label='myMeetingParticipant']")
      .first()
      .click()
    cy.contains("추방하기").click()
    cy.wait(100)

    // 추방 사유 선택
    cy.contains("채팅방 도배").click()
    cy.wait(100)

    cy.contains("button", "추방").should("be.visible").click()

    cy.contains("참가자가 성공적으로 추방되었습니다.").should("be.visible")
  }),
    it("게시글 이동 버튼 누르면 게시글로 이동하는지 테스트", () => {
      cy.contains("게시글로 이동").click()
      cy.url().should("match", /\/meeting\//)
    })
})
