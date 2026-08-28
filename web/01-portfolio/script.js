const practiceButton = document.querySelector("#practice-button");
const message = document.querySelector("#message");

const encouragements = [
  "좋아요! 작은 한 걸음이 쌓이면 멋진 프로젝트가 됩니다.",
  "버튼이 반응했어요. JavaScript가 화면을 바꾼 것입니다!",
  "직접 눌러 보며 배우는 방식이 가장 오래 기억에 남습니다.",
];

let currentIndex = 0;

practiceButton.addEventListener("click", () => {
  message.textContent = encouragements[currentIndex];
  currentIndex = (currentIndex + 1) % encouragements.length;
});
