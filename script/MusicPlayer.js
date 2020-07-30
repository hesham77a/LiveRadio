//================تحديد العرض والاتفاع ليلائم الهواتف=======================
class Player{
    constructor(){
        var myInterval = setInterval(() => {
            this.orders();
        }, 200);
      
     
    }

    orders(){
        // ===================================
        var screenSize = document.getElementById("IdMainPlayer");
        screenSize.style.height = screen.height+"px";
        //  screenSize.style.width = screen.width + "px";
        //  alert(screenSize.style.height);
        var heightDiv = document.getElementById("IdContent");
        heightDiv.style.height= screen.height-320 +"px";
        if(screen.width < 620){
             screenSize.style.width = screen.width + "px";
            //   screenSize.style.margin="0px";
            // screenSize.style.zoom="90%"
            screenSize.style.position="absolute";
        }
        if(screen.height < 730){
            screenSize.style.height = 200+screen.height+"px";
            heightDiv.style.height= screen.height-100 +"px";
        }
// =========================

    }
}

// ===============================================
onload = new Player();
// ============================== كلاس تشغيل الازرار  ==================

class AudioPlayer {
    constructor(){
        // تحديد  ملف الصوت
       this.audioFile = document.getElementById("IdAudioFile");
    //    تحديد اسم القناة
       this.RadioNameFile = document.getElementById("IdParagRadioName");
    //    تحديد زر التشغيل
       this.playButton = document.getElementById("IdPlayButton");
    //    متغير من اجل التاكد هل يشتغل الصوت او لا
       this.isFilePlay;
  // اضافة دالة التشغيل للز 
       this.playButton.addEventListener("click", ()=>{
       this.playPause();

       });

    //    this.playPause();

    //    --------اسماء قنوات الراديو--
       this.nameOfRadio = [];
    //    this.nameOfRadio[0] = "صورة الفاتحة";
       this.nameOfRadio[0] = "اذاعة القران الكريم";

       this.nameOfRadio[1] = "راديو تونس الوطني مباشر";
       this.nameOfRadio[2] = "راديو ليبيانا";
       this.nameOfRadio[3] = "لبدة اف ام راديو";

    //    --------عناوين قنوات الراديو--
       this.sourceOfAudio = []; 
    //    this.sourceOfAudio[0] = "https://dl1.sura.pw/dl/reciter/2/40/001.mp3?h=B-ldldT4y3S2G-1szg7WnQ&expires=1595914619"; 
    //    this.sourceOfAudio[0] = "https://coran.ice.infomaniak.ch/coran.aac";
     this.sourceOfAudio[0] = "http://uk5.internet-radio.com:8079/stream";

    


       this.sourceOfAudio[1] = "http://rtstream.tanitweb.com/nationale"; 
       this.sourceOfAudio[2] = "http://proxima.shoutca.st:8946/stream.mp3"; 
       this.sourceOfAudio[3] = "http://94.23.66.114:8082/;stream.mp3";
    //     اسم المتغير لتغيير القنوات  -  عداد
      this.server = 0;

      /// تشغيل مباشرة عند تحميل الموقع
      this.setResorce();

    // الزر التالي
    document.getElementById("IdNextButton").addEventListener("click",()=>{
        if(this.server < this.sourceOfAudio.length-1){
            ++this.server;
        }else{
            this.server = 0;  
        }
        localStorage.setItem("Posiotion",this.server );
        this.isFilePlay = false;           

        this.setResorce();

     });

       // الزر السابق
    document.getElementById("IdBackButton").addEventListener("click",()=>{
        if(this.server > 0){
            --this.server;

        }else{
            this.server = this.sourceOfAudio.length-1;  

        }
        localStorage.setItem("Posiotion",this.server );
        this.isFilePlay = false;  


        this.setResorce();


    });

    }
     //  method للربط
    setResorce(){
        if(localStorage.getItem("Posiotion")!=null ){
        this.server = localStorage.getItem("Posiotion");
        }
        this.audioFile.src = this. sourceOfAudio[this.server];
        // alert(this.server);
        var ChannelNumber = parseInt(this.server )+ 1;
        this.RadioNameFile.innerHTML=  "قناة رقم (" +  ChannelNumber + ") : " +  this.nameOfRadio[this.server] ;
        this.playPause();
    }
// ---------------------------
// دالة التشغيل والايقاف
    playPause(){
        // اذا كان متوقف يتم التشغيل وتغيير الصورة
      if(this.isFilePlay == false){
        this.audioFile.play();
        this.isFilePlay = true;    
        // this.playButton.src ="image/pause.png";
        this.playButton.src ="./image/pause.png";
              }
      else{
                  // اذا كان يشتغل يتم التوقف وتغيير الصورة
        this.audioFile.pause();
        this.isFilePlay = false;  
        this.playButton.src ="image/play.png";
    }}
}

onload = new AudioPlayer();
