let suggestions = [
    "Evden Eve Nakliyat",
    "Ev Temizliği",
    "Boyacı (Boya Badana Ustası)",
    "Boş Ev Temizliği",
    "Halı Yıkama Temizleme",
    "Parça Eşya Taşıma",
    "Şehirler Arası Nakliyat",
    "Direksiyon Dersi",
    "Yüzme Dersi",
    "Psikolog"
]

const searchWrapper = document.querySelector(".arama-inputu");
const inputBox = searchWrapper.querySelector(".aramaform");
const suggBox = searchWrapper.querySelector(".otomatik-doldur");

inputBox.onkeyup = (e)=> {

    let userData = e.target.value;
    let emptyArray = [];
    if(userData) {
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove('active');
    }
    
}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove('active');
    console.log(selectUserData);
}

function showSuggestions(list){
    let listData;
    if(!list.length) {
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}