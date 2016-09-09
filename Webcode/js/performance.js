function performanceinitAddTime(){
    var year=GetQuery('year');
    var month=GetQuery('month');
    var quarter=GetQuery('quarter');
    var week=GetQuery('week');
    if(!year>0&&!month>0&&!quarter>0&&!week>0){
        $(".performance-year").val($(".select").val());
    }else{
        $(".performance-year").val(year);
        $(".performance-month").val(month);
        $(".performance-quarter").val(quarter);
        $(".performance-week").val(week);
        
    }
}
performanceinitAddTime();

$('.performanceModel input[type=text]').bind('input propertychange', function() { 
    if($(".norm").val()!=""&&$(".weight").val()!=""&&$(".aim").val()!=""&&$(".grade").val()!=""&&$(".data-origin").val()!=""){
        $(".performanceGo").attr("disabled",false);
    }else{
        $(".performanceGo").attr("disabled",true);
    }
});
