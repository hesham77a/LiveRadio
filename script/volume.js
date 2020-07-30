class Volume{
        constructor(){
        // تحديد  ملف الصوت
        this.audioFile = document.getElementById("IdAudioFile");
        // تحديد  نسبة الصوت الافتراضية
        this.audioFile.volume = 50/100;
        // this.audioFile.Volume = 0.5;
 
        this.volumeLevel = document.getElementById("IdVolumeLevel");
        // اضافة اوامر عند تغيير مكان الزر الصوت
        this.volumeLevel.addEventListener("change",()=>{
            // alert(this.volumeLevel.value/100);
            this.audioFile.volume = this.volumeLevel.value/100; 
        });

        // تغيير سرعة الصوت
        this.volumeSpeed = document.getElementById("IdVolumeSpeed");
        this.volumeSpeed.playbackRate = 1;
        // اضافة اوامر عند تغيير مكان الزر الصوت
        this.volumeSpeed.addEventListener("change",()=>{
            this.audioFile.playbackRate = this.volumeSpeed.value /100 ; 
        });

        }

}

onload = new Volume();
