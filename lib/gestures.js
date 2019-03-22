function addGesturesEventListeners(elementId, callBacks) {

    var element = document.getElementById(elementId)
    element.addEventListener('dragstart', preventDefault, true)
    element.addEventListener('touchstart', touchStart, true)
    element.addEventListener('touchend', touchEnd, true)
    element.addEventListener('touchmove', touchMoved, true)
    element.addEventListener('mousedown', mouseButtonDown, true)
    element.addEventListener('mouseup', mouseButtonUp, true)
    element.addEventListener('mouseleave', mouseButtonUp, true)
    element.addEventListener('mousemove', mouseMoved, true)

    function mouseMoved(e) {
        var target = e.currentTarget
        var targetClientRect = target.getClientRects()[0]

        mouseCoordinates = {
            x: (e.clientX - targetClientRect.left) 
            , y: (e.clientY - targetClientRect.top)
        }

        callBacks.mouseMoved(mouseCoordinates)
    }

    function preventDefault(e) {
        e.preventDefault()
    }

    function touchStart(e) {
        e.preventDefault()
        callBacks.penDown(e)
    }

    function touchEnd(e) {
        e.preventDefault()
        callBacks.penUp()
    }

    function touchMoved(e) {
        e.preventDefault()
        var translatedEvent = e.touches[0]
        translatedEvent.currentTarget = e.currentTarget
    
        callBacks.penMoved(e.touches[0])
    }

    function mouseMoved(e) {
        callBacks.penMoved(e)
    }

    function mouseButtonDown(e) {
        callBacks.penDown(e)
    }

    function mouseButtonUp(e) {
        callBacks.penUp()
    }
}
