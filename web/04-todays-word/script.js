const source = `
위로|여호와는 나의 목자시니 내게 부족함이 없으리로다.|시편 23편 1절|오늘도 나를 돌보시는 분이 계심을 기억해 보세요.
위로|수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라.|마태복음 11장 28절|잘 해내지 못해도 괜찮아요. 잠시 쉬어 가도 됩니다.
위로|내가 너를 굳세게 하리라 참으로 너를 도와 주리라.|이사야 41장 10절|혼자 감당하기 벅찬 순간에도 도움의 손길이 함께합니다.
위로|여호와는 마음이 상한 자를 가까이 하시고 충심으로 통회하는 자를 구원하시는도다.|시편 34편 18절|지친 마음도 있는 그대로 품어 주십니다.
위로|내 은혜가 네게 족하도다 이는 내 능력이 약한 데서 온전하여짐이라.|고린도후서 12장 9절|약함 속에서도 충분한 은혜가 머뭅니다.
위로|너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라.|베드로전서 5장 7절|마음의 걱정을 하나씩 맡겨 보세요.
위로|여호와는 선하시며 환난 날에 산성이시라 그는 자기에게 피하는 자들을 아시느니라.|나훔 1장 7절|힘든 날에도 기댈 곳이 있습니다.
위로|여호와는 나의 빛이요 나의 구원이시니 내가 누구를 두려워하리요.|시편 27편 1절|두려움보다 더 큰 빛을 바라보세요.
감사|여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다.|시편 107편 1절|작은 좋은 일 하나를 떠올리며 감사해 보세요.
감사|항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라.|데살로니가전서 5장 16-18절|완벽한 날이 아니어도 감사할 이유는 찾을 수 있어요.
감사|내 영혼아 여호와를 송축하며 그의 모든 은택을 잊지 말지어다.|시편 103편 2절|받은 은혜를 천천히 세어 보세요.
감사|감사함으로 그 문에 들어가며 찬송함으로 그 궁정에 들어가서 그에게 감사하며.|시편 100편 4절|감사는 오늘을 새롭게 바라보게 합니다.
감사|여호와께서 우리를 위하여 큰 일을 행하셨으니 우리는 기쁘도다.|시편 126편 3절|지나온 길에 있었던 좋은 일들을 기억해 보세요.
감사|모든 좋은 은사와 온전한 선물이 다 위로부터 빛들의 아버지께로부터 내려오나니.|야고보서 1장 17절|내게 온 좋은 선물을 소중히 여겨 보세요.
감사|여호와는 나의 힘이요 나의 방패시니 내 마음이 그를 의지하여 도움을 얻었도다.|시편 28편 7절|도움을 받았던 순간을 기억해 보세요.
감사|여호와의 인자와 긍휼이 무궁하시므로 우리가 진멸되지 아니함이니이다.|예레미야애가 3장 22절|매일 새롭게 주어지는 긍휼을 기억해 보세요.
용기|강하고 담대하라 두려워하지 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라.|여호수아 1장 9절|처음 가는 길에도 함께하심을 믿고 한 걸음 내디뎌 보세요.
용기|두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라.|이사야 41장 10절|오늘의 용기는 아주 작은 행동에서 시작됩니다.
용기|내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.|빌립보서 4장 13절|당신에게 맡겨진 오늘의 일을 차분히 시작해 보세요.
용기|사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라.|잠언 16장 9절|계획대로 되지 않아도 길은 계속 이어집니다.
용기|내가 산을 향하여 눈을 들리라 나의 도움이 어디서 올까.|시편 121편 1절|시선을 들어 도움을 기대해 보세요.
용기|여호와를 바라는 너희들아 강하고 담대하라.|시편 31편 24절|오늘 필요한 용기를 마음에 채워 보세요.
용기|하나님이 우리에게 주신 것은 두려워하는 마음이 아니요 오직 능력과 사랑과 절제하는 마음이니.|디모데후서 1장 7절|두려움이 전부가 아니라는 사실을 기억하세요.
용기|오직 여호와를 앙망하는 자는 새 힘을 얻으리니.|이사야 40장 31절|지쳤다면 잠시 멈추어 새 힘을 기다려 보세요.
평안|평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라.|요한복음 14장 27절|바쁜 마음에 잠깐의 평안을 허락해 보세요.
평안|아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로 너희 구할 것을 감사함으로 하나님께 아뢰라.|빌립보서 4장 6절|마음속 걱정을 내려놓고 감사한 한 가지를 떠올려 보세요.
평안|너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라.|잠언 3장 5절|모든 답을 지금 알지 않아도 괜찮습니다.
평안|너희는 가만히 있어 내가 하나님 됨을 알지어다.|시편 46편 10절|잠시 멈추고 숨을 고르며 현재에 머물러 보세요.
평안|여호와께서 그의 백성에게 힘을 주심이여 여호와께서 그의 백성에게 평강의 복을 주시리로다.|시편 29편 11절|오늘 당신의 마음에도 평강이 머물기를 바랍니다.
평안|내가 누워 자고 깨었으니 여호와께서 나를 붙드심이로다.|시편 3편 5절|하루의 시작과 끝을 붙들어 주심을 믿어 보세요.
평안|내 영혼아 네가 어찌하여 낙심하며 어찌하여 내 속에서 불안해하는가 너는 하나님께 소망을 두라.|시편 42편 11절|불안한 마음을 다그치지 말고 소망을 향해 돌려 보세요.
위로|여호와는 나의 반석이시요 나의 요새시요 나를 건지시는 이시요.|시편 18편 2절|흔들리는 날에도 단단한 반석이 있습니다.
위로|여호와는 나의 힘이요 나의 노래시며 나의 구원이시로다.|시편 118편 14절|오늘의 작은 노래가 힘이 될 수 있습니다.
감사|내가 여호와를 항상 송축함이여 그의 찬송이 내 입에 계속하리로다.|시편 34편 1절|기쁜 마음으로 오늘의 좋은 순간을 말해 보세요.
감사|여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다.|역대상 16장 34절|변하지 않는 사랑을 생각하며 감사해 보세요.
용기|여호와는 나의 능력과 찬송이시요 또 나의 구원이 되셨도다.|출애굽기 15장 2절|당신 안에 이미 있는 힘을 믿어 보세요.
용기|여호와는 나의 힘과 나의 방패시요 내 마음이 그를 의지하여 도움을 얻었도다.|시편 28편 7절|필요한 힘은 혼자 만들어 내는 것만이 아닙니다.
평안|주는 나의 은신처이오니 환난에서 나를 보호하시고 구원의 노래로 나를 두르시리이다.|시편 32편 7절|마음이 쉴 수 있는 안전한 자리를 떠올려 보세요.
평안|여호와는 나의 목자시니 내게 부족함이 없으리로다.|시편 23편 1절|돌봄을 받고 있다는 생각이 마음을 편안하게 합니다.
평안|여호와를 경외하는 자에게는 견고한 의뢰가 있나니.|잠언 14장 26절|불안할 때 붙들 수 있는 마음의 기준을 세워 보세요.`;
const words = source.trim().split("\n").map((line) => line.split("|"));
const $ = (s) => document.querySelector(s);
let currentTopic = "전체"; let currentIndex = new Date().getDate() % words.length; let savedWords = JSON.parse(localStorage.getItem("savedWords") || "[]");
const filtered = () => words.map((w, i) => ({ w, i })).filter(({ w }) => currentTopic === "전체" || w[0] === currentTopic).map(({ i }) => i);
const isSaved = (i) => savedWords.includes(i);
function showWord(i) { currentIndex = i; const [topic, verse, reference, reflection] = words[i]; $("#topic-label").textContent = `# ${topic}`; $("#verse-text").textContent = `“${verse}”`; $("#verse-reference").textContent = reference; $("#reflection-text").textContent = reflection; $("#favorite-button").textContent = isSaved(i) ? "♥" : "♡"; $("#favorite-button").classList.toggle("is-saved", isSaved(i)); }
function renderSaved() { const list = $("#saved-list"); list.innerHTML = ""; if (!savedWords.length) { list.innerHTML = '<li class="empty-message">아직 저장한 말씀이 없어요. ♡ 버튼을 눌러 저장해 보세요.</li>'; return; } savedWords.forEach((i) => { const li = document.createElement("li"); const button = document.createElement("button"); button.innerHTML = `<strong>${words[i][1]}</strong><span>${words[i][2]}</span>`; button.onclick = () => { showWord(i); $("#saved-section").hidden = true; }; li.append(button); list.append(li); }); }
function updateSaved() { localStorage.setItem("savedWords", JSON.stringify(savedWords)); $("#saved-count").textContent = savedWords.length; renderSaved(); showWord(currentIndex); }
function message(text) { $("#status-message").textContent = text; }
$("#today-date").textContent = new Intl.DateTimeFormat("ko-KR", { year:"numeric", month:"long", day:"numeric", weekday:"long" }).format(new Date());
$("#card-date").textContent = $("#today-date").textContent;
$("#journal-input").value = localStorage.getItem("todayReflection") || "";
$("#journal-form").onsubmit = (event) => { event.preventDefault(); const reflection = $("#journal-input").value.trim(); if (!reflection) { message("한 줄 묵상을 적은 뒤 저장해 보세요."); return; } localStorage.setItem("todayReflection", reflection); message("오늘의 한 줄 묵상을 저장했어요."); };
document.querySelectorAll(".topic-button").forEach((button) => button.onclick = () => { currentTopic = button.dataset.topic; document.querySelectorAll(".topic-button").forEach((b) => b.classList.toggle("is-active", b === button)); showWord(filtered()[0]); message(`${currentTopic} 주제의 말씀을 보고 있어요.`); });
$("#random-button").onclick = () => { const candidates = filtered().filter((i) => i !== currentIndex); showWord(candidates[Math.floor(Math.random() * candidates.length)] ?? currentIndex); message(`${currentTopic} 주제에서 새로운 말씀을 골랐어요.`); };
$("#favorite-button").onclick = () => { const adding = !isSaved(currentIndex); savedWords = adding ? [...savedWords, currentIndex] : savedWords.filter((i) => i !== currentIndex); updateSaved(); message(adding ? "저장한 말씀에 추가했어요." : "저장을 취소했어요."); };
$("#saved-button").onclick = () => { $("#saved-section").hidden = !$("#saved-section").hidden; renderSaved(); }; $("#close-saved-button").onclick = () => { $("#saved-section").hidden = true; };
$("#share-button").onclick = async () => { const link = location.href; try { await navigator.clipboard.writeText(link); } catch { const input = document.createElement("textarea"); input.value = link; document.body.append(input); input.select(); document.execCommand("copy"); input.remove(); } message("이 사이트의 주소를 복사했어요. 원하는 곳에 붙여넣어 공유하세요!"); };
$("#theme-button").onclick = () => { const dark = document.body.classList.toggle("dark"); $("#theme-button").textContent = dark ? "☀" : "☾"; $("#theme-button").setAttribute("aria-label", dark ? "밝은 모드로 바꾸기" : "다크 모드로 바꾸기"); };
updateSaved(); showWord(currentIndex);
