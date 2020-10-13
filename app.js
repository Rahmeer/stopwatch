function stopwatch(elem) {
    var time = 0;
    var interval;
    var offset;

    function update() {

        if(this.isOn){
            time += delta();

        }
        var formattedTime = timeFormate(time);

        elem.textContent = formattedTime;
    }

    function delta() {
        var now = Date.now();
        var timepassed = now - offset;
        offset = now;
        return timepassed;

    }



    function timeFormate(timeInMilliSec) {
        var time = new Date(timeInMilliSec);
        var minutes = time.getMinutes().toString();
        var Seconds = time.getSeconds().toString();
        var MilliSeconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = "0" + minutes;
        }

        if (Seconds.length < 2) {
            Seconds = "0" + Seconds;
        }

        while (MilliSeconds.length < 3) {
            MilliSeconds = "0" + MilliSeconds;
        }

        return minutes + " : " + Seconds + " . " + MilliSeconds;

    }

    this.start = function () {
        if (!this.isOn) {
            interval = setInterval(update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function () {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function () {
        time = 0;
        update();
    };

    this.isOn = false;
}

