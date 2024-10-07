document.addEventListener("DOMContentLoaded", (event) => {
    earthquake();
});

document.body.addEventListener("click", function () {
    earthquake();
});

if (window.DeviceMotionEvent) {
    let shakeThreshold = 15;
    let lastShakeTime = 0;

    window.addEventListener("devicemotion", function(event) {
        const acceleration = event.acceleration;

        if (acceleration.x > shakeThreshold || acceleration.y > shakeThreshold || acceleration.z > shakeThreshold) {
            let currentTime = new Date().getTime();

            if (currentTime - lastShakeTime > 1000) {
                earthquake();
                lastShakeTime = currentTime;
            }
        }
    });
}

function earthquake() {
    document.body.classList.add('blur');

    setTimeout(() => {
        document.body.classList.add('vibrate');

        setTimeout(() => {
            document.body.classList.remove('blur');
        }, 100);

        setTimeout(() => {
            document.body.classList.remove('vibrate');
        }, 200);
    }, 50);
}
