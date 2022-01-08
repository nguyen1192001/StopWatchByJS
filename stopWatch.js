; (
    () => {

        var buttonStart = document.querySelector('#startButton')
        var buttonStop = document.querySelector('#stopButton')
        var buttonResert = document.querySelector('#resertButton')
        var lableSecond = document.querySelector('#second span')
        var lableMinute = document.querySelector('#minute span')
        var lableHour = document.querySelector('#hour span')
        let second = 0
        let minute = 0
        let hour = 0


        function seconTime() {

            lableSecond.innerHTML = second

            if (second < 60) {
                second++
            } else {
                second = 0
                if (minute < 60) {
                    minute++
                } else {
                    minute = 0
                    if (hour < 60) {
                        hour++
                    } else {
                        hour = 0
                    }
                    lableHour.innerHTML = hour
                }
                lableMinute.innerHTML = minute
            }

        }

        // handing button

        var setTime
        var startButton = () => {
            setTime = setInterval(seconTime, 1000);
        }

        buttonStart.onclick = startButton

        buttonStop.onclick = function () {
            clearInterval(setTime)
        }

        buttonResert.onclick = function () {
            lableSecond.innerHTML = '00'
            lableMinute.innerHTML = '00'
            lableHour.innerHTML = '00'
        }

    }

)()