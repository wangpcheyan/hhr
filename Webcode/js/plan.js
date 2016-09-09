    //初始化星期周数
    var week_count=0;
    //获取当前url路径
    var pathname=window.location.pathname;
    //判断当年当月有几周
    function getInfo(year, month) {
    	var d = new Date();
    	// 第一天星期几
    	d.setFullYear(year, month-1, 1);
    	var w1 = d.getDay();
    	if (w1 == 0) w1 = 7;
    	// 一个月总天数
    	d.setFullYear(year, month, 0);
    	var dd = d.getDate();
    	// 第一个星期一
    	if (w1 != 1) d1 = 7 - w1 + 2;
    	else d1 = 1;
    	week_count = Math.ceil((dd-d1+1)/7);
    }

    //用js获取url参数函数
	function GetQuery(key) { 
		var search = location.search.slice(1); //得到get方式提交的查询字符串
		var arr = search.split("&"); 
		for (var i = 0; i < arr.length; i++) { 
			var ar = arr[i].split("="); 
			if (ar[0] == key) { 
			return ar[1]; 
			} 
		} 
	}

	//需要获取参数的改变href
    function changeLink(){
    	//调用函数获取到年月信息
    	var year=GetQuery('year');
    	var month=GetQuery('month');


    	//改变选择的月份项的背景色    	
    	var liCurrent=parseInt(month);
    	if(liCurrent>0){
    		$(".subnav li").eq(liCurrent).css("background","#E8E6E6");
    	}else{
    		$(".subnav li").eq(0).css("background","#E8E6E6");
    	}
        if(year>0){
    	   $(".select").val(year); //把参数中的年份返回给下拉框
        }
    	//改变周数重新添加
    	getInfo(year,month);
    	if(week_count){
    		var weekArr=["一","二","三","四","五"];
    		$(".month-week span").remove("span");
    		for(var i=0;i<week_count;i++){
    			$(".month-week").append("<span><a href='#'>第"+weekArr[i]+"周</a></span>");    		
    		}
    	}
    	//获取到年月后，改变第几周的链接和改变第几月的链接
    	$(".month-week h3 a").attr("href",pathname+"?year="+year+"&month="+month); //改变月度的链接
    	var weekLength=$(".month-week span a").length;
    	for(var i=0;i<weekLength;i++){
    		$(".month-week span a").eq(i).attr("href",pathname+"?year="+year+"&month="+month+"&week="+(i+1));
    	}

    	//如果月度不大于0那么就是年季
    	if(!month>0){ //只有年季
    		if(!GetQuery('quarter')>0){
    			$(".year-quarter h3 a").css("color","#249BF5");
    		}else{
    			var quarter=GetQuery('quarter')-1;
    			$(".year-quarter span a").eq(quarter).css("color","#249BF5");
    		}
    		$(".month-week").hide(); //月度隐藏

    	}else{  //只有月度
    		if(!GetQuery('week')>0){
    			$(".month-week h3 a").css("color","#249BF5");
    		}else{
    			var week=GetQuery('week')-1;
    			$(".month-week span a").eq(week).css("color","#249BF5");
    		}
    		
    		$(".year-quarter").hide(); //年季隐藏
    	}

    	//获取到年后，改变第几季度的链接和改变第几年的链接
    	$(".year-quarter h3 a").attr("href",pathname+"?year="+year); //改变年度的链接
    	var quarterLength=$(".year-quarter span a").length;
    	for(var i=0;i<quarterLength;i++){
    		$(".year-quarter span a").eq(i).attr("href",pathname+"?year="+year+"&quarter="+(i+1));
    	}

    }

    //对当前页面无参数的改变href
	function linkSet(){
		//初始化左边月份的链接
		var aLength=$(".subnav li a").length;
		var selectVal=$(".select").val();   //获取下拉框的值
		for(var j=1;j<aLength;j++){
			$(".subnav li a").eq(j).attr("href",pathname+"?year="+selectVal+"&month="+j); 
		}

		//改变月度和周的链接
    	$(".month-week h3 a").attr("href",pathname+"?year="+selectVal+"&month="+GetQuery('month')); //改变月度的链接
    	var weekLength=$(".month-week span a").length;
    	for(var i=0;i<weekLength;i++){  //改变周的链接
    		$(".month-week span a").eq(i).attr("href",pathname+"?year="+selectVal+"&month="+GetQuery('month')+"&week="+(i+1));
    	}

		//改变左侧年季的href属性
		$(".subnav li a").eq(0).attr("href",pathname+"?year="+selectVal);

		//改变右侧年度的href属性和第几季度的href属性
		$(".year-quarter h3 a").attr("href",pathname+"?year="+selectVal);
		var quarterLength=$(".year-quarter span a").length;
	    for(var i=0;i<quarterLength;i++){
	    	$(".year-quarter span a").eq(i).attr("href",pathname+"?year="+selectVal+"&quarter="+(i+1));
	    }
	}    

 
	function selectChange(){
    	var date = new Date();
    	var currentYear=date.getFullYear();
    	var poorYear=parseInt(currentYear)-2015;
    	for(var i=0;i<=poorYear;i++){
    		$(".select").append("<option>"+(parseInt(currentYear)-i)+"</option>");
    	}
    }

    function getMonthWeek(a, b, c) { 
        /* 
        a = d = 当前日期 
        b = 6 - w = 当前周的还有几天过完（不算今天） 
        a + b 的和在除以7 就是当天是当前月份的第几周 
        */ 
        var date = new Date(a, parseInt(b) - 1, c), w = date.getDay(), d = date.getDate(); 
        return Math.ceil( 
        (d + 6 - w) / 7 
        ); 
    };
    function initAddTime(){
        // today=new Date();//获取当前时间
        // var y = today.getFullYear();
        // var m = today.getMonth()+1;
        // var d = today.getDate();
        // $(".plan-year").val(y);
        // $(".plan-month").val(m);
        // $(".plan-week").val(getMonthWeek(y, m, d));
        var year=GetQuery('year');
        var month=GetQuery('month');
        var quarter=GetQuery('quarter');
        var week=GetQuery('week');
        if(!year>0&&!month>0&&!quarter>0&&!week>0){
            $(".plan-year").val($(".select").val());
        }else{
            $(".plan-year").val(year);
            $(".plan-month").val(month);
            $(".plan-quarter").val(quarter);
            $(".plan-week").val(week);
        }
    }

    var parameter="";
    function screen(){
        var year=GetQuery('year');
        var month=GetQuery('month');
        var quarter=GetQuery('quarter');
        var week=GetQuery('week');
        if(year!=$(".select").val()){
            year=$(".select").val();
        }

        parameter="?year=";
        if(year>0){ parameter=parameter + year; }
        if(month>0){ parameter=parameter + "&month=" + month; }
        if(quarter>0){ parameter=parameter +"&quarter="+quarter; }
        if(week>0){ parameter = parameter + "&week="+week; }
        if(!year>0){
           parameter="?year="+$(".select").val();
        }
    }



	//函数初始化
	selectChange(); //先初始化复选框
    initAddTime(); //初始化添加的时间
	changeLink();   //获取url的参数改变链接
	linkSet();   //链接初始化

	//年份改变事件
	$(".select").change(function(){    //下拉框改变事件
		linkSet(); //当年份改变的时候月份的链接改变
	})

    var range=GetQuery('range');
    var rank=GetQuery('rank');
    if(range>0){ $(".range").val(range); }
    if(rank>0){ $(".rank").val(rank); }

    $(".range").change(function(){
      screen();
      if($(".range").val()>0){
        window.location.href=pathname+parameter+"&range="+$(".range").val();
      }else{
        window.location.href=pathname+parameter+"&range="+$(".range").val()+"&rank="+$(".rank").val();
      }
    })
    


    //人员选择
    var peopleSelectFlag=1;
    $(".selectPeople").click(function(){ //显示隐藏人员选择框
        if(peopleSelectFlag){
            $(".selectPeople i").removeClass("fa-caret-down").addClass("fa-caret-up");
            peopleSelectFlag=0;
        }else{
            $(".selectPeople i").removeClass("fa-caret-up").addClass("fa-caret-down");
            peopleSelectFlag=1;
        }
        $(".peopleList").stop(true,false).slideToggle();
    })

    //判断选择的复选框值
    var peopleArr="";
    function peopleValue(){
        peopleArr = $(".peopleList li input:checkbox[name='people']:checked").map(function(index,elem) {
            return $(elem).val();
        }).get().join(',');   
    }

    //全选人员复选框单击事件
    $(".peopleAll input[type=checkbox]").click(function(){
        if($(this).is(":checked")){
            $(".peopleList li input:checkbox[name='people']").prop("checked",true);
        }else{
            $(".peopleList li input:checkbox[name='people']").prop("checked",false);
        }
        peopleValue();          
        screen();
        if(peopleArr!="" && $(".rank").val()>0){
            $(".peopleButton").attr("href",pathname+parameter+"&rank="+$(".rank").val()+"&people="+peopleArr);
        }else if(peopleArr=="" ){
            $(".peopleButton").attr("href",pathname+parameter+"#");

        }else{
            $(".peopleButton").attr("href",pathname+parameter+"&people="+peopleArr);            
        } 
    })

    //单个人员复选框单击事件
    var isChecked=0;
    $(".peopleList li input:checkbox[name='people']").click(function(){
        peopleValue();

        var peopleCheckbox=$(".peopleList li input:checkbox[name='people']");
        var peopleCheckboxLen=peopleCheckbox.length;

        for(var i=0;i<peopleCheckboxLen;i++){
            if(peopleCheckbox.eq(i).is(":checked")){
                isChecked++;
            }else{
                isChecked=0;
            }
        }
        if(isChecked==peopleCheckboxLen){
            $(".peopleAll input[type=checkbox]").prop("checked",true);
        }else{
            $(".peopleAll input[type=checkbox]").prop("checked",false);
        }

        screen();
        if(peopleArr!="" && $(".rank").val()>0){
            $(".peopleButton").attr("href",pathname+parameter+"&rank="+$(".rank").val()+"&people="+peopleArr);
        }else if(peopleArr=="" ){
            $(".peopleButton").attr("href",pathname+parameter+"#");

        }else{
            $(".peopleButton").attr("href",pathname+parameter+"&people="+peopleArr);            
        }      
    })
    $(".peopleButton").click(function(){
        if(peopleArr==""){
            alert("请选择一个人员");
        }
    })

    $(".rank").change(function(){
      screen();
      if($(".rank").val()>0 && $(".range").val()>0){
        window.location.href=pathname+parameter+"&range="+$(".range").val()+"&rank="+$(".rank").val();
      }else{
        if(GetQuery("people")==undefined){            
            window.location.href=pathname+parameter+"&rank="+$(".rank").val();
        }else{
            window.location.href=pathname+parameter+"&people="+GetQuery("people")+"&rank="+$(".rank").val();
        }
      }
    })

    //判断计划页中新增修改框中下拉菜单是否为空
    var a,b,c,d;
    $(".principal").change(function(){
        if($(".principal").val()!=""){
            a=true;
        }
        if(a&&b&&c&&d){
            $(".add").removeAttr("disabled");
        }
    })
    $(".participant").change(function(){
        if($(".participant").val()!=""){
            b=true;
        }
        if(a&&b&&c&&d){
            $(".add").removeAttr("disabled");
        }
    })
    $(".auditor").change(function(){
        if($(".auditor").val()!=""){
            c=true;
        }
        if(a&&b&&c&&d){
            $(".add").removeAttr("disabled");
        }
    })
    $(".level").change(function(){
        if($(".level").val()!=""){
            d=true;
        }
        if(a&&b&&c&&d){
            $(".add").removeAttr("disabled");
        }
    })

    var e,f,g,h;
    $("#updateprincipal").change(function(){
        if($("#updateprincipal").val()!=""){
            e=true;
        }
        if(e&&f&&g&&h){
            if($(".updateId").val()!=""){
                $(".update").removeAttr("disabled");
            }
        }
    })
    $("#updateparticipant").change(function(){
        if($("#updateparticipant").val()!=""){
            f=true;
        }
        if(e&&f&&g&&h){
            if($(".updateId").val()!=""){
                $(".update").removeAttr("disabled");
            }
        }
    })
    $("#updateauditor").change(function(){
        if($("#updateauditor").val()!=""){
            g=true;
        }
        if(e&&f&&g&&h){
            if($(".updateId").val()!=""){
                $(".update").removeAttr("disabled");
            }
        }
    })
    $("#updatelevel").change(function(){
        if($("#updatelevel").val()!=""){
            h=true;
        }
        if(e&&f&&g&&h){
            if($(".updateId").val()!=""){
                $(".update").removeAttr("disabled");
            }
        }
    })


    //判断选择的id
    var idArr="";
    function selectId(){
        idArr = $("input:checkbox[name='id']:checked").map(function(index,elem) {
            return $(elem).val();
        }).get().join(',');   
    }

    //id复选框勾选
    $(".id").click(function() {
        selectId();
        if($("#selectAll").is(":checked")){
            $("#selectAll").prop("checked",false);
        }
        if(idArr!=""){
            if(GetQuery('delid')!=undefined || GetQuery('cid')!=undefined){
                var urlSearch=window.location.search;
                var arrSearch=urlSearch.split("&");
                var arrLen=arrSearch.length;
                var newArrSearch="";
                for(var i=0;i<arrLen-1;i++){
                    newArrSearch=newArrSearch+arrSearch[i]+"&";
                } 
                $(".del").attr("href",newArrSearch+"delid="+idArr);
                $(".commit").attr("href",newArrSearch+"cid="+idArr);
            }else{
                if(GetQuery("year")>0){
                    var urlSearch=window.location.search;
                    $(".del").attr("href",urlSearch+"&delid="+idArr);    
                    $(".commit").attr("href",urlSearch+"&cid="+idArr);            
                }
            }
            $(".updateId").val(idArr);
        }else{
            $(".del").attr("href","");    
            $(".commit").attr("href","");   
        }

    });

    //修改按钮移上去的判断
    $(".aUpdate").click(function(){
        var idArrSplit=idArr.split(",");
        var idArrSplitLen=idArrSplit.length;
        if(idArrSplitLen>1){
            alert("只能修改一个数据行！");
        }else if(idArrSplit==""){
            alert("请勾选一个数据行！");
        }
    })

    //删除按钮移上去的判断
    $(".aDel").click(function(){
        selectId();
        if(idArr==""){
            alert("请勾选一个数据行！");
        }
        if(!GetQuery("year")>0){
            var urlSearch=window.location.search+"?year="+$(".select").val();
            $(".del").attr("href",urlSearch+"&delid="+idArr);    
            $(".commit").attr("href",urlSearch+"&cid="+idArr);   
        }
    })

    //提交按钮移上去的判断
    $(".commitAll").click(function(){
        selectId();
        if(idArr==""){
            alert("请勾选一个数据行！");
        }
        if(!GetQuery("year")>0){
            var urlSearch=window.location.search+"?year="+$(".select").val();
            $(".del").attr("href",urlSearch+"&delid="+idArr);    
            $(".commit").attr("href",urlSearch+"&cid="+idArr);   
        }
    })

    //团队计划页的审核
    $(".aAudit").click(function(){
        selectId();
        if(idArr==""){
            alert("请勾选一个数据行！");
        }else if(idArr>0){
            $(".audit").removeAttr("disabled");
        }
        //团队计划审核评价
        if(idArr>0){
            $(".auditId").val(idArr);
        }else if(idArr!=""){
            alert("只能勾选一个数据行！");
            $(".auditId").val("");
        }
    })

    //团队计划页的评价
    $(".aEvaluate").click(function(){
        selectId();
        if(idArr==""){
            alert("请勾选一个数据行！");
        }else if(idArr>0){
            $(".evaluate").removeAttr("disabled");
        }
        //团队计划审核评价
        if(idArr>0){
            $(".evaluateId").val(idArr);
        }else if(idArr!=""){
            alert("只能勾选一个数据行！");
            $(".evaluateId").val("");
        }
    })





    //团队绩效页的数据提交
    $(".aDataSubmission").click(function(){
        selectId();
        if(idArr==""){
            alert("请勾选一个数据行！");
        }else if(idArr>0){
            $(".dataSubmission").removeAttr("disabled");
        }
        if(idArr>0){
            $(".dataSubmissionId").val(idArr);
        }else if(idArr!=""){
            alert("只能勾选一个数据行！");
            $(".dataSubmissionId").val("");
        }
    })

    //团队绩效页的审批
    $(".aApprove").click(function(){
        selectId();
        if(idArr==""){
            alert("请勾选一个数据行！");
        }else if(idArr>0){
            $(".approve").removeAttr("disabled");
        }
        if(idArr>0){
            $(".approveId").val(idArr);
        }else if(idArr!=""){
            alert("只能勾选一个数据行！");
            $(".approveId").val("");
        }
    })
    //全选全不选
    $("#selectAll").click(function(){
        if($(this).is(":checked")){
            $("input[name='id']").prop("checked",true);
            selectId();
            if(idArr!=""){
                if(GetQuery('delid')!=undefined || GetQuery('cid')!=undefined){
                    var urlSearch=window.location.search;
                    var arrSearch=urlSearch.split("&");
                    var arrLen=arrSearch.length;
                    var newArrSearch="";
                    for(var i=0;i<arrLen-1;i++){
                        newArrSearch=newArrSearch+arrSearch[i]+"&";
                    } 
                    $(".del").attr("href",newArrSearch+"delid="+idArr);
                    $(".commit").attr("href",newArrSearch+"cid="+idArr);
                }else{
                    if(GetQuery("year")>0){
                        var urlSearch=window.location.search;
                        $(".del").attr("href",urlSearch+"&delid="+idArr);    
                        $(".commit").attr("href",urlSearch+"&cid="+idArr);            
                    }
                }
                $(".updateId").val(idArr);
            }else{
                $(".del").attr("href","");    
                $(".commit").attr("href","");   
            }
        }else{
            $("input[name='id']").prop("checked",false);
        }

    })

    //选择项目更多按钮的单击事件
    var arrow=1;
    $(".data .more").click(function(){
        $(".selectShowItem").stop(true,false).slideToggle();
        if(arrow){
            $(".data .more img").attr("src", "img/common/arrow_up.png");
            arrow=0;
        }else{
            $(".data .more img").attr("src","img/common/arrow_down.png");
            arrow=1;
        }
        $(this).focus();
    })
    //移除项目选择列表的事件
    $(".selectShowItem").mouseleave(function(){
        $(".selectShowItem").stop(true,false).slideToggle();
        $(".data .more img").attr("src","img/common/arrow_down.png");
    })

    //判断选择的显示列表项
    var itemArr="";
    function selectItem(){
        itemArr = $("input:checkbox[name='item']:checked").map(function(index,elem) {
            return $(elem).val();
        }).get().join(',');   
    }
    //显示项目列表全选全不选
    $(".selectAllItem").click(function(){
        if($(this).is(":checked")){
            $("input[name='item']").prop("checked",true);
            var removeTrLen=$("tbody tr").length;
            for(var i=0;i<removeTrLen;i++){
                $("tbody tr:eq("+i+") .toggle").removeClass("hide");
            }
            $("thead tr .toggle").removeClass("hide");
        }else{
            $("input[name='item']").prop("checked",false);
            var addTrLen=$("tbody tr").length;
            for(var i=0;i<addTrLen;i++){
                $("tbody tr:eq("+i+") .toggle").addClass("hide");
            }
            $("thead tr .toggle").addClass("hide");
        }
    })

    //项目列表单个复选框的单击事件
    $(".item").click(function(){
        var itemIndex=$(".item").index(this);
        if($(".item").eq(itemIndex).prop("checked")){
            var removeTrLen=$("tbody tr").length;
            for(var i=0;i<removeTrLen;i++){
                $("tbody tr:eq("+i+") .toggle").eq(itemIndex).removeClass("hide");
            }
            $("thead tr .toggle").eq(itemIndex).removeClass("hide");
        }else{
            var addTrLen=$("tbody tr").length;
            for(var i=0;i<addTrLen;i++){
                $("tbody tr:eq("+i+") .toggle").eq(itemIndex).addClass("hide");
            }
            $("thead tr .toggle").eq(itemIndex).addClass("hide");
        }
        var flag=false;
        var itemLen=$(".item").length;
        for(var i=0;i<itemLen;i++){
            if($(".item").eq(i).prop("checked")==false){
                flag=true;
            }
        }
        if(flag){
            $(".selectAllItem").prop("checked",false);
        }else{
            $(".selectAllItem").prop("checked",true);
        }
    })

