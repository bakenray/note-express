var EventCenter = (function(){
    var events = {};
    function on(evt,handler){
        events[evt] = events[evt] || []
        event[evt].push({
            handler:handler
        })
    }
    function fire(evt,args){
        if(!events[evt]){
            return ;
        }
        for(var i = 0;i<events[evt].length;i++){
            events[evt][i].handler(args);
        }
    }
    return {
        on:on,
        fire:fire
    }
})()
module.exports = EventCenter

// 使用方式
// EventCenter.on('text-change',function(data){
//     console.log('data')
// })
