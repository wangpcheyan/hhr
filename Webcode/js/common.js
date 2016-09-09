//搜索输入框
$(function () {
    var searchDiv = $(".tu-input-default");
    var search = $("#search");
    search.focus(function () {
        searchDiv.addClass("tu-input-focus");
        $(".cancel-btn").css("display", "inline-block");
        $("label.placeholder").hide();
        $(".conf-btn").click(function () {
        })
    });
    search.blur(function () {
        if (search.val() == "") {
            txtblur();
        }
    });
    $(".tu-icon-close").click(function () {
        txtblur();
    });
    function txtblur() {
        search.val("");
        search.focus(false);
        searchDiv.removeClass("tu-input-focus");
        $(".cancel-btn").css("display", "none");
        $("label.placeholder").show();
    };

    //headBtn.click(function () {
    //    $(this).siblings("ul.dropdown-list").toggle();
    //});
});
$(function () {
    var headBtn = $(".dropdown-btn");
    var liitem = $("ul.dropdown-list li");
    var h1title = $(".okr-header-tittle h1");
    liitem.click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        h1title.text($(this).find("a").text());
        $("ul.dropdown-list").hide();
    });
    headBtn.click(function () {
        $("ul.dropdown-list").show();
        return false;//关键是这里，阻止冒泡
    });
    $("ul.dropdown-list").click(function () {
        return false;
    });
    $(document).click(function () {
        $("ul.dropdown-list").hide();
    });
});


