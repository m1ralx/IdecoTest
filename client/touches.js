exports.onTouch = function (element, handletouch) {
    var touchsurface = element;
    var dir;
    var swipeType;
    var startX;
    var startY;
    var distX;
    var distY;
    var threshold = 150; // миинимальное требуемое расстояние свайпа
    var restraint = 100; // максимальное расстояние по оси, перпендикулярной направлению свайпа
    var allowedTime = 500; // макс. разрешенное время свайпа
    var elapsedTime;
    var startTime;

    touchsurface.addEventListener('touchstart', function (event) {
        event.preventDefault();
        var touchobj = event.changedTouches[0];
        dir = 'none';
        swipeType = 'none';
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime();
        handletouch(event, 'none', 'start', swipeType, 0);
    }, false);

    touchsurface.addEventListener('touchmove', function (event) {
        event.preventDefault();
        var touchobj = event.changedTouches[0];
        distX = touchobj.pageX - startX;
        distY = touchobj.pageY - startY;
        if (Math.abs(distX) > Math.abs(distY)) {
            dir = (distX < 0) ? 'left' : 'right';
            handletouch(event, dir, 'move', swipeType, distX);
        }
        else {
            dir = (distY < 0) ? 'up' : 'down';
            handletouch(event, dir, 'move', swipeType, distY);
        }
    }, false);

    touchsurface.addEventListener('touchend', function (event) {
        event.preventDefault();
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                swipeType = dir;
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                swipeType = dir;
            }
        }
        handletouch(event, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY);
    }, false);
};


exports.onTodoSwipe = function (event, dir, phase, swipetype, distance) {
    // dir: "none", "left", "right", "top", "down"
    // phase: "start", "move", "end"
    // swipetype: "none", "left", "right", "top", "down"
    if (dir == 'left' && distance > -60 || dir == 'right' && distance < 60) {
        return;
    }
    var todo = event.target;
    console.log("Swipe target");
    console.log(todo);
    if (phase == 'move' && (dir == 'left' || dir == 'right')) {
        if (Math.abs(distance) > 200) {
            return;
        }
        if (dir == 'left') {
            // event.todo.style.marginRight = Math.min(-60 - distance, 0).toString() + "px";
            todo.style.transform = "translate(-" + Math.min(-distance - 60, 60).toString() + "px)";
        }
        if (dir == 'right') {
            // event.todo.style.marginRight = Math.max(-60, -distance).toString() + "px";
            todo.style.transform = "translate(" + Math.min(-120 + distance, 0).toString() + "px)";
        }
    }
    if (phase == 'end') {
        // todo.style.marginRight = (Math.abs(parseInt(todo.style.marginRight, 10)) > 30 ? -60 : 0).toString() + "px";

        var currentTranslate = parseInt(todo.style.transform.split('(')[1], 10);
        todo.style.transform = "translate(" + (Math.abs(currentTranslate) > 30 ? -60 : 0).toString() + "px)";
    }
};

exports.pullAndRefresh = function (event, dir, phase, swipetype, distance) {
    if (dir == 'down') {
        var todosContainer = event.target;
        console.log("Pull target:");
        console.log(todosContainer);
        todosContainer.style.transform = "translate(-" + Math.min(-distance, 50).toString() + "px)";
    }
};
