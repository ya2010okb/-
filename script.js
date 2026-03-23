// مفتاحك الجديد والمفعل يا يعقوب
const API_KEY = "AIzaSyCW1Y4DZIEdlRFfVzUz-WpiDfQu68M0Atg";

// نظام الدخول (المحاكاة)
function loginWithGoogle() {
    const userName = prompt("أدخل اسمك للمتابعة عبر Google:");
    if(userName) saveUser(userName, "https://cdn-icons-png.flaticon.com/512/300/300221.png");
}

function loginWithFacebook() {
    const userName = prompt("أدخل اسمك للمتابعة عبر Facebook:");
    if(userName) saveUser(userName, "https://cdn-icons-png.flaticon.com/512/124/124010.png");
}

function saveUser(name, photo) {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'flex';
    document.getElementById('display-name').innerText = name;
    document.getElementById('user-photo').src = photo;
    addMsg(`مرحباً يا ${name}! أنا VROOM، ميكانيكي الجلفة الذكي. واش راهي سيارتك اليوم؟`, 'ai');
}

// تشغيل الإرسال عند الضغط على Enter
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// دالة إرسال الرسالة للذكاء الاصطناعي
async function sendMessage() {
    const input = document.getElementById('user-in');
    const text = input.value.trim();
    if(!text) return;

    addMsg(text, 'user');
    input.value = "";
    const loading = addMsg("VROOM يحلل المشكلة... ⚡", 'ai');

    try {
        // الرابط الرسمي المستقر v1
        const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ 
                        text: "أنت ميكانيكي خبير من ولاية الجلفة، الجزائر. أجب بلهجة تقنية جزائرية مفهومة واحترافية. ساعد المستخدم في حل مشكلة سيارته: " + text 
                    }]
                }]
            })
        });

        const data = await response.json();

        if (data.error) {
            loading.innerText = "خطأ تقني: " + data.error.message;
            console.error("API Error:", data.error);
        } else if (data.candidates && data.candidates[0].content) {
            loading.innerText = data.candidates[0].content.parts[0].text;
        } else {
            loading.innerText = "اعتذر، لم أتمكن من معالجة الطلب. حاول صياغة السؤال بشكل مختلف.";
        }

    } catch (e) {
        loading.innerText = "مشكلة في الاتصال. تأكد أن الموقع مرفوع على Netlify.";
        console.error("Fetch Error:", e);
    }
}

function addMsg(t, c) {
    const chatBox = document.getElementById('chat-box');
    const d = document.createElement('div');
    d.className = `msg ${c}`;
    d.innerText = t;
    chatBox.appendChild(d);
    chatBox.scrollTop = chatBox.scrollHeight;
    return d;
}

function logout() { location.reload(); }
