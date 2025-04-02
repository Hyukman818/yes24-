document.addEventListener("DOMContentLoaded", function () {
  const memberBtn = document.querySelector(".member");
  const nonmemberBtn = document.querySelector(".nonmember");
  const memberSection = document.querySelector(".memberLoginSection");
  const nonmemberSection = document.querySelector(".nonmemberLoginSection");
  const memberLi = document.querySelector(".member");
  const nonmemberLi = document.querySelector(".nonmember");

  // ===============================================
  // 회원/비회원 눌렀을때 아래 나오는 내용이 다르도록
  // ===============================================

  // 초기 상태 설정
  memberSection.style.display = "block";
  nonmemberSection.style.display = "none";

  // 회원 클릭
  memberBtn.addEventListener("click", function (e) {
    e.preventDefault();
    memberSection.style.display = "block";
    nonmemberSection.style.display = "none";

    // 탭 강조 처리
    memberLi.classList.add("activeTab");
    nonmemberLi.classList.remove("activeTab");
  });

  // 비회원 클릭
  nonmemberBtn.addEventListener("click", function (e) {
    e.preventDefault();
    memberSection.style.display = "none";
    nonmemberSection.style.display = "block";

    // 탭 강조 처리
    memberLi.classList.remove("activeTab");
    nonmemberLi.classList.add("activeTab");
  });

  // 회원 클릭
  memberBtn.addEventListener("click", function (e) {
    e.preventDefault();
    memberSection.style.display = "block";
    nonmemberSection.style.display = "none";
  });

  // 비회원 클릭
  nonmemberBtn.addEventListener("click", function (e) {
    e.preventDefault();
    memberSection.style.display = "none";
    nonmemberSection.style.display = "block";
  });

  // ==========================
  // 아이디/비번 미입력시 알림창
  // ==========================
  const form = document.querySelector(".loginForm");
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const usernameMsg = document.querySelector(".pleaseLogin");
  const passwordMsg = document.querySelector(".pleasePW");

  form.addEventListener("submit", function (e) {
    let valid = true;

    // 기본값값
    usernameMsg.style.display = "none";
    passwordMsg.style.display = "none";

    // 아이디 검사
    if (usernameInput.value.trim() === "") {
      usernameMsg.style.display = "block";
      valid = false;
    }
    // 아이디 입력 시 경고 메시지 숨김
    usernameInput.addEventListener("input", function () {
      if (usernameInput.value.trim() !== "") {
        usernameMsg.style.display = "none";
      }
    });

    // 비밀번호 검사
    if (passwordInput.value.trim() === "") {
      passwordMsg.style.display = "block";
      valid = false;
    }
    // 비밀번호 입력 시 경고 메시지 숨김
    passwordInput.addEventListener("input", function () {
      if (passwordInput.value.trim() !== "") {
        passwordMsg.style.display = "none";
      }
    });

    // 하나라도 비어있으면 제출 막기
    if (!valid) {
      e.preventDefault();
    }
  });
});
